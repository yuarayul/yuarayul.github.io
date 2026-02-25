import { motion } from 'framer-motion';

export default function Project({ title, image, client, year }) {
  return (
    <div className="group border-b-2 border-ink-black bg-brutalist-pink hover:bg-ink-black transition-colors duration-700 text-off-white">
      {/* Reduced padding from p-10 to py-8 px-4 to save space */}
      <div className="py-8 px-4 md:px-20 flex flex-col items-center">
        
        {/* IMAGE CONTAINER: Added max-w-2xl to stop images from being massive on desktop */}
        <div className="overflow-hidden border-2 border-ink-black bg-white relative w-full max-w-2xl">
          <motion.img 
            loading="lazy"
            decoding="async"
            src={image} 
            alt={`${title} - ${client}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            /* REMOVED: 'grayscale' class. Image is now full color by default */
            className="w-full h-auto object-cover transition-transform duration-1000 ease-in-out scale-100 group-hover:scale-105" 
          />
        </div>
        
        {/* METADATA: Adjusted width to match the image container */}
        <div className="flex justify-between items-end mt-6 w-full max-w-2xl text-off-white">
          <div>
            <h2 className="text-2xl md:text-4xl font-black leading-none tracking-tighter">
              {title}
            </h2>
            <p className="text-xs mt-2 opacity-80 group-hover:opacity-100 font-bold uppercase">
              {client}
            </p>
          </div>
          <p className="text-lg font-black opacity-80 group-hover:opacity-100">{year}</p>
        </div>
      </div>
    </div>
  );
}