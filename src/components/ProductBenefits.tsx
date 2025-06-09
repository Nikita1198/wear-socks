import React from 'react';

const ProductBenefits: React.FC = () => {
  return (
    <section className="container mx-auto mt-10 py-4 px-4 my-4 border-2 border-black py-12 px-6 sm:px-8 rounded-3xl mx-4 sm:mx-auto relative overflow-hidden">
      <div className="relative">
        {/* Text content */}
        <div className="pr-40">
          <h2 className="text-2xl md:text-3xl font-medium mb-8">
            Создаём продукцию, которая работает:
          </h2>
          
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold">ВЫДЕЛЯЕТ БРЕНД</h3>
            <h3 className="text-3xl md:text-4xl font-bold">РАДУЕТ ПОЛУЧАТЕЛЯ</h3>
            <h3 className="text-3xl md:text-4xl font-bold">НЕСЁТ СТИЛЬ</h3>
          </div>
        </div>

        {/* Positioned Images */}
        {/* Top right corner image */}
        <img 
          src="/Пнг-08.png" 
          alt="Design Icon" 
          className="absolute top-2 right-8 w-24 h-24 opacity-50 md:opacity-100"
        />
        
        {/* Bottom right image */}
        <img 
          src="/Пнг-13.png" 
          alt="Style Icon" 
          className="absolute top-23 right-32 w-48 h-48 opacity-50 md:opacity-100"
        />
      </div>
    </section>
  );
};

export default ProductBenefits; 