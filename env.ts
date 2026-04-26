
import { z } from "zod";

export const env = z.object({
  NODE_ENV: z.string(),
  DATABASE_URL: z.string(),
  JWT_SECRET: z.string(),
}).parse(process.env);
