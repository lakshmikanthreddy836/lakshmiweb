const NODE_ENV = "prod";
console.log("NODE_ENV", NODE_ENV);
export const serverUrl =
  NODE_ENV.toLowerCase() === "development"
    ? "https://railserver.hksoftware.in/api/v1/admin"
    : NODE_ENV.toLowerCase() === "prod"
    ? "http://10.22.4.79:5000/api/v1/admin"
    : "http://localhost:3000/api/v1/admin";
