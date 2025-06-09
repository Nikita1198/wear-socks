import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    contact: '+7',
    request: '',
    dataProcessing: false,
    newsletter: false,
    privacy: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'contact') {
      // Format phone number as user types
      const formattedPhone = formatPhoneNumber(value);
      setFormData(prev => ({
        ...prev,
        [name]: formattedPhone
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
      }));
    }
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, '');
    
    // If empty, return +7
    if (digits.length === 0) {
      return '+7';
    }
    
    // Remove leading 7 or 8 if present
    let phoneDigits = digits;
    if (phoneDigits.startsWith('7') || phoneDigits.startsWith('8')) {
      phoneDigits = phoneDigits.slice(1);
    }
    
    // Limit to 10 digits for Russian mobile numbers
    phoneDigits = phoneDigits.slice(0, 10);
    
    // Format based on length
    let formatted = '+7';
    
    if (phoneDigits.length > 0) {
      formatted += ' (';
      formatted += phoneDigits.slice(0, 3);
      
      if (phoneDigits.length >= 3) {
        formatted += ')';
        
        if (phoneDigits.length > 3) {
          formatted += ' ' + phoneDigits.slice(3, 6);
          
          if (phoneDigits.length > 6) {
            formatted += '-' + phoneDigits.slice(6, 8);
            
            if (phoneDigits.length > 8) {
              formatted += '-' + phoneDigits.slice(8, 10);
            }
          }
        }
      }
    }
    
    return formatted;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if required checkboxes are checked
    if (!formData.dataProcessing) {
      alert('Пожалуйста, дайте согласие на обработку персональных данных');
      return;
    }
    
    if (!formData.privacy) {
      alert('Пожалуйста, ознакомьтесь и согласитесь с политикой обработки и защиты персональных данных');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        console.log('Form submitted successfully:', result.message);
      } else {
        throw new Error(result.message || 'Произошла ошибка при отправке');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Произошла ошибка при отправке запроса. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-6xl mt-8 border-2 border-black py-12 px-6 sm:px-8 rounded-3xl mx-4 sm:mx-auto relative overflow-hidden">
      <div className="relative">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold italic mb-4">
            ГОТОВЫ НАЧАТЬ ВЯЗАТЬ ВАШ ПРОЕКТ?
          </h2>
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleInputChange}
                disabled={isSubmitted || isSubmitting}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isSubmitted || isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''
                }`}
                required
              />
            </div>

            {/* City Field */}
            <div>
              <input
                type="text"
                name="city"
                placeholder="Город"
                value={formData.city}
                onChange={handleInputChange}
                disabled={isSubmitted || isSubmitting}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isSubmitted || isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''
                }`}
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <input
                type="tel"
                name="contact"
                placeholder="+7 (XXX) XXX-XX-XX"
                value={formData.contact}
                onChange={handleInputChange}
                maxLength={18}
                disabled={isSubmitted || isSubmitting}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  isSubmitted || isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''
                }`}
                required
              />
            </div>

            {/* Request Field */}
            <div>
              <textarea
                name="request"
                placeholder="Ваш запрос"
                value={formData.request}
                onChange={handleInputChange}
                rows={4}
                disabled={isSubmitted || isSubmitting}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical ${
                  isSubmitted || isSubmitting ? 'bg-gray-100 cursor-not-allowed' : ''
                }`}
                required
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-3">
              <label className={`flex items-start space-x-3 ${isSubmitted || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <input
                  type="checkbox"
                  name="dataProcessing"
                  checked={formData.dataProcessing}
                  onChange={handleInputChange}
                  disabled={isSubmitted || isSubmitting}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  required
                />
                <span className="text-sm">
                  Согласие на{' '}
                  <a
                    href="/docx/Согласие_на_обработку_персональных_данных_ИП_Кайзеров.docx"
                    download="Согласие_на_обработку_персональных_данных_ИП_Кайзеров.docx"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    обработку персональных данных
                  </a>
                </span>
              </label>

              <label className={`flex items-start space-x-3 ${isSubmitted || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <input
                  type="checkbox"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleInputChange}
                  disabled={isSubmitted || isSubmitting}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm">
                  <a
                    href="/docx/Политика_кондифенциальности_ИП_Кайзеров.docx"
                    download="Политика_кондифенциальности_ИП_Кайзеров.docx"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    Политика обработки и защиты персональных данных
                  </a>
                </span>
              </label>

               <label className={`flex items-start space-x-3 ${isSubmitted || isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  disabled={isSubmitted || isSubmitting}
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm">
                  Согласие на{' '}
                  <a
                    href="/docx/Согласие_на_рассылку_ИП_Кайзеров.docx"
                    download="Согласие_на_рассылку_ИП_Кайзеров.docx"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    получение информационной и рекламной рассылки и размещение отзывов
                  </a>
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full px-6 py-3 rounded-lg text-lg font-semibold transition duration-300 ${
                  isSubmitted 
                    ? 'bg-green-600 text-white cursor-not-allowed' 
                    : isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-[#00589d] text-white hover:bg-[#004a8a]'
                }`}
              >
                {isSubmitted 
                  ? 'Ваш запрос отправлен' 
                  : isSubmitting
                  ? 'Отправляем...'
                  : 'Отправить запрос'
                }
              </button>
            </div>
          </form>
        </div>

        {/* Decorative Images */}
        {/* Bottom left corner */}
        <img 
          src="/Пнг-08.png" 
          alt="Pattern Left" 
          className="absolute bottom-2 left-[-40px] w-16 h-16 md:w-30 md:h-30 opacity-50"
        />
        
        {/* Bottom right corner */}
        <img 
          src="/Пнг-06.png" 
          alt="Sock" 
          className="absolute bottom-2 right-[-100px] w-32 h-32 md:w-40 md:h-40 z-[-2]"
        />
      </div>
    </section>
  );
};

export default ContactForm; 