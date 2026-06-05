import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";

const EMAIL_CONFIG = {
  SERVICE_ID: "service_wrif919",
  TEMPLATE_ID: "template_hy3cy8d",
  PUBLIC_KEY: "GwTM7Gy-N7kgmfsnV",
};

export default function EnquiryPage() {
  const [searchParams] = useSearchParams();

  const packageName = searchParams.get("package") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: packageName,
    travelDate: "",
    travelers: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          destination: formData.destination,
          travel_date: formData.travelDate,
          travelers: formData.travelers,
          message: formData.message,
        },
        EMAIL_CONFIG.PUBLIC_KEY
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: packageName,
        travelDate: "",
        travelers: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      alert("Failed to send enquiry.");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-[#0f1b2d] py-16 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-white">
            Travel <span className="text-red-500">Enquiry</span>
          </h1>

          <p className="text-gray-300 mt-3">
            Fill in your details and our travel expert will contact you shortly.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">

          {success && (
            <div className="bg-green-100 border border-green-300 text-green-700 p-4 rounded-lg mb-6">
              Enquiry submitted successfully. Our team will contact you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Phone */}
            <input
              type="tel"
              name="phone"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Package */}
            <input
              type="text"
              name="destination"
              placeholder="Tour Package"
              value={formData.destination}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-4 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            <div className="grid md:grid-cols-2 gap-4">

              {/* Travel Date */}
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />

              {/* Travelers */}
              <input
                type="number"
                name="travelers"
                placeholder="No. of Travelers"
                value={formData.travelers}
                onChange={handleChange}
                required
                min="1"
                className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
              />

            </div>

            {/* Message */}
            <textarea
              rows="5"
              name="message"
              placeholder="Tell us about your trip requirements..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
            />

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-4 rounded-xl transition duration-300"
            >
              {loading ? "Sending Enquiry..." : "Submit Enquiry"}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}