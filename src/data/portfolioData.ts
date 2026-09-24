export interface PortfolioData {
  personal: {
    fullName: string;
    preferredName: string;
    initials: string;
    role: string;
    college: string;
    collegeLocation: string;
    homeLocation: string;
    currentYear: string;
    degree: string;
    expectedGraduation: string;
    aboutBio: string;
    email: string;
    isEmailPlaceholder: boolean;
    linkedinUrl: string;
    isLinkedinPlaceholder: boolean;
    githubUrl: string;
    isGithubPlaceholder: boolean;
    resumePath: string;
    hasResumeFile: boolean;
    profilePhotoPath: string;
  };
  skills: {
    completed: Array<{ name: string; category: string; description: string }>;
    currentlyLearning: Array<{ name: string; focus: string; description: string }>;
    plannedLearning: Array<{ name: string; category: string }>;
  };
  achievements: {
    academic: Array<{
      title: string;
      value: string;
      context: string;
      highlight?: boolean;
    }>;
    events: Array<{
      title: string;
      level: string;
      timing: string;
      type: string;
    }>;
    certificates: Array<{
      title: string;
      issuerOrEvent: string;
      type: string;
    }>;
  };
  education: {
    institution: string;
    campusLocation: string;
    program: string;
    currentStanding: string;
    graduatingYear: string;
    overview: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    fullName: "Nandini Vyankat Apet",
    preferredName: "Nandini Apet",
    initials: "NA",
    role: "Second-Year Computer Science and Engineering Student",
    college: "N. B. Navale Sinhgad College of Engineering",
    collegeLocation: "Kegaon, Solapur, Maharashtra, India",
    homeLocation: "Solapur, Maharashtra, India",
    currentYear: "Second Year (SY CSE)",
    degree: "Computer Science and Engineering",
    expectedGraduation: "2029",
    aboutBio:
      "I am a technology-driven CSE student who enjoys learning new technical skills. I am currently learning Python and looking for internship and project opportunities.",
    // Nandini's email: Can be updated or customized
    email: "nandinivyankatapet@gmail.com",
    isEmailPlaceholder: false,
    linkedinUrl: "https://www.linkedin.com/in/nandini-apet",
    isLinkedinPlaceholder: true,
    githubUrl: "https://github.com/nandini-apet",
    isGithubPlaceholder: true,
    resumePath: "/resume.pdf",
    hasResumeFile: false,
    profilePhotoPath: "/nandini.png",
  },
  skills: {
    completed: [
      {
        name: "C Programming",
        category: "Programming Language",
        description: "Core structured programming, syntax fundamentals, memory concepts, and logic building.",
      },
      {
        name: "HTML",
        category: "Web Foundations",
        description: "Semantic web markup, document structure, accessible page elements, and web fundamentals.",
      },
    ],
    currentlyLearning: [
      {
        name: "Python",
        focus: "Active Learning",
        description: "Core syntax, data types, procedural & object-oriented programming fundamentals, and problem-solving.",
      },
    ],
    plannedLearning: [
      {
        name: "Data Structures and Algorithms (DSA)",
        category: "Core Computer Science",
      },
      {
        name: "Java",
        category: "Object-Oriented Programming",
      },
      {
        name: "Aptitude",
        category: "Logical & Quantitative Problem Solving",
      },
    ],
  },
  achievements: {
    academic: [
      {
        title: "Department Rank",
        value: "1st Rank",
        context: "Secured first rank in the Computer Science and Engineering department.",
        highlight: true,
      },
      {
        title: "College Rank",
        value: "3rd Rank",
        context: "Secured third rank in the college.",
        highlight: true,
      },
      {
        title: "First Year Overall",
        value: "92%",
        context: "Secured 92% overall in first year academic curriculum.",
        highlight: false,
      },
      {
        title: "First Semester",
        value: "90%",
        context: "Secured 90% in the first semester.",
        highlight: false,
      },
    ],
    events: [
      {
        title: "Illumination Workshop",
        level: "Technical Workshop",
        timing: "First Year",
        type: "Participant",
      },
      {
        title: "Dista Event",
        level: "College-Level",
        timing: "College Technical / Cultural Event",
        type: "Participant",
      },
      {
        title: "Prom Battle Event",
        level: "College-Level",
        timing: "College Event",
        type: "Participant",
      },
    ],
    certificates: [
      {
        title: "C Language Certificate",
        issuerOrEvent: "Academic / Course Certification",
        type: "Technical Skill Certificate",
      },
      {
        title: "Dista Event Certificate",
        issuerOrEvent: "College-Level Dista",
        type: "Participation Certificate",
      },
      {
        title: "Illumination Workshop Certificate",
        issuerOrEvent: "Illumination Workshop",
        type: "Workshop Participation Certificate",
      },
    ],
  },
  education: {
    institution: "N. B. Navale Sinhgad College of Engineering",
    campusLocation: "Kegaon, Solapur, Maharashtra, India",
    program: "Bachelor of Engineering / B.Tech in Computer Science and Engineering",
    currentStanding: "Second Year (2025–2026 Academic Year)",
    graduatingYear: "Class of 2029",
    overview:
      "Pursuing a comprehensive curriculum in Computer Science and Engineering with a strong focus on core computing disciplines, programming foundations, and analytical reasoning.",
  },
};
