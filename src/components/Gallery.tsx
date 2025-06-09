import React from 'react';

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      image: "/women-socks.jpg",
      title: "Женские носки",
      size: "col-span-1 row-span-1"
    },
    {
      image: "/summer-breathable.jpg",
      title: "Летние дышащие носки",
      size: "col-span-1 row-span-1"
    },
    {
      image: "/custom-request.jpg",
      title: "Индивидуальный запрос",
      size: "col-span-1 row-span-1"
    },
    {
      image: "/sport-elastic.jpg",
      title: "Со спортивной резинкой",
      size: "col-span-1 row-span-1"
    },
    {
      image: "/golf-socks.jpg",
      title: "Гольфы",
      size: "col-span-1 row-span-1"
    },
    {
      image: "/men-socks.jpg",
      title: "Мужские носки",
      size: "col-span-1 row-span-1"
    },
    {
      image: "/souvenir-socks.jpg",
      title: "Сувенирные носки",
      size: "col-span-1 row-span-1"
    },
    {
      image: "/original-prints.jpg",
      title: "Носки с оригинальными принтами",
      size: "col-span-1 row-span-1"
    },
    {
      image: "/branded-socks.jpg",
      title: "Брендированные носки",
      size: "col-span-1 row-span-1"
    }
  ];

  return (
    <section className="container mx-auto mt-2 py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          НАША <span className="text-[#00589d]">КОЛЛЕКЦИЯ</span>
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Широкий ассортимент носков для любых задач и стилей
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {galleryItems.map((item, index) => (
          <div 
            key={index}
            className="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="aspect-square w-full">
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3 sm:p-4">
              <h3 className="text-sm sm:text-base font-semibold text-gray-800 text-center">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Gallery; 