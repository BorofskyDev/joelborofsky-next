import FlexColRowContainer from '@/components/containers/section-containers/flex-col-row-container/FlexColRowContainer'
import styles from './HeroSection.module.scss'
import HeroContent from './hero-content/HeroContent'

function HeroSection() {
  return (
    <FlexColRowContainer>
        <HeroContent />
    </FlexColRowContainer>
  )
}
export default HeroSection