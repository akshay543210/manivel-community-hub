import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Discord",
      value: "manivel#0000",
      description: "Primary contact method",
      link: "#",
      color: "text-[#5865F2]",
    },
    {
      icon: Send,
      title: "Telegram",
      value: "@manivel",
      description: "Quick responses",
      link: "#",
      color: "text-[#0088cc]",
    },
    {
      icon: Mail,
      title: "Email",
      value: "manivel@example.com",
      description: "Professional inquiries",
      link: "mailto:manivel@example.com",
      color: "text-primary",
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+1 234 567 8900",
      description: "Direct messaging",
      link: "#",
      color: "text-[#25D366]",
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
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to build or grow your trading community? Let's discuss how I can
            help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-6 sm:p-8 rounded-3xl"
          >
            <h2 className="text-2xl sm:text-3xl font-sora font-bold mb-6">
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Your Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  placeholder="Tell me about your community needs..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-hover-cyan"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-2xl sm:text-3xl font-sora font-bold mb-6">
                Contact Methods
              </h2>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="glass p-6 rounded-2xl flex items-start gap-4 hover-lift glow-hover-cyan group block"
                  >
                    <div className={`p-3 rounded-xl bg-background/50 ${method.color}`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-sora font-bold mb-1">{method.title}</h3>
                      <p className="text-sm text-primary font-mono mb-1">
                        {method.value}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {method.description}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Location & Availability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="glass p-6 rounded-2xl"
            >
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <h3 className="font-sora font-bold mb-1">Location</h3>
                  <p className="text-sm text-muted-foreground">
                    Remote • Available Globally
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-primary/20">
                <h4 className="font-semibold mb-2 text-sm">Availability</h4>
                <p className="text-sm text-muted-foreground">
                  Flexible timezone support • Quick response time • 24/7 community
                  monitoring
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-20 glass-strong p-8 sm:p-12 rounded-3xl max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-sora font-bold mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-muted-foreground mb-6">
            Whether you need a moderator, community manager, or event coordinator,
            I'm here to help your prop firm community thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-hover-cyan"
            >
              Schedule a Call
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-secondary/50 hover:bg-secondary/10"
            >
              View Portfolio
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
