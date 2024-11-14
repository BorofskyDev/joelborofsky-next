import SectionHeader from '@/components/typography/headers/section-header/SectionHeader'
import FeaturedPostPreview from '@/components/blog/featured-post-preview/FeaturedPostPreview'
import blogImage from '@/public/img/projects/criminal-rolls.png'
import styles from './BlogSection.module.scss'

export default function BlogSection() {
  return (
    <section className={`bg-blue ${styles.blogSection}`}>
      <SectionHeader className='bg-pink'>Blog</SectionHeader>
      <FeaturedPostPreview
        cardBg='bg-red'
        image={blogImage}
        title='Making an Ecommerce site'
        date='July 21, 2021'
        content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus eget ipsum fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus eget ipsum fermentum. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut metus eget ipsum fermentum.'
        category='Web Development'
        href='/blog/making-an-ecommerce-site'
      />
    </section>
  )
}
