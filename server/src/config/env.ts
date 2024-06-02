export const env = {
  PORT: process.env.PORT || 8000,
  DATABASE_URL: process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/scrappy",
  VITE_BASE_URL_FE: process.env.VITE_BASE_URL_FE || "http://localhost:5173",
}
