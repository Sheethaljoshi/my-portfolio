'use server';
/**
 * @fileOverview A flow that adapts the portfolio to the recruiter's LinkedIn profile.
 *
 * - adaptPortfolioToRecruiter - A function that handles the portfolio adaptation process.
 * - AdaptPortfolioToRecruiterInput - The input type for the adaptPortfolioToRecruiter function.
 * - AdaptPortfolioToRecruiterOutput - The return type for the adaptPortfolioToRecruiter function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdaptPortfolioToRecruiterInputSchema = z.object({
  recruiterLinkedInProfile: z
    .string()
    .describe("The recruiter's LinkedIn profile content."),
  portfolioContent: z.string().describe('The current portfolio content.'),
});
export type AdaptPortfolioToRecruiterInput = z.infer<
  typeof AdaptPortfolioToRecruiterInputSchema
>;

const AdaptPortfolioToRecruiterOutputSchema = z.object({
  adaptedPortfolioContent: z
    .string()
    .describe('The adapted portfolio content.'),
});
export type AdaptPortfolioToRecruiterOutput = z.infer<
  typeof AdaptPortfolioToRecruiterOutputSchema
>;

export async function adaptPortfolioToRecruiter(
  input: AdaptPortfolioToRecruiterInput
): Promise<AdaptPortfolioToRecruiterOutput> {
  return adaptPortfolioToRecruiterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adaptPortfolioToRecruiterPrompt',
  input: {schema: AdaptPortfolioToRecruiterInputSchema},
  output: {schema: AdaptPortfolioToRecruiterOutputSchema},
  prompt: `You are an expert at tailoring portfolios to specific recruiters.\n\n  You will analyze the recruiter's LinkedIn profile and adapt the portfolio content to highlight the most relevant skills and experiences.\n\n  Recruiter LinkedIn Profile: {{{recruiterLinkedInProfile}}}\n  Portfolio Content: {{{portfolioContent}}}\n\n  Adapt the portfolio content to be more appealing to the recruiter, emphasizing the skills and experiences that align with their profile. Return the adapted portfolio content.  The adapted content should reuse as much of Portfolio Content as possible, but can also add new content to better target the recruiter.  Use markdown formatting.
  `, // eslint-disable-line max-len
});

const adaptPortfolioToRecruiterFlow = ai.defineFlow(
  {
    name: 'adaptPortfolioToRecruiterFlow',
    inputSchema: AdaptPortfolioToRecruiterInputSchema,
    outputSchema: AdaptPortfolioToRecruiterOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
