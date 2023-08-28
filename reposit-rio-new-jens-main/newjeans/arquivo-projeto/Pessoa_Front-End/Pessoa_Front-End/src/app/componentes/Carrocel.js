import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carrocel.css';

const CarouselComponent = () => {
  return (
    <Carousel className="w-4/5 ">
      
      <div className="">
      <img src="https://cdn.wallpapersafari.com/99/88/v4wVcI.jpg" alt="Imagem 2" />
        
        
      </div>
      <div>
      <img src="https://a-static.besthdwallpaper.com/blackpink-gorgeous-members-wallpaper-1366x768-110032_46.jpg" alt="Imagem 1" />
       
      </div>
      <div>
        <img src="https://a-static.besthdwallpaper.com/aespa-members-in-savage-mv-photoshoot-wallpaper-3554x1999-100874_53.jpg" alt="Imagem 3" />
        
      </div>
      
    </Carousel>
  );
};

export default CarouselComponent;