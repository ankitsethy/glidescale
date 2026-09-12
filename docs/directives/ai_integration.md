# Directive: AI Integration (Gemini)

**Purpose**: Rules for working with the Google Gemini API integration in the Glidescale website, specifically the `StrategyGenerator` interactive demo.

---

## When to Use This Directive
- Modifying `StrategyGenerator.tsx` or `geminiService.ts`
- Changing the AI prompt or output format
- Debugging Gemini API errors
- Upgrading the Gemini model version
- Adding new AI-powered features

---

## Architecture

```
StrategyGenerator.tsx
    ↓ calls
services/geminiService.ts
    ↓ calls
Google Gemini API (gemini-2.5-flash-preview-04-17)
    ↓ returns
HTML-formatted strategy string
    ↓ rendered via
dangerouslySetInnerHTML (sanitize if user content is ever involved)
```

---

## Environment Setup

API key location: `glidescale antigravity file/.env.local`
```
VITE_GEMINI_API_KEY=your_key_here
```

Access in code:
```ts
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
```

**Rules:**
- Never hardcode the API key
- Never log `apiKey` to console
- Never include `apiKey` in error messages shown to users
- The `VITE_` prefix is mandatory for Vite to expose the variable to the client

---

## Current Model

```
gemini-2.5-flash-preview-04-17
```

When upgrading: check the [Google Gemini changelog](https://ai.google.dev/gemini-api/docs/models/gemini) for breaking changes in the request/response format.

---

## Prompt Engineering Rules

The current prompt generates a **3-step strategic AI infrastructure roadmap** based on:
- `industry` — the user's business vertical
- `goal` — their primary growth objective

**Output format**: HTML (`<h3>`, `<p>`, `<ul>`, `<li>` tags)

When modifying the prompt:
1. Always request HTML-formatted output explicitly
2. Specify the exact structure (3 steps, each with title and description)
3. Keep the prompt under 500 tokens for cost efficiency
4. Test with at least 3 different industry/goal combinations before deploying

---

## Error Handling

All Gemini calls must be wrapped in try/catch:

```ts
try {
  const response = await generateStrategy(industry, goal);
  setResult(response);
} catch (error) {
  // Log internally for debugging
  console.error('[StrategyGenerator] Gemini error:', error);
  // Show user-friendly message — never raw error
  setError('Unable to generate strategy. Please try again.');
}
```

**Never surface:**
- Raw API error objects
- HTTP status codes
- Model names or API internals
- The API key in any form

---

## Loading State

Always show a loading state during the API call:
```tsx
{isLoading && (
  <div className="flex items-center gap-3 text-ink-60">
    <div className="animate-spin h-5 w-5 border-2 border-accent-500 border-t-transparent rounded-full" />
    Generating your strategy...
  </div>
)}
```

---

## Rate Limits & Cost

- Gemini Flash is low-cost but has per-minute request limits
- In production, implement debounce (300-500ms) on the generate button to prevent spam
- Consider adding a cooldown (5 seconds) between successive calls from the same user session
- Free tier: 15 RPM, 1 million TPM

---

## Adding New AI Features

When adding a new Gemini-powered feature:
1. Add a new function in `geminiService.ts` — do not inline API calls in components
2. Name the function descriptively: `generateStrategy`, `analyzeNiche`, `buildRoadmap`
3. Return typed data, not raw API responses
4. Add the feature to `types.ts` if it introduces new data shapes
5. Always show loading state + error state in the UI

---

## Edge Cases

- **Missing API key**: `StrategyGenerator` will fail silently if `VITE_GEMINI_API_KEY` is not set. The component should check for the key on mount and show a disabled/placeholder state if absent.
- **Dev server restart required**: After adding/changing `.env.local`, restart the Vite dev server — env changes don't hot-reload.
- **HTML injection**: The API response is rendered via `dangerouslySetInnerHTML`. This is safe as long as the input comes from Gemini (server-controlled). If user input is ever echoed back in the prompt and then rendered, XSS becomes a risk — sanitize with DOMPurify.
- **Model deprecation**: Preview models (`-preview-*`) get deprecated. When Gemini deprecates the current model, update the model string in `geminiService.ts` and test output format hasn't changed.
- **Empty response**: Occasionally Gemini returns an empty or malformed response. Always check `response.text` exists and has content before setting state.
- **Rate limit (429)**: If users hit the generate button rapidly, implement exponential backoff or disable the button during loading.
