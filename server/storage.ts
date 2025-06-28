import { 
  projects, experiences, skills, contacts, chatMessages,
  type Project, type InsertProject,
  type Experience, type InsertExperience,
  type Skill, type InsertSkill,
  type Contact, type InsertContact,
  type ChatMessage, type InsertChatMessage
} from "@shared/schema";

export interface IStorage {
  // Projects
  getProjects(): Promise<Project[]>;
  getFeaturedProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;

  // Experiences
  getExperiences(): Promise<Experience[]>;
  createExperience(experience: InsertExperience): Promise<Experience>;

  // Skills
  getSkills(): Promise<Skill[]>;
  getSkillsByCategory(category: string): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;

  // Contacts
  createContact(contact: InsertContact): Promise<Contact>;

  // Chat Messages
  getChatMessages(): Promise<ChatMessage[]>;
  createChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
}

export class MemStorage implements IStorage {
  private projects: Map<number, Project> = new Map();
  private experiences: Map<number, Experience> = new Map();
  private skills: Map<number, Skill> = new Map();
  private contacts: Map<number, Contact> = new Map();
  private chatMessages: Map<number, ChatMessage> = new Map();
  private currentId = 1;

  constructor() {
    this.seedData();
  }

  private seedData() {
    // Seed projects
    const projectsData: InsertProject[] = [
      {
        title: "Google Gemini Clone",
        description: "This is clone of Google Gemini. The Purpose of project to learn implementation of Rest API, Google Auth and implementing UI.",
        image: "https://raw.githubusercontent.com/Vrahul28/App-Images/main/google-gemini-clone/Google%20Gemini%20Clone.jpg",
        technologies: ["Flutter", "Dart", "Gemini API", "Google Auth"],
        liveUrl: null,
        githubUrl: "https://github.com/Vrahul28/App-Images/tree/main/google-gemini-clone",
        featured: true,
      },
      {
        title: "Tricity Associate",
        description: "An application used to buy engine oils for cars. App start with signUp/loginIn functionality. A dashboard to display products which fetch from API. Have functionality to add product in cart and generate bill using api and store in database.",
        image: "https://raw.githubusercontent.com/Vrahul28/App-Images/main/tricity-associate/Tricity%20App.jpg",
        technologies: ["Flutter", "Dart", "REST API", "Firebase", "Push Notifications", "GetX"],
        liveUrl: null,
        githubUrl: "https://github.com/Vrahul28/App-Images/tree/main/tricity-associate",
        featured: true,
      },
      {
        title: "Car Rental App",
        description: "A mobile application that allows users to book cars for rent where user upload images of car then filling the form. This app is an updated version of a native Java Android app and has been re-implemented using Flutter for the frontend. Implemented features such as user registration, car browsing, booking management. Integrated frontend with backend APIs to handle booking, user authentication, and payment processing.",
        image: "https://raw.githubusercontent.com/Vrahul28/App-Images/main/Bizlink/Bizink%20App.jpg",
        technologies: ["Flutter", "Dart", "REST API", "Firebase", "Push Notifications", "GetX"],
        liveUrl: null,
        githubUrl: "https://github.com/Vrahul28/App-Images/tree/main/Bizlink",
        featured: true,
      },
      {
        title: "Hungry Town App",
        description: "Implement frontend of online food ordering app using flutter, integrate apis to save user details, cart functionality and to get order details from backend.",
        image: "https://raw.githubusercontent.com/Vrahul28/App-Images/main/Food%20King/Hungry%20Town.jpg",
        technologies: ["Flutter", "Dart", "REST API", "Firebase", "Push Notifications", "GetX"],
        liveUrl: null,
        githubUrl: "https://github.com/Vrahul28/App-Images/tree/main/Food%20King",
        featured: false,
      },
    ];

    projectsData.forEach(project => {
      const id = this.currentId++;
      this.projects.set(id, { 
        ...project, 
        id,
        liveUrl: project.liveUrl || null,
        githubUrl: project.githubUrl || null,
        featured: project.featured || false
      });
    });

    // Seed experiences
    const experiencesData: InsertExperience[] = [
      {
        title: "Flutter Developer",
        company: "Globells Technologies Pvt Ltd",
        description: "Developing cross-platform mobile applications using Flutter and Dart. Working on e-commerce solutions, implementing Firebase integrations, and creating responsive UI designs for both Android and iOS platforms.",
        startDate: "Jul 2023",
        endDate: null,
        current: true,
      },
      {
        title: "Flutter Developer Intern",
        company: "Globells Technologies Pvt Ltd",
        description: "Learned Flutter framework and mobile app development fundamentals. Built UI components, integrated REST APIs, and worked on state management using Provider. Contributed to multiple client projects.",
        startDate: "Feb 2023",
        endDate: "Jul 2023",
        current: false,
      },
    ];

    experiencesData.forEach(experience => {
      const id = this.currentId++;
      this.experiences.set(id, { 
        ...experience, 
        id,
        endDate: experience.endDate || null,
        current: experience.current || false 
      });
    });

    // Seed skills
    const skillsData: InsertSkill[] = [
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
      { name: "AWS S3", percentage: 75, category: "Backend" },
    ];

    skillsData.forEach(skill => {
      const id = this.currentId++;
      this.skills.set(id, { ...skill, id });
    });
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async getFeaturedProjects(): Promise<Project[]> {
    return Array.from(this.projects.values()).filter(p => p.featured);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const id = this.currentId++;
    const newProject: Project = { 
      ...project, 
      id,
      liveUrl: project.liveUrl || null,
      githubUrl: project.githubUrl || null,
      featured: project.featured || false
    };
    this.projects.set(id, newProject);
    return newProject;
  }

  async getExperiences(): Promise<Experience[]> {
    return Array.from(this.experiences.values()).sort((a, b) => 
      parseInt(b.startDate) - parseInt(a.startDate)
    );
  }

  async createExperience(experience: InsertExperience): Promise<Experience> {
    const id = this.currentId++;
    const newExperience: Experience = { 
      ...experience, 
      id,
      endDate: experience.endDate || null,
      current: experience.current || false 
    };
    this.experiences.set(id, newExperience);
    return newExperience;
  }

  async getSkills(): Promise<Skill[]> {
    return Array.from(this.skills.values());
  }

  async getSkillsByCategory(category: string): Promise<Skill[]> {
    return Array.from(this.skills.values()).filter(s => s.category === category);
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const id = this.currentId++;
    const newSkill: Skill = { ...skill, id };
    this.skills.set(id, newSkill);
    return newSkill;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.currentId++;
    const newContact: Contact = { 
      ...contact, 
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, newContact);
    return newContact;
  }

  async getChatMessages(): Promise<ChatMessage[]> {
    return Array.from(this.chatMessages.values()).sort((a, b) => 
      (a.timestamp?.getTime() || 0) - (b.timestamp?.getTime() || 0)
    );
  }

  async createChatMessage(message: InsertChatMessage): Promise<ChatMessage> {
    const id = this.currentId++;
    const newMessage: ChatMessage = { 
      ...message, 
      id, 
      timestamp: new Date() 
    };
    this.chatMessages.set(id, newMessage);
    return newMessage;
  }
}

export const storage = new MemStorage();
