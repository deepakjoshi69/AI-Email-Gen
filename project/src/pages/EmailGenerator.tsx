import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';

function EmailGenerator() {
  const [prompt, setPrompt] = useState('');
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/signin');
    }
  }, [navigate]);

  const generateEmail = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setGeneratedEmail('');
    setCopied(false);
    
    try {
      const response = await fetch('http://localhost:8000/generate-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to generate email. Please try again.');
      }
  
      const data = await response.json();
      setGeneratedEmail(data.email);
    } catch (error) {
      console.error('Error generating email:', error);
      setGeneratedEmail('Failed to generate email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="flex-1 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-black/50 backdrop-blur-md p-8 rounded-xl border border-yellow-500/20 shadow-lg"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Email Generator</h2>
          <div className="space-y-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your prompt (e.g., Write a follow-up email for a job interview...)"
              className="w-full h-32 p-4 bg-gray-900 rounded-lg text-white placeholder-gray-400 border border-yellow-500/20 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            <button
              onClick={generateEmail}
              disabled={loading || !prompt.trim()}
              className="flex items-center justify-center space-x-2 w-full py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              <span>{loading ? 'Generating...' : 'Generate Email'}</span>
            </button>
          </div>
        </motion.div>

        {generatedEmail && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-black/50 backdrop-blur-md p-8 rounded-xl border border-yellow-500/20 shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-white">Generated Email</h3>
              <button
                onClick={copyToClipboard}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  copied
                    ? 'bg-green-500 text-white'
                    : 'bg-yellow-500 text-black hover:bg-yellow-400'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-yellow-500/20">
              <pre className="text-gray-300 whitespace-pre-wrap font-sans">{generatedEmail}</pre>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default EmailGenerator;