# learn-thai-online 🇹🇭 🤖 📝
This repo contains a NEXT.JS website (super early WIP) and a telegram bot making use of serverless functions (still WIP, but hey it's working).

Disclaimer: This is a learning project, so neither the app is complete nor the learning content will be complete.

Here are the links to the Telegram Bot:
- Production Bot: [@thai_learning_game_bot](https://t.me/thai_learning_game_bot)
- Staging Bot (for local development): [@thai_learning_game_staging_bot](https://t.me/thai_learning_game_staging_bot)

## Run Locally
1. Run `$ npm run ngrok` and copy `Forwarding URL` (e.g. `https://<some-number>.ngrok.io`)
2. Copy content of `.example.env` in `.env` file and insert correct tokens including ngrok URL
3. Call `$ npm run dev`
4. Open `<domain>/api/register` to register the bot instance URL with telegram
5. Play with the bot 🤖


## Deployment
This repo is deployed on `Vercel` on every push on the `main` branch. Make sure environment variables are set [here](https://vercel.com/cheyer/learn-thai-online/settings/environment-variables).

## CI/CD
todo
