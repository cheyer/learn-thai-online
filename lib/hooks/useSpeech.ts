import { useCallback, useEffect, useState } from "react";

export type AvailableLanguages = "en" | "th";
type LanguageType = "en-GB" | "th-TH";

export interface SpeechOptionInterface {
  pitch?: number;
  rate?: number;
  language?: AvailableLanguages;
  onSpeakEnd?: () => {};
}

const langMapping: {
  [key in AvailableLanguages]: LanguageType;
} = {
  en: "en-GB",
  th: "th-TH",
};

export const useSpeech = (props: SpeechOptionInterface = {}) => {
  const { pitch, rate, onSpeakEnd } = props;
  const [synth, setSynth] = useState<SpeechSynthesis>(undefined);
  const [speaking, setSpeaking] = useState(false);
  const [language, setLanguage] = useState(props?.language || "th");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [currentVoice, setCurrentVoice] =
    useState<SpeechSynthesisVoice | null>();

  useEffect(() => {
    if ("onvoiceschanged" in window.speechSynthesis) {
      speechSynthesis.onvoiceschanged = loadVoices;
    } else {
      loadVoices();
    }

    setSynth(window.speechSynthesis);
  }, []);

  const loadVoices = useCallback(() => {
    if (!synth) {
      return;
    }
    setVoices(synth.getVoices());
  }, [synth]);

  useEffect(loadVoices, [loadVoices, synth]);

  const cancel = useCallback(() => {
    setSpeaking(false);
    synth.cancel();
  }, [synth]);

  const handleSpeakEnd = useCallback(() => {
    setSpeaking(false);
    onSpeakEnd && onSpeakEnd();
  }, [onSpeakEnd]);

  const speak = useCallback(
    (text: string, speakOptions?: SpeechOptionInterface) => {
      return new Promise((resolve) => {
        setSpeaking(true);

        const utterance = new SpeechSynthesisUtterance(text);

        utterance.onend = () => {
          setTimeout(() => {
            handleSpeakEnd();
            resolve(true);
          }, 200);
        };

        const voice =
          voices.find(
            (voice) =>
              voice.lang === langMapping[speakOptions?.language || language]
          ) || null;
        setCurrentVoice(voice);

        utterance.pitch = speakOptions?.pitch || pitch || 1;
        utterance.rate = speakOptions?.rate || rate || 1.1;
        utterance.voice = voice;
        synth.speak(utterance);
      });
    },
    [handleSpeakEnd, language, pitch, rate, synth, voices]
  );

  return {
    speak,
    speaking,
    cancel,
    voices,
    currentVoice,
    setSpeechLanguage: setLanguage,
  };
};
