// /**
//  * v0 by Vercel.
//  * @see https://v0.dev/t/N3m7UnzKT2N
//  * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
//  */
// import { Card } from "@/components/ui/card"
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// export default function Testimonial() {
//   return (
//     <Card className="w-full max-w-md p-6 grid gap-6">
//       <div className="flex items-center gap-4">
//         <Avatar>
//           <AvatarImage src="/placeholder-user.jpg" />
//           <AvatarFallback>JD</AvatarFallback>
//         </Avatar>
//         <div>
//           <p className="text-lg font-medium">Jane Doe</p>
//           <p className="text-sm text-muted-foreground">CEO, Acme Inc</p>
//         </div>
//       </div>
//       <blockquote className="text-lg leading-relaxed">
//         &ldquo;The customer service I received was exceptional. The support team went above and beyond to address my
//         concerns.&rdquo;
//       </blockquote>
//     </Card>
//   )
// }
import { LandingTestimonialGrid } from '@/components/landing/testimonial/LandingTestimonialGrid';


export default function Testimonial(){
  const testimonialItems = [
    {
      name: 'Mathew',
      text: 'After using this, I cannot imagine going back to the old way of doing things.',
      handle: '@heymatt_oo',
      imageSrc: 'https://picsum.photos/100/100.webp?random=2',
    },
    {
      name: 'Joshua',
      text: 'Perfect for my use case',
      handle: '@joshua',
      imageSrc: 'https://picsum.photos/100/100.webp?random=3',
    },
    {
      name: 'Parl Coppa',
      text: 'This is the best thing since sliced bread. I cannot believe I did not think of it myself.',
      handle: '@coppalipse',
      imageSrc: 'https://picsum.photos/100/100.webp?random=1',
      featured: true, // Feature this testimonial
    },
    {
      name: 'Mandy',
      text: 'Excellent product!',
      handle: '@mandy',
      imageSrc: 'https://picsum.photos/100/100.webp?random=4',
    },
    {
      name: 'Alex',
      text: 'Can easily recommend!',
      handle: '@alex',
      imageSrc: 'https://picsum.photos/100/100.webp?random=5',
    },
    {
      name: 'Sam',
      text: 'I am very happy with the results.',
      handle: '@sama',
      imageSrc: 'https://picsum.photos/100/100.webp?random=6',
    },
  ];
  
  return (<LandingTestimonialGrid
    title="What developers are saying"
    description="Try our browser retrospective tool and save time today"
    testimonialItems={testimonialItems}
  />);
}
