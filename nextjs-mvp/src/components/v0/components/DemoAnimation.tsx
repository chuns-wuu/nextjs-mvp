'use client';
//import "./styles.css";
import { m, motion, Variants } from "framer-motion";
import Image from "next/image";

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 500
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

function Card({ image, width, height }) {
  const className = `card w-[${width}] h-[${height}]`
  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className={className} variants={cardVariants}>
        {image}
      </motion.div>
    </motion.div>
  );
}

const images = Array.of(
  {
    image: 
    <Image
      src="/assets/bot.png"
      alt=""
      width={600}
      height={200}
      priority
      className="object-contain"
    />,
    width: 600,
    height: 200
  },
  {
    image: 
    <Image
      src="/assets/search.png"
      alt=""
      width={600}
      height={200}
      priority
      className="object-contain"
    />,
    width: 600,
    height: 200
  },
  {
    image:  
    <Image
      src="/assets/sample-doc.png"
      alt=""
      width={600}
      height={860}
      priority
      className="object-contain"
    />,
    width: 600,
    height: 860
  }
);

const DemoAnimation = () => {
  return images.map(item => (
    <Card image={item.image} width={item.width} height={item.height}/>
  ));
};

export default DemoAnimation;