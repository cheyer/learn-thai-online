const API_TOKEN = process.env.TELEGRAM_SECRET;
const API_URL = `https://api.telegram.org/bot${API_TOKEN}/`;

export const get = (path: string) => {
  const url = `${API_URL}${path}`;
  return fetch(url).then((data: any) => data.json());
};

export const post = (path: string, body: Object) => {
  const url = `${API_URL}${path}`;
  return fetch(url, {
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  })
    .then(async (data: any) => {
      return await data.json();
    })
    .catch((error) => {
      console.log("Error occurred:", error);
    });
};
