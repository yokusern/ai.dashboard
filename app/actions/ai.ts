"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function analyzeProject(details: string, role: string) {
  if (!details) return null;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const prompt = `
      You are an elite SES (System Engineering Service) sales intelligence AI.
      Analyze the following project details and target role to provide a strategic tactical plan.
      
      Project Details:
      ${details}
      
      Target Role:
      ${role}
      
      Output the result in strict JSON format:
      {
        "metrics": {
          "complexity": "string (e.g. High / Tier 2)",
          "matchProb": "string (e.g. 85%)",
          "riskFactor": "string (e.g. Minimal / Timing)"
        },
        "strategy": {
          "edge": "string (bullet point point text)",
          "mitigation": "string (bullet point point text)",
          "closing": "string (bullet point point text)"
        },
        "actions": {
          "proposalDraft": "string (short text)",
          "interviewQuestion": "string (mock question)"
        }
      }
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Clean JSON markdown if necessary
    const jsonStr = text.replace(/```json\n?|\n?```/g, "").trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("AI Analysis Error:", error);
    return null;
  }
}

export async function genericChat(message: string) {
  if (!message) return null;

  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    const prompt = `
      You are an elite AI assistant for an SES sales and development dashboard.
      Answer the user's request concisely and professionally.
      
      User Message: ${message}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("AI Chat Error:", error);
    return "Error occurred while processing request.";
  }
}
