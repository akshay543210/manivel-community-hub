import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Calendar, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  const stats = [
    { icon: Users, value: "5,000+", label: "Members Managed" },
    { icon: Calendar, value: "20+", label: "Events Hosted" },
    { icon: Briefcase, value: "6+", label: "Prop Firms Worked With" },
  ];

  const propFirms = [
    "Aquorex",
    "HOORAH Prop Firm",
    "Trade Cloud Manager",
    "CFL (Clarity Funding LTD)",
    "PROPX Traders Community",
    "PropFirm Knowledge",
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-block mb-6">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary to-secondary p-1 glow-cyan">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl font-sora font-bold gradient-text">
                      M
                    </span>
                  </div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sora font-bold mb-6 leading-tight">
                <span className="gradient-text">Prop Firm Moderator</span>
                <br />
                <span className="text-foreground">& Community Manager</span>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Managing Communities. Supporting Traders. Building Engagement.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/about">
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground glow-hover-cyan group w-full sm:w-auto"
                  >
                    About Me
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary/50 hover:bg-primary/10 w-full sm:w-auto"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass p-6 sm:p-8 rounded-2xl text-center hover-lift glow-hover-cyan"
              >
                <stat.icon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-3xl sm:text-4xl font-sora font-bold gradient-text mb-2">
                  {stat.value}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Prop Firms Carousel */}
      <section className="py-16 sm:py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-sora font-bold text-center mb-4"
          >
            Trusted by Leading <span className="gradient-text">Prop Firms</span>
          </motion.h2>
        </div>

        <div className="relative">
          <motion.div
            animate={{
              x: [0, -1000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex gap-6 sm:gap-8"
          >
            {[...propFirms, ...propFirms].map((firm, index) => (
              <div
                key={index}
                className="glass px-6 sm:px-8 py-4 sm:py-6 rounded-xl whitespace-nowrap glow-hover-cyan flex-shrink-0"
              >
                <span className="text-base sm:text-lg font-semibold text-foreground">
                  {firm}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-strong p-8 sm:p-12 rounded-3xl text-center max-w-3xl mx-auto glow-cyan"
          >
            <h2 className="text-3xl sm:text-4xl font-sora font-bold mb-4">
              Ready to Build Your Community?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how I can help grow and manage your trading community
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground glow-hover-green"
              >
                Let's Connect
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
