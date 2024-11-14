import AboutSection from "./sections/about/AboutSection";
import BlogSection from "./sections/blog/BlogSection";
import ContactSection from "./sections/contact/ContactSection";
import HeroSection from "./sections/hero/HeroSection";
import ProjectsSection from "./sections/projects/ProjectsSection";
import ReviewsSection from "./sections/reviews/ReviewsSection";
import StackSection from "./sections/stack/StackSection";

export default function SplashPageComponent() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <StackSection />
            <ProjectsSection />
            <ReviewsSection />
            <BlogSection />
            <ContactSection />
        </div>
    )
}