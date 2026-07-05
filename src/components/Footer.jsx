import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-screen bg-black py-6 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm font-light text-white/40 md:text-left">
          &copy; Extroverts {currentYear}. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 md:justify-start">
          {footerLinks.map((link, index) =>
            link.to ? (
              <Link
                key={index}
                to={link.to}
                className="text-sm font-light text-white/60 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={index}
                href={link.href}
                className="text-sm font-light text-white/60 transition-colors duration-300 hover:text-white"
              >
                {link.label}
              </a>
            ),
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
