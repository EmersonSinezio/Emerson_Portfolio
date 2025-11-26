import { z } from "zod";

export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    longDescription: string;
    image: string;
    gif?: string;
    demoUrl?: string;
    githubUrl?: string;
    howToRun: string[];
    screenshots: string[];
    techStack: string[];
    tags: string[];
}

export interface Skill {
    name: string;
    proficiency: number;
    category: string;
}

export interface TimelineEntry {
    id: number;
    type: "experience" | "education";
    title: string;
    organization: string;
    location?: string;
    startDate: string;
    endDate?: string;
    description: string;
    technologies: string[];
}

export const contactFormSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(1, "Message is required"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
