
import { motion } from "framer-motion";
import DogDisplay from "@/components/DogDisplay";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Mon Ami Canin
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Un compagnon fidèle pour tous les moments de la vie
          </p>
        </motion.div>
        
        <DogDisplay className="w-full h-[400px] md:h-[500px] mx-auto" />
        
        <footer className="mt-16 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Mon Ami Canin. Tous droits réservés.
        </footer>
      </div>
    </div>
  );
};

export default Index;
