'use server';

import { adaptPortfolioToRecruiter } from '@/ai/flows/adapt-portfolio-to-recruiter';
import type { AdaptPortfolioToRecruiterOutput } from '@/ai/flows/adapt-portfolio-to-recruiter';
import { marked } from 'marked';


export interface ActionState {
  data: { adaptedPortfolioContent: string } | null;
  error: string | null;
  message: string;
}

// Dummy portfolio content. In a real app, this would be fetched from a CMS or a file.
const portfolioContent = `
# Sheethal - AI & Software Engineer

## About Me
A passionate and driven AI engineer with a knack for creating intelligent and user-friendly applications. I thrive in collaborative environments and enjoy tackling complex challenges.

## Experience
- **AI Engineer at TechCorp (2022-Present):** Developed and deployed machine learning models for various products, including a flagship AI diagnostic tool that improved accuracy by 15%. Specialized in computer vision and deep learning.
- **Machine Learning Researcher at Innovate AI Labs (2021-2022):** Contributed to research on natural language understanding. Published a paper on emotion detection in text at a top-tier AI conference.
- **Software Developer Intern at Innovate LLC (Summer 2021):** Worked on the frontend of a major web application using React and TypeScript, contributing to a 20% improvement in load times.

## Projects
- **AI Diagnostic Assistant:** A tool that assists doctors in diagnosing diseases using medical imaging (X-rays, MRIs). Built with TensorFlow and deployed on GCP.
- **AI Study Buddy:** A personalized learning assistant for students that generates quizzes and summaries from lecture notes. Uses NLP models for text processing.
- **Portfolio Orchestrator:** This dynamic website, built with Next.js and GenAI.

## Skills
- **Programming Languages:** Python, TypeScript, JavaScript, Java, SQL
- **AI/ML Frameworks:** TensorFlow, PyTorch, Scikit-learn, Keras, Hugging Face
- **Web Development:** React, Next.js, Node.js, Express, Tailwind CSS
- **Cloud & DevOps:** Google Cloud Platform (GCP), AWS, Docker, Kubernetes, CI/CD

## Education
- **Master of Science in Computer Science** - AI Specialization, Stanford University
- **Bachelor of Science in Software Engineering** - University of California, Berkeley
`;

export async function handleAdaptPortfolio(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const recruiterLinkedInProfile = formData.get('linkedin_profile') as string;

  if (!recruiterLinkedInProfile || recruiterLinkedInProfile.trim().length < 50) {
    return {
      data: null,
      error: 'Please provide a more detailed LinkedIn profile for better results.',
      message: 'Validation failed.',
    };
  }

  try {
    const result = await adaptPortfolioToRecruiter({
      recruiterLinkedInProfile,
      portfolioContent,
    });
    
    const htmlContent = marked.parse(result.adaptedPortfolioContent);

    return {
      data: { adaptedPortfolioContent: htmlContent as string },
      error: null,
      message: 'Portfolio adapted successfully.',
    };
  } catch (error) {
    console.error(error);
    return {
      data: null,
      error: 'An unexpected error occurred while adapting the portfolio. Please try again later.',
      message: 'AI generation failed.',
    };
  }
}
