import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CustomCarousel({ children }) {
  return (
    
      <Carousel>
        {children}
      </Carousel>
    
  )
}

export default CustomCarousel;