import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import FlexColContainer from '@/components/containers/section-containers/flex-col-container/FlexColContainer'
import SmallServiceContainer from '@/components/containers/service-containers/small-service-container/SmallServiceContainer'
import { icons } from '@/components/icons/icons'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'
import styles from './AboutSection.module.scss'

export default function AboutSection() {
    return (
        <FlexColContainer id='about' className={`bg-red ${styles.aboutSection}`}>
           <SectionHeader className='bg-blue'>About</SectionHeader>
           <div className={`relative ${styles.servicesWrapper}`}>
            <SmallServiceContainer
            className='bg-orange'
            icon={icons.developer.path}
            viewBox={icons.developer.viewBox}
            xmlns={icons.developer.xmlns}
            iconFill='fill-green'
            iconClassName='bg-dark'
            headerText='Developer'
            headerClassName='bg-violet'
            >
                <p className='border-2 br-5 bs-2'>Nextjs, React, Firebase, TailwindCSS, and more!</p>
                <InternalLinkBox href='/services'>Learn more about development services</InternalLinkBox>
            </SmallServiceContainer>
            <SmallServiceContainer
            className='bg-blue'
            icon={icons.designer.path}
            viewBox={icons.designer.viewBox}
            xmlns={icons.designer.xmlns}
            iconFill='fill-vibrant-blue'
            iconClassName='bg-orange'
            headerText='Designer'
            headerClassName='bg-pink'
            >
                <p className='border-2 br-5 bs-2'>Figma, SASS/SCSS, Framer Motion, TailwindCSS, and other libraries!</p>
                <InternalLinkBox href='/services'>Learn more about web design services</InternalLinkBox>
            </SmallServiceContainer>
            <SmallServiceContainer
            className='bg-green'
            icon={icons.business.path}
            viewBox={icons.business.viewBox}
            xmlns={icons.business.xmlns}
            iconFill='fill-vibrant-orange'
            iconClassName='bg-vibrant-purple'
            headerText='Business'
            headerClassName='bg-yellow'
            headerSpanText='(er)'
            >
                <p className='border-2 br-5 bs-2'>Financial Sales, Marketing, Customer Service, Stakeholder Relations, even Retail!</p>
                <InternalLinkBox href='/services'>Learn more about business services</InternalLinkBox>
            </SmallServiceContainer>
        
           </div>
        </FlexColContainer>
    )
}