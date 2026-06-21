import React from 'react'
import { Ban } from 'lucide-react'
import Banner from '../Components/Home/Banner'
import CategorySlider from '../Components/Home/CategorySlider'
import FeaturedProducts from "../Components/Home/FeaturedProducts";
import Offers from '../Components/Home/Offers'
import TopBrands from '../Components/Home/TopBrands'
import WhyChooseUs from '../Components/Common/WhyChooseUs'
import Testimonials from '../Components/Home/Testimonials'
import FollowUs from '../Components/Home/FollowUs'
import StayUp from '../Components/Home/StayUp'

export default function Home() {
  return (
    <>
      <Banner/>
      <CategorySlider/>
      <FeaturedProducts/>
      <Offers/>
      <TopBrands/>
      <WhyChooseUs/>
      <Testimonials/>
      <FollowUs/>
      <StayUp/>
    </>
  )
}
