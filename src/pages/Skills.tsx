import { motion } from "framer-motion";
import {
  MessageSquare,
  Bot,
  Headphones,
  Calendar,
  Shield,
  Users,
  Zap,
  Star,
  Target,
  TrendingUp,
  Mail,
  FileText,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Community Management",
      skills: [
        {
          name: "Discord Moderation",
          icon: MessageSquare,
          level: 95,
          description: "Expert in server management, role configuration, and community engagement",
        },
        {
          name: "Member Engagement",
          icon: Users,
          level: 90,
          description: "Building active communities with high retention rates",
        },
        {
          name: "Conflict Resolution",
          icon: Shield,
          level: 88,
          description: "Professional handling of disputes and community issues",
        },
      ],
    },
    {
      category: "Technical Skills",
      skills: [
        {
          name: "Bot Management",
          icon: Bot,
          level: 92,
          description: "Configuration and management of Discord bots and automation",
        },
        {
          name: "Ticket Systems",
          icon: FileText,
          level: 90,
          description: "Tawk.to, Telegram, and custom support systems",
        },
        {
          name: "Backend Operations",
          icon: Zap,
          level: 85,
          description: "Affiliate tracking and backend management",
        },
      ],
    },
    {
      category: "Support & Communication",
      skills: [
        {
          name: "Customer Support",
          icon: Headphones,
          level: 95,
          description: "24/7 live support and query resolution",
        },
        {
          name: "Email Communication",
          icon: Mail,
          level: 88,
          description: "Professional email support and correspondence",
        },
        {
          name: "Onboarding",
          icon: Star,
          level: 90,
          description: "Welcoming and guiding new community members",
        },
      ],
    },
    {
      category: "Event & Marketing",
      skills: [
        {
          name: "Event Hosting",
          icon: Calendar,
          level: 92,
          description: "Planning and executing community events",
        },
        {
          name: "Marketing Support",
          icon: TrendingUp,
          level: 85,
          description: "Campaign assistance and content distribution",
        },
        {
          name: "Community Growth",
          icon: Target,
          level: 88,
          description: "Strategic planning for community expansion",
        },
      ],
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
            Professional <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise in community management, technical support, and
            event coordination
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-16 sm:space-y-20">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <h2 className="text-2xl sm:text-3xl font-sora font-bold mb-8 text-center">
                <span className="gradient-text">{category.category}</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass p-6 rounded-2xl hover-lift glow-hover-cyan group"
                  >
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <skill.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-xl font-sora font-bold mb-2">
                      {skill.name}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {skill.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Proficiency</span>
                        <span className="font-semibold text-primary">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 glass-strong p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-sora font-bold text-center mb-8">
            Additional <span className="gradient-text">Capabilities</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Multi-platform management (Discord, Telegram, WhatsApp)",
              "Timezone-flexible support availability",
              "Crisis management and rapid response",
              "Content moderation and guidelines enforcement",
              "Team coordination and delegation",
              "Analytics tracking and reporting",
              "Community feedback collection and analysis",
              "Cross-cultural communication",
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start glass p-4 rounded-xl"
              >
                <span className="text-primary mr-3 text-xl">✓</span>
                <span className="text-sm text-muted-foreground">{capability}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
