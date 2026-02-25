import { motion } from 'framer-motion';

export default function Ticker({ text }) {
  return (
    <div className="border-y-2 border-ink-black py-6 overflow-hidden flex bg-brutalist-pink">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          repeat: Infinity, 
          duration: 35, 
          ease: "linear" 
        }}
        /* Explicitly forcing text-off-white on the ticker */
        className="flex whitespace-nowrap text-4xl md:text-7xl font-black text-off-white uppercase tracking-tighter"
      >
        {[...Array(8)].map((_, i) => (
          <span key={i} className="px-8 italic">
            {text} <span className="text-ink-black">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}