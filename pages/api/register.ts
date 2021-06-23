export default async (req, res) => {
  const secret = process.env.TELEGRAM_SECRET;
  const domain = "https://a48ab4dba86c.ngrok.io/api/bot";

  try {
    const fetchResult = await fetch(
      `https://api.telegram.org/bot${secret}/setWebhook?url=${domain}`
    );
    const data = await fetchResult.json();
    res.status(200).json({ text: "✅ Webhook successfully set!", data });
  } catch {
    res.status(200).json({ text: "❌ Error in setting webhook!" });
  }
};
