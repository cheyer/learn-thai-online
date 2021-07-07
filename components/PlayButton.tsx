import classNames from "classnames";
import styles from "./PlayButton.module.css";

interface Props {
  onClick: () => void;
  playing: boolean;
}

const PlayButton: React.FC<Props> = ({ onClick, playing }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.playButton, {
        [styles.playing]: playing,
      })}
    >
      Play Consonant Sound
    </button>
  );
};

export default PlayButton;
