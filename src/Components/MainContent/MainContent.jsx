import PriceSection from './PriceSection/PriceSection'
import ResourcesSection from './ResourcesSection/ResourcesSection'

const MainContent = () => {
  return (
    <div className='bg-white flex flex-col items-center'>
      <PriceSection/>
      <ResourcesSection/>
    </div>
  )
}

export default MainContent
