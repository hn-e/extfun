import { Helmet } from "react-helmet-async";

const BASE_URL = "https://extroverts.app";

const SEO = ({ title, description, path = "", ogImage }) => {
  const url = `${BASE_URL}${path}`;
  const image = ogImage || "/img/logo.png";
  const pageTitle = title || "Extroverts — Discover Parties, Meet People, Go Out";
  const pageDescription =
    description ||
    "Find spontaneous parties, meet like-minded people, and make every night an adventure. Available on App Store and Play Store.";

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
