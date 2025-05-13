import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Clock, Shield } from 'lucide-react';

function Home() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('user') !== null;

  const handleGetStarted = () => {
    if (isLoggedIn) {
      navigate('/email-generator');
    } else {
      navigate('/signin');
    }
  };

  return (
    <div className="flex-1">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/20 via-black to-black" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-bold text-white mb-6"
            >
              Create Professional Emails
              <span className="text-yellow-500"> Instantly</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8"
            >
              Harness the power of AI to generate perfect emails for any occasion
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={handleGetStarted}
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Get Started
            </motion.button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose AI Email Pro?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-yellow-500/20"
            >
              <Sparkles className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI-Powered</h3>
              <p className="text-gray-400">
                Advanced AI technology ensures your emails are professional and engaging
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-yellow-500/20"
            >
              <Clock className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Save Time</h3>
              <p className="text-gray-400">
                Generate perfect emails in seconds, not hours
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-900/50 p-6 rounded-xl border border-yellow-500/20"
            >
              <Shield className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Secure</h3>
              <p className="text-gray-400">
                Your data is always protected with enterprise-grade security
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;