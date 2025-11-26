import ClientLayout from '@/app/components/shared/ClientLayout';
import HeroSection from '@/app/components/about/HeroSection';
import WhoWeAreSection from '@/app/components/about/WhoWeAreSection';
import VisionSection from '@/app/components/about/VisionSection';
import MissionAndImpactSection from '@/app/components/about/MissionAndImpactSection';
import TimelineSection from '@/app/components/about/TimelineSection';
import TeamSection from '@/app/components/about/TeamSection';
import TrustedSection from '@/app/components/about/TrustedSection';
import FeaturedSection from '@/app/components/about/FeaturedSection';
import CTASection from '@/app/components/about/CTASection';

export default function AboutPage() {
  return (
    <ClientLayout>
      <HeroSection />
      <WhoWeAreSection />
      <VisionSection />
      <MissionAndImpactSection />
      <TimelineSection />
      <TeamSection />
      <TrustedSection />
      <FeaturedSection />
      <CTASection />
    </ClientLayout>
  );
}
