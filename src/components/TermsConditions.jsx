import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-black px-6 py-16 text-white sm:px-12 md:px-24 lg:px-40">
      <Link
        to="/"
        className="mb-12 inline-block text-sm text-white/40 transition-colors hover:text-white/80"
      >
        &larr; Back
      </Link>

      <h1 className="font-general text-3xl font-bold uppercase tracking-wider sm:text-4xl">
        Terms &amp; Conditions
      </h1>
      <p className="mt-2 text-sm text-white/40">Last updated {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>

      <div className="mt-12 space-y-10 text-white/70">
        <section>
          <h2 className="mb-3 font-general text-lg font-semibold text-white">
            Acceptance of Terms
          </h2>
          <p className="font-robert-regular leading-relaxed">
            By downloading, installing, or using Extroverts, you agree to these
            Terms and Conditions. If you do not agree, please do not use the
            app. We may update these terms from time to time, and continued use
            of the app after changes constitutes acceptance of the updated
            terms.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-general text-lg font-semibold text-white">
            Eligibility
          </h2>
          <p className="font-robert-regular leading-relaxed">
            You must be at least 18 years old to use Extroverts. By using the
            app, you represent and warrant that you meet this age requirement.
            Extroverts is designed for adults to discover and attend real-world
            social events safely and responsibly.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-general text-lg font-semibold text-white">
            User Conduct
          </h2>
          <p className="font-robert-regular leading-relaxed">
            You agree to use Extroverts respectfully and lawfully. Harassment,
            hate speech, impersonation, spamming, or any behavior that makes
            other users feel unsafe is strictly prohibited. Extroverts reserves
            the right to suspend or terminate accounts that violate these
            standards, without prior notice.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-general text-lg font-semibold text-white">
            Events &amp; Meetups
          </h2>
          <p className="font-robert-regular leading-relaxed">
            Extroverts connects users with events hosted by third-party
            organizers. We do not own, operate, or control any events listed on
            the platform. Attendance is at your own risk. We encourage users to
            exercise caution, follow local laws, and look out for one another
            when attending in-person gatherings.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-general text-lg font-semibold text-white">
            Intellectual Property
          </h2>
          <p className="font-robert-regular leading-relaxed">
            All content, trademarks, logos, and intellectual property within the
            Extroverts app and website are owned by Extroverts or its
            licensors. You may not copy, modify, distribute, or create
            derivative works without our prior written consent.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-general text-lg font-semibold text-white">
            Limitation of Liability
          </h2>
          <p className="font-robert-regular leading-relaxed">
            Extroverts is provided &ldquo;as is&rdquo; without warranties of any
            kind. We are not liable for any damages arising from your use of the
            app, including but not limited to personal injury, property damage,
            or emotional distress resulting from attending events discovered
            through our platform. Use the app at your own discretion.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-general text-lg font-semibold text-white">
            Termination
          </h2>
          <p className="font-robert-regular leading-relaxed">
            You may stop using Extroverts at any time. We may suspend or
            terminate your access to the app if we believe you have violated
            these terms or engaged in harmful conduct. Upon termination, your
            right to use the app ceases immediately.
          </p>
        </section>

        <section>
          <h2 className="mb-3 font-general text-lg font-semibold text-white">
            Contact Us
          </h2>
          <p className="font-robert-regular leading-relaxed">
            For questions about these terms, contact us at{" "}
            <a
              href="mailto:legal@extroverts.app"
              className="text-white/90 underline transition-colors hover:text-white"
            >
              legal@extroverts.app
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsConditions;
