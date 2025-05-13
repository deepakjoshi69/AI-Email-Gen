import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Target } from 'lucide-react';

function About() {
  return (
    <div className="flex-1 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">About AI Email Pro</h1>
          <p className="text-xl text-gray-400">
            Revolutionizing email communication with artificial intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-black/50 backdrop-blur-md p-6 rounded-xl border border-yellow-500/20"
          >
            <Sparkles className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Our Mission</h3>
            <p className="text-gray-400">
              To make professional email writing accessible to everyone through advanced AI technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-black/50 backdrop-blur-md p-6 rounded-xl border border-yellow-500/20"
          >
            <Users className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Our Team</h3>
            <p className="text-gray-400">
              A dedicated group of AI experts and developers passionate about communication
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-black/50 backdrop-blur-md p-6 rounded-xl border border-yellow-500/20"
          >
            <Target className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Our Vision</h3>
            <p className="text-gray-400">
              To become the world's leading AI-powered email composition platform
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-black/50 backdrop-blur-md p-8 rounded-xl border border-yellow-500/20"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
          <p className="text-gray-400 mb-4">
            AI Email Pro was born from a simple observation: people spend too much time crafting
            emails. We believed there had to be a better way. By leveraging the latest in AI
            technology, we've created a platform that helps you write perfect emails in seconds.
          </p>
          <p className="text-gray-400">
            Today, we're proud to serve thousands of users worldwide, helping them communicate
            more effectively and efficiently. Our commitment to innovation and user experience
            drives us to continuously improve our service.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;