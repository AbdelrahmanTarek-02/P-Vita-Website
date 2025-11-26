'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const social = [
    { label: 'Twitter', href: 'https://twitter.com', icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" /></svg>) },
    { label: 'Instagram', href: 'https://instagram.com', icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm0 2a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" /></svg>) },
    { label: 'X', href: 'https://x.com', icon: (<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.285 6.709a1 1 0 00-1.414-1.418L12 12.162 5.129 5.29A1 1 0 103.715 6.705L10.586 13.58 3.715 20.45a1 1 0 101.414 1.416L12 14l7.716 7.864a1 1 0 001.414-1.416L13.414 12.16 20.285 6.71z" /></svg>) },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: (<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M16.337 5.143c2.013 0 3.97-1.623 3.97-3.626C20.307.888 18.72 0 16.677 0 14.32 0 12.823 1.623 12.823 3.517c0 1.95 1.496 3.626 3.514 3.626zM4.5 6.5C6.433 6.5 8 4.933 8 3s-1.567-3.5-3.5-3.5S1 1.067 1 3s1.567 3.5 3.5 3.5zM0 20v-9h3v9H0zM6 11v9h3v-9H6zm7 0v9h3v-5.5c0-1.93.5-4.5-3-4.5-1.5 0-3 .82-3 2.5V20h3v-7.5z" /></svg>) },
  ];

  return (
    <footer className="bg-[#13251A] text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-12 md:py-16 w-full">
        {/* grid directly on background — no inner rounded panel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-1">
            <Link href="/" className="inline-block mb-3 text-2xl md:text-2xl font-extrabold tracking-tight text-white">P-Vita</Link>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-white/90">Pages</h3>
            <ul className="space-y-3">
              <li><Link href="/home" className="text-white/70 hover:text-white text-sm underline underline-offset-2 decoration-white/10">Home</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-white text-sm underline underline-offset-2 decoration-white/10">About</Link></li>
              <li><Link href="/solutions" className="text-white/70 hover:text-white text-sm underline underline-offset-2 decoration-white/10">Our Solutions</Link></li>
              <li><Link href="/grow" className="text-white/70 hover:text-white text-sm underline underline-offset-2 decoration-white/10">Grow With Us</Link></li>
              <li><Link href="/impact" className="text-white/70 hover:text-white text-sm underline underline-offset-2 decoration-white/10">Impact</Link></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-white/90">Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/solutions#products" className="text-white/70 hover:text-white text-sm underline underline-offset-2 decoration-white/10">Products</Link></li>
              <li><Link href="/solutions#services" className="text-white/70 hover:text-white text-sm underline underline-offset-2 decoration-white/10">Services</Link></li>
              <li><Link href="/solutions#technology" className="text-white/70 hover:text-white text-sm underline underline-offset-2 decoration-white/10">Technology</Link></li>
              <li><Link href="/solutions#licensing" className="text-white/70 hover:text-white text-sm underline underline-offset-2 decoration-white/10">Licensing</Link></li>
              <li><Link href="/solutions#connect" className="text-white/70 hover:text-white text-sm underline underline-offset-2 decoration-white/10">Connect</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-white/90">Contact</h3>
            <ul className="space-y-3">
              <li><a href="#partnerships" className="text-white/70 hover:text-white text-sm underline underline-offset-2 decoration-white/10">Partnerships</a></li>
              <li><a href="#investors" className="text-white/70 hover:text-white text-sm underline underline-offset-2 decoration-white/10">Investors</a></li>
              <li><a href="#community" className="text-white/70 hover:text-white text-sm underline underline-offset-2 decoration-white/10">Community</a></li>
              <li><a href="#events" className="text-white/70 hover:text-white text-sm underline underline-offset-2 decoration-white/10">Events</a></li>
              <li><a href="#newsletter" className="text-white/70 hover:text-white text-sm underline underline-offset-2 decoration-white/10">Newsletter</a></li>
            </ul>
          </div>

          {/* Updates */}
          <div>
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-white/90">Updates</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4 max-w-[320px]">
              Stay informed with the latest developments in sustainable biotechnology and circular economy innovations.
            </p>

            <form className="w-full max-w-md">
            <div className="flex items-center w-full border border-white/30 rounded-lg overflow-hidden">
                <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 pr-0 bg-transparent text-white placeholder-white/50 focus:outline-none text-sm"
                />

                <button
                type="submit"
                className=" w-28 pr-8 py-2 bg-white/10 text-white text-sm font-semibold hover:bg-white/20 transition flex-shrink-0"
                >
                Subscribe
                </button>
            </div>
            </form>
        
            <p className="text-white/60 text-xs mt-3 max-w-[320px]">
              By subscribing you agree with our Privacy Policy and provide consent to receive updates from P-Vita.
            </p>
          </div>
        </div>

        {/* bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 mt-8 border-t border-white/8">
          <p className="text-white/60 text-sm">© {currentYear} P-Vita. All rights reserved.</p>

          <div className="flex gap-6 text-sm text-white/60">
            <a href="#privacy" className="hover:text-white transition-colors underline underline-offset-2">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors underline underline-offset-2">Terms of Service</a>
            <a href="#cookies" className="hover:text-white transition-colors underline underline-offset-2">Cookies Settings</a>
          </div>

          <div className="flex items-center gap-4">
            {social.map(s => (
              <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="text-white/60 hover:text-white transition-colors rounded p-2" aria-label={s.label}>
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
