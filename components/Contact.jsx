import React, { useState } from 'react';
import { Mail, Instagram, Facebook, Twitter, Youtube, Linkedin, Github } from 'lucide-react';
import { SiGithub, SiInstagram, SiLeetcode, SiLinkedin, SiX } from 'react-icons/si';
import { SlSocialTwitter } from 'react-icons/sl';

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: send to backend or EmailJS
  };

  return (
    <section
      id="contact"
      data-theme={theme ? 'light' : 'dark'}
      className="py-16 px-6 flex flex-col justify-center items-center min-h-screen"
      
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold"
          style={{ color: "var(--text-color)" }}
        >
          Contact Me
        </h2>
        <div
          className="mt-2 w-16 md:w-20 h-1 mx-auto rounded-full"
          style={{
            background: "linear-gradient(to right, var(--text-color), var(--text-secondary))"
          }}
        />
      </div>

      {/* Content Wrapper */}
      <div
        className="w-full max-w-6xl grid md:grid-cols-2 gap-12 p-10 rounded-xl shadow-lg"
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          boxShadow: "0 4px 12px var(--shadow)"
        }}
      >
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center gap-6 text-left">
          <h3 className="text-4xl font-bold mb-3"  style={{ color: "var(--text-color)" }}>
            Get in Touch
          </h3>
          <p style={{ color: "var(--text-color)" }}>
            I'd like to hear from you!
          </p>
          <p style={{ color: "var(--text-secondary)" }}>
            If you have any inquiries or just want to say Hi, please use the contact form.
          </p>

          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail style={{ color: "var(--text-color)" }} />
            <a
              href="mailto:yeolebhumika@gmail.com"
              className="hover:underline"
              style={{ color: "var(--text-color)" }}
            >
              yeolebhumika@gmail.com
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-xl">
            <a href="https://linkedin.com/in/bhumikayeole" target='blank' style={{ color: "var(--text-color)" }}>
              <SiLinkedin />
            </a>
            <a href="https://github.com/BhumikaYeole" target='blank' style={{ color: "var(--text-color)" }}>
              <SiGithub />
            </a>
            <a href="https://leetcode.com/u/Bhumika_Yeole/" target='blank' style={{ color: "var(--text-color)" }}>
              <SiLeetcode />
            </a>
            <a href = "https://x.com/bhumika06432939" target='blank' style={{ color: "var(--text-color)" }}>
              <SiX />
            </a>
            <a href="https://www.instagram.com/_bhumika_0512?igsh=MWQ0cXYxdHkzNzNwNQ==" target='blank' style={{ color: "var(--text-color)" }}>
              <SiInstagram />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            className="border p-3 col-span-1 outline-none"
            style={{
              borderColor: "var(--text-color)",
              background: "var(--bg-gradient)",
              color: "var(--text-secondary)"
            }}
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="border p-3 col-span-1 outline-none"
            style={{
              borderColor: "var(--text-color)",
              background: "var(--bg-gradient)",
              color: "var(--text-secondary)"
            }}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email *"
            className="border p-3 col-span-2 outline-none"
            style={{
              borderColor: "var(--text-color)",
              background: "var(--bg-gradient)",
              color: "var(--text-secondary)"
            }}
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows="5"
            className="border p-3 col-span-2 outline-none"
            style={{
              borderColor: "var(--text-color)",
              background: "var(--bg-gradient)",
              color: "var(--text-secondary)"
            }}
          />
          <button
            type="submit"
            className="col-span-2 px-6 py-3 rounded-md font-semibold self-end justify-self-end transition"
            style={{
              background: "var(--text-color)",
              color: "var(--nav-bg)"
            }}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
