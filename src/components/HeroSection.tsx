import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="container mx-auto mt-26 py-4 px-0">
      <div className="flex flex-col md:flex-row items-center">
        {/* Text and Button Column */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-[2.8rem] md:text-[3.4rem] font-semibold mb-4 italic leading-16">НОСКИ, КОТОРЫЕ <span className="text-[#00589d]">ГОВОРЯТ</span> ЗА ВАС</h1>
          <p className="text-xl mb-2">
            Производим стильные, подарочные и брендированные носки под заказ и оптом.<br/>
            Дизайн, вязка, упаковка - от логотипа до мерча.<br/>
            Под ключ, от 100 пар.
          </p>
          <p className="text-[#00589d] mb-10 text-xl">ИЗГОТОВЛЕНИЕ ОТ 3 ДНЕЙ</p>
          <button className="bg-[#00589d] text-white px-6 py-3 rounded-2xl text-xl font-semibold hover:bg-[#004a8a]">
            Заказать партию на производство
          </button>
        </div>

        {/* Images Column */}
        <div className="md:w-1/2 flex flex-col items-center relative p-1 -mt-[70px]">
          {/* Images Container */}
          <div className="relative w-full">
            <img src="/under_socks.png" alt="Under Socks" className="w-1/2 h-auto mb-4 ml-auto" />
            <img src="/main_socks.png" alt="Large Sock" className="absolute top-0 left-1/2 transform -translate-x-1/2 h-auto z-10" style={{ width: '39.125rem' }} />
          </div>
          {/* Связаться с нами Image */}
          <img src="/call_me.png" alt="Связаться с нами" className="w-1/5 h-auto fixed top-21 right-87 z-50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 