import { Mail, Instagram, Phone } from "lucide-react";
import { motion } from "framer-motion";

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/mr_black0_028",
      color: "hover:text-[#E4405F]",
    },
    {
      name: "X (Twitter)",
      icon: XIcon,
      url: "https://x.com/Manivel2811",
      color: "hover:text-white",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:manivelthangavel2005@gmail.com",
      color: "hover:text-primary",
    },
    {
      name: "WhatsApp",
      icon: Phone,
      url: "https://wa.me/918940943614",
      color: "hover:text-[#25D366]",
    },
  ];

  return (
    <footer className="relative mt-20 border-t border-primary/20">
      <div className="glass-strong">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl sm:text-2xl font-sora font-bold gradient-text mb-4">
                MANIVEL
              </h3>
              <p className="text-muted-foreground text-sm">
                Prop Firm Moderator & Community Manager
              </p>
              <p className="text-muted-foreground text-sm mt-2">
                Managing Communities. Supporting Traders. Building Engagement.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-sora font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="/experience"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-sora font-semibold mb-4">Connect</h4>
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg glass glow-hover-cyan transition-all duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="mt-8 pt-8 border-t border-primary/20 text-center">
            <p className="text-sm text-muted-foreground">
              🔧 Built & Designed by{" "}
              <span className="text-primary font-semibold">Akshay Muthyala</span>
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © {new Date().getFullYear()} Manivel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
