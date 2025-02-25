import { CONTACT } from "../constants"
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -100}}
            transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <p className="my-4">I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p> 
            <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100}}
                transition={{ duration: 1 }}
            className="my-4">{CONTACT.address}</motion.p>
            <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100}}
                transition={{ duration: 1.5 }}
            className="my-4">{CONTACT.phoneNo}</motion.p>
            <p className="my-4">Feel free to reach out via email:</p>
            <a href={`mailto:${CONTACT.email}`} className="border-b no-underline">
                {CONTACT.email}
            </a>

        </div>
    </div>
  )
}

export default Contact