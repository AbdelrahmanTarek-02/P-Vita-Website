import ClientLayout from '@/app/components/shared/ClientLayout';
import { HeroSection } from '@/app/components/Home/HeroSection';
import { PVitaScrollSection } from '@/app/components/Home/WhoWeAreSection';
import { OurPartnersPreview } from '@/app/components/Home/OurPartnersPreview';
import { ProductLineSection } from '@/app/components/Home/ProductLineSection';

export default function HomePage() {
  return (
    <ClientLayout>
      <HeroSection />   
      <PVitaScrollSection />
      <OurPartnersPreview />
      <ProductLineSection />
    </ClientLayout>
  )
}
