import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";

const SUPPORT_EMAIL = "himanshu@extroverts.app";

const DeleteAccount = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Account Deletion Request — ${username || email}`;
    const body = [
      `Hi Extroverts team,`,
      ``,
      `I'd like to request deletion of my account. Here are my details:`,
      ``,
      `Email: ${email}`,
      `Username: ${username}`,
      reason ? `Reason: ${reason}` : "",
      ``,
      `Please process this at your earliest convenience.`,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <>
      <SEO
        title="Delete My Account — Extroverts"
        description="Request deletion of your Extroverts account. We'll process your request within 2–4 business days."
        path="/delete-account"
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
            Delete your
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              account
            </span>
          </h1>
          <p className="mt-3 font-robert-regular leading-relaxed text-white/40">
            We'll process your request within <strong className="text-white/60">2–4 business days</strong>{" "}
            and send you a confirmation once it's done. No tricks, no runarounds — just a clean goodbye.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <div>
              <label className="font-general text-xs uppercase tracking-wider text-white/40">
                Email <span className="text-pink-400">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 font-robert-regular text-white placeholder-white/20 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.06]"
                placeholder="you@email.com"
              />
              <p className="mt-1 font-robert-regular text-xs text-white/30">
                The email linked to your Extroverts account.
              </p>
            </div>

            <div>
              <label className="font-general text-xs uppercase tracking-wider text-white/40">
                Username <span className="text-pink-400">*</span>
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 font-robert-regular text-white placeholder-white/20 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.06]"
                placeholder="@username"
              />
            </div>

            <div>
              <label className="font-general text-xs uppercase tracking-wider text-white/40">
                Reason <span className="text-white/20">(optional)</span>
              </label>
              <textarea
                rows={3}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 font-robert-regular text-white placeholder-white/20 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.06]"
                placeholder="We'd love to know what we could do better..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500 py-3 font-general text-sm uppercase tracking-widest text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30"
            >
              Open email &amp; send request
            </button>
          </form>

          <p className="mt-6 text-center font-robert-regular text-xs text-white/25">
            Prefer to write us directly?{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="text-violet-400 underline transition-colors hover:text-violet-300"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>

          <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
            <h3 className="font-general text-sm font-semibold text-white/70">
              What happens next?
            </h3>
            <ol className="mt-3 space-y-2 font-robert-regular text-sm text-white/35">
              <li className="flex gap-3">
                <span className="flex-shrink-0 font-semibold text-violet-400">1.</span>
                Your email app opens with a pre-filled request — just hit <strong className="text-white/50">Send</strong>.
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 font-semibold text-violet-400">2.</span>
                We'll verify your request and process it within <strong className="text-white/50">2–4 business days</strong>.
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 font-semibold text-violet-400">3.</span>
                Once done, we'll reply to your email with a confirmation. That's it!
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteAccount;
