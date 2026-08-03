const routes = [
  { path: "/",              sitemap: { priority: "1.0", changefreq: "weekly" } },
  { path: "/vibe-test",    sitemap: { priority: "0.9", changefreq: "monthly" } },
  { path: "/introvert-extrovert-test",  sitemap: { priority: "0.9", changefreq: "monthly" } },
  { path: "/team",          sitemap: { priority: "0.8", changefreq: "monthly" } },
  { path: "/contact",       sitemap: { priority: "0.7", changefreq: "monthly" } },
  { path: "/privacy",       sitemap: { priority: "0.3", changefreq: "yearly" } },
  { path: "/terms",         sitemap: { priority: "0.3", changefreq: "yearly" } },
  { path: "/delete-account",  sitemap: { priority: "0.3", changefreq: "yearly" } },
  { path: "/manage-data",     sitemap: { priority: "0.3", changefreq: "yearly" } },
  { path: "/support",         sitemap: { priority: "0.6", changefreq: "monthly" } },
  { path: "/resume/himanshu", sitemap: false },
  { path: "/resume/vaibhav",  sitemap: false },
  { path: "/flyer/:partyid",  sitemap: false },
];

export default routes;
