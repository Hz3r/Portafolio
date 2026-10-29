export interface SkillGroup {
  id: string;
  name: { es: string; en: string };
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    name: { es: 'Lenguajes', en: 'Languages' },
    items: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS'],
  },
  {
    id: 'frontend',
    name: { es: 'Frontend', en: 'Frontend' },
    items: ['Astro', 'React', 'Tailwind CSS', 'Next.js'],
  },
  {
    id: 'backend',
    name: { es: 'Backend y datos', en: 'Backend & data' },
    items: ['Node.js', 'REST APIs', 'PostgreSQL', 'Supabase'],
  },
  {
    id: 'tools',
    name: { es: 'Herramientas', en: 'Tools' },
    items: ['Git', 'GitHub', 'Railway', 'Vercel', 'Docker'],
  },
  {
    id: 'ai',
    name: { es: 'IA y vibecoding', en: 'AI & vibecoding' },
    items: ['Cursor', 'Claude', 'Copilot', 'Prompt engineering'],
  },
];
