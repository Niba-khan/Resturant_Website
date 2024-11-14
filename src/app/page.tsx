
import React from 'react';
import Hero from './components/hero';
import TopMenu from './top menu/page';
import About from './about/page';
import Delivery from './delivery/page';
import Team from './team/page';
import BookingTable from './reservation/page';

const backgroundStyle = {
    backgroundImage: 'url(https://i.gifer.com/fetch/w300-preview/c8/c8b4d4a623faa09f800ee642f5da3363.gif)',
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover',
    backgroundPosition: 'center'
};

export default function Page() {
  return (
    <div style={backgroundStyle} className='overflow-x-hidden'>
      <div className='min-h-screen bg-white/10 backdrop-blur-2xl'>
       <Hero />
        <TopMenu />
        <About />
        <Delivery/>
        <Team/>
        <BookingTable/>
      </div>
    </div>
  );
}
