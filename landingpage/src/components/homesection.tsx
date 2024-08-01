import { Button } from '@/components/shared/ui/button';

import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingTestimonialInline } from '@/components/landing/testimonial/LandingTestimonialInline';
import { LandingTestimonialInlineItem } from '@/components/landing/testimonial/LandingTestimonialInlineItem';
import Image from "next/image";
import { Input } from './ui/input';

export default function HomeSection() {
  const logo =  <Image
      src="/logo-full.png"
      alt=""
      width={200}
      height={80}
    />

  return (
    <LandingPrimaryImageCtaSection
      title="Let effortless reliability be your secret sauce."
      description="With our AI-powered APIs, we help you make sense of the scattered SLOs, SLIs, and SLAs in the lens of customers and businesses needs. Sign up today for early access."
      imageSrc="/static/images/product-sample.webp"
      imageAlt="Animation"
      withBackground
      leadingComponent={logo}
      footerComponent={
        <LandingTestimonialInline>
          <LandingTestimonialInlineItem
            imageSrc="https://picsum.photos/id/63/100/100"
            name="Sr Staff Eng"
            text="SLOs are the best tool to measure and optimize reliability."
          />

          <LandingTestimonialInlineItem
            imageSrc="https://picsum.photos/id/341/100/100"
            name="Google"
            text="Decision-makers know they can't just average them all."
          />

          <LandingTestimonialInlineItem
            imageSrc="https://picsum.photos/id/357/100/100"
            name="Circle CI"
            text="Product Management defines an SLO."
          />

          <LandingTestimonialInlineItem
            imageSrc="https://picsum.photos/id/331/100/100"
            name="SRE lead"
            text="Consider exploring how SLOs can benefit your organization"
          />

        </LandingTestimonialInline>
      }
    >
      <form className="flex gap-2 w-full" action="https://formspree.io/f/xdknggyb" method="POST" >
        <Input type="email" name="email" placeholder="Enter your email" className="w-1/2 flex-1" />
       
        <Button
          type="submit"
          size="xl" 
        >
          Join the waitlist
        </Button>
      </form>

    </LandingPrimaryImageCtaSection>
  );
}

