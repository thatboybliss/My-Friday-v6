
export async function aiRouter({ prompt }) {
  if (process.env.GEMINI_API_KEY) return { text: "Gemini: " + prompt };
  if (process.env.ANTHROPIC_API_KEY) return { text: "Claude: " + prompt };
  if (process.env.OPENAI_API_KEY) return { text: "OpenAI: " + prompt };
  throw new Error("No AI provider");
}
