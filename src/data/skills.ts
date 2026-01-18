interface Skill {
  name: string;
  level?: number; // 0-100
  category?: 'frontend' | 'backend' | 'mobile' | 'tools' | 'database' | 'other';
}

export const skills: Skill[] = [
{ name: "C++", level: 90, category: "backend" },
{ name: "Python", level: 65, category: "backend" },
{ name: "HTML", level: 90, category: "frontend" },
{ name: "React Native", level: 85, category: "mobile" },
{ name: "React", level: 75, category: "frontend" },
{ name: "TypeScript", level: 90, category: "frontend" },
{ name: "Video Editing", level: 95, category: "other" },
{ name: "Microsoft Access", level: 70, category: "database" },


  
];