import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="w-full py-10 text-center border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.author}. All rights reserved.
        </p>
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href={siteConfig.links.github} className="hover:text-primary transition-colors">
            GitHub
          </Link>
          <Link href={siteConfig.links.linkedin} className="hover:text-primary transition-colors">
            LinkedIn
          </Link>
          <Link href={siteConfig.links.twitter} className="hover:text-primary transition-colors">
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}
