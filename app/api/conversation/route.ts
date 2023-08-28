import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Check if body is valid
    if (!body || typeof body !== 'object') {
      console.error("[INVALID_REQUEST_BODY]", body);
      return new NextResponse("Invalid request body", { status: 400 });
    }

    const { messages } = body;

    if (!configuration.apiKey) {
      console.error("[MISSING_API_KEY]");
      return new NextResponse("OpenAI API Key not configured.", {
        status: 500,
      });
    }

    if (!messages) {
      console.error("[MISSING_MESSAGES_IN_REQUEST]", body);
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages,
    });

    if (!response.data || !response.data.choices || !response.data.choices[0] || !response.data.choices[0].message) {
      console.error("[UNEXPECTED_OPENAI_RESPONSE]", response.data);
      return new NextResponse("Unexpected OpenAI response", { status: 500 });
    }

    return NextResponse.json(response.data.choices[0].message);
  } catch (error: any) {
    console.error("[CONVERSATION_ERROR]", error.message);
    console.error("Error stack:", error.stack);
    if (error.response) {
      console.error("OpenAI response error:", error.response.data);
    }
    return new NextResponse("Internal Error", { status: 500 });
  }
}
