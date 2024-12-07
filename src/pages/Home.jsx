import React from 'react';
import ControlledCarousel from '../components/ControlledCarousel'; // Ensure the path is correct
import Products from '../components/Products'; // Import the Products component

document.title = "Valley Wines";

export function Home() {
  return (
    <div>
      <ControlledCarousel /> {/* Add the Carousel component here */}
      <Products /> {/* Add the Products component here */}
    </div>
  );
}
