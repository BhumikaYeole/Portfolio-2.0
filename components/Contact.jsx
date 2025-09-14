import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { SiGithub, SiInstagram, SiLeetcode, SiLinkedin, SiX } from 'react-icons/si';

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
      className="py-23 sm:py-16 px-4 sm:px-6 md:px-10 flex flex-col justify-center items-center min-h-screen"
    >

      <div className="text-center mb-10 sm:mb-12">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold"
          style={{ color: "var(--text-color)" }}
        >
          Contact Me
        </h2>
        <div
          className="mt-2 w-14 sm:w-16 md:w-20 h-1 mx-auto rounded-full"
          style={{
            background: "linear-gradient(to right, var(--text-color), var(--text-secondary))"
          }}
        />
      </div>

      <div
        className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-6 sm:p-8 md:p-10 rounded-xl shadow-lg"
        style={{
          background: "var(--card-bg)",
          border: "1px solid var(--card-border)",
          boxShadow: "0 4px 12px var(--shadow)"
        }}
      >

        <div className="flex flex-col justify-center gap-4 sm:gap-6 text-left">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3" style={{ color: "var(--text-color)" }}>
            Get in Touch
          </h3>
          <p className="text-sm sm:text-base" style={{ color: "var(--text-color)" }}>
            I'd like to hear from you!
          </p>
          <p className="text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
            If you have any inquiries or just want to say Hi, please use the contact form.
          </p>

          <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
            <Mail style={{ color: "var(--text-color)" }} />
            <a
              href="mailto:yeolebhumika@gmail.com"
              className="hover:underline"
              style={{ color: "var(--text-color)" }}
            >
              yeolebhumika@gmail.com
            </a>
          </div>

          <div className="flex gap-3 sm:gap-4 mt-3 sm:mt-4 text-lg sm:text-xl flex-wrap">
            <a href="https://linkedin.com/in/bhumikayeole" target='blank' style={{ color: "var(--text-color)" }}>
              <SiLinkedin />
            </a>
            <a href="https://github.com/BhumikaYeole" target='blank' style={{ color: "var(--text-color)" }}>
              <SiGithub />
            </a>
            <a href="https://leetcode.com/u/Bhumika_Yeole/" target='blank' style={{ color: "var(--text-color)" }}>
              <SiLeetcode />
            </a>
            <a href="https://x.com/bhumika06432939" target='blank' style={{ color: "var(--text-color)" }}>
              <SiX />
            </a>
            <a href="https://www.instagram.com/_bhumika_0512?igsh=MWQ0cXYxdHkzNzNwNQ==" target='blank' style={{ color: "var(--text-color)" }}>
              <SiInstagram />
            </a>
          </div>
        </div>

        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            className="border p-3 rounded-md outline-none w-full"
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
            className="border p-3 rounded-md outline-none w-full"
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
            className="border p-3 rounded-md outline-none w-full sm:col-span-2"
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
            className="border p-3 rounded-md outline-none w-full sm:col-span-2"
            style={{
              borderColor: "var(--text-color)",
              background: "var(--bg-gradient)",
              color: "var(--text-secondary)"
            }}
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-md font-semibold transition w-full sm:w-auto sm:col-span-2 justify-self-end"
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
