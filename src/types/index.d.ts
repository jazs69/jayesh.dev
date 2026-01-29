declare module '@/data/projects' {
  export interface Project {
    id: string;
    title: string;
    category: string;
    image: string;
    businessProblem: string;
    technicalSolution: string[];
    results: {
      metric: string;
      value: string;
      description: string;
    }[];
    technologies: string[];
    link?: string;
  }

  export const projectsData: Project[];
}
