export const siteConfig = {
  name: "Portfolio",
  description: "A premium software engineer portfolio.",
  url: "https://yourportfolio.com", // TODO: Update with real URL
  author: "Your Name",
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
  mainNav: [
    {
      title: "About",
      href: "#about",
    },
    {
      title: "Experience",
      href: "#experience",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Contact",
      href: "#contact",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
