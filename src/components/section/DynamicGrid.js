import React from 'react';
import EastIcon from '@mui/icons-material/East';
import Image from 'next/image';

export default function DynamicGrid({data}) {
  if (!Array.isArray(data)) return null;
  const normalCards = data.filter(data => !data.fullWidth);
  const fullWidthCards = data.filter(data => data.fullWidth);
  return (
    <section className="storage-features py-12">
      <div className="mx-auto max-w-screen-lg px-4 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {normalCards.map((card, index) => (
            <div key={index} className="storage-feature-details">
              <Image src={card.img} alt={card.title} width={1000} height={400} className="w-full rounded-lg" />
              <div className="storage-feature-details-txt">
                <h2 className="text-xl font-semibold">{card.title}</h2>
                <p>{card.desc}</p>
                <button className="back-btn needabsolute inline-flex items-center mt-2 bg-red-600 text-white">
                  {card.cta} <EastIcon className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
        {fullWidthCards.map((card, index) => (
          <div key={`fw-${index}`} className="storage-feature-details storage-full-width text-center">
            <Image src={card.img} alt={card.title} width={1200} height={400} className="w-full rounded-lg" />
            <div className="storage-feature-details-txt mt-4">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p>{card.desc}</p>
              <button className="back-btn needabsolute inline-flex items-center mt-2 bg-red-600 text-white">
                {card.cta} <EastIcon className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
