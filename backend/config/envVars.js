import dotenv from "dotenv";

dotenv.config();

export const ENV_VARS = {
  MONGO_URI:
    "mongodb+srv://itsmohammedalfakir:7cYwnzsLGnpoiZwl@cluster0.3amwk.mongodb.net/filmora_db?retryWrites=true&w=majority&appName=Cluster0",
  PORT: process.env.PORT || 5000,
  JWT_SECRET: "mafhalish",
  NODE_ENV: "production",
  TMDB_API_KEY:
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OWM2ZjUwOTkyMjMxZWFkZmZmZGZhMmE3MjQ4NWE3NiIsIm5iZiI6MTcyODY0NDY5NS4zNTA2ODUsInN1YiI6IjY3MDkwNWMwMjY1YTVmOGJjNTcwYTk0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Aj5siROvp5xksZ2nAdnDOPosRDbpJ45_jb49T4FjV90",
};
