import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const calculateSolarPotential = async (monthlyBill: number, location: string): Promise<any> => {
  try {
    const prompt = `
      Act as a senior solar energy consultant for Shubhitha's Energy Solutions.
      A user in ${location} has a monthly electricity bill of ${monthlyBill} INR.
      
      Estimate the following:
      1. Recommended Solar System Size (in kW).
      2. Approximate Monthly Savings (in INR).
      3. Estimated Return on Investment (ROI) period (in years).
      4. Environmental Impact (CO2 saved equivalent in trees planted per year).
      5. A brief, encouraging recommendation tailored to their usage.

      Provide realistic estimates based on current market standards in India.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedSystemSize: { type: Type.STRING },
            monthlySavings: { type: Type.STRING },
            roiPeriod: { type: Type.STRING },
            environmentalImpact: { type: Type.STRING },
            recommendation: { type: Type.STRING },
          },
          required: ["estimatedSystemSize", "monthlySavings", "roiPeriod", "environmentalImpact", "recommendation"],
        },
      },
    });

    return JSON.parse(response.text || "{}");
  } catch (error) {
    console.error("Error calculating solar potential:", error);
    throw error;
  }
};