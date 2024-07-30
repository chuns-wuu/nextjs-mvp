import { Button } from '@/components/shared/ui/button';

import { LandingPrimaryImageCtaSection } from '@/components/landing/cta/LandingPrimaryCta';
import { LandingProductHuntAward } from '@/components/landing/social-proof/LandingProductHuntAward';
import { LandingTestimonialInline } from '@/components/landing/testimonial/LandingTestimonialInline';
import { LandingTestimonialInlineItem } from '@/components/landing/testimonial/LandingTestimonialInlineItem';
import Image from "next/image";

export default function HomeSection() {
  const logo =  <Image
      src="/logo-full.png"
      alt=""
      width={200}
      height={80}
    />

  return (
    <LandingPrimaryImageCtaSection
      title="Let reliability be your secret sauce."
      description="With our AI-powered APIs, we help you make sense of the SLOs, SLIs, and SLAs in the lens of customers and businesses priorities. "
      imageSrc="/static/images/product-sample.webp"
      imageAlt="Sample image"
      withBackground
      leadingComponent={logo}
      footerComponent={
        <LandingTestimonialInline>
          <LandingTestimonialInlineItem
            imageSrc="https://picsum.photos/id/64/100/100"
            name="John Doe"
            text="I love this app"
          />

          <LandingTestimonialInlineItem
            imageSrc="https://picsum.photos/id/65/100/100"
            name="Jane Doe"
            text="Best app on the market"
          />

          <LandingTestimonialInlineItem
            imageSrc="https://picsum.photos/id/669/100/100"
            name="Alice Doe"
            text="Never seen anything like it"
            suffix="CEO of Instagram"
          />

          <LandingTestimonialInlineItem
            imageSrc="https://picsum.photos/id/829/100/100"
            name="Guido Ross"
            text="Nothing comes close to it"
            suffix="DevOps at Meta"
          />
        </LandingTestimonialInline>
      }
    >
      <Button size="xl" asChild>
        <a href="#">Sign up</a>
      </Button>

      <Button size="xl" variant="outlinePrimary">
        <a href="#">See demo</a>
      </Button>
    </LandingPrimaryImageCtaSection>
  );
}

