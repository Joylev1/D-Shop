import { useState, useEffect } from 'react';


const AdBanner = () => {
  const ads = [
    { id: 1, image: '../assets/Adds/add1.jpg', link: '#' },
    { id: 2, image: '/path/to/ad2.jpg', link: '#' },
    { id: 3, image: '/path/to/ad3.jpg', link: '#' },
    { id: 4, image: '/path/to/ad4.jpg', link: '#' },
  ];
  
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [ads.length]);

  return (
    <div className="w-full max-w-7xl mx-auto mb-8 rounded-lg overflow-hidden shadow-lg hover:shadow-xl cursor-pointer transition-transform duration-200 hover:scale-105">
      <a href={ads[currentAdIndex].link} target="_blank" rel="noopener noreferrer">
        <img
          src={ads[currentAdIndex].image}
          alt={`Ad ${ads[currentAdIndex].id}`}
          className="w-full h-48 object-cover"
        />
      </a>
    </div>
  );
};

export default AdBanner;
