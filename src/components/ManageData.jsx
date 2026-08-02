import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "./SEO";

const FORMSPREE_URL = "https://formspree.io/f/xaqrvzra";
const SUPPORT_EMAIL = "himanshu@extroverts.app";

const ManageData = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [dataTypes, setDataTypes] = useState([]);
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const toggleDataType = (type) => {
    setDataTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          username,
          dataTypes: dataTypes.join(", ") || "None selected",
          details,
          requestType: "data-management",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const dataOptions = [
    { value: "activity", label: "Activity history" },
    { value: "transactions", label: "Transaction history" },
    { value: "media", label: "Images & videos" },
    { value: "location", label: "Location data" },
  ];

  return (
    <>
      <SEO
        title="Manage My Data — Extroverts"
        description="Request deletion of specific data collected through the Extroverts app, without deleting your account."
        path="/manage-data"
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
            Manage your
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              data
            </span>
          </h1>
          <p className="mt-3 font-robert-regular leading-relaxed text-white/40">
            Request deletion of specific data without deleting your entire account.
            We'll process your request within{" "}
            <strong className="text-white/60">2–4 business days</strong>.
          </p>

          {submitted ? (
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-sm">
              <p className="font-general text-xl font-semibold text-white">
                Request received
              </p>
              <p className="mt-2 font-robert-regular text-sm text-white/40">
                We'll review your data management request and reply to{" "}
                <strong className="text-white/60">{email}</strong> within 2–4 business days.
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
                  Email <span className="text-pink-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  disabled={submitting}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 font-robert-regular text-white placeholder-white/20 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.06] disabled:opacity-50"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="font-general text-xs uppercase tracking-wider text-white/40">
                  Username <span className="text-pink-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={username}
                  disabled={submitting}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 font-robert-regular text-white placeholder-white/20 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.06] disabled:opacity-50"
                  placeholder="@username"
                />
              </div>

              <div>
                <label className="font-general text-xs uppercase tracking-wider text-white/40">
                  Data to delete <span className="text-pink-400">*</span>
                </label>
                <p className="mt-1 font-robert-regular text-xs text-white/30">
                  Select all that apply.
                </p>
                <div className="mt-3 space-y-2">
                  {dataOptions.map((opt) => (
                    <label
                      key={opt.value}
                      className="flex cursor-pointer items-center gap-3 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 transition-colors hover:border-white/20"
                    >
                      <input
                        type="checkbox"
                        checked={dataTypes.includes(opt.value)}
                        onChange={() => toggleDataType(opt.value)}
                        disabled={submitting}
                        className="h-4 w-4 rounded border-white/20 bg-white/10 text-violet-500 focus:ring-violet-500/30 disabled:opacity-50"
                      />
                      <span className="font-robert-regular text-sm text-white/70">
                        {opt.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-general text-xs uppercase tracking-wider text-white/40">
                  Additional details{" "}
                  <span className="text-white/20">(optional)</span>
                </label>
                <textarea
                  rows={3}
                  value={details}
                  disabled={submitting}
                  onChange={(e) => setDetails(e.target.value)}
                  className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 font-robert-regular text-white placeholder-white/20 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.06] disabled:opacity-50"
                  placeholder="Any specific dates, posts, or details that would help us..."
                />
              </div>

              {error && (
                <p className="rounded-lg border border-red-500/20 bg-red-500/[0.06] px-4 py-3 font-robert-regular text-sm text-red-400">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting || dataTypes.length === 0}
                className="w-full rounded-full bg-gradient-to-r from-violet-500 to-pink-500 py-3 font-general text-sm uppercase tracking-widest text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Submit request"}
              </button>
            </form>
          )}

          <p className="mt-6 text-center font-robert-regular text-xs text-white/25">
            Want to delete your entire account instead?{" "}
            <Link
              to="/delete-account"
              className="text-violet-400 underline transition-colors hover:text-violet-300"
            >
              Go here
            </Link>
          </p>

          <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
            <h3 className="font-general text-sm font-semibold text-white/70">
              What happens next?
            </h3>
            <ol className="mt-3 space-y-2 font-robert-regular text-sm text-white/35">
              <li className="flex gap-3">
                <span className="flex-shrink-0 font-semibold text-violet-400">1.</span>
                Submit your request and we'll receive it instantly.
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 font-semibold text-violet-400">2.</span>
                We'll verify your identity and process the deletion within{" "}
                <strong className="text-white/50">2–4 business days</strong>.
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 font-semibold text-violet-400">3.</span>
                Once done, we'll email you a confirmation. Your account stays active.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageData;
