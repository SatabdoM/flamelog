// // src/lib/gpt.ts
// import { gptResponseSchema } from '@/modules/test-service/gpt.schema';

// const GPT_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
// const GPT_MODEL = 'mistralai/mixtral'; // Free model on OpenRouter

// export async function getFlameGPTResponse(prompt: string) {
//   try {
//     const res = await fetch(GPT_API_URL, {
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${process.env.OPENROUTER_API_KEY!}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         model: GPT_MODEL,
//         messages: [{ role: 'user', content: prompt }],
//       }),
//     });

//     if (!res.ok) throw new Error(`LLM failed: ${res.status}`);
//     const json = await res.json();
//     const rawText = json.choices[0]?.message?.content ?? '';

//     const parsed = gptResponseSchema.safeParse(JSON.parse(rawText));
//     if (!parsed.success) {
//       console.error('Invalid GPT format:', parsed.error.flatten());
//       throw new Error('Invalid GPT schema.');
//     }

//     return parsed.data;
//   } catch (err) {
//     console.error('GPT Error:', err);
//     return { isValid: false, tags: [], rationale: 'AI failed to respond correctly.' };
//   }
// }
