let baseUrl;
if (process.env.NODE_ENV === "production") {
  baseUrl =
    "https://my-json-server.typicode.com/adnansadar/restaurant-json-server/";
} else {
  baseUrl = "http://localhost:3001/";
}

export { baseUrl };
