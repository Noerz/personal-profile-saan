"use client";

import { Heading, Text } from "@/components/atoms";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AboutClient() {
  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
      }}
      className="mx-auto max-w-3xl px-4 py-20"
    >
      <motion.div variants={fadeIn}>
        <Heading as="h1" variant="display" className="mb-6">
          Tentang Saya
        </Heading>
      </motion.div>
      <motion.div variants={fadeIn}>
        <Text variant="body" className="text-base leading-relaxed text-slate-600">
          Saya adalah seorang yang memiliki semangat tinggi dengan kecintaan untuk membangun masyarakat yang lebih baik. Halaman ini akan berisi tentang visi, pengalaman, dan dedikasi saya.
        </Text>
      </motion.div>
    </motion.section>
  );
}
