import AboutSection from "./sections/about/AboutSection";
import HeroSection from "./sections/hero/HeroSection";
import StackSection from "./sections/stack/StackSection";

export default function SplashPageComponent() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <StackSection />
        </div>
    )
}