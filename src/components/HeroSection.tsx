import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="container mx-auto mt-26 py-4 px-4">
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
            <button 
              onClick={() => {
                window.scrollTo({
                  top: document.body.scrollHeight,
                  behavior: 'smooth'
                });
              }}
              className="bg-[#00589d] text-white px-6 py-3 rounded-2xl text-xl font-semibold hover:bg-[#004a8a] transition-colors duration-300"
            >
              Заказать партию на производстве
            </button>
          </div>

          {/* Images Column */}
          <div className="md:w-1/2 flex flex-col items-center relative p-1 -mt-[70px]">
            {/* Images Container */}
            <div className="relative w-full">
              <img src="/under_socks.png" alt="Under Socks" className="w-1/2 h-auto mb-4 ml-auto opacity-0 md:opacity-100" />
              <img src="/main_socks.png" alt="Large Sock" className="absolute top-0 left-1/2 transform -translate-x-1/2 h-auto z-10" style={{ width: '39.125rem' }} />
              {/* Связаться с нами Image - positioned relative to Large Sock */}
              <img src="/call_me.png" alt="Связаться с нами" className="hidden lg:block 2xl:hidden w-1/2 md:w-3/5 lg:w-2/5 h-auto absolute top-22 lg:top-[-60px] right-4 lg:right-60 z-50" />
            </div>
          </div>
        </div>
      </section>

      {/* New Section - Ideas Block */}
      <section className="container mx-auto mt-8 bg-[#f4ebe0] py-8 px-4 rounded-3xl mx-4">
        <div className="container mx-auto">
          <div className="flex items-center">
            {/* Icon */}
            <div className="flex-shrink-0 mr-8">
              <img src="/Пнг-08.png" alt="Ideas Icon" className="w-24 h-24 md:w-32 md:h-32" />
            </div>
            {/* Text */}
            <div className="flex-1">
              <h2 className="text-[2.5rem] md:text-[3.2rem] font-semibold leading-tight">
                ПРОИЗВОДИМ <span className="text-[#00589d]">НЕ ПРОСТО НОСКИ</span> СОЗДАЕМ ИДЕИ, <span className="text-[#00589d]">КОТОРЫЕ НОСЯТ</span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Team Description */}
      <section className="container mx-auto py-6 px-4 mt-10">
        <div className="text-left">
          <p className="text-2xl md:text-3xl font-bold max-w-5xl">
            Мы – команда технологов, дизайнеров и вязальщиц,<br/>
            влюблённых в своё дело.
          </p>
        </div>
      </section>
    </>
  );
};

export default HeroSection; 