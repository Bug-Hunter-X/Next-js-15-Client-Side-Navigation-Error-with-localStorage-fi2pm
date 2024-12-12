```javascript
// pages/aboutSolution.js

export default function About() {
  let user = null;
  try {
    user = JSON.parse(localStorage.getItem('user')) || null;
  } catch (error) {
    console.error('Error parsing user data from localStorage:', error);
  }

  return (
    <div>
      <h1>About Page</h1>
      {user ? <p>Welcome, {user.name}!</p> : <p>No user found.</p>}
    </div>
  );
}
```