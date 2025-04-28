import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Maximize2, Minimize2, Camera, Send } from 'lucide-react';
import { toPng } from 'html-to-image';
import { useLocation } from 'react-router-dom';
import UseAnimations from 'react-useanimations';
import loading2 from 'react-useanimations/lib/loading2';

const RoboAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState<Array<{ type: 'user' | 'bot', content: string }>>([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleOpenRoboAdvisor = () => {
      setIsOpen(true);
      if (conversation.length === 0) {
        capturePageContent();
      }
    };

    window.addEventListener('openRoboAdvisor', handleOpenRoboAdvisor);
    return () => window.removeEventListener('openRoboAdvisor', handleOpenRoboAdvisor);
  }, [conversation.length]);

  const capturePageContent = async () => {
    try {
      setIsCapturing(true);
      const mainContent = document.querySelector('main');
      if (mainContent) {
        const dataUrl = await toPng(mainContent);
        setConversation([{
          type: 'bot',
          content: `<div class="space-y-4">
            <img src="${dataUrl}" alt="Page content" class="w-full rounded-lg" />
            <div class="flex items-center gap-2 text-accent-cyan">
              <div class="flex items-center">
                <span class="mr-2">Ingesting page context...</span>
                <UseAnimations animation={loading2} size={20} />
              </div>
            </div>
          </div>`
        }]);
      }
    } catch (error) {
      console.error('Error capturing page content:', error);
    } finally {
      setIsCapturing(false);
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const newConversation = [
      ...conversation,
      { type: 'user', content: message }
    ];

    const aiResponse = `I see you're on the ${location.pathname} page. Let me analyze your information and provide personalized advice...`;
    
    newConversation.push({ type: 'bot', content: aiResponse });
    
    setConversation(newConversation);
    setMessage('');
  };

  useEffect(() => {
    if (isOpen && conversation.length === 0) {
      capturePageContent();
    }
  }, [isOpen]);

  useEffect(() => {
    setConversation([]);
  }, [location]);

  if (location.pathname === '/robo-advisor') return null;

  return (
    <>
      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-accent-cyan text-white shadow-lg 
          hover:bg-accent-cyan/90 transition-colors flex items-center justify-center z-50"
          onClick={() => setIsOpen(true)}
        >
          <Bot size={24} />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              height: isMinimized ? 'auto' : '600px'
            }}
            exit={{ opacity: 0, y: 50 }}
            className={`fixed bottom-6 right-6 w-96 bg-white rounded-xl shadow-2xl overflow-hidden z-50
            border border-gray-200 flex flex-col ${isMinimized ? 'h-auto' : 'h-[600px]'}`}
          >
            <div className="bg-primary-navy p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="text-accent-cyan" size={24} />
                <h3 className="text-white font-medium">AI Robo Advisor</h3>
              </div>
              <div className="flex items-center gap-2">
                {isMinimized ? (
                  <button onClick={() => setIsMinimized(false)} className="text-white/70 hover:text-white">
                    <Maximize2 size={18} />
                  </button>
                ) : (
                  <button onClick={() => setIsMinimized(true)} className="text-white/70 hover:text-white">
                    <Minimize2 size={18} />
                  </button>
                )}
                <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white">
                  <X size={18} />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
                  {conversation.length === 0 ? (
                    <div className="text-center text-gray-500 mt-8">
                      <Bot size={48} className="mx-auto mb-4 text-accent-cyan" />
                      <p className="font-medium">Hello! I'm your AI Robo Advisor.</p>
                      <p className="text-sm mt-2">I can help analyze your financial data and provide personalized retirement advice.</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {conversation.map((msg, index) => (
                        <div
                          key={index}
                          className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[80%] rounded-lg p-3 ${
                              msg.type === 'user'
                                ? 'bg-accent-cyan text-white'
                                : 'bg-white border border-gray-200'
                            }`}
                            dangerouslySetInnerHTML={{ __html: msg.content }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="flex gap-2">
                    <button
                      onClick={capturePageContent}
                      disabled={isCapturing}
                      className="p-2 text-gray-500 hover:text-accent-cyan transition-colors disabled:opacity-50"
                      title="Capture current page content"
                    >
                      <Camera size={20} />
                    </button>
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Ask me anything..."
                      className="flex-grow px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:border-accent-cyan text-gray-900"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className="p-2 text-accent-cyan hover:text-accent-cyan/80 transition-colors disabled:opacity-50"
                    >
                      <Send size={20} />
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default RoboAdvisor;