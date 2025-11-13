# Question C — Frontend Login Page (React + Vite)

This folder contains the solution for **Question C**.  
The task was to build a simple **login page** using React, with client-side validation and no backend.


## Features
- Email and password inputs with validation  
- Simulated user list (frontend only)  
- Error and success notifications with auto-hide  
- “Show / Hide Password” toggle  
- “Forgot password?” simulated link  
- Responsive, clean layout (Tailwind CSS planned/ Pure CSS optional)


## Validation Rules
**Email**
- Required  
- Must exist in the simulated valid user list  

**Password**
- 8–16 characters  
- Includes at least one uppercase letter, one lowercase letter, one number, and one symbol  
- Shows error if incorrect or invalid  

**Successful Login**
- Displays `Welcome, [user email]!`  
- Includes a Logout button returning to the login page  


## Tech Stack
- **React 18 + Vite**
- **JavaScript (ES6+)**
- **Optional:** Tailwind CSS or pure CSS for styling


## Run Locally
```bash
cd C
npm install
npm run dev

