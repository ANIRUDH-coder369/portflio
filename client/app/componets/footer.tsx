import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, MapPinIcon } from "./icons";
import { portfolioData } from "../data/portfolioData";

export default function Footer() {
  const { hero, contact } = portfolioData;

  return (
    <footer className="border-t border-border bg-muted/40">
      <div className="container px-4 py-10 sm:py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg sm:text-xl">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Anirudh Sontakke
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              MERN Stack Developer passionate about crafting performant, scalable, and user-centric web applications.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Contact</h3>
            <ul className="mt-3 space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={`mailto:${contact?.email || 'anirudhsontakke@gmail.com'}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="rounded-full bg-primary/10 p-1.5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <MailIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>{contact?.email || 'anirudhsontakke@gmail.com'}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact?.phone?.replace(/\s+/g, '') || '+919876543210'}`}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <span className="rounded-full bg-primary/10 p-1.5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <PhoneIcon className="h-3.5 w-3.5" />
                  </span>
                  <span>{contact?.phone || '+91 98765 43210'}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <span className="rounded-full bg-primary/10 p-1.5 text-primary flex-shrink-0 mt-0.5">
                  <MapPinIcon className="h-3.5 w-3.5" />
                </span>
                <span>{contact?.location || 'Chhatrapati Sambhajinagar, Maharashtra'}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow & Socials */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-foreground">Connect</h3>
            <p className="mt-3 text-xs text-muted-foreground">
              Feel free to connect with me on GitHub or LinkedIn.
            </p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href={hero.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 text-muted-foreground hover:bg-primary hover:text-primary-foreground border border-border shadow-sm transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href={hero.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-background p-2 text-muted-foreground hover:bg-primary hover:text-primary-foreground border border-border shadow-sm transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© 2026 Anirudh Sontakke. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}