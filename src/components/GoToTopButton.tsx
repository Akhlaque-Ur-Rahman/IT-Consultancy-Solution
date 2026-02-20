 'use client';
 
 import { useEffect, useState } from 'react';
 import { motion, AnimatePresence } from 'motion/react';
 import { ArrowUp } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 
 export default function GoToTopButton() {
   const [visible, setVisible] = useState(false);
 
   useEffect(() => {
     const onScroll = () => {
       setVisible(window.scrollY > 400);
     };
     window.addEventListener('scroll', onScroll, { passive: true });
     onScroll();
     return () => window.removeEventListener('scroll', onScroll);
   }, []);
 
   const scrollToTop = () => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
   };
 
   return (
     <AnimatePresence>
       {visible && (
         <motion.div
           className="fixed bottom-24 right-8 z-50"
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           exit={{ opacity: 0, y: 20 }}
           transition={{ duration: 0.2 }}
         >
           <Button
             size="icon"
             aria-label="Go to top"
             className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-black shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]"
             onClick={scrollToTop}
           >
             <ArrowUp className="w-5 h-5" />
           </Button>
         </motion.div>
       )}
     </AnimatePresence>
   );
 }
