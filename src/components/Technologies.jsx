import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
// import { SiDjango } from "react-icons/si";
// import { SiFigma } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
// import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: { y: [10, -10], transition: {duration: duration, ease: "linear", repeat: Infinity, repeatType: "reverse"}}
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100}}
            transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100}}
            transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-5xl text-cyan-600" />
            </motion.div>
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-5xl text-orange-500" />
            </motion.div>
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className="text-5xl text-blue-600" />
            </motion.div>
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-5xl text-blue-600" />
            </motion.div>
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTailwindcss className="text-5xl text-cyan-600" />
            </motion.div>
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-5xl text-purple-800" />
            </motion.div>
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGit className="text-5xl text-red-600" />
            </motion.div>
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-5xl text-blue-400" />
            </motion.div>
            {/* <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiDjango className="text-5xl text-green-900" />
            </motion.div> */}
            {/* <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiFigma className="text-5xl text-red-600" />
            </motion.div> */}
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-5xl text-green-600" />
            </motion.div>
            <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJs className="text-5xl text-yellow-400" />
            </motion.div>
            {/* <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-5xl text-sky-500" />
            </motion.div> */}
        </motion.div>
    </div>
  )
}

export default Technologies