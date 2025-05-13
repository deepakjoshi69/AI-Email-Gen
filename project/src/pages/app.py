from flask import Flask, request, jsonify
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend access

# Email configuration
EMAIL_HOST = "smtp.gmail.com"
EMAIL_PORT = 587
EMAIL_HOST_USER = "stl1400nikita10@gmail.com"
EMAIL_HOST_PASSWORD = "dlhadvyrtvkvqcvc"  # No spaces!
RECEIVER_EMAIL = "stl1400nikita10@gmail.com"

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    if not all([name, email, message]):
        return jsonify({"error": "All fields are required"}), 400

    try:
        subject = f"New Contact Form Submission from {name}"
        body = f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}"

        msg = MIMEMultipart()
        msg["From"] = EMAIL_HOST_USER
        msg["To"] = RECEIVER_EMAIL
        msg["Subject"] = subject
        msg.attach(MIMEText(body, "plain"))

        with smtplib.SMTP(EMAIL_HOST, EMAIL_PORT) as server:
            server.starttls()
            server.login(EMAIL_HOST_USER, EMAIL_HOST_PASSWORD)
            server.send_message(msg)

        return jsonify({"message": "Message sent successfully!"}), 200

    except Exception as e:
        import traceback
        traceback.print_exc()
        return jsonify({"error": f"Failed to send message: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
