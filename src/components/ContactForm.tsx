import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
import { ContactFormFields } from '../types';
import ContactFormContent from './ContactFormContent';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = async (formData: ContactFormFields) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/mgvvzbaa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setTimeout(() => {
          onClose();
          setSubmitSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700"
            disabled={isSubmitting}
          >
            <span className="sr-only">Close</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {submitSuccess ? (
          <div className="text-center py-8">
            <div className="text-gray-900 text-xl mb-2">Message sent successfully!</div>
            <p className="text-gray-600">Thank you for contacting us.</p>
          </div>
        ) : (
          <>
            <ContactFormContent 
              onSubmit={handleSubmit} 
              isSubmitting={isSubmitting} 
            />
            <div className="mt-6 pt-6 border-t border-gray-200">
              <a
                href="https://www.instagram.com/oppstudiofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-md hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                <span>Follow us on Instagram</span>
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}