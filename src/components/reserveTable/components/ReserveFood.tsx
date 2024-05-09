import MethodHeader from '@/components/component/Header/MethodHeader'
import HorizontalMenu from '@/components/Menu/horizontalMenu/HorizontalMenu'
import VerticalMenu from '@/components/Menu/verticalMenu/VerticalMenu'
import Search from '@/components/component/search/Search'

const ReserveFood = () => {
  return (
    <div className='text-black '>
      <div className='bg-gradient-to-tr from-white to-[#f0f0f7]'>

        {/* Header */}
        <div ><MethodHeader/></div>
        <div className='min-h-[10vh]'></div>

        {/* Search */}
        <div className='mx-5 flex  justify-center '><Search /></div>
        
        {/* Horizontal Menu */}
        <HorizontalMenu />

        {/* Vertical Menu */}
        <VerticalMenu />

        {/* TODO
          -Add functionality to each components

          -Add toaster for feedback
          
          -When user click + it gets added to the cart
         */}

      </div>
    </div>
  )
}

export default ReserveFood
