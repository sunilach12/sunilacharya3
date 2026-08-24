"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

export default function Contact() {
  const [contactType, setContactType] = useState<"individual" | "company">("individual");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    companyWebsite: "",
    subject: "",
    message: "",
  });
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"form" | "verify">("form");
  const [status, setStatus] = useState<
    "idle" | "sending-code" | "code-sent" | "verifying" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Step 1: send the verification code to whatever email they typed
  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending-code");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact/send-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, contactType }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to send code");

      setStatus("code-sent");
      setStep("verify");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  // Step 2: verify the code they entered
  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("verifying");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, code }),
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Invalid code");

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        companyWebsite: "",
        subject: "",
        message: "",
      });
      setContactType("individual");
      setCode("");
      setStep("form");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 font-semibold tracking-widest">CONTACT</p>
          <h2 className="text-5xl font-bold mt-4">Let's Work Together</h2>
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Have a project, collaboration, or just want to connect?
            Feel free to send me a message.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mt-20">
          {/* Left */}
          <GlassCard className="p-10">
            <h3 className="text-3xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-center gap-5">
                <div className="rounded-full bg-cyan-500/20 p-4">
                  <Mail className="text-cyan-400" size={26} />
                </div>
                <div>
                  <p className="text-gray-400">Email</p>
                  <h4 className="font-semibold">sunilacharya338@gmail.com</h4>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="rounded-full bg-cyan-500/20 p-4">
                  <Phone className="text-cyan-400" size={26} />
                </div>
                <div>
                  <p className="text-gray-400">Phone</p>
                  <h4 className="font-semibold">+977-98XXXXXXXX</h4>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="rounded-full bg-cyan-500/20 p-4">
                  <MapPin className="text-cyan-400" size={26} />
                </div>
                <div>
                  <p className="text-gray-400">Location</p>
                  <h4 className="font-semibold">Nepal</h4>
                </div>
              </div>
            </div>

            <div className="flex gap-6 mt-12">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-cyan-400 transition">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-cyan-400 transition">
                <FaLinkedin />
              </a>
              <a href="https://www.facebook.com/Sunil20621212/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-cyan-400 transition">
                <FaFacebook />
              </a>
            </div>
          </GlassCard>

          {/* Right */}
          <GlassCard className="p-10">
            {step === "form" && (
              <form className="space-y-6" onSubmit={handleSendCode}>
                {/* Individual / Company toggle */}
                <div className="flex rounded-xl border border-white/10 bg-white/5 p-1">
                  <button
                    type="button"
                    onClick={() => setContactType("individual")}
                    className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                      contactType === "individual"
                        ? "bg-cyan-500 text-black"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Individual
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactType("company")}
                    className={`flex-1 rounded-lg py-2.5 text-sm font-semibold transition-colors ${
                      contactType === "company"
                        ? "bg-cyan-500 text-black"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    Company
                  </button>
                </div>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number (optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
                />

                {contactType === "company" && (
                  <>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
                    />
                    <input
                      type="text"
                      name="companyWebsite"
                      placeholder="Company Website (e.g. https://company.com)"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
                    />
                  </>
                )}

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
                />
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400"
                />

                <motion.button
                  type="submit"
                  disabled={status === "sending-code"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={18} />
                  {status === "sending-code" ? "Sending code..." : "Send Message"}
                </motion.button>

                {status === "error" && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}
              </form>
            )}

            {step === "verify" && (
              <form className="space-y-6" onSubmit={handleVerifyCode}>
                <p className="text-gray-300">
                  We sent a 6-digit code to <strong>{formData.email}</strong>.
                  Enter it below to send your message.
                </p>

                <input
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  placeholder="Enter 6-digit code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none focus:border-cyan-400 tracking-widest text-center text-xl"
                />

                <motion.button
                  type="submit"
                  disabled={status === "verifying"}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "verifying" ? "Verifying..." : "Verify & Send"}
                </motion.button>

                <button
                  type="button"
                  onClick={() => {
                    setStep("form");
                    setStatus("idle");
                    setErrorMsg("");
                  }}
                  className="text-sm text-gray-400 hover:text-cyan-400 underline"
                >
                  Use a different email
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}
              </form>
            )}

            {status === "success" && (
              <p className="text-emerald-400 text-sm mt-4">
                ✓ Verified and sent! Thanks for reaching out.
              </p>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
