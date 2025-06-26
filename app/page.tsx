"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Database,
  Smartphone,
  Globe,
  User,
  GraduationCap,
  Star,
  Menu,
  X,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)
  const roles = ["developer", "designer", "CS student"]

  const getRoleColor = (role: string) => {
    switch (role) {
      case "developer":
        return "text-blue-400"
      case "designer":
        return "text-red-400"
      case "CS student":
        return "text-yellow-400"
      default:
        return "text-yellow-400"
    }
  }

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    let timeoutId: NodeJS.Timeout

    if (isTyping) {
      // Typing animation
      if (displayedText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1))
        }, 100) // Typing speed
      } else {
        // Finished typing, pause before erasing
        timeoutId = setTimeout(() => {
          setIsTyping(false)
        }, 2000) // Pause duration
      }
    } else {
      // Erasing animation
      if (displayedText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 50) // Erasing speed (faster than typing)
      } else {
        // Finished erasing, move to next role
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
        setIsTyping(true)
      }
    }

    return () => clearTimeout(timeoutId)
  }, [currentRoleIndex, displayedText, isTyping])

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500) // Blink every 500ms

    return () => clearInterval(cursorInterval)
  }, [])

  useEffect(() => {
    // Initialize the first role
    if (displayedText === "" && isTyping) {
      const timeoutId = setTimeout(() => {
        setDisplayedText("d")
      }, 1000) // Start typing after 1 second
      return () => clearTimeout(timeoutId)
    }
  }, [])

  const skills = [
    {
      name: "Frontend Development",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      tools: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      tools: ["Figma", "Adobe Illustrator"],
    },
    {
      name: "Backend Development",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      tools: ["Node.js", "Python", "PostgreSQL", "MongoDB", "Express.js", "Prisma ORM", "tRPC API"],
    },
    {
      name: "Mobile Development",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      tools: ["Flutter"],
    },
    {
      name: "Web Technologies",
      icon: Globe,
      color: "from-indigo-500 to-purple-500",
      tools: ["HTML5", "CSS3", "JavaScript", "PWA"],
    },
  ]

  const projects = [
    {
      title: "EdgeTable",
      description: "A spreadsheet like data management tool to store, track and organize information about anything",
      image: "../public/proj1.png",
      tags: ["Next.js", "PostgreSQL", "Tailwind CSS", "tRPC", "Prisma ORM"],
      github: "https://github.com/Ayushk249/EdgeTable",
      live: "#",
    },
    {
      title: "Productlance",
      description:
        "A REST API based eCommerce Web application handling all basic functionalities like cart functionality, checkout functionality, Product reviews",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["MongoDB", "Express.js", "React", "Node.js"],
      github: "https://github.com/Ayushk249/Productlance",
      live: "#",
    },
    {
      title: "Official Website of Meraz'22",
      description: "A Lightning fast static site generated with Svelte Kit framework",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["SvelteKit", "SCSS"],
      github: "https://github.com/Ayushk249/Meraz-IITBhilai",
      live: "#",
    },
    {
      title: "Room Furniture Display",
      description: "Frontend mentor room-homepage challenge to develop a minimalistic static UI",
      image: "/placeholder.svg?height=300&width=400",
      tags: ["HTML", "Tailwind CSS"],
      github: "https://github.com/Ayushk249",
      live: "#",
    },
  ]

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x / 10,
            y: mousePosition.y / 10,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x / 15,
            y: -mousePosition.y / 15,
          }}
          transition={{ type: "spring", stiffness: 30, damping: 30 }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Ayush Kumar Das
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id ? "text-blue-400" : "text-gray-300 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"
                      layoutId="activeTab"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden bg-black/90 backdrop-blur-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id)
                      setIsMenuOpen(false)
                    }}
                    className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white"
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          {activeSection === "home" && (
            <motion.section
              key="home"
              className="min-h-screen flex items-center justify-center px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-center max-w-4xl mx-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mb-8"
                >
                  <div className="w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                    <User size={64} className="text-white" />
                  </div>
                </motion.div>

                <motion.h1
                  className="text-5xl md:text-7xl font-bold mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Ayush
                  </span>
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  A passionate{" "}
                  <span className={`${getRoleColor(roles[currentRoleIndex])} font-semibold inline-block min-w-[140px]`}>
                    {displayedText}
                    <span
                      className={`inline-block w-0.5 h-6 ml-1 align-middle ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100 ${getRoleColor(roles[currentRoleIndex]).replace("text-", "bg-")}`}
                    />
                  </span>
                  <br />
                  who loves creating innovative digital experiences and solving complex problems through code.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full"
                    onClick={() => setActiveSection("projects")}
                  >
                    View My Work
                  </Button>
                  <Button
                    size="lg"
                    className="relative bg-transparent border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:text-white px-8 py-3 rounded-full transition-all duration-300 overflow-hidden group"
                    onClick={() => setActiveSection("contact")}
                  >
                    <span className="relative z-10">Get In Touch</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300" />
                  </Button>
                </motion.div>

                <motion.div
                  className="flex justify-center space-x-6 mt-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  {[
                    { Icon: Github, href: "https://github.com/Ayushk249" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/in/ayush-kumar-das" },
                    { Icon: Mail, href: "mailto:daskumarayush.au@gmail.com" },
                  ].map(({ Icon, href }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={24} />
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.section>
          )}

          {activeSection === "about" && (
            <motion.section
              key="about"
              className="min-h-screen flex items-center justify-center px-4 py-20"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  About{" "}
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Me</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                      <p>
                        I am currently a first year postgraduate student at UNSW Sydney pursuing Masters Of Information
                        Technology with specialization in Artificial Intelligence. I completed my Bachelors of
                        Technology (Honours) in Mechanical Engineering with specialization in Computer Science from IIT
                        Bhilai.
                      </p>
                      <p>
                        My journey in tech started when I built my first website at 19, and since then, I've been
                        fascinated by the endless possibilities of code. I love working on projects that challenge me to
                        think creatively and solve real-world problems.
                      </p>
                      <p>
                        When I'm not coding, you can find me hiking, playing guitar, or exploring new coffee shops
                        around campus.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="space-y-6"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <GraduationCap className="text-blue-400" size={32} />
                          <div>
                            <h3 className="text-xl font-semibold text-white">Education</h3>
                            <p className="text-gray-400">UNSW Sydney & IIT Bhilai</p>
                          </div>
                        </div>
                        <p className="text-gray-300">
                          <strong>UNSW Sydney</strong>
                          <br />
                          Masters of IT
                          <br />
                          Expected Graduation: 2026
                          <br />
                          WAM: 79.5
                          <br />
                          <br />
                          <strong>IIT Bhilai</strong>
                          <br />
                          B.Tech (Honours) specialization in CS
                          <br />
                          GPA: 8.37/10
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="bg-white/5 border-white/10 backdrop-blur-lg">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4 mb-4">
                          <Star className="text-yellow-400" size={32} />
                          <div>
                            <h3 className="text-xl font-semibold text-white">Interests</h3>
                            <p className="text-gray-400">What drives me</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {["AI/ML", "Web Development", "Mobile Apps", "Open Source", "Full Stack Development"].map(
                            (interest) => (
                              <Badge key={interest} variant="secondary" className="bg-purple-500/20 text-purple-300">
                                {interest}
                              </Badge>
                            ),
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === "skills" && (
            <motion.section
              key="skills"
              className="min-h-screen flex items-center justify-center px-4 py-20"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-6xl mx-auto">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  My{" "}
                  <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                    Skills
                  </span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      className="group"
                    >
                      <Card className="bg-white/5 border-white/10 backdrop-blur-lg h-full hover:bg-white/10 transition-all duration-300">
                        <CardContent className="p-6">
                          <div
                            className={`w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                          >
                            <skill.icon size={32} className="text-white" />
                          </div>
                          <h3 className="text-xl font-semibold text-white mb-3">{skill.name}</h3>
                          <div className="space-y-2">
                            {skill.tools.map((tool) => (
                              <Badge key={tool} variant="secondary" className="bg-gray-700/50 text-gray-300 mr-2">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === "projects" && (
            <motion.section
              key="projects"
              className="min-h-screen flex items-center justify-center px-4 py-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-6xl mx-auto">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Featured{" "}
                  <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Projects
                  </span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ y: -10 }}
                      className="group"
                    >
                      <Card className="bg-white/5 border-white/10 backdrop-blur-lg overflow-hidden h-full hover:bg-white/10 transition-all duration-300">
                        <div className="relative overflow-hidden">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                          <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="bg-blue-500/20 text-blue-300 text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex space-x-4">
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Github size={16} />
                              <span className="text-sm">Code</span>
                            </motion.a>
                            {project.live !== "#" && (
                              <motion.a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ExternalLink size={16} />
                                <span className="text-sm">Live</span>
                              </motion.a>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          )}

          {activeSection === "contact" && (
            <motion.section
              key="contact"
              className="min-h-screen flex items-center justify-center px-4 py-20"
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: -90 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Let's{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Connect
                  </span>
                </motion.h2>

                <motion.p
                  className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  I'm always excited to collaborate on interesting projects or discuss new opportunities. Feel free to
                  reach out!
                </motion.p>

                <motion.div
                  className="grid md:grid-cols-3 gap-8 mb-12"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "daskumarayush.au@gmail.com",
                      href: "mailto:daskumarayush.au@gmail.com",
                    },
                    {
                      icon: Github,
                      label: "GitHub",
                      value: "@Ayushk249",
                      href: "https://github.com/Ayushk249",
                    },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      value: "Ayush Kumar Das",
                      href: "https://www.linkedin.com/in/ayush-kumar-das",
                    },
                  ].map((contact, index) => (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-6 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <contact.icon size={32} className="mx-auto mb-4 text-blue-400" />
                      <h3 className="text-lg font-semibold text-white mb-2">{contact.label}</h3>
                      <p className="text-gray-300">{contact.value}</p>
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
