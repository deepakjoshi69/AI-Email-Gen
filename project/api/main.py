from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import google.generativeai as genai
import os

app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure Gemini API
GOOGLE_API_KEY = "AIzaSyB00A2lXhSmRDNOBhPoTfrzYwDFH7ebqus"
genai.configure(api_key=GOOGLE_API_KEY)

# Load the model
model = genai.GenerativeModel(model_name="gemini-2.0-flash")


class EmailPrompt(BaseModel):
    prompt: str

@app.post("/generate-email")
async def generate_email(email_prompt: EmailPrompt):
    try:
        prompt_template = f"""
        Generate a professional email based on the following prompt:
        {email_prompt.prompt}

        Please ensure the email is:
        1. Professional and courteous
        2. Clear and concise
        3. Well-structured with proper greeting and closing
        """

        # Generate the email using Gemini
        response = model.generate_content(prompt_template)


        # Check response and extract text safely
        email_text = getattr(response, 'text', None)
        if not email_text:
            raise ValueError("Gemini model did not return a valid text response.")

        return {"email": email_text.strip()}

    except Exception as e:
        print("❌ Error:", e)
        raise HTTPException(status_code=500, detail=f"Generation failed: {str(e)}")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)