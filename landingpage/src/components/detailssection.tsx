import { LandingPrimaryVideoCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingSocialProof } from '@/components/landing/social-proof/LandingSocialProof';

import { Button } from '@/components/shared/ui/button';
import { colors } from '@/data/config/colors';

export default function DetailSection() {
  const avatarItems = [
    {
      imageSrc: 'https://picsum.photos/id/63/100/100',
      name: 'Sr Staff Eng',
    },
    {
      imageSrc: 'https://picsum.photos/id/357/100/100',
      name: 'Circle CI',
    },
    {
      imageSrc: 'https://picsum.photos/id/341/100/100',
      name: 'Google',
    },
  ];

  return (
    <>
      <LandingPrimaryVideoCtaSection
        title="Unify, scale and alert."
        description="SLOs aren't just a number. It's your service's HEART BEAT. See how our platform is the fastest way to align reliability and ensure your product's stablity."
        autoPlay
        controls={false}
        textPosition="center"
        videoPosition="center"
        videoSrc="/"
        withBackground
        variant="secondary"
      >
        <div className="w-full mt-6 flex justify-center gap-4">
          <Button size="xl" className="p-7 text-xl" variant="secondary" asChild>
            <a href="#">Join the waitlist</a>
          </Button>
        </div>

        <LandingSocialProof
          className="w-full mt-6 justify-center"
          showRating
          numberOfUsers={20}
          suffixText="industry leaders"
          avatarItems={avatarItems}
          size="large"
          disableAnimation
        />
      </LandingPrimaryVideoCtaSection>

      {/* Background gradient */}
      <div
        className="fixed top-0 left-0 w-full h-full -z-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(
            ` <svg xmlns="http://www.w3.org/2000/svg"><defs><radialGradient id="a" cx="50%" cy="56.6%" r="50%" fx="50%" fy="56.6%" gradientUnits="userSpaceOnUse"><stop offset="0%" style="stop-color:${colors.primary.dark};stop-opacity:0.1"/><stop offset="54.99%" style="stop-color:${colors.primary.darker};stop-opacity:0.1"/><stop offset="100%" style="stop-color:${colors.secondary.darker};stop-opacity:0.1"/></radialGradient></defs><rect width="100%" height="100%" fill="url(#a)"/></svg>`,
          )}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
      
      </div>
    </>
  );
}
