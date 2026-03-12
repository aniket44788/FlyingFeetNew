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
} from "react-icons/fa";
import { MdPhoneInTalk } from "react-icons/md";
import logo from "./assets/logo.jpeg";

import { EMAIL_CONFIG } from "../utils/emailConfig";

function About() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    // Phone validation
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        tour: "Contact Form Submission",
        to_email: "holidaysflyingfeet@gmail.com",
      };

      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY,
      );

      console.log("Email Sent Successfully:", response);
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } catch (error) {
      console.error("EmailJS Error Details:", {
        error,
        message: error.message,
        text: error.text,
        status: error.status
      });
      
      setSubmitStatus('error');
      
      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Flying Feet Holidays" className="h-24 w-24 rounded-full border-4 border-white shadow-xl" />
          </div>
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Get In Touch With Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We're here to help you plan your perfect Himalayan adventure. 
            Reach out to us anytime!
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        {/* CONTACT FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <h2 className="text-3xl font-bold mb-2 text-indigo-600">Send Us A Message</h2>
          <p className="text-gray-600 mb-8">We'll get back to you within 24 hours</p>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3 text-green-700 animate-slide-down">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span>✅ Message sent successfully! We'll contact you soon.</span>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 animate-slide-down">
              ❌ Failed to send message. Please try again or contact us directly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name *"
                required
                className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all ${
                  errors.name ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address *"
                required
                className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number (10 digits) *"
                required
                className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all ${
                  errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
              )}
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message (minimum 10 characters) *"
                rows="5"
                required
                className={`w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition-all resize-none ${
                  errors.message ? 'border-red-500 bg-red-50' : 'border-gray-300'
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Sending...
                </>
              ) : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* CONTACT INFORMATION */}
        <div className="space-y-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 text-indigo-600">Contact Information</h3>
            
            {/* Phone */}
            <div className="flex items-start gap-4 mb-6 group hover:bg-indigo-50 p-4 rounded-xl transition-all duration-300">
              <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200 transition-all">
                <FaPhoneAlt className="text-indigo-600 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Call Us Anytime</p>
                <a 
                  href="tel:+918351846490" 
                  className="text-indigo-600 font-semibold text-lg hover:text-indigo-800 transition-colors"
                >
                  +91 83518 46490
                </a>
                <p className="text-xs text-gray-400 mt-1">24/7 Available</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 mb-6 group hover:bg-indigo-50 p-4 rounded-xl transition-all duration-300">
              <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200 transition-all">
                <FaEnvelope className="text-indigo-600 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Email Us</p>
                <a 
                  href="mailto:holidaysflyingfeet@gmail.com" 
                  className="text-indigo-600 font-semibold text-lg hover:text-indigo-800 transition-colors break-all"
                >
                  holidaysflyingfeet@gmail.com
                </a>
                <p className="text-xs text-gray-400 mt-1">We reply within 24 hours</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 group hover:bg-indigo-50 p-4 rounded-xl transition-all duration-300">
              <div className="bg-indigo-100 p-3 rounded-lg group-hover:bg-indigo-200 transition-all">
                <FaMapMarkerAlt className="text-indigo-600 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Visit Us</p>
                <p className="text-gray-700 font-medium">
                  Mcleodganj, Front of Dalai Lama Temple<br />
                  Kangra, Himachal Pradesh 176215
                </p>
                <p className="text-xs text-gray-400 mt-1">Main Branch</p>
              </div>
            </div>
          </div>

          {/* Business Hours Card */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-indigo-600">Business Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="font-semibold text-indigo-600">9:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-gray-600">Saturday</span>
                <span className="font-semibold text-indigo-600">10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Sunday</span>
                <span className="font-semibold text-indigo-600">10:00 AM - 4:00 PM</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-bold mb-4 text-indigo-600">Connect With Us</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-indigo-100 p-4 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-indigo-600 text-xl group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="bg-indigo-100 p-4 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-indigo-600 text-xl group-hover:text-white" />
              </a>
              <a 
                href="#" 
                className="bg-indigo-100 p-4 rounded-full hover:bg-indigo-600 hover:text-white transition-all duration-300 group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-indigo-600 text-xl group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default About;