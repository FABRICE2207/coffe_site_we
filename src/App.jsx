import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import AppSotre from './components/AppSotre/AppSotre';
import Testimonial from './components/Testimonial/Testimonial';

const App = () => {

  useEffect(() => {
    Aos.init(
      {
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100,
      }
  )
  })

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Home />
      <Services />
      <Banner />
      <AppSotre />
      <Testimonial />
    </div>
  )
}

export default App