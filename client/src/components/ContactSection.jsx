import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SectionPill from "./SectionPill";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <section id="contact" className="relative bg-white py-20 text-black dark:bg-black dark:text-white">
      <div className="absolute left-1/2 top-0 w-[78%] -translate-x-1/2">
        <div className="relative h-px w-full bg-zinc-300 dark:bg-zinc-800">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <SectionPill label="Contact" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm text-zinc-500">
            Have a project in mind or just want to say hi? My inbox is always open.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* left */}
          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800">
                <FiMail size={15} className="text-zinc-500" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">Email</p>
                <a href="mailto:mahboob6550@gmail.com" className="text-sm font-medium text-black dark:text-white hover:underline">
                  mahboob6550@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800">
                <FiPhone size={15} className="text-zinc-500" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">Phone</p>
                <p className="text-sm font-medium text-black dark:text-white">+91 80021 30208</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800">
                <FiMapPin size={15} className="text-zinc-500" />
              </div>
              <div>
                <p className="text-xs text-zinc-500">Location</p>
                <p className="text-sm font-medium text-black dark:text-white">LPU, Jalandhar, Punjab</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a href="#" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 text-zinc-500 transition hover:border-zinc-400 hover:text-black dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:text-white">
                <FaGithub size={15} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 text-zinc-500 transition hover:border-zinc-400 hover:text-black dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:text-white">
                <FaLinkedin size={15} />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 text-zinc-500 transition hover:border-zinc-400 hover:text-black dark:border-zinc-800 dark:hover:border-zinc-600 dark:hover:text-white">
                <FaXTwitter size={15} />
              </a>
            </div>

            {/* map */}
            <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
              <iframe
                title="LPU Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.5!2d75.7!3d31.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* right — form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-black dark:text-white">Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm text-black outline-none placeholder:text-zinc-400 focus:border-zinc-600 dark:border-zinc-700 dark:text-white dark:focus:border-zinc-400"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-black dark:text-white">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm text-black outline-none placeholder:text-zinc-400 focus:border-zinc-600 dark:border-zinc-700 dark:text-white dark:focus:border-zinc-400"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-black dark:text-white">Subject</label>
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm text-black outline-none placeholder:text-zinc-400 focus:border-zinc-600 dark:border-zinc-700 dark:text-white dark:focus:border-zinc-400"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-black dark:text-white">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={5}
                className="w-full border-b border-zinc-300 bg-transparent py-2 text-sm text-black outline-none placeholder:text-zinc-400 focus:border-zinc-600 dark:border-zinc-700 dark:text-white dark:focus:border-zinc-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
            >
              <FiSend size={14} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
