import { motion } from "framer-motion";
import { Trophy, Users, Calendar, Zap } from "lucide-react";

const Events = () => {
  const events = [
    {
      name: "BGMI Tournaments",
      icon: "🎮",
      participants: "500+",
      description: "Battlegrounds Mobile India competitive tournaments",
    },
    {
      name: "Free Fire Competitions",
      icon: "🔥",
      participants: "400+",
      description: "Action-packed Free Fire battle royale events",
    },
    {
      name: "CODM Championships",
      icon: "⚔️",
      participants: "300+",
      description: "Call of Duty Mobile competitive matches",
    },
    {
      name: "Poker Nights",
      icon: "🃏",
      participants: "200+",
      description: "Strategic poker tournaments and cash games",
    },
    {
      name: "Quiz Competitions",
      icon: "🧠",
      participants: "150+",
      description: "Knowledge-based trivia and quiz events",
    },
    {
      name: "Trading Webinars",
      icon: "📈",
      participants: "1000+",
      description: "Educational trading sessions and workshops",
    },
  ];

  const stats = [
    {
      icon: Trophy,
      value: "20+",
      label: "Events Organized",
      color: "text-yellow-500",
    },
    {
      icon: Users,
      value: "1000+",
      label: "Total Participants",
      color: "text-primary",
    },
    {
      icon: Calendar,
      value: "3+",
      label: "Years Experience",
      color: "text-secondary",
    },
    {
      icon: Zap,
      value: "100%",
      label: "Success Rate",
      color: "text-purple-500",
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
            Event <span className="gradient-text">Hosting</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Creating memorable experiences through gaming tournaments, educational
            webinars, and community events
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-2xl text-center hover-lift glow-hover-cyan"
            >
              <stat.icon className={`w-10 h-10 mx-auto mb-3 ${stat.color}`} />
              <p className="text-3xl font-sora font-bold mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Events Carousel */}
        <div className="mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-sora font-bold text-center mb-12"
          >
            Featured <span className="gradient-text">Events</span>
          </motion.h2>

          <div className="relative overflow-hidden py-8">
            <motion.div
              animate={{
                x: [0, -1500],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              className="flex gap-6"
            >
              {[...events, ...events].map((event, index) => (
                <div
                  key={index}
                  className="glass p-6 sm:p-8 rounded-2xl min-w-[280px] sm:min-w-[320px] hover-lift glow-hover-cyan flex-shrink-0"
                >
                  <div className="text-5xl mb-4">{event.icon}</div>
                  <h3 className="text-xl font-sora font-bold mb-2">
                    {event.name}
                  </h3>
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-3">
                    {event.participants} Participants
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Event Management Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-sora font-bold text-center mb-8">
            Event Management <span className="gradient-text">Expertise</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Planning & Coordination",
                items: [
                  "Event scheduling and timeline management",
                  "Participant registration systems",
                  "Prize pool organization",
                ],
              },
              {
                title: "Technical Setup",
                items: [
                  "Discord server configuration",
                  "Bot setup and automation",
                  "Live streaming coordination",
                ],
              },
              {
                title: "Community Engagement",
                items: [
                  "Pre-event hype and marketing",
                  "Real-time community interaction",
                  "Post-event follow-up",
                ],
              },
              {
                title: "Problem Solving",
                items: [
                  "Quick issue resolution",
                  "Conflict management",
                  "Contingency planning",
                ],
              },
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl"
              >
                <h3 className="text-lg font-sora font-bold mb-4 text-primary">
                  {skill.title}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-sm text-muted-foreground"
                    >
                      <span className="text-primary mr-2">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;
