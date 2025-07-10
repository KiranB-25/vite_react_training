import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Send } from 'lucide-react';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(() => {
        alert('Message sent successfully!');
        form.current?.reset();
      })
      .catch((error) => {
        console.error(error.text);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-gray-100 px-4"
      style={{ backgroundImage: `url('/images/cnt-back-2.jpg')` }}
    >
      <div className="bg-white/30 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Contact Us</h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-3">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="user_name"
              required
              placeholder="John Doe"
              className="bg-white/30 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="user_email"
              required
              placeholder="email@example.com"
              className="bg-white/30 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="user_phone"
              placeholder="+1 (555) 123-4567"
              className="bg-white/30 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Subject</label>
            <select
              name="user_subject"
              className="bg-white/30 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a subject</option>
              <option value="Admission">Admission</option>
              <option value="Fee Inquiry">Fee Inquiry</option>
              <option value="Support">Support</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Write your message..."
              className="bg-white/30 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center items-center space-x-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md active:bg-green-700 transition"
          >
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

