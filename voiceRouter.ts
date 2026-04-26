
import { aiRouter } from "../ai/router";

export async function voicePipeline({ text }) {
  try {
    const res = await aiRouter({ prompt: text });
    return { text: res.text, audio: null };
  } catch {
    return { text: "Fallback response", audio: null };
  }
}
