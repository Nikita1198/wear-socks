import React from 'react';

const DecorativeSection: React.FC = () => {
  return (
    <section className="container mx-auto my-10 py-8 px-4 relative">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left black block */}
        <div className="lg:w-1/2 bg-black text-white p-8 rounded-3xl relative overflow-visible">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              ДЛЯ КОГО МЫ<br />
              СОЗДАЁМ<br />
              НОСКИ?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Ваш мерч уже почти готов –<br />
              остаётся только связать.
            </p>
            <div className="text-center">
              <a 
                href="https://t.me/dd00shikkk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#00589d] text-white px-16 py-2 mt-50 rounded-2xl text-lg font-medium hover:bg-[#004a8a] transition-colors"
              >
                написать нам<br />
                прямо сейчас
              </a>
            </div>
          </div>
        </div>

        {/* Red shape positioned over the black block */}
        <div className="absolute bottom-0 left-0 -z-10 md:z-20 pointer-events-none">
          <img 
            src="/Пнг-19.png" 
            alt="Red Shape" 
            className="w-90 h-68 opacity-10 md:opacity-90"
          />
        </div>

        {/* Right grid with 6 blocks */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative">
          {/* Block 01 - Red */}
          <div className="bg-[#d73527] text-white p-6 rounded-3xl relative">
            <h3 className="text-xl font-bold mb-3">У ВАС СВОЙ<br />БИЗНЕС</h3>
            <p className="text-sm mb-4 opacity-90">
              Услуги, кафе, салоны, фитнес –<br />
              вы хотите, чтобы клиенты запомнили<br />
              вас.<br />
              Брендированные носки –<br />
              неожиданный, но эффективный способ.
            </p>
            <div className="absolute bottom-4 right-4 text-3xl font-bold text-white">01</div>
          </div>

          {/* Block 02 - Transparent with black border */}
          <div className="bg-transparent border-2 border-black text-black p-6 rounded-3xl relative">
            <h3 className="text-xl font-bold mb-3">МЕРЧ ДЛЯ<br />МЕРОПРИЯТИЙ</h3>
            <p className="text-sm mb-4">
              Форумы, фестивали, конференции,<br />
              вечеринки – мы свяжем носки<br />
              с логотипом или слоганом события,<br />
              чтобы каждый гость унёс с собой<br />
              часть впечатлений.
            </p>
            <div className="absolute bottom-4 right-4 text-3xl font-bold text-black">02</div>
          </div>

          {/* Block 03 - Blue */}
          <div className="bg-[#4a90e2] text-white p-6 rounded-3xl relative">
            <h3 className="text-xl font-bold mb-3">КОРПОРАТИВНЫЙ<br />МЕРЧ</h3>
            <p className="text-sm mb-4 opacity-90">
              Для внутренней культуры компании<br />
              или как часть велком-пакета.<br />
              Особенно актуально для HR, тренеров,<br />
              преподавателей, блогеров.
            </p>
            <div className="absolute bottom-4 right-4 text-3xl font-bold text-white">03</div>
          </div>

          {/* Block 04 - Red */}
          <div className="bg-[#d73527] text-white p-6 rounded-3xl relative">
            <h3 className="text-xl font-bold mb-3">РАСШИРЕНИЕ<br />ПРОДУКТОВОЙ<br />ЛИНЕЙКИ</h3>
            <p className="text-sm mb-4 opacity-90">
              У вас бренд одежды или аксессуаров?<br />
              Добавьте в коллекцию носки<br />
              в своём стиле —<br />
              от купюр до уличной моды.
            </p>
            <div className="absolute bottom-4 right-4 text-3xl font-bold text-white">04</div>
          </div>

          {/* Block 05 - Transparent with black border */}
          <div className="bg-transparent border-2 border-black text-black p-6 rounded-3xl relative">
            <h3 className="text-xl font-bold mb-3">ПОДАРКИ И<br />СУВЕНИРЫ</h3>
            <p className="text-sm mb-4">
              Носки в наборах – прекрасное<br />
              решение для подарков на праздники,<br />
              в боксы или как туристический<br />
              сувенир.
            </p>
            <div className="absolute bottom-4 right-4 text-3xl font-bold text-black">05</div>
          </div>

          {/* Block 06 - Blue */}
          <div className="bg-[#4a90e2] text-white p-6 rounded-3xl relative">
            <h3 className="text-xl font-bold mb-3">СЕТЕВОЙ РИТЕЙЛ /<br />МАРКЕТПЛЕЙСЫ</h3>
            <p className="text-sm mb-4 opacity-90">
              Готовые коллекции или производство<br />
              под СТМ (контрактное производство).<br />
              Мы создаём визуально сильный<br />
              продукт, который легко продаётся.
            </p>
            <div className="absolute bottom-4 right-4 text-3xl font-bold text-white">06</div>
          </div>

          {/* Decorative blue circles */}
          <div className="absolute bottom-0 right-0 -mb-24 -mr-24 -z-10 md:z-10">
            <img 
              src="/Пнг-17.png" 
              alt="Decorative Circles" 
              className="w-24 h-24 opacity-10 md:opacity-70"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecorativeSection; 