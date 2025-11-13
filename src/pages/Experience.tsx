import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Aquorex",
      role: "Moderator + Live Support + Affiliate Backend",
      duration: "2022 - Present",
      responsibilities: [
        "Managed live support tickets and customer queries",
        "Handled affiliate backend operations and tracking",
        "Discord moderation and community engagement",
        "Onboarding new members and traders",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      company: "HOORAH Prop Firm",
      role: "Discord Moderator",
      duration: "2022 - Present",
      responsibilities: [
        "Discord server management and moderation",
        "Ticket system handling and resolution",
        "Bot management and configuration",
        "New member onboarding and support",
      ],
      color: "from-blue-500 to-purple-500",
    },
    {
      company: "Trade Cloud Manager",
      role: "Community Manager + Event Host",
      duration: "2021 - Present",
      responsibilities: [
        "Community growth and engagement strategies",
        "Organized and hosted trading events",
        "Member support and conflict resolution",
        "Content coordination and announcements",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      company: "CFL (Clarity Funding LTD)",
      role: "Moderator",
      duration: "2023 - Present",
      responsibilities: [
        "Telegram community moderation",
        "Ticket management and support",
        "Member assistance and onboarding",
        "Community guidelines enforcement",
      ],
      color: "from-pink-500 to-red-500",
    },
    {
      company: "PROPX Traders Community",
      role: "Admin",
      duration: "2022 - Present",
      responsibilities: [
        "Full community administration",
        "Strategic planning and growth",
        "Team coordination and management",
        "Event planning and execution",
      ],
      color: "from-red-500 to-orange-500",
    },
    {
      company: "PropFirm Knowledge",
      role: "Support + Marketing + Moderation",
      duration: "2023 - Present",
      responsibilities: [
        "Multi-channel customer support",
        "Marketing campaign assistance",
        "Community moderation and engagement",
        "Content creation and distribution",
      ],
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-sora font-bold mb-6">
            My <span className="gradient-text">Experience</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            6+ prop firms, 5,000+ members managed, countless communities built
          </p>
        </motion.div>

        {/* Experience Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group glass p-6 sm:p-8 rounded-3xl hover-lift glow-hover-cyan relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
              />

              <div className="relative z-10">
                {/* Company Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-sora font-bold mb-1 group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-primary font-semibold">{exp.role}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                {/* Duration */}
                <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4">
                  {exp.duration}
                </div>

                {/* Responsibilities */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground mb-3">
                    KEY RESPONSIBILITIES
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-muted-foreground"
                      >
                        <span className="text-primary mr-2 mt-1">▹</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 glass-strong p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-sora font-bold mb-6">
            Combined <span className="gradient-text">Expertise</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 bg-primary/10 rounded-xl">
              <p className="text-2xl sm:text-3xl font-bold text-primary">6+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Prop Firms</p>
            </div>
            <div className="p-4 bg-secondary/10 rounded-xl">
              <p className="text-2xl sm:text-3xl font-bold text-secondary">5K+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Members</p>
            </div>
            <div className="p-4 bg-primary/10 rounded-xl">
              <p className="text-2xl sm:text-3xl font-bold text-primary">20+</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Events</p>
            </div>
            <div className="p-4 bg-secondary/10 rounded-xl">
              <p className="text-2xl sm:text-3xl font-bold text-secondary">24/7</p>
              <p className="text-xs sm:text-sm text-muted-foreground">Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
