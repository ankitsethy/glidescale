import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string;

if (!apiKey) {
  throw new Error(
    "Missing VITE_GEMINI_API_KEY environment variable. " +
    "Add it to your .env.local file or Vercel environment settings."
  );
}

const ai = new GoogleGenAI({ apiKey });

export const generateStrategy = async (industry: string, goal: string): Promise<string> => {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-preview-05-20",
    contents: `You are a high-end enterprise AI consultant.
      The user is a founder or executive in the "${industry}" industry.
      Their primary goal is: "${goal}".
      
      Provide a concise, high-impact 3-step strategic roadmap on how AI infrastructure can achieve this.
      Focus on revenue architecture, automation, and scalability.
      Keep the tone confident, professional, and devoid of fluff. 
      Format as a clean HTML list using <li> tags, but do not wrap in <ul>. Do not use Markdown.
      Each point should be one sentence bolded (using <strong>), followed by one sentence of explanation.`,
  });

  return response.text ?? "Unable to generate strategy at this time.";
};