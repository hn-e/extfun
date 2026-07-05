import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black px-6 py-16 text-white sm:px-12 md:px-24 lg:px-40">
      <Link
        to="/"
        className="mb-12 inline-block text-sm text-white/40 transition-colors hover:text-white/80"
      >
        &larr; Back
      </Link>

      <h1 className="font-general text-3xl font-bold uppercase tracking-wider sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-white/40">Last updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="mt-12 space-y-10 text-white/70">
        <section>
          <h2 className="mb-3 font-general text-lg font-semibold text-white">
            Information We Collect
          </h2>
          <p className="font-robert-regular leading-relaxed">
            When you use Extroverts, we collect information you provide directly
            — such as your name, phone number, profile photo, and event
            preferences. We also collect usage data like which events you view,
            join, or share, and technical information including device type and
            app version to improve your experience.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-general text-lg font-semibold text-white">
            How We Use Your Information
          </h2>
          <p className="font-robert-regular leading-relaxed">
            We use your data to connect you with events and people nearby,
            personalize your feed, send notifications about parties and invites,
            and improve the app. We never sell your personal information to
            third parties. Your data is used only to make Extroverts better for
            you.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-general text-lg font-semibold text-white">
            Location Data
          </h2>
          <p className="font-robert-regular leading-relaxed">
            Extroverts uses your location to show you events happening nearby
            and to help friends find you at parties. You can control location
            permissions at any time through your device settings. We only access
            your location when the app is in use and you have opted in.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-general text-lg font-semibold text-white">
            Data Sharing
          </h2>
          <p className="font-robert-regular leading-relaxed">
            Your profile and party activity are visible to other Extroverts
            users based on your privacy settings. We share anonymized, aggregate
            data with event organizers for analytical purposes. We disclose
            information only when required by law or to protect the safety of
            our users.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-general text-lg font-semibold text-white">
            Data Security
          </h2>
          <p className="font-robert-regular leading-relaxed">
            We use industry-standard encryption and security measures to protect
            your personal data. While no system is completely secure, we
            continuously monitor and update our practices to safeguard your
            information against unauthorized access.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-general text-lg font-semibold text-white">
            Your Rights
          </h2>
          <p className="font-robert-regular leading-relaxed">
            You can access, update, or delete your account and personal data at
            any time through the app settings. You may also request a copy of
            your data or ask us to delete it by contacting our support team. We
            will respond within 30 days.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-general text-lg font-semibold text-white">
            Contact Us
          </h2>
          <p className="font-robert-regular leading-relaxed">
            If you have questions about this Privacy Policy, reach out to us at{" "}
            <a
              href="mailto:privacy@extroverts.app"
              className="text-white/90 underline transition-colors hover:text-white"
            >
              privacy@extroverts.app
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
