import FourSquareSectionContainer from '@/components/containers/section-containers/four-square-section-container/FourSquareSectionContainer'
import styles from './StackSection.module.scss'
import FourSquareBox from '@/components/containers/section-containers/four-square-section-container/four-square-box/FourSquareBox'
import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import ExternalButtonLink from '@/components/links/external-button-link/ExternalButtonLink'
import LargeIcon from '@/components/icons/large-icon/LargeIcon'
import { icons } from '@/components/icons/icons'
import InternalLinkBox from '@/components/links/internal-link-box/InternalLinkBox'

export default function StackSection() {
  return (
    <FourSquareSectionContainer className={styles.stackSection}>
      <FourSquareBox className={`bg-pink ${styles.boxOne}`}>
        <SectionHeader className='bg-yellow'>Stack</SectionHeader>
        <ExternalButtonLink className='bg-blue' href='https://nextjs.org/'>
          Nextjs
        </ExternalButtonLink>
        <ExternalButtonLink className='bg-red' href='https://tailwindcss.com/'>
          TailwindCSS
        </ExternalButtonLink>
        <ExternalButtonLink className='bg-green' href='https://react.dev'>
          React
        </ExternalButtonLink>
        <ExternalButtonLink
          className='bg-orange'
          href='https://firebase.google.com/'
        >
          Firebase
        </ExternalButtonLink>
      </FourSquareBox>
      <FourSquareBox className={`bg-yellow ${styles.boxTwo}`}>
        <LargeIcon
          className={`bg-orange fill-vibrant-purple ${styles.stackIcon1}`}
          icon={icons.html.path}
          xmlns={icons.html.xmlns}
          viewBox={icons.html.viewBox}
        />
        <LargeIcon
          icon={icons.css.path}
          xmlns={icons.css.xmlns}
          viewBox={icons.css.viewBox}
          className={`bg-light fill-vibrant-blue ${styles.stackIcon2}`}
        />
        <LargeIcon
          icon={icons.javaScript.path}
          xmlns={icons.javaScript.xmlns}
          viewBox={icons.javaScript.viewBox}
          className={`bg-vibrant-orange fill-yellow ${styles.stackIcon3}`}
        />
        <LargeIcon
          icon={icons.react.path}
          xmlns={icons.react.xmlns}
          viewBox={icons.react.viewBox}
          className={`bg-violet fill-vibrant-red ${styles.stackIcon4}`}
        />
      </FourSquareBox>
      <FourSquareBox className={`bg-blue ${styles.boxThree}`}>
        <LargeIcon
          icon={icons.sass.path}
          xmlns={icons.sass.xmlns}
          viewBox={icons.sass.viewBox}
          className={`bg-pink fill-vibrant-red ${styles.stackIcon1}`}
        />
        <LargeIcon
          icon={icons.firebase.path}
          xmlns={icons.firebase.xmlns}
          viewBox={icons.firebase.viewBox}
          className={`bg-yellow fill-vibrant-purple ${styles.stackIcon2}`}
        />
        <LargeIcon
          icon={icons.tailwind.path}
          xmlns={icons.tailwind.xmlns}
          viewBox={icons.tailwind.viewBox}
          className={`bg-vibrant-green fill-blue ${styles.stackIcon3}`}
        />
        <LargeIcon
          icon={icons.figma.path}
          xmlns={icons.figma.xmlns}
          viewBox={icons.figma.viewBox}
          className={`bg-vibrant-orange fill-vibrant-blue ${styles.stackIcon4}`}
        />
        <InternalLinkBox className={styles.exBtn} href='/stack'>Learn more about my stack!</InternalLinkBox>
      </FourSquareBox>
      <FourSquareBox className={`bg-green ${styles.boxFour}`}>
        <ExternalButtonLink className='bg-yellow' href='https://www.figma.com/'>
          Figma
        </ExternalButtonLink>
        <ExternalButtonLink className='bg-violet' href='https://sass-lang.com/'>
          SASS/SCSS
        </ExternalButtonLink>
        <ExternalButtonLink className='bg-pink' href='https://www.framer.com/motion/'>
          Framer Motion
        </ExternalButtonLink>
        <ExternalButtonLink
          className='bg-orange'
          href='https://firebase.google.com/'
        >
          Firebase
        </ExternalButtonLink>
        <InternalLinkBox className={styles.exBtn} href='/stack'>Learn more about my stack!</InternalLinkBox>
      </FourSquareBox>
    </FourSquareSectionContainer>
  )
}
