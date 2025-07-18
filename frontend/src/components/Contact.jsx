// components/Contact.jsx
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_a1mq1ra',
        'template_yt7a207',
        formRef.current,
        'hfFEb2okfoNDD9xCH'
      )
      .then(
        () => {
          setSent(true);
          formRef.current.reset();
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          console.error('FAILED...', error);
          alert('Error sending message. Please try again.');
        }
      );
  };

  return (
    <section
      id='contact'
      className='bg-gray-950 text-white py-20 px-4 sm:px-10'
    >
      <div className='max-w-3xl mx-auto text-center mb-10'>
        <h2 className='text-4xl font-bold mb-4'>Get in Touch</h2>
        <p className='text-gray-400'>
          Have a question or want to work together?
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='max-w-xl mx-auto space-y-6'
      >
        <input
          type='text'
          name='from_name'
          placeholder='Your Name'
          required
          className='w-full px-4 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <input
          type='email'
          name='from_email'
          placeholder='Your Email'
          required
          className='w-full px-4 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <textarea
          name='message'
          placeholder='Your Message'
          required
          rows={6}
          className='w-full px-4 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
        ></textarea>
        <button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-semibold transition'
        >
          Send Message
        </button>
        {sent && (
          <p className='text-green-400 text-center'>
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
}
