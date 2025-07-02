// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
var MemStorage = class {
  projects = /* @__PURE__ */ new Map();
  experiences = /* @__PURE__ */ new Map();
  skills = /* @__PURE__ */ new Map();
  contacts = /* @__PURE__ */ new Map();
  chatMessages = /* @__PURE__ */ new Map();
  currentId = 1;
  constructor() {
    this.seedData();
  }
  seedData() {
    const projectsData = [
      {
        title: "Google Gemini Clone",
        description: "This is clone of Google Gemini. The Purpose of project to learn implementation of Rest API, Google Auth and implementing UI.",
        image: "https://raw.githubusercontent.com/Vrahul28/App-Images/main/google-gemini-clone/Google%20Gemini%20Clone.jpg",
        technologies: ["Flutter", "Dart", "Gemini API", "Google Auth"],
        liveUrl: null,
        githubUrl: "https://github.com/Vrahul28/App-Images/tree/main/google-gemini-clone",
        featured: true
      },
      {
        title: "Tricity Associate",
        description: "An application used to buy engine oils for cars. App start with signUp/loginIn functionality. A dashboard to display products which fetch from API. Have functionality to add product in cart and generate bill using api and store in database.",
        image: "https://raw.githubusercontent.com/Vrahul28/App-Images/main/tricity-associate/Tricity%20App.jpg",
        technologies: ["Flutter", "Dart", "REST API", "Firebase", "Push Notifications", "GetX"],
        liveUrl: null,
        githubUrl: "https://github.com/Vrahul28/App-Images/tree/main/tricity-associate",
        featured: true
      },
      {
        title: "Car Rental App",
        description: "A mobile application that allows users to book cars for rent where user upload images of car then filling the form. This app is an updated version of a native Java Android app and has been re-implemented using Flutter for the frontend. Implemented features such as user registration, car browsing, booking management. Integrated frontend with backend APIs to handle booking, user authentication, and payment processing.",
        image: "https://raw.githubusercontent.com/Vrahul28/App-Images/main/Bizlink/Bizink%20App.jpg",
        technologies: ["Flutter", "Dart", "REST API", "Firebase", "Push Notifications", "GetX"],
        liveUrl: null,
        githubUrl: "https://github.com/Vrahul28/App-Images/tree/main/Bizlink",
        featured: true
      },
      {
        title: "Hungry Town App",
        description: "Implement frontend of online food ordering app using flutter, integrate apis to save user details, cart functionality and to get order details from backend.",
        image: "https://raw.githubusercontent.com/Vrahul28/App-Images/main/Food%20King/Hungry%20Town.jpg",
        technologies: ["Flutter", "Dart", "REST API", "Firebase", "Push Notifications", "GetX"],
        liveUrl: null,
        githubUrl: "https://github.com/Vrahul28/App-Images/tree/main/Food%20King",
        featured: false
      }
    ];
    projectsData.forEach((project) => {
      const id = this.currentId++;
      this.projects.set(id, {
        ...project,
        id,
        liveUrl: project.liveUrl || null,
        githubUrl: project.githubUrl || null,
        featured: project.featured || false
      });
    });
    const experiencesData = [
      {
        title: "Flutter Developer",
        company: "Globells Technologies Pvt Ltd",
        description: "Developing cross-platform mobile applications using Flutter and Dart. Working on e-commerce solutions, implementing Firebase integrations, and creating responsive UI designs for both Android and iOS platforms.",
        startDate: "Jul 2023",
        endDate: null,
        current: true
      },
      {
        title: "Flutter Developer Intern",
        company: "Globells Technologies Pvt Ltd",
        description: "Learned Flutter framework and mobile app development fundamentals. Built UI components, integrated REST APIs, and worked on state management using Provider. Contributed to multiple client projects.",
        startDate: "Feb 2023",
        endDate: "Jul 2023",
        current: false
      }
    ];
    experiencesData.forEach((experience) => {
      const id = this.currentId++;
      this.experiences.set(id, {
        ...experience,
        id,
        endDate: experience.endDate || null,
        current: experience.current || false
      });
    });
    const skillsData = [
      // Flutter & Mobile Development
      { name: "Flutter", percentage: 90, category: "Mobile" },
      { name: "Dart", percentage: 88, category: "Mobile" },
      { name: "GetX", percentage: 85, category: "Mobile" },
      { name: "Provider", percentage: 82, category: "Mobile" },
      { name: "SQLite", percentage: 78, category: "Mobile" },
      // Backend & Other Skills
      { name: "Firebase", percentage: 85, category: "Backend" },
      { name: "REST APIs Integration", percentage: 88, category: "Backend" },
      { name: "Spring Boot", percentage: 70, category: "Backend" },
      { name: "AWS S3", percentage: 75, category: "Backend" }
    ];
    skillsData.forEach((skill) => {
      const id = this.currentId++;
      this.skills.set(id, { ...skill, id });
    });
  }
  async getProjects() {
    return Array.from(this.projects.values());
  }
  async getFeaturedProjects() {
    return Array.from(this.projects.values()).filter((p) => p.featured);
  }
  async createProject(project) {
    const id = this.currentId++;
    const newProject = {
      ...project,
      id,
      liveUrl: project.liveUrl || null,
      githubUrl: project.githubUrl || null,
      featured: project.featured || false
    };
    this.projects.set(id, newProject);
    return newProject;
  }
  async getExperiences() {
    return Array.from(this.experiences.values()).sort(
      (a, b) => parseInt(b.startDate) - parseInt(a.startDate)
    );
  }
  async createExperience(experience) {
    const id = this.currentId++;
    const newExperience = {
      ...experience,
      id,
      endDate: experience.endDate || null,
      current: experience.current || false
    };
    this.experiences.set(id, newExperience);
    return newExperience;
  }
  async getSkills() {
    return Array.from(this.skills.values());
  }
  async getSkillsByCategory(category) {
    return Array.from(this.skills.values()).filter((s) => s.category === category);
  }
  async createSkill(skill) {
    const id = this.currentId++;
    const newSkill = { ...skill, id };
    this.skills.set(id, newSkill);
    return newSkill;
  }
  async createContact(contact) {
    const id = this.currentId++;
    const newContact = {
      ...contact,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.contacts.set(id, newContact);
    return newContact;
  }
  async getChatMessages() {
    return Array.from(this.chatMessages.values()).sort(
      (a, b) => (a.timestamp?.getTime() || 0) - (b.timestamp?.getTime() || 0)
    );
  }
  async createChatMessage(message) {
    const id = this.currentId++;
    const newMessage = {
      ...message,
      id,
      timestamp: /* @__PURE__ */ new Date()
    };
    this.chatMessages.set(id, newMessage);
    return newMessage;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  technologies: text("technologies").array().notNull(),
  liveUrl: text("live_url"),
  githubUrl: text("github_url"),
  featured: boolean("featured").default(false)
});
var experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  description: text("description").notNull(),
  startDate: text("start_date").notNull(),
  endDate: text("end_date"),
  current: boolean("current").default(false)
});
var skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  percentage: integer("percentage").notNull(),
  category: text("category").notNull()
});
var contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow()
});
var chatMessages = pgTable("chat_messages", {
  id: serial("id").primaryKey(),
  message: text("message").notNull(),
  isUser: boolean("is_user").notNull(),
  timestamp: timestamp("timestamp").defaultNow()
});
var insertProjectSchema = createInsertSchema(projects).omit({
  id: true
});
var insertExperienceSchema = createInsertSchema(experiences).omit({
  id: true
});
var insertSkillSchema = createInsertSchema(skills).omit({
  id: true
});
var insertContactSchema = createInsertSchema(contacts).omit({
  id: true,
  createdAt: true
});
var insertChatMessageSchema = createInsertSchema(chatMessages).omit({
  id: true,
  timestamp: true
});

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.get("/api/projects", async (req, res) => {
    try {
      const projects2 = await storage.getProjects();
      res.json(projects2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });
  app2.get("/api/projects/featured", async (req, res) => {
    try {
      const projects2 = await storage.getFeaturedProjects();
      res.json(projects2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured projects" });
    }
  });
  app2.get("/api/experiences", async (req, res) => {
    try {
      const experiences2 = await storage.getExperiences();
      res.json(experiences2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch experiences" });
    }
  });
  app2.get("/api/skills", async (req, res) => {
    try {
      const skills2 = await storage.getSkills();
      res.json(skills2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch skills" });
    }
  });
  app2.get("/api/skills/:category", async (req, res) => {
    try {
      const { category } = req.params;
      const skills2 = await storage.getSkillsByCategory(category);
      res.json(skills2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch skills by category" });
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json({ message: "Message sent successfully", contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });
  app2.get("/api/chat/messages", async (req, res) => {
    try {
      const messages = await storage.getChatMessages();
      res.json(messages);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch chat messages" });
    }
  });
  app2.post("/api/chat/messages", async (req, res) => {
    try {
      const validatedData = insertChatMessageSchema.parse(req.body);
      const message = await storage.createChatMessage(validatedData);
      if (validatedData.isUser) {
        setTimeout(async () => {
          await storage.createChatMessage({
            message: "Thanks for your message! I'll get back to you soon.",
            isUser: false
          });
        }, 1e3);
      }
      res.status(201).json(message);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid message data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  base: "https://Vrahul28.github.io/upwork-portfolio-react",
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = 5e3;
  server.listen(port, "0.0.0.0", () => {
    log(`serving on port ${port}`);
  });
})();
