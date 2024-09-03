import Hero from '@/components/ui/Home/Hero';
import Specialist from '@/components/ui/Home/Specialist';
import TopRatedDoctors from '@/components/ui/Home/TopRatedDoctors';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Specialist/>
      <TopRatedDoctors/>
    </div>
  );
};

export default HomePage;