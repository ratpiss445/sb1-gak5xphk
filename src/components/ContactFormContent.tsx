import React, { useState } from 'react';
import { ContactFormFields } from '../types';

interface ContactFormContentProps {
  onSubmit: (data: ContactFormFields) => void;
  isSubmitting: boolean;
}

export default function ContactFormContent({ onSubmit, isSubmitting }: ContactFormContentProps) {
  const [formData, setFormData] = useState<ContactFormFields>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const inputClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className={inputClasses}
            value={formData.firstName}
            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className={inputClasses}
            value={formData.lastName}
            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={inputClasses}
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          className={inputClasses}
          value={formData.company}
          onChange={(e) => setFormData({...formData, company: e.target.value})}
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className={inputClasses}
          value={formData.subject}
          onChange={(e) => setFormData({...formData, subject: e.target.value})}
          disabled={isSubmitting}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={inputClasses}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
          disabled={isSubmitting}
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Submit'}
      </button>
    </form>
  );
}