// components/Contact.jsx
import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('https://your-backend-url.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setForm({ name: '', email: '', message: '' });
      setSent(true);
      setTimeout(() => setSent(false), 5000);
    } else {
      alert('Error sending message. Please try again later.');
    }
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

      <form onSubmit={handleSubmit} className='max-w-xl mx-auto space-y-6'>
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          required
          value={form.name}
          onChange={handleChange}
          className='w-full px-4 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          required
          value={form.email}
          onChange={handleChange}
          className='w-full px-4 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <textarea
          name='message'
          placeholder='Your Message'
          required
          value={form.message}
          onChange={handleChange}
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
