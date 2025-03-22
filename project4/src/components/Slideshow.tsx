import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    title: 'Innovation Industrielle',
    description: 'Des solutions modernes pour l\'industrie d\'aujourd\'hui'
  },
  {
    image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0',
    title: 'Qualité Supérieure',
    description: 'Des équipements conçus pour durer'
  },
  {
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
    title: 'Solutions Complètes',
    description: 'Tout ce dont vous avez besoin en un seul endroit'
  }
];

export default function Slideshow() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      fadeEffect={{ crossFade: true }} // added fadeEffect configuration
      className="h-[500px] w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div 
            className="relative h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image}?auto=format&fit=crop&w=1920&q=80)` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl">{slide.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}