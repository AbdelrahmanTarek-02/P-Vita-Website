import ClientLayout from '@/app/components/shared/ClientLayout'
import { HeroSection } from '@/app/components/Home/HeroSection'
import { PVitaScrollSection } from '@/app/components/Home/WhoWeAreSection'

export default function HomePage() {
  return (
    <ClientLayout>
      <HeroSection />
      <PVitaScrollSection />
    </ClientLayout>
  )
}
