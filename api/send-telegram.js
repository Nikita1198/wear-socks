export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Use environment variables if available, otherwise use provided values
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '7208241425:AAFSu765qB4htNGqvim6xjYEsjd3DlNuaa8';
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID || '-1002537750230';

  try {
    const { name, city, contact, request, dataProcessing, newsletter, privacy } = req.body;

    // Validate required fields
    if (!name || !city || !contact || !request || !dataProcessing) {
      return res.status(400).json({ message: 'Не все обязательные поля заполнены' });
    }

    // Format message for Telegram
    const message = `🔥 *НОВЫЙ ЗАКАЗ С САЙТА*

👤 *Имя:* ${name}
🏙️ *Город:* ${city}
📞 *Телефон:* ${contact}
📝 *Запрос:* ${request}

✅ *Согласия:*
${dataProcessing ? '✅' : '❌'} Обработка персональных данных
${newsletter ? '✅' : '❌'} Получение рассылки
${privacy ? '✅' : '❌'} Политика конфиденциальности

📅 *Дата:* ${new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })}`;

    // Send message to Telegram
    const telegramResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    });

    if (!telegramResponse.ok) {
      const error = await telegramResponse.text();
      console.error('Telegram API error:', error);
      throw new Error('Failed to send message to Telegram');
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Запрос успешно отправлен!' 
    });

  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Произошла ошибка при отправке запроса' 
    });
  }
} 