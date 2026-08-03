import { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiMail, FiTrash2, FiDatabase, FiShield, FiFileText, FiSmartphone, FiHelpCircle, FiClock } from "react-icons/fi";
import SEO from "./SEO";

const SUPPORT_EMAIL = "himanshu@extroverts.app";

const faqs = [
  {
    q: "How do I delete my account?",
    a: (
      <>
        Head over to our{" "}
        <Link to="/delete-account" className="text-violet-400 underline hover:text-violet-300">
          account deletion page
        </Link>
        , fill in your email and username, and submit the form. We'll process your request
        within 2–4 business days and confirm via email.
      </>
    ),
  },
  {
    q: "Can I delete specific data without deleting my account?",
    a: (
      <>
        Yes. Use our{" "}
        <Link to="/manage-data" className="text-violet-400 underline hover:text-violet-300">
          data management page
        </Link>{" "}
        to select which data you'd like removed — activity history, location data,
        uploaded media, and more.
      </>
    ),
  },
  {
    q: "How long does data deletion take?",
    a: "Most requests are processed within 2–4 business days. You'll receive a confirmation email once it's done.",
  },
  {
    q: "What data does Extroverts collect?",
    a: (
      <>
        We collect only what's necessary to help you discover and join parties —
        your profile info, event activity, and optional location data. Read the
        full breakdown in our{" "}
        <Link to="/privacy" className="text-violet-400 underline hover:text-violet-300">
          privacy policy
        </Link>
        .
      </>
    ),
  },
  {
    q: "I found a bug or have a feature request. Where do I send it?",
    a: `Email us at ${SUPPORT_EMAIL} with the details. Screenshots and steps to reproduce help us fix things faster.`,
  },
  {
    q: "Is Extroverts available on both iOS and Android?",
    a: "Yes! Download from the App Store or Google Play Store. Links are at the bottom of this page.",
  },
  {
    q: "I'm a venue or event organizer. Can I partner with Extroverts?",
    a: `Absolutely. Reach out at ${SUPPORT_EMAIL} with details about your venue or events, and we'll get back to you within 48 hours.`,
  },
  {
    q: "How do I report a user or inappropriate content?",
    a: "You can report users directly within the app, or email us at the address below with their username and a description of the issue.",
  },
];

const quickLinks = [
  {
    icon: <FiTrash2 className="text-xl" />,
    title: "Delete account",
    desc: "Permanently remove your account and all associated data.",
    to: "/delete-account",
    color: "from-rose-500/20 to-pink-500/10 border-rose-500/20 hover:border-rose-500/40",
  },
  {
    icon: <FiDatabase className="text-xl" />,
    title: "Manage data",
    desc: "Request deletion of specific data while keeping your account.",
    to: "/manage-data",
    color: "from-amber-500/20 to-yellow-500/10 border-amber-500/20 hover:border-amber-500/40",
  },
  {
    icon: <FiShield className="text-xl" />,
    title: "Privacy policy",
    desc: "How we collect, use, and protect your information.",
    to: "/privacy",
    color: "from-blue-500/20 to-cyan-500/10 border-blue-500/20 hover:border-blue-500/40",
  },
  {
    icon: <FiFileText className="text-xl" />,
    title: "Terms & conditions",
    desc: "The rules and guidelines for using Extroverts.",
    to: "/terms",
    color: "from-violet-500/20 to-purple-500/10 border-violet-500/20 hover:border-violet-500/40",
  },
];

