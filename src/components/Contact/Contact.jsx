import React, { useState, useRef } from 'react';
import styles from './Contact.module.css';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({
    submitting: false,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, message: '' });

    try {
      await emailjs.sendForm(
        'service_ykd6hkg', // Replace with your EmailJS service ID
        'template_chult3c', // Replace with your EmailJS template ID
        form.current,
        {
          publicKey: 'kUSyxaQ5_26m-Wekj', // Replace with your EmailJS public key
        }
      );

      setStatus({
        submitting: false,
        message: 'Message sent successfully!'
      });
      
      // Reset form
      form.current.reset();

    } catch (error) {
      setStatus({
        submitting: false,
        message: 'Failed to send message. Please try again.'
      });
      console.error('Failed...', error.text);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className={styles.formContainer}>
          <h2 className="text-4xl font-bold text-center text-white mb-8">
          We’d Love to Hear from You
          </h2>
          
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="user_name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                className={styles.input}
                placeholder="Your Name"
                disabled={status.submitting}
              />
            </div>

            <div>
              <label htmlFor="user_email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="from_email"
                id="from_email"
                required
                className={styles.input}
                placeholder="your@email.com"
                disabled={status.submitting}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows="4"
                className={styles.textarea}
                placeholder="Your message..."
                disabled={status.submitting}
              />
            </div>

            {status.message && (
              <div className={`text-center ${status.message.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                {status.message}
              </div>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                className={styles.contactBtn}
                disabled={status.submitting}
              >
                {status.submitting ? 'Sending...' : 'Contact Me'}
                <Send className="w-5 h-5 ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;