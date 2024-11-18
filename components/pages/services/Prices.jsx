import { icons } from '@/components/icons/icons'
import SmallServiceContainer from '@/components/containers/service-containers/small-service-container/SmallServiceContainer'

export function Prices() {
  return (
    <SmallServiceContainer
      className='bg-pink'
      icon={icons.dollar.path}
      viewBox={icons.dollar.viewBox}
      xmlns={icons.dollar.xmlns}
      iconFill='fill-vibrant-purple'
      iconClassName='bg-yellow'
      headerText='Business'
      headerClassName='bg-blue'
    >
      <p className='border-2 br-5 bs-2'>
        As with all things in development, the question of &quot;how much does
        it cost&quot; is met with the response of &quot;it depends&quot;. Having
        been through the client side of trying to find a developer, I know how
        frustrating it can be and so let me try to provide some clarity.
      </p>
      <br />
      <br />
      <p className='border-2 br-5 bs-2'>
        I offer a range of prices based on the complexity of the build and
        skillset needed for the build. This means an hourly rate can range
        anywhere from $25 to $125 an hour. Likewise, the number of hours to do a
        project could be anywhere from 2 hours to a few hundred hours. This is
        why all projects are quote based after scoping your needs.
      </p>
      <br />
      <br />
      <p className='border-2 br-5 bs-2'>
        All that being said - or, written - here are some ballparks on what to
        expect depending on the build.
      </p>

      <ul className='border-2 br-5 bs-2'>
        <li>
          <strong>Small projects:</strong> $25 - $50 per hour, 2-20 hours
          <span className='fs-200'>
            {' '}
            (Static profiles, simple image galleries, etc)
          </span>
        </li>
        <li>
          <strong>Medium projects:</strong> $50 - $75 per hour, 20-300 hours{' '}
          <span className='fs-200'>
            {' '}
            (E-commerce sites, blogs, inventory systems, etc)
          </span>
        </li>
        <li>
          <strong>Large projects:</strong> $100 - $200 per hour, 200+ hours{' '}
          <span className='fs-200'>
            {' '}
            (Full design with marketing and development, app for business
            functionality, etc.)
          </span>
        </li>
      </ul>

      <p className='border-2 br-5 bs-2'>
        Once I scope out your needs, I will give you a quote based on the number
        of hours I estimate it will take me to build the site. If I run over the
        estimated hours and the scope hasn&apos;t changed, then I eat that cost.
        Having faced the confusion of quotes, I do all that I can to be honest
        and fair in my evaluations, up to and including if what you are
        requesting is outside of my skillset. Honesty is my guarantee.{' '}
      </p>
    </SmallServiceContainer>
  )
}
