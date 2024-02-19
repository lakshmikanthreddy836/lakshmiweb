const NODE_ENV = "development";
console.log("NODE_ENV", NODE_ENV);
export const serverUrl =
  NODE_ENV.toLowerCase() === "development"
    ? "https://railserver.hksoftware.in/api/v1/admin"
    : NODE_ENV.toLowerCase() === "prod"
    ? "https://railserver.hksoftware.in/api/v1/users"
    : "http://localhost:5000/api/v1/users";
