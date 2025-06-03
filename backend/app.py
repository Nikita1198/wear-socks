from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
from datetime import datetime
import logging

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Telegram configuration
BOT_TOKEN = os.getenv('TELEGRAM_BOT_TOKEN', '7208241425:AAFSu765qB4htNGqvim6xjYEsjd3DlNuaa8')
CHAT_ID = os.getenv('TELEGRAM_CHAT_ID', '-1002537750230')

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy", "service": "telegram-api"}), 200

@app.route('/api/send-telegram', methods=['POST'])
def send_telegram():
    try:
        # Get JSON data from request
        data = request.get_json()
        
        if not data:
            return jsonify({"success": False, "message": "No data provided"}), 400
        
        # Extract form data
        name = data.get('name', '')
        city = data.get('city', '')
        contact = data.get('contact', '')
        request_text = data.get('request', '')
        data_processing = data.get('dataProcessing', False)
        newsletter = data.get('newsletter', False)
        privacy = data.get('privacy', False)
        
        # Validate required fields
        if not all([name, city, contact, request_text, data_processing, privacy]):
            return jsonify({
                "success": False, 
                "message": "Не все обязательные поля заполнены и согласия получены"
            }), 400
        
        # Format message for Telegram
        # Try phone number formatting that works better in Telegram
        clean_phone = contact.replace(' ', '').replace('(', '').replace(')', '').replace('-', '')
        
        message = f"""🔥 *НОВЫЙ ЗАКАЗ С САЙТА*

👤 *Имя:* {name}
🏙️ *Город:* {city}
📞 *Телефон:* `{contact}`
📝 *Запрос:* {request_text}"""

        # Send message to Telegram
        telegram_url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
        
        payload = {
            'chat_id': CHAT_ID,
            'text': message,
            'parse_mode': 'Markdown'
        }
        
        response = requests.post(telegram_url, json=payload, timeout=10)
        
        if response.status_code == 200:
            logger.info(f"Message sent successfully to Telegram for {name}")
            return jsonify({
                "success": True,
                "message": "Запрос успешно отправлен!"
            }), 200
        else:
            logger.error(f"Telegram API error: {response.status_code} - {response.text}")
            return jsonify({
                "success": False,
                "message": "Ошибка отправки в Telegram"
            }), 500
            
    except requests.exceptions.Timeout:
        logger.error("Timeout error when sending to Telegram")
        return jsonify({
            "success": False,
            "message": "Превышено время ожидания"
        }), 408
        
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        return jsonify({
            "success": False,
            "message": "Произошла ошибка при отправке запроса"
        }), 500

if __name__ == '__main__':
    port = int(os.getenv('PORT', 8000))
    app.run(host='0.0.0.0', port=port, debug=True) 