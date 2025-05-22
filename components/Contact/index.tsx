"use client";

import { useState } from "react";

type ContactInfo = {
  icon: string;
  title: string;
  value: string;
};

const contactInfo: ContactInfo[] = [
  {
    icon: "bi bi-geo-alt",
    title: "Location",
    value: "A108 Adam Street, New York, NY 535022",
  },
  {
    icon: "bi bi-envelope",
    title: "Email",
    value: "info@example.com",
  },
  {
    icon: "bi bi-phone",
    title: "Call",
    value: "+1 5589 55488 55",
  },
];

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-8" data-aos="fade-up">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="flex items-start gap-4"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full">
                  <i className={`${info.icon} text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{info.title}</h3>
                  <p className="text-secondary">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
                placeholder="Subject"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary h-32 resize-none"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
