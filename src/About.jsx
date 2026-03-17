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
import { EMAIL_CONFIG } from "../utils/emailConfig";

/* ── Theme tokens (matches Footer + Tours) ── */
const T = {
  navy: "#0a1028",
  navyLight: "#0f1c35",
  navyCard: "#111827",
  red: "#e53e3e",
  redHover: "#c53030",
  text: "#e2e8f0",
  muted: "#94a3b8",
  border: "rgba(255,255,255,0.08)",
};

function About() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
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
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.replace(/\D/g, "")))
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
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        { ...formData, tour: "Contact Form Submission", to_email: "holidaysflyingfeet@gmail.com" },
        EMAIL_CONFIG.PUBLIC_KEY
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

  /* Reusable field style */
  const inputStyle = (hasError) => ({
    width: "100%",
    padding: "12px 16px",
    borderRadius: "12px",
    border: `1px solid ${hasError ? T.red : T.border}`,
    background: "rgba(255,255,255,0.05)",
    color: T.text,
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  });

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", background: T.navy, color: T.text, minHeight: "100vh" }}>

      {/* ══ HERO ══ */}
      <section className="relative w-full overflow-hidden" style={{ minHeight: "55vh" }}>
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600&q=80"
          alt="Himalayan peaks"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(10,16,40,0.55) 0%, rgba(10,16,40,0.85) 70%, rgba(10,16,40,1) 100%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 py-28">
          {/* Logo circle */}
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-2xl"
            style={{ background: T.red, border: "3px solid rgba(255,255,255,0.2)" }}
          >
            <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
              <path d="M8 22 L20 10 L32 22 L26 22 L26 30 L22 30 L22 25 L18 25 L18 30 L14 30 L14 22 Z" fill="white" opacity="0.9"/>
            </svg>
          </div>

          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-3" style={{ color: T.red }}>
            Flying Feet Holidays
          </p>
          <h1
            className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}
          >
            Get In <span style={{ color: T.red }}>Touch</span> With Us
          </h1>
          <p className="text-base max-w-xl" style={{ color: T.muted }}>
            We're here to help you plan your perfect Himalayan adventure. Reach out anytime — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ══ MAIN CONTENT ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* ── CONTACT FORM ── */}
          <div
            className="rounded-3xl p-8 sm:p-10"
            style={{
              background: T.navyLight,
              border: `1px solid ${T.border}`,
              boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
            }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: T.red }}>
              Send a Message
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">We'd Love to Hear From You</h2>
            <p className="text-sm mb-8" style={{ color: T.muted }}>We'll get back to you within 24 hours.</p>

            {/* Status banners */}
            {submitStatus === "success" && (
              <div
                className="mb-6 p-4 rounded-xl flex items-center gap-3 text-sm font-medium"
                style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", color: "#6ee7b7" }}
              >
                <FaCheckCircle />
                Message sent successfully! We'll contact you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div
                className="mb-6 p-4 rounded-xl text-sm font-medium"
                style={{ background: "rgba(229,62,62,0.12)", border: `1px solid rgba(229,62,62,0.3)`, color: "#fca5a5" }}
              >
                ❌ Failed to send. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide mb-1" style={{ color: T.muted }}>
                  Full Name *
                </label>
                <input
                  type="text" name="name" value={formData.name} onChange={handleChange}
                  placeholder="Your full name" required
                  style={inputStyle(!!errors.name)}
                  onFocus={(e) => (e.target.style.borderColor = T.red)}
                  onBlur={(e) => (e.target.style.borderColor = errors.name ? T.red : T.border)}
                />
                {errors.name && <p className="mt-1 text-xs" style={{ color: T.red }}>{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide mb-1" style={{ color: T.muted }}>
                  Email Address *
                </label>
                <input
                  type="email" name="email" value={formData.email} onChange={handleChange}
                  placeholder="you@example.com" required
                  style={inputStyle(!!errors.email)}
                  onFocus={(e) => (e.target.style.borderColor = T.red)}
                  onBlur={(e) => (e.target.style.borderColor = errors.email ? T.red : T.border)}
                />
                {errors.email && <p className="mt-1 text-xs" style={{ color: T.red }}>{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide mb-1" style={{ color: T.muted }}>
                  Phone Number *
                </label>
                <input
                  type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  placeholder="+91 XXXXX XXXXX" required
                  style={inputStyle(!!errors.phone)}
                  onFocus={(e) => (e.target.style.borderColor = T.red)}
                  onBlur={(e) => (e.target.style.borderColor = errors.phone ? T.red : T.border)}
                />
                {errors.phone && <p className="mt-1 text-xs" style={{ color: T.red }}>{errors.phone}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide mb-1" style={{ color: T.muted }}>
                  Message *
                </label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange}
                  placeholder="Tell us about your travel plans…" rows={5} required
                  style={{ ...inputStyle(!!errors.message), resize: "none" }}
                  onFocus={(e) => (e.target.style.borderColor = T.red)}
                  onBlur={(e) => (e.target.style.borderColor = errors.message ? T.red : T.border)}
                />
                {errors.message && <p className="mt-1 text-xs" style={{ color: T.red }}>{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ background: T.red }}
                onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.background = T.redHover)}
                onMouseLeave={(e) => (e.currentTarget.style.background = T.red)}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <div className="space-y-6">

            {/* Contact Info Card */}
            <div
              className="rounded-3xl p-8"
              style={{ background: T.navyLight, border: `1px solid ${T.border}`, boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: T.red }}>Reach Us</p>
              <h3 className="text-xl font-extrabold text-white mb-6">Contact Information</h3>

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
                <div
                  key={label}
                  className="flex items-start gap-4 p-4 rounded-2xl mb-2 transition-all duration-300 group"
                  style={{ border: `1px solid transparent` }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(229,62,62,0.08)"; e.currentTarget.style.borderColor = "rgba(229,62,62,0.2)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "transparent"; }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(229,62,62,0.15)" }}
                  >
                    <Icon style={{ color: T.red, fontSize: "18px" }} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-1" style={{ color: T.muted }}>{label}</p>
                    {href ? (
                      <a href={href} className="font-bold text-white hover:opacity-80 transition-opacity break-all">
                        {value}
                      </a>
                    ) : (
                      <p className="font-bold text-white">{value}</p>
                    )}
                    <p className="text-xs mt-0.5" style={{ color: T.muted }}>{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours */}
            <div
              className="rounded-3xl p-8"
              style={{ background: T.navyLight, border: `1px solid ${T.border}`, boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: T.red }}>We're Open</p>
              <h3 className="text-xl font-extrabold text-white mb-5">Business Hours</h3>
              <div className="space-y-3">
                {[
                  { day: "Monday – Friday", time: "9:00 AM – 8:00 PM" },
                  { day: "Saturday", time: "10:00 AM – 6:00 PM" },
                  { day: "Sunday", time: "10:00 AM – 4:00 PM" },
                ].map(({ day, time }) => (
                  <div
                    key={day}
                    className="flex justify-between items-center py-2"
                    style={{ borderBottom: `1px solid ${T.border}` }}
                  >
                    <span className="text-sm" style={{ color: T.muted }}>{day}</span>
                    <span className="text-sm font-bold" style={{ color: T.red }}>{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div
              className="rounded-3xl p-8"
              style={{ background: T.navyLight, border: `1px solid ${T.border}`, boxShadow: "0 8px 40px rgba(0,0,0,0.4)" }}
            >
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: T.red }}>Follow Along</p>
              <h3 className="text-xl font-extrabold text-white mb-5">Connect With Us</h3>
              <div className="flex gap-3 flex-wrap">
                {[
                  { Icon: FaFacebook, bg: "#1877f2", label: "Facebook" },
                  { Icon: FaInstagram, bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)", label: "Instagram" },
                  { Icon: FaYoutube, bg: "#ff0000", label: "YouTube" },
                  { Icon: FaWhatsapp, bg: "#25d366", label: "WhatsApp", href: "https://wa.me/918351846490" },
                  { Icon: FaTwitter, bg: "#1da1f2", label: "Twitter" },
                ].map(({ Icon, bg, label, href }) => (
                  <a
                    key={label}
                    href={href || "#"}
                    aria-label={label}
                    target={href ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    style={{ background: bg }}
                  >
                    <Icon style={{ color: "white", fontSize: "18px" }} />
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