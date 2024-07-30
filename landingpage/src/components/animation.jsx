'use client';

import { delay, motion } from "framer-motion";

const svgVariants = {
   initial: {
      pathLength: 0,
      pathSpacing: 0.2 
   },
   animate: {
      pathLength: 0.2,
      pathSpacing: 0
   },
   transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 2
   }
}

const pathVariants = {
   hidden: {
      opacity: 0
   },
   visible: {
      opacity: 1
   },
   transition: {
      duration: 10,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 2
   }
}

const specialVariants = {
   initial: {
      stroke: "#bdbdbd"
   },
   animate: {
      stroke: "#000",
      transition: {
         delay: 2,
         duration: 1,
         repeat: Infinity,
         repeatType: "loop",
         repeatDelay: 3
      }
   },
   transition: {
      ease: "linear"
   }
}

const subspecialVariants = {
   initial: {
      stroke: "#bdbdbd"
   },
   animate: {
      stroke: "#000",
      transition: {
         delay: 3,
         duration: 1,
         repeat: Infinity,
         repeatType: "loop",
         repeatDelay: 4
      }
   },
   transition: {
      ease: "linear"
   }
}


export default function Animation(props) {
   return <div>
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="210mm"
    height="297mm"
    viewBox="0 0 210 297"
    {...props}
  >
    <motion.rect
      width={76.948}
      height={26.697}
      x={68.743}
      y={63.138}
      ry={2.169}
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#bcbcbc",
        strokeWidth: 0.470517,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "3.76412,1.88207",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
      variants={svgVariants}
      initial="initial"
      animate="animate"
      transition="transition"
    />
    <motion.rect
      width={76.835}
      height={41.1}
      x={18.027}
      y={165.062}
      ry={3.338}
      style={{
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#bcbcbc",
        strokeWidth: 0.583371,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "4.66695,2.33349",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
      variants={svgVariants}
      initial="initial"
      animate="animate"
      transition="transition"
    />
    <motion.rect
      width={76.948}
      height={26.697}
      x={59.367}
      y={67.348}
      ry={2.169}
      style={{
        fill: "#fff",
        fillOpacity: 1,
        stroke: "#bcbcbc",
        strokeWidth: 0.470517,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "3.76412,1.88207",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
      variants={svgVariants}
      initial="initial"
      animate="animate"
      transition="transition"
    />
    <motion.rect
      width={151.804}
      height={33.088}
      x={22.362}
      y={113.591}
      ry={2.688}
      strokeWidth={0.471}
      fill={"#fff"}
      fillOpacity={1}
      stroke={"#000"}
      variants={specialVariants}
      initial="initial"
      animate="animate"
      transition="transition"
      id="retrox"
    />
    <text
      xmlSpace="preserve"
      x={76.558}
      y={76.854}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "6.35px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "sans-serif",
        fill: "none",
        fillOpacity: 1,
        stroke: "#bcbcbc",
        strokeWidth: 0.408001,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "3.26398,1.632",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
    />
    <motion.path
      d="M70.544 73.285h18.665v.338H70.544zM91.598 73.239h18.665v.338H91.598zM111.947 73.126h18.665v.338h-18.665zM98.972 76.503h18.665v.338H98.972zM77.66 76.631h18.665v.338H77.66z"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#bcbcbc",
        strokeWidth: 0.365494,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
      }}
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition="transition"
    />
    <rect
      width={28.051}
      height={9.133}
      x={101.743}
      y={81.007}
      ry={3.168}
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#bcbcbc",
        strokeWidth: 0.438193,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={28.931}
      height={9.126}
      x={65.512}
      y={80.918}
      ry={2.932}
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#bcbcbc",
        strokeWidth: 0.445,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <text
      xmlSpace="preserve"
      x={70.522}
      y={87.531}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "4.93889px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "sans-serif",
        fill: "#7fe982",
        fillOpacity: 1,
        stroke: "#95d598",
        strokeWidth: 0.108,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    >
      <tspan
        x={70.522}
        y={87.531}
        style={{
          fontSize: "4.93889px",
          fill: "#7fe982",
          fillOpacity: 1,
          stroke: "#95d598",
          strokeWidth: 0.108,
          strokeOpacity: 1,
          strokeDasharray: "none",
        }}
      >
        {"93.35%"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      x={106.443}
      y={87.341}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "4.93889px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "sans-serif",
        fill: "#7fe982",
        fillOpacity: 1,
        stroke: "#95d598",
        strokeWidth: 0.108,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    >
      <tspan
        x={106.443}
        y={87.341}
        style={{
          fontSize: "4.93889px",
          fill: "#7fe982",
          fillOpacity: 1,
          stroke: "#95d598",
          strokeWidth: 0.108,
          strokeOpacity: 1,
          strokeDasharray: "none",
        }}
      >
        {"97.15%"}
      </tspan>
    </text>
    <motion.rect
      width={67.583}
      height={8.66}
      x={64.157}
      y={109.744}
      ry={1.553}
      strokeWidth={0.471}
      fill={"#dbf8d7"}
      fillOpacity={1}
      stroke={"#000"}
      variants={specialVariants}
      initial="initial"
      animate="animate"
      id="retrox title"
    />
    <rect
      width={48.118}
      height={8.727}
      x={32.179}
      y={160.718}
      ry={1.565}
      style={{
        fill: "#dbf8d7",
        fillOpacity: 1,
        stroke: "#bdbdbd",
        strokeWidth: 0.371007,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
      id="reports title"
    />
    <text
      xmlSpace="preserve"
      x={83.495}
      y={115.514}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "4.93889px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "sans-serif",
        fill: "#454522",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.408001,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    >
      <tspan
        x={83.495}
        y={115.514}
        style={{
          fontSize: "4.93889px",
          fill: "#454522",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.408,
          strokeOpacity: 1,
        }}
      >
        {"Retrox APIs"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      x={45.73}
      y={166.485}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "4.93889px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "sans-serif",
        fill: "#454522",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.408001,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    >
      <tspan
        x={45.73}
        y={166.485}
        style={{
          fontSize: "4.93889px",
          fill: "#454522",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.408,
          strokeOpacity: 1,
        }}
      >
        {"reports"}
      </tspan>
    </text>
    <motion.rect
      width={76.835}
      height={41.1}
      x={104.905}
      y={164.391}
      ry={3.338}
      strokeWidth={0.471}
      fill={"#fff"}
      fillOpacity={1}
      stroke={"#000"}
      variants={subspecialVariants}
      initial="initial"
      animate="animate"
      transition="transition"
      id="alert management"
    />
    <rect
      width={55.348}
      height={8.701}
      x={116.651}
      y={160.061}
      ry={1.56}
      style={{
        fill: "#dbf8d7",
        fillOpacity: 1,
        stroke: "#bdbdbd",
        strokeWidth: 0.397307,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <text
      xmlSpace="preserve"
      x={121.896}
      y={166.111}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "4.93889px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "sans-serif",
        fill: "#454522",
        fillOpacity: 1,
        stroke: "none",
        strokeWidth: 0.408001,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    >
      <tspan
        x={121.896}
        y={166.111}
        style={{
          fontSize: "4.93889px",
          fill: "#454522",
          fillOpacity: 1,
          stroke: "none",
          strokeWidth: 0.408,
          strokeOpacity: 1,
        }}
      >
        {"alert management"}
      </tspan>
    </text>
    <motion.path
      d="m72.586 133.127-1.03-1.135-1.518.205.761-1.33-.664-1.38 1.5.312 1.108-1.058.166 1.523 1.35.727-1.398.629z"
      style={{
        fill: "#f8eb4c",
        fillOpacity: 1,
        stroke: "#bdbdbd",
        strokeWidth: 0.524999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
      transform="translate(-1.585 -17.116)"
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition="transition"
    />
    <rect
      width={46.855}
      height={19.024}
      x={25.306}
      y={124.401}
      ry={1.569}
      style={{
        fill: "#dedede",
        fillOpacity: 1,
        stroke: "#bcbcbc",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={34.819}
      y={128.113}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={47.195}
      y={128.119}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={53.589}
      y={129.766}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={38.595}
      y={129.714}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={35.66}
      y={132.044}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={49.198}
      y={131.991}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={42.024}
      y={133.726}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <ellipse
      cx={60.344}
      cy={137.837}
      rx={3.279}
      ry={3.024}
      style={{
        fill: "#f9f9f9",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.471242,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={46.855}
      height={19.024}
      x={75.525}
      y={124.394}
      ry={1.569}
      style={{
        fill: "#dedede",
        fillOpacity: 1,
        stroke: "#bcbcbc",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={85.038}
      y={128.106}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={97.414}
      y={128.112}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={103.808}
      y={129.759}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={88.815}
      y={129.707}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={85.879}
      y={132.038}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={99.417}
      y={131.984}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={92.243}
      y={133.719}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <ellipse
      cx={110.564}
      cy={137.83}
      rx={3.279}
      ry={3.024}
      style={{
        fill: "#f9f9f9",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.471242,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={46.855}
      height={19.024}
      x={125.167}
      y={124.494}
      ry={1.569}
      style={{
        fill: "#dedede",
        fillOpacity: 1,
        stroke: "#bcbcbc",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={134.681}
      y={128.206}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={147.057}
      y={128.213}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={153.451}
      y={129.859}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={138.457}
      y={129.807}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={135.522}
      y={132.138}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={149.06}
      y={132.085}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={10.579}
      height={0.159}
      x={141.886}
      y={133.819}
      ry={0.08}
      style={{
        fill: "#dfdddd",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <ellipse
      cx={160.206}
      cy={137.93}
      rx={3.279}
      ry={3.024}
      style={{
        fill: "#f9f9f9",
        fillOpacity: 1,
        stroke: "#fff",
        strokeWidth: 0.471242,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <motion.path
      d="M89.132 202.911h-67.35v-31.525"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#8e8e8e",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition="transition"
      id="graph axies"
    />
    <motion.path
      d="M22 194.183a10.788 10.788 0 0 0 5.387 2.39 10.789 10.789 0 0 0 5.837-.819c2.242-.995 4.072-2.725 5.723-4.538 1.651-1.814 3.182-3.754 5.053-5.34 2.675-2.266 5.962-3.727 9.353-4.615 3.392-.889 6.902-1.228 10.402-1.446 7.044-.438 14.162-.393 21.102.898 1.053.196 2.101.42 3.142.674"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#8e8e8e",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition="transition"
      id="graph curve"
    />
    <motion.path
      d="M48.938 171.51v31.203"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#f52727",
        strokeWidth: 0.437999,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: ".43799901,2.62799406",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition="transition"
      id="red line"
    />
    <rect
      width={31.398}
      height={9.073}
      x={57.423}
      y={190.394}
      ry={1.992}
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#8f8f8f",
        strokeWidth: 0.393,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <text
      xmlSpace="preserve"
      x={59.33}
      y={196.999}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "4.93889px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "sans-serif",
        fill: "#7fe982",
        fillOpacity: 1,
        stroke: "#95d598",
        strokeWidth: 0.208,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    >
      <tspan
        x={59.33}
        y={196.999}
        style={{
          fontSize: "4.93889px",
          fill: "#7fe982",
          fillOpacity: 1,
          stroke: "#95d598",
          strokeWidth: 0.208,
          strokeOpacity: 1,
          strokeDasharray: "none",
        }}
      >
        {"-$0.79/min"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      x={140.296}
      y={177.752}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "4.93889px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "sans-serif",
        fill: "#7fe982",
        fillOpacity: 1,
        stroke: "#95d598",
        strokeWidth: 0.108,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    >
      <tspan
        x={140.296}
        y={177.752}
        style={{
          fontSize: "4.93889px",
          fill: "#7fe982",
          fillOpacity: 1,
          stroke: "#95d598",
          strokeWidth: 0.108,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        {"sev0"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      x={140.484}
      y={188.776}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "4.93889px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "sans-serif",
        fill: "#7fe982",
        fillOpacity: 1,
        stroke: "#95d598",
        strokeWidth: 0.108,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    >
      <tspan
        x={140.484}
        y={188.776}
        style={{
          fontSize: "4.93889px",
          fill: "#7fe982",
          fillOpacity: 1,
          stroke: "#95d598",
          strokeWidth: 0.108,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        {"sev1"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      x={110.153}
      y={185.132}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "4.93889px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "sans-serif",
        fill: "#7fe982",
        fillOpacity: 1,
        stroke: "#95d598",
        strokeWidth: 0.108,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    >
      <tspan
        x={110.153}
        y={185.132}
        style={{
          fontSize: "4.93889px",
          fill: "#7fe982",
          fillOpacity: 1,
          stroke: "#95d598",
          strokeWidth: 0.108,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        {"SLOs"}
      </tspan>
      <tspan
        x={110.153}
        y={191.305}
        style={{
          fontSize: "4.93889px",
          fill: "#7fe982",
          fillOpacity: 1,
          stroke: "#95d598",
          strokeWidth: 0.108,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        {"SLIs"}
      </tspan>
    </text>
    <text
      xmlSpace="preserve"
      x={140.518}
      y={200.415}
      style={{
        fontStyle: "normal",
        fontVariant: "normal",
        fontWeight: 400,
        fontStretch: "normal",
        fontSize: "4.93889px",
        fontFamily: "sans-serif",
        InkscapeFontSpecification: "sans-serif",
        fill: "#7fe982",
        fillOpacity: 1,
        stroke: "#95d598",
        strokeWidth: 0.108,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    >
      <tspan
        x={140.518}
        y={200.415}
        style={{
          fontSize: "4.93889px",
          fill: "#7fe982",
          fillOpacity: 1,
          stroke: "#95d598",
          strokeWidth: 0.108,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      >
        {"sev2"}
      </tspan>
    </text>
    <rect
      width={17.833}
      height={5.944}
      x={158.224}
      y={173.38}
      ry={1.569}
      style={{
        fill: "#dedede",
        fillOpacity: 1,
        stroke: "#8f8f8f",
        strokeWidth: 0.293,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={17.833}
      height={5.944}
      x={158.405}
      y={183.905}
      ry={1.569}
      style={{
        fill: "#dedede",
        fillOpacity: 1,
        stroke: "#8f8f8f",
        strokeWidth: 0.293,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <rect
      width={17.833}
      height={5.944}
      x={158.384}
      y={195.228}
      ry={1.569}
      style={{
        fill: "#dedede",
        fillOpacity: 1,
        stroke: "#8f8f8f",
        strokeWidth: 0.293,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <motion.path
      d="m126.78 186.658 10.02-8.968M137.616 186.667h-10.998l10.998 10.998M96.69 94.139l-.08 15.304v0zM54.248 146.577v13.771"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#8f8f8f",
        strokeWidth: 0.408001,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition="transition"
    />
    {/* the three stokes */}
    <path
      d="m98.195 94.231.07 15.091v0"
      style={{
        fill: "#000",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.408001,
        strokeLinecap: "round",
        strokeMiterlimit: 2,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <path
      d="m57.15 146.78.075 13.668v0"
      style={{
        fill: "#000",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.402736,
        strokeLinecap: "round",
        strokeMiterlimit: 2,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
    />
    <motion.path
      d="m142.947 147.023.057 12.994"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0.405531,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition="transition"
    />
    {/* the three stokes */}
    <motion.path
      d="m142.947 147.023.057 12.994"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#8f8f8f",
        strokeWidth: 0.405531,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition="transition"
    />
    <motion.path
      d="M142.762 146.133Z"
      style={{
        fill: "none",
        fillOpacity: 1,
        stroke: "#8f8f8f",
        strokeWidth: 0.408001,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 2,
        strokeDasharray: "none",
        strokeDashoffset: 0,
        strokeOpacity: 1,
        paintOrder: "fill markers stroke",
      }}
      variants={pathVariants}
      initial="hidden"
      animate="visible"
      transition="transition"
    />
  </motion.svg>
  </div>
}

