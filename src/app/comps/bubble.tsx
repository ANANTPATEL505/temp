import { motion } from "framer-motion";
const logos = [
  // group 1
  { src: "/logo/react.png", x: "-5vw", y: "15vh", group: 1 },
  { src: "/logo/tor.png", x: "20vw", y: "-5vh", group: 1 },
  { src: "/logo/next.png", x: "-20vw", y: "-38vh", group: 1 },

  // group 2
  { src: "/logo/ether.png", x: "20vw", y: "20vh", group: 2 },
  { src: "/logo/node.png", x: "10vw", y: "25vh", group: 2 },
  { src: "/logo/postgre.png", x: "25vw", y: "-32vh", group: 2 },
  { src: "/logo/go.png", x: "-25vw", y: "0vh", group: 2 },
  // group 3
  { src: "/logo/remix.png", x: "-30vw", y: "-20vh", group: 3 },
  { src: "/logo/rust.png", x: "30vw", y: "18vh", group: 3 },
  
  { src: "/logo/github.png", x: "32vw", y: "-15vh", group: 3 },
  { src: "/logo/python.png", x: "-40vw", y: "5vh", group: 3 },
  // group 4
  { src: "/logo/tailwind.png", x: "-5vw", y: "-25vh", group: 4 },
  { src: "/logo/mongo.png", x: "-20vw", y: "22vh", group: 4 },
  { src: "/logo/solidity.png", x: "10vw", y: "-35vh", group: 4 },
  { src: "/logo/c++.png", x: "-40vw", y: "-35vh", group: 4 },
];

const groupDelays = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
};

export default function Bubbles() {
  return (
    <motion.div
      className="relative w-full h-[100vh] overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.7 }} // 👈 triggers when 30% visible
    >
      {logos.map((logo, i) => {
        const groupDelay = groupDelays[logo.group] || 0;

        return (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, x: 0, y: 0 },
              visible: {
                opacity: 1,
                x: logo.x,
                y: logo.y,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
            className="absolute flex justify-center items-center"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.img
              src={logo.src}
              alt=""
              className="object-contain rounded-full 
                         w-8 h-12 
                         sm:w-12 sm:h-15 
                         md:w-20 md:h-20 
                         lg:w-24 lg:h-24 
                         xl:w-19 xl:h-26 
                         2xl:w-32 2xl:h-32"
              animate={{
                x: [0, 15, 15, 0, 0],
                y: [0, 0, 15, 15, 0],
              }}
              transition={{
                delay: groupDelay,
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        );
      })}
    </motion.div>
  );
}
