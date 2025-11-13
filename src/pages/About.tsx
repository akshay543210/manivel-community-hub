import { motion } from "framer-motion";
import { Users, Target, Award } from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "2020",
      title: "Gaming Communities",
      description: "Started journey managing gaming communities and tournaments",
    },
    {
      year: "2021",
      title: "Trade Cloud Manager",
      description: "Transitioned to trading communities as Community Manager & Event Host",
    },
    {
      year: "2022",
      title: "Multiple Prop Firms",
      description: "Expanded to Aquorex, HOORAH, and PROPX as Moderator and Admin",
    },
    {
      year: "2023",
      title: "CFL & PropFirm Knowledge",
      description: "Joined CFL and PropFirm Knowledge in support and marketing roles",
    },
    {
      year: "2024",
      title: "Industry Expert",
      description: "Established as a trusted prop firm moderator and community builder",
    },
  ];

  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "Building engaged, supportive communities where traders thrive",
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Delivering professional moderation and support services",
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Maintaining trust and transparency in every interaction",
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
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            From gaming communities to prop firm management, my journey has been
            about one thing: building connections and supporting growth.
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-6 sm:p-10 rounded-3xl mb-16 sm:mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl font-sora font-bold mb-6">My Journey</h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              I began my journey in community management through gaming, organizing
              tournaments for BGMI, Free Fire, CODM, Poker, and Quiz events. This
              experience taught me the fundamentals of engaging large groups and
              creating memorable experiences.
            </p>
            <p className="leading-relaxed">
              The transition to prop firm communities was natural. I discovered that
              the skills I developed in gaming—member engagement, conflict
              resolution, event management, and support—translated perfectly to the
              trading world. Now, I specialize in helping prop firms build thriving
              communities where traders can learn, grow, and succeed.
            </p>
            <p className="leading-relaxed">
              My experience spans Discord moderation, Telegram support, ticket
              management systems, bot configuration, and backend operations. I've
              worked with over 5,000 members across 6+ prop firms, hosting 20+
              events and maintaining active, engaged communities.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-sora font-bold text-center mb-12"
          >
            My <span className="gradient-text">Timeline</span>
          </motion.h2>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "sm:pr-1/2" : "sm:pl-1/2 sm:text-right"
                }`}
              >
                <div
                  className={`glass p-6 rounded-2xl hover-lift glow-hover-cyan ml-12 sm:ml-0 ${
                    index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"
                  }`}
                >
                  <span className="inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl font-sora font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>

                {/* Timeline dot */}
                <div className="absolute left-4 sm:left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background -ml-2 sm:-ml-2 glow-cyan" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-sora font-bold text-center mb-12"
          >
            Core <span className="gradient-text">Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 sm:p-8 rounded-2xl text-center hover-lift glow-hover-cyan"
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-sora font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
