# Next.js 15 Client-Side Navigation Error with localStorage

This repository demonstrates a common error encountered in Next.js 15 applications when navigating between pages that rely on client-side data, such as data stored in `localStorage`. The `about.js` component attempts to parse JSON from `localStorage`, but fails if no data exists, resulting in a runtime error.

## Steps to Reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page.
5. Observe the error in the console if no user data exists in localStorage.

## Solution

The solution involves adding error handling to gracefully manage cases where `localStorage.getItem('user')` returns `null`.  The `aboutSolution.js` file provides a corrected version of the component.
