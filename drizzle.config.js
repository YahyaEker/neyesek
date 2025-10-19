import { defineConfig } from "drizzle-kit";
import { ENV } from "./src/config/env.js";

export default defineConfig({
  schema: "./src/db/schema.js",
  out: "./src/db/migrations",
  dialect: "postgresql", // ✅ Bu şart
  dbCredentials: {
    url: ENV.DATABASE_URL, // ✅ ya da direkt string olarak da yazabilirsin
  },
});
