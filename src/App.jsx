import React from 'react';
import { RecoilRoot } from 'recoil'; // Import RecoilRoot
import CategorySection from './components/CategorySection';
import DropZone from './components/DropZone';
import AdBanner from './components/AdBanner';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  
  return (
    <RecoilRoot>
      <Navbar />
      <div className="h-screen flex flex-col items-center bg-gray-100 p-2 space-y-8 py-4">
        <AdBanner />
        <SearchBar />
        <CategorySection />
        <DropZone position="left" />
        <DropZone position="right" />
        
      </div>
      
      {/* <Footer/> */}
    </RecoilRoot>
    
  );
};

export default App;
