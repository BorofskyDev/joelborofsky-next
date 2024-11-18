import { icons } from '@/components/icons/icons'
import SmallServiceContainer from '@/components/containers/service-containers/small-service-container/SmallServiceContainer'

export function WebDevelopment() {
  return (
    <SmallServiceContainer
      className='bg-yellow'
      icon={icons.developer.path}
      viewBox={icons.developer.viewBox}
      xmlns={icons.developer.xmlns}
      iconFill='fill-vibrant-pink'
      iconClassName='bg-green'
      headerText='Developer'
      headerClassName='bg-blue'
    >
      <p className='border-2 br-5 bs-2'>
        I specialize in web development, helping you create beautiful and
        functional websites and applications. With a stack that begins with
        Nextjs and uses TailwindCSS and/or SASS/SCSS for styling, I not only
        make your sites fast and functional, I make them beautiful.
      </p>
      <br />
      <br />
      <p className='border-2 br-5 bs-2'>
        I specialize in static websites (usually for portfolios or simple
        business web presence) as well as small web apps. Utilizing Google&apos;s
        Firebase, I can build a backend for your business so you can manage
        photo galleries, take orders, manage your inventory, and more.
      </p>
      <br />
      <br />
      <p className='border-2 br-5 bs-2'>
        I also do not shy away from &quot;smaller&quot; projects. If you need a
        basic profile built (for modeling, job searches, or whatever you might
        need), I can get your site built quickly and affordably.
      </p>
    </SmallServiceContainer>
  )
}
