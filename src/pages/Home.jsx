import React from 'react'
import Header from '../Components/Common/Header'
import { Ban } from 'lucide-react'
import Banner from '../Components/Common/Banner'
import CategorySlider from '../Components/Common/CategorySlider'
import ProductCard from '../Components/Common/ProductCard'
import FeaturedProducts from '../Components/Common/FeaturedProducts'
import Offers from '../Components/Common/Offers'
import TopBrands from '../Components/Common/TopBrands'
import WhyChooseUs from '../Components/Common/WhyChooseUs'
import Testimonials from '../Components/Common/Testimonials'
import FollowUs from '../Components/Common/FollowUs'
import StayUp from '../Components/Common/StayUp'
import Footer from '../Components/Common/Footer'

export default function Home() {
  return (
    <>
      <Header/>
      <Banner/>
      <CategorySlider/>
      <FeaturedProducts/>
      <Offers/>
      <TopBrands/>
      <WhyChooseUs/>
      <Testimonials/>
      <FollowUs/>
      <StayUp/>
      <Footer/>
    </>
  )
}
