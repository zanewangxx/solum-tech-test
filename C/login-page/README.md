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

## Simulated user list
<pre>
Email - Password
"test1@example.com": "Test1111!"
"test2@example.com": "Test2222!"
</pre>
## Run Locally
```bash
Open your terminal and navigate to the project folder
cd C, cd login-page
npm install
npm run dev OR npm run dev -- --host (for mobile device)

After running the command, you’ll see an output like:
Local:   http://localhost:5173/
Network: http://192.168.x.x:5173/

Now open the browser and visit http://localhost:5173/
Mobile device: Copy the Network URL from the terminal output (for example:
http://192.168.x.x:5173)
Open a browser like Safari or Chrome on the phone and visit that address.