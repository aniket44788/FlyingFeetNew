import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const SERVICE_ID = "service_a74zlnf";
const TEMPLATE_ID = "template_qe2jgen";
const PUBLIC_KEY = "aG1J-USjBV4O6JSSb";

function About() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.length < 2)
      newErrors.name = "Name must be at least 2 characters";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    const phoneRegex = /^\d{10}$/;
    if (
      !formData.phone.trim() ||
      !phoneRegex.test(formData.phone.replace(/\D/g, ""))
    )
      newErrors.phone = "Please enter a valid 10-digit phone number";
    if (!formData.message.trim() || formData.message.length < 10)
      newErrors.message = "Message must be at least 10 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting || !validateForm()) return;
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          ...formData,
          tour: "Contact Form Submission",
          to_email: "holidaysflyingfeet@gmail.com",
        },
        PUBLIC_KEY,
      );
      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">
      {/* HERO SECTION */}
      <section className="relative w-full overflow-hidden min-h-[55vh] flex items-center">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80"
          alt="Himalayan peaks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/30">
            <span className="text-white text-4xl">✈️</span>
          </div>

          <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">
            Flying Feet Holidays
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">
            Get In <span className="text-orange-500">Touch</span> With Us
          </h1>
          <p className="text-white/80 max-w-2xl mx-auto text-base sm:text-lg">
            We're here to help you plan your perfect Himalayan adventure. Reach
            out anytime — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* CONTACT FORM */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
            <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-2">
              SEND A MESSAGE
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              We'd Love to Hear From You
            </h2>
            <p className="text-gray-600 mb-8">
              We'll get back to you within 24 hours.
            </p>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-2xl flex items-center gap-3">
                <FaCheckCircle className="text-xl" />
                Message sent successfully! We'll contact you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-2xl">
                ❌ Failed to send message. Please try again or contact us
                directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-2xl focus:outline-none focus:border-orange-500 transition-all ${errors.name ? "border-red-500" : "border-gray-200"}`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-2xl focus:outline-none focus:border-orange-500 transition-all ${errors.email ? "border-red-500" : "border-gray-200"}`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 border rounded-2xl focus:outline-none focus:border-orange-500 transition-all ${errors.phone ? "border-red-500" : "border-gray-200"}`}
                  placeholder="+91 XXXXXXXXXX"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-2xl focus:outline-none focus:border-orange-500 transition-all resize-y min-h-[120px] ${errors.message ? "border-red-500" : "border-gray-200"}`}
                  placeholder="Tell us about your travel plans..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 text-base"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN - CONTACT INFO */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
              <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-2">
                REACH US
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>

              {[
                {
                  Icon: FaPhoneAlt,
                  label: "Call Us Anytime",
                  value: "+91 83518 46490",
                  sub: "24/7 Available",
                  href: "tel:+918351846490",
                },
                {
                  Icon: FaEnvelope,
                  label: "Email Us",
                  value: "holidaysflyingfeet@gmail.com",
                  sub: "We reply within 24 hours",
                  href: "mailto:holidaysflyingfeet@gmail.com",
                },
                {
                  Icon: FaMapMarkerAlt,
                  label: "Visit Us",
                  value: "Mcleodganj, Front of Dalai Lama Temple",
                  sub: "Kangra, Himachal Pradesh 176215",
                  href: null,
                },
              ].map(({ Icon, label, value, sub, href }) => (
                <a
                  key={label}
                  href={href || "#"}
                  className="flex items-start gap-4 p-5 rounded-2xl mb-3 hover:bg-gray-50 transition-all group"
                >
                  <div className="w-11 h-11 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{label}</p>
                    <p className="font-semibold text-gray-900 text-[15px]">
                      {value}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{sub}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
              <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-2">
                WE'RE OPEN
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Business Hours
              </h3>
              <div className="space-y-4">
                {[
                  { day: "Monday – Sunday", time: "12:00 AM – 12:00 PM" }
                ].map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0"
                  >
                    <span className="text-gray-600 font-medium">{day}</span>
                    <span className="font-semibold text-orange-600">
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gray-100">
              <p className="text-orange-600 text-xs font-bold uppercase tracking-widest mb-2">
                FOLLOW ALONG
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-4">
                {[
                  { Icon: FaFacebook, bg: "#1877f2", label: "Facebook" },
                  {
                    Icon: FaInstagram,
                    bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                    label: "Instagram",
                  },
                  { Icon: FaYoutube, bg: "#ff0000", label: "YouTube" },
                  {
                    Icon: FaWhatsapp,
                    bg: "#25d366",
                    label: "WhatsApp",
                    href: "https://wa.me/918351846490",
                  },
                  { Icon: FaTwitter, bg: "#1da1f2", label: "Twitter" },
                ].map(({ Icon, bg, label, href }) => (
                  <a
                    key={label}
                    href={href || "#"}
                    target={href ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white hover:scale-110 transition-all shadow-md"
                    style={{ background: bg }}
                    aria-label={label}
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