const Support = () => {
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      <SEO
        title="Support — Extroverts"
        description="Need help with Extroverts? Find answers to common questions, manage your data, delete your account, or get in touch with us."
        path="/support"
      />

      <div className="min-h-screen bg-black">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
          {/* Back link */}
          <Link
            to="/"
            className="mb-10 inline-block text-sm text-white/40 transition-colors hover:text-white/80"
          >
            &larr; Back
          </Link>

          {/* Hero */}
          <div className="mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5">
              <FiHelpCircle className="text-violet-400" />
              <span className="font-general text-xs uppercase tracking-wider text-white/50">
                Help Center
              </span>
            </div>
            <h1 className="font-general text-4xl font-black uppercase tracking-wider sm:text-5xl">
              How can we
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
                help you?
              </span>
            </h1>
            <p className="mt-4 max-w-xl font-robert-regular leading-relaxed text-white/40">
              Everything you need to manage your account, understand your data,
              and get in touch with us — all in one place.
            </p>
          </div>

          {/* Quick Links */}
          <section className="mb-16">
            <h2 className="mb-6 font-general text-sm uppercase tracking-widest text-white/30">
              Quick actions
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {quickLinks.map((link, i) => (
                <Link
                  key={i}
                  to={link.to}
                  className={`group relative overflow-hidden rounded-xl border bg-gradient-to-br ${link.color} p-5 transition-all duration-300`}
                >
                  <span className="text-white/80 transition-colors group-hover:text-white">
                    {link.icon}
                  </span>
                  <h3 className="mt-3 font-general text-sm font-semibold text-white">
                    {link.title}
                  </h3>
                  <p className="mt-1 font-robert-regular text-xs leading-relaxed text-white/40">
                    {link.desc}
                  </p>
                  <span className="mt-3 inline-block font-general text-xs font-semibold uppercase tracking-wider text-violet-400 transition-colors group-hover:text-violet-300">
                    Go &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="mb-6 font-general text-sm uppercase tracking-widest text-white/30">
              Frequently asked questions
            </h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02]"
                >
                  <button
                    onClick={() => toggleFaq(i)}
                    className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-white/[0.03]"
                  >
                    <span className="pr-4 font-general text-sm font-semibold text-white/80">
                      {faq.q}
                    </span>
                    <FiChevronDown
                      className={`flex-shrink-0 text-white/40 transition-transform duration-300 ${openFaqs[i] ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaqs[i] ? "max-h-96 pb-5" : "max-h-0"}`}
                  >
                    <p className="px-5 font-robert-regular text-sm leading-relaxed text-white/45">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="mb-16">
            <h2 className="mb-6 font-general text-sm uppercase tracking-widest text-white/30">
              Still need help?
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                <FiMail className="text-xl text-violet-400" />
                <h3 className="mt-3 font-general text-sm font-semibold text-white">
                  Email us
                </h3>
                <p className="mt-1 font-robert-regular text-sm text-white/40">
                  Drop us a line and we'll get back to you within 24 hours.
                </p>
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="mt-4 inline-block font-general text-sm font-semibold text-violet-400 underline transition-colors hover:text-violet-300"
                >
                  {SUPPORT_EMAIL}
                </a>
              </div>
              <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
                <FiClock className="text-xl text-amber-400" />
                <h3 className="mt-3 font-general text-sm font-semibold text-white">
                  Response time
                </h3>
                <p className="mt-1 font-robert-regular text-sm text-white/40">
                  Most inquiries get a reply within 24 hours. Data and account
                  deletion requests are processed in 2–4 business days.
                </p>
              </div>
            </div>
          </section>

          {/* App Store Links */}
          <section className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <FiSmartphone className="text-2xl text-violet-400" />
              <div>
                <h3 className="font-general text-sm font-semibold text-white">
                  Get the app
                </h3>
                <p className="font-robert-regular text-xs text-white/40">
                  Available on App Store and Google Play Store
                </p>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-general text-xs font-semibold uppercase tracking-wider text-black transition-opacity hover:opacity-80"
              >
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-5 py-2.5 font-general text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/[0.08]"
              >
                Google Play
              </a>
            </div>
          </section>

          {/* Footer note */}
          <p className="mt-12 text-center font-robert-regular text-xs text-white/20">
            Extroverts &copy; {new Date().getFullYear()} &mdash; Discover parties, meet people, go out.
          </p>
        </div>
      </div>
    </>
  );
};

export default Support;
