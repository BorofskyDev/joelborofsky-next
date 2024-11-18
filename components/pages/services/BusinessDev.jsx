import { icons } from '@/components/icons/icons'
import SmallServiceContainer from '@/components/containers/service-containers/small-service-container/SmallServiceContainer'

export function BusinessDev() {
  return (
    <SmallServiceContainer
      className='bg-orange'
      icon={icons.business.path}
      viewBox={icons.business.viewBox}
      xmlns={icons.business.xmlns}
      iconFill='fill-green'
      iconClassName='bg-pink'
      headerText='Business'
      headerClassName='bg-green'
    >
      <p className='border-2 br-5 bs-2'>
        Before getting into development, I spent years in business and retail
        banking. Prior to learning to code, I actually helped found a SaaS
        start-up. All that to say, I know what it takes to make it in business,
        regardless of the industry.
      </p>
      <br />
      <br />
      <p className='border-2 br-5 bs-2'>
        For established businesses I can bring a fresh perspective to your
        practices and methods. Having experience in banking, retail, and other
        industries, there aren&apos;t many situations that surprise me. Where I
        help the most is in finding ways to enhance cash flow while also
        increasing your brand footprint.
      </p>
      <br />
      <br />
      <p className='border-2 br-5 bs-2'>
        For those getting started, I have helped numerous small business owners
        at the beginning of their journeys. Setting up a marketing plan,
        business structures, P&L projections (or based on what you currently
        have), stakeholder relations, and so on - there is A LOT involved in
        starting a business and getting it off the ground. I have been there,
        done that, failed, succeeded, and everything in-between. Let me use my
        experirence to help you.
      </p>
    </SmallServiceContainer>
  )
}
