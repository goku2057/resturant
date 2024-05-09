import MethodHeader from '@/components/component/Header/MethodHeader'
import HorizontalMenu from '@/components/Menu/horizontalMenu/HorizontalMenu'
import VerticalMenu from '@/components/Menu/verticalMenu/VerticalMenu'
import Search from '@/components/component/search/Search'
import HeroSection from '../component/HeroSection'

const OrderFoodComponent = () => {
  return (
    <div className='text-black'>
      <div className='bg-primaryColor'>

        {/* Header */}
        <div ><MethodHeader /></div>
        <div className='min-h-[10vh]'></div>

        {/* Hero-Section */}
        <div className=''>
          <HeroSection />
        </div>

        {/* Search */}
        <div className='mx-5 flex  justify-center '>
          <Search />
        </div>
        
        {/* Horizontal Menu */}
        <HorizontalMenu/>

        {/* Vertical Menu */}
        <VerticalMenu />

      </div>
    </div>
  )
}

export default OrderFoodComponent
