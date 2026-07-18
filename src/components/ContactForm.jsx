import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Us — Extroverts"
        description="Get in touch with the Extroverts team. Party inquiries, partnership ideas, or just say hi. We read everything."
        path="/contact"
      />
      <div className="flex min-h-screen items-center justify-center bg-black px-6 py-16">
      <div className="w-full max-w-lg">
        <Link
          to="/"
          className="mb-10 inline-block text-sm text-white/40 transition-colors hover:text-white/80"
        >
          &larr; Back
        </Link>

        <h1 className="font-general text-3xl font-black uppercase tracking-wider sm:text-4xl">
          Get in
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
            touch
          </span>
        </h1>
        <p className="mt-3 font-robert-regular leading-relaxed text-white/40">
          Party inquiries, partnership ideas, or just want to say hi.
          We read everything. We reply to most things.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm">
            <p className="font-general text-xl font-semibold text-white">
              Message sent
            </p>
            <p className="mt-2 font-robert-regular text-sm text-white/40">
              We will get back to you as soon as we finish this round of
              karaoke.
            </p>
            <Link
              to="/"
              className="mt-6 inline-block text-sm text-violet-400 underline transition-colors hover:text-violet-300"
            >
              Back to home
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div>
              <label className="font-general text-xs uppercase tracking-wider text-white/40">
                Name
              </label>
              <input
                type="text"
                required
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 font-robert-regular text-white placeholder-white/20 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.06]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="font-general text-xs uppercase tracking-wider text-white/40">
                Email
              </label>
              <input
                type="email"
                required
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 font-robert-regular text-white placeholder-white/20 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.06]"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="font-general text-xs uppercase tracking-wider text-white/40">
                Message
              </label>
              <textarea
                rows={4}
                required
                className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 font-robert-regular text-white placeholder-white/20 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.06]"
                placeholder="Tell us something..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500 py-3 font-general text-sm uppercase tracking-widest text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30"
            >
              Send message
            </button>
          </form>
        )}
      </div>
      </div>
    </>
  );
};

export default ContactForm;
