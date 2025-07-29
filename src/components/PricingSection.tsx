import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section id="prices" className="py-16 px-4 relative overflow-hidden" style={{ backgroundColor: '#e2ded8' }}>
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-64 h-32">
        <svg viewBox="0 0 200 100" className="w-full h-full text-[#00589d]">
          <path d="M0 20 Q50 0 100 20 T200 20" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M0 35 Q50 15 100 35 T200 35" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M0 50 Q50 30 100 50 T200 50" stroke="currentColor" strokeWidth="3" fill="none"/>
          <path d="M0 65 Q50 45 100 65 T200 65" stroke="currentColor" strokeWidth="3" fill="none"/>
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 w-64 h-32">
        <svg viewBox="0 0 200 100" className="w-full h-full text-[#00589d]">
          <path d="M0 20 Q50 40 100 20 T200 20" stroke="currentColor" strokeWidth="4" fill="none"/>
          <path d="M0 40 Q50 60 100 40 T200 40" stroke="currentColor" strokeWidth="4" fill="none"/>
          <path d="M50 60 Q100 80 150 60 T250 60" stroke="currentColor" strokeWidth="4" fill="none"/>
        </svg>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Верхние блоки */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <div className="bg-red-600 text-white px-6 py-3 rounded-2xl text-center">
            <div className="text-sm font-bold">РАЗРАБОТКА ДИЗАЙНА</div>
            <div className="text-sm font-bold">И ПРАВКА НОСКОВ</div>
            <div className="text-lg font-bold">БЕЗ ДОПЛАТЫ</div>
          </div>
          <div className="bg-[#00589d] text-white px-6 py-3 rounded-2xl text-center">
            <div className="text-sm font-bold">МАКЕТЫ</div>
            <div className="text-sm font-bold">И СОГЛАСОВАНИЕ</div>
            <div className="text-sm font-bold">С ВАМИ ПО ФОТО</div>
            <div className="text-lg font-bold">БЕСПЛАТНО</div>
          </div>
          <div className="bg-red-600 text-white px-6 py-3 rounded-2xl text-center">
            <div className="text-sm font-bold">ДОСТАВКА ПО РФ</div>
          </div>
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-center mb-12 text-black">
          НАШИ ЦЕНЫ:
        </h2>
        
        <div className="space-y-4 mb-12">
          <div className="bg-white border-2 border-[#00589d] rounded-2xl p-6 flex justify-between items-center shadow-sm">
            <span className="text-2xl md:text-3xl font-bold text-black italic">От 100 пар</span>
            <span className="text-2xl md:text-3xl font-bold text-black italic">от 85 руб</span>
          </div>
          
          <div className="bg-white border-2 border-[#00589d] rounded-2xl p-6 flex justify-between items-center shadow-sm">
            <span className="text-2xl md:text-3xl font-bold text-black italic">От 200 пар</span>
            <span className="text-2xl md:text-3xl font-bold text-black italic">от 80 руб</span>
          </div>
          
          <div className="bg-white border-2 border-[#00589d] rounded-2xl p-6 flex justify-between items-center shadow-sm">
            <span className="text-2xl md:text-3xl font-bold text-black italic">От 300 пар</span>
            <span className="text-2xl md:text-3xl font-bold text-black italic">от 75 руб</span>
          </div>
          
          <div className="bg-white border-2 border-[#00589d] rounded-2xl p-6 flex justify-between items-center shadow-sm">
            <span className="text-2xl md:text-3xl font-bold text-black italic">От 1000 пар</span>
            <span className="text-2xl md:text-3xl font-bold text-black italic">от 65 руб</span>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-[#00589d] mb-4">
            СПЕЦИАЛЬНАЯ ЦЕНА
          </h3>
          <p className="text-2xl md:text-3xl font-bold text-black">
            на первый заказ – от 55 руб за пару
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 
