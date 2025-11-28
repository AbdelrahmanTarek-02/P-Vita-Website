import dynamic from 'next/dynamic';
import ClientLayout from '@/app/components/shared/ClientLayout';
import HeroSection from '@/app/components/about/HeroSection';
import WhoWeAreSection from '@/app/components/about/WhoWeAreSection';

// Lazy load sections below the fold to reduce initial bundle
const VisionSection = dynamic(() => import('@/app/components/about/VisionSection'), {
  loading: () => <div className="h-96 bg-gradient-to-b from-transparent to-gray-100" />
});
const MissionAndImpactSection = dynamic(() => import('@/app/components/about/MissionAndImpactSection'), {
  loading: () => <div className="h-96 bg-gradient-to-b from-transparent to-gray-100" />
});
const TimelineSection = dynamic(() => import('@/app/components/about/TimelineSection'), {
  loading: () => <div className="h-96 bg-gradient-to-b from-transparent to-gray-100" />
});
const TeamSection = dynamic(() => import('@/app/components/about/TeamSection'), {
  loading: () => <div className="h-96 bg-gradient-to-b from-transparent to-gray-100" />
});
const TrustedSection = dynamic(() => import('@/app/components/about/TrustedSection'), {
  loading: () => <div className="h-96 bg-gradient-to-b from-transparent to-gray-100" />
});
const FeaturedSection = dynamic(() => import('@/app/components/about/FeaturedSection'), {
  loading: () => <div className="h-96 bg-gradient-to-b from-transparent to-gray-100" />
});
const CTASection = dynamic(() => import('@/app/components/about/CTASection'), {
  loading: () => <div className="h-96 bg-gradient-to-b from-transparent to-gray-100" />
});

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
