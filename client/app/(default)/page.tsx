export const metadata = {
  title: 'Home - Simple',
  description: 'Page description',
}

import CarHero from '@/components/CarHero'
import CustomerReview from '@/components/CustomerReview'
import CarReview from '@/components/CarReview'
import Newsletter from '@/components/newsletter'
import CarNews from '@/components/CarNews'
import CarExplore from '@/components/CarExplore'
import CarManufacture from '@/components/CarManufacture'

export default function Home() {
  return (
    <>
      <CarHero />
      <CustomerReview />
      <CarReview />
      <CarNews />
      <CarExplore />
      <CarManufacture/>
    </>
  )
}
