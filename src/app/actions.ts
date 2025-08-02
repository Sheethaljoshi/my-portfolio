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
# Sheethal Joshi Thomas - Software Developer

Kochi, Kerala, India | Ph: +91 8921773573 | sh33thal24@gmail.com

## WORK AUTHORIZATION
US CITIZEN

## EDUCATION
**Cochin University of Science and Technology, School of Engineering** - Kerala, India
*Bachelor of Technology (B.Tech) - Computer Science and Engineering*

## EXPERIENCE
**Software Developer Intern | KDex Global (On-site)**
*Durham, North Carolina - USA (May 2025 - July 2025)*
- Built and maintained key backend APIs in Golang, optimized PostgreSQL queries, and streamlined data processing pipelines to support new product features and improve backend throughput.
- Led the build and static hosting of product documentation using React, Docusaurus, AWS S3, and CloudFront, enabling fast and scalable self-serve support.

**Software Developer Intern | Global Health Opinion (Remote)**
*Kochi, Kerala - India (March 2025 - May 2025)*
- Built scalable, interactive medical dashboards for healthcare professionals in Next.js using TypeScript, and integrated backend services via C# and REST APIs, enabling real-time insights for healthcare operations.
- Worked in a unified monorepo, streamlining development and data load speeds by 20% via API optimization and frontend rendering improvements; ensured feature robustness through automated tests and performance profiling.

## ACHIEVEMENTS
- Achieved World Rank 18, All India Rank 1 at the European Rover Challenge 2024 held at Krakow, Poland as the Lead of Navigation and Communications
- Semi-Finalist in the world famous hackathon- HackMIT, 2024 at the Massachusetts Institute of Technology, USA
- Secured Top 5 in Kerala’s Largest Gen AI Hackathon, TinkHack 2.0 hosted in Thrikkakara, Kochi

## CERTIFICATIONS
- IBM Full Stack Developer Professional Certiﬁcation
- ERC Space and Robotics Industry Standard Programme Certiﬁcation issued by European Space Foundation

## SKILLS
- **Languages:** English, Malayalam, Hindi
- **Technical Skills:** Python, C++, C#, Java, TypeScript, JavaScript, React.js, Next.js, FastAPI, Node.js, Express.js, Selenium, Go, Firebase, MySQL, PostgreSQL, MongoDB Atlas, RESTful APIs, Docusaurus, AWS, Docker, TensorFlow, Keras, Scikit-learn, OpenCV, Git (Version Control), LLMs, Deep Learning

## PERSONAL PROJECTS
### AI DIAGNOSTIC ASSISTANT
- Built an AI-powered assistant combining OpenAI's Realtime API, Hume.ai (for sentiment/emotion analysis), and GPT-4, enabling users to describe symptoms conversationally while receiving emotionally adaptive responses.
- Designed a responsive user interface using React.js with TypeScript, and implemented backend services and routing via FastAPI, integrating structured triage logic and medical prompt chaining.
- Selected as a semi-finalist at MIT’s flagship global hackathon

### AI STUDY BUDDY
- Developed an AI tool that converts user-provided content into dynamic study aids—flashcards, concept maps, quizzes—by detecting cognitive preferences through behavioral analytics and NLP profiling.
- Enabled real-time, low-latency voice interaction using Whisper, DALL·E for custom visuals, and GPT-4 for personalized quiz generation and summarization.
- Ranked Top 5 at Kerala’s largest GenAI hackathon (TinkHack 2.0, 2025) for innovation and usability.

### ROVER WAYPOINT CONTROLLER
- Designed a real-time autonomous navigation system using graph search and AI-based terrain classification.
- Integrated with real-time communication using WebSockets over TCP/IP for monitoring and updates, and utilized WebRTC for video transmission in field deployments.
- Contributed to Horizon Mars Rover Team World Rank 18, All India Rank 2 at ERC 2024.

## REFERENCES
- **Certiﬁcates:** https://drive.google.com/drive/folders/1xWROUPyNRbVLBAtv7RooqaX7qpA6kpdC?usp=sharing
- **Github:** https://github.com/Sheethaljoshi
- **LinkedIn:** https://www.linkedin.com/in/Sheethaljoshi
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
