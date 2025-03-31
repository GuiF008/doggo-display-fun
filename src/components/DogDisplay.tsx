
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface DogDisplayProps {
  className?: string;
}

const DogDisplay = ({ className }: DogDisplayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn("overflow-hidden rounded-xl shadow-lg", className)}
    >
      <img
        src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        alt="Adorable dog"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </motion.div>
  );
};

export default DogDisplay;
