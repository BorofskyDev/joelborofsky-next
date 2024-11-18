import { icons } from "@/components/icons/icons";
import SmallServiceContainer from "@/components/containers/service-containers/small-service-container/SmallServiceContainer";

export function WebDesign(){
    return (
      <SmallServiceContainer
        className='bg-violet'
        icon={icons.developer.path}
        viewBox={icons.developer.viewBox}
        xmlns={icons.developer.xmlns}
        iconFill='fill-vibrant-blue'
        iconClassName='bg-red'
        headerText='Designer'
        headerClassName='bg-pink'
      >
        <p className='border-2 br-5 bs-2'>
          If you can&apos;t tell from my site, I really like to design things.
          Whether you&apos;re just getting started or looking to refresh your
          site, I can help bring an artistic eye plus a marketing background to
          your next project.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          I can help you choose the right tools and technologies to use in your
          design. From choosing a design language like Figma or Sketch to
          choosing the right color scheme (considering accessibility, marketing,
          and brand consistency), I can help you make sure your design is
          visually appealing and easy to work with.
        </p>
        <br />
        <br />
        <p className='border-2 br-5 bs-2'>
          I&apos;m always looking for new opportunities to express my creativity
          or even help out, so if you&apos;re looking for a designer that
          believes the web should be unique, fun, accessible, and easy to use,
          feel free to reach out to me for your next project!
        </p>
      </SmallServiceContainer>
    )
}