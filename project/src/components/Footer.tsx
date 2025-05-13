import React from 'react';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-yellow-500/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-8 h-8 text-yellow-500" />
              <span className="text-xl font-bold text-white">AI Email Pro</span>
            </div>
            <p className="text-gray-400">
              Generate professional emails instantly with the power of AI.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-yellow-500">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-500">About</a></li>
              <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-yellow-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-yellow-500">Cookie Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} AI Email Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;