// src/data/questions.js

// =========================
//     QUIZ QUESTIONS
// =========================
export const QUESTIONS = [
  {
    id: 1,
    q: "Which school subject do you enjoy the most?",
    opts: ["Maths / Science", "Art / Drawing", "Social Science", "Languages"],
  },
  {
    id: 2,
    q: "What kind of activities do you enjoy in your free time?",
    opts: [
      "Solving puzzles",
      "Drawing or crafting",
      "Talking/helping friends",
      "Watching tech or DIY videos",
    ],
  },
  {
    id: 3,
    q: "How do you learn something new?",
    opts: [
      "By doing hands-on",
      "By watching videos",
      "By reading",
      "By observing others",
    ],
  },
  {
    id: 4,
    q: "What type of work do you enjoy more?",
    opts: [
      "Logical thinking",
      "Creative thinking",
      "Talking/explaining",
      "Fixing or building things",
    ],
  },
  {
    id: 5,
    q: "Do you like working with computers or gadgets?",
    opts: ["Yes, very much", "Sometimes", "Not much", "Not at all"],
  },
  {
    id: 6,
    q: "Do you enjoy public speaking or group discussions?",
    opts: ["Yes, confidently", "Sometimes", "Only with friends", "No, I am shy"],
  },
  {
    id: 7,
    q: "Which describes you the best?",
    opts: ["Logical", "Creative", "Social", "Curious"],
  },
  {
    id: 8,
    q: "Would you enjoy a job that involves travel?",
    opts: ["Yes!", "Maybe", "Sometimes", "No"],
  },
  {
    id: 9,
    q: "Do you like creating things (videos, art, crafts, apps)?",
    opts: ["Yes, I love creating", "Sometimes", "Rarely", "No"],
  },
  {
    id: 10,
    q: "How do you handle a difficult problem?",
    opts: [
      "Break it down logically",
      "Think creatively for ideas",
      "Ask others for opinions",
      "Try until it works",
    ],
  },
  {
    id: 11,
    q: "Do you enjoy helping people with their problems?",
    opts: ["Yes", "Sometimes", "Rarely", "No"],
  },
  {
    id: 12,
    q: "What type of career sounds exciting to you?",
    opts: [
      "Science / Engineering / Technology",
      "Arts / Design / Creativity",
      "Business / Law / Management",
      "Practical skills (repair/build)",
    ],
  },
];


// =========================
//     STREAM OPPORTUNITIES
// =========================
export const CAREER_OPPORTUNITIES = {
  Science: [
    "Engineer",
    "Doctor",
    "Scientist",
    "AI / ML Engineer",
    "Pilot",
    "Architect",
    "Pharmacist",
    "Software Developer",
  ],

  Commerce: [
    "Business Analyst",
    "Chartered Accountant",
    "Entrepreneur",
    "Banker",
    "Stock Market Analyst",
    "Digital Marketer",
    "Economist",
  ],

  Arts: [
    "Graphic Designer",
    "Psychologist",
    "Lawyer",
    "Journalist",
    "Teacher",
    "Fashion Designer",
    "Content Creator",
  ],

  Vocational: [
    "Electrician",
    "Technician",
    "Drone Operator",
    "Videographer",
    "Chef",
    "Automobile Mechanic",
    "Fitness Trainer",
  ],
};


// =========================
//     STREAM DESCRIPTION
// =========================
export const STREAM_DESCRIPTION = {
  Science:
    "You enjoy logical thinking, problem-solving, and understanding how things work. You’re curious about technology, research, innovation, or real-world systems.",
  Commerce:
    "You analyse people, money, systems, and business operations. You excel at planning, communication, and structured tasks.",
  Arts:
    "You are creative, expressive, and imaginative. You enjoy communication, storytelling, design, and people-centric work.",
  Vocational:
    "You learn best by doing, experimenting, and building. You enjoy practical, hands-on work and solving real-world challenges.",
};


// =========================
//     LEARNING PATHS
// =========================
export const LEARNING_PATHS = {
  Science: [
    "Learn basic coding (Python / Scratch)",
    "Explore robotics or electronics",
    "Try science fair projects",
    "Watch STEM educational channels",
  ],

  Commerce: [
    "Start basic finance learning",
    "Learn MS Excel / Sheets",
    "Explore entrepreneurship",
    "Watch business documentaries",
  ],

  Arts: [
    "Practice drawing/writing daily",
    "Learn design, editing, or animation",
    "Join creative workshops",
    "Follow artists & creators",
  ],

  Vocational: [
    "Try DIY repair projects",
    "Practice photography/video editing",
    "Learn at maker labs",
    "Join skill-building workshops",
  ],
};
