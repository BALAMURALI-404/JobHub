# Job Hub - Pages Structure

## 1. Authentication Pages

- **Login** (`/login`)
  - **Purpose**: Allows users to log in to their existing account.
  - **Components**:
    - Email and password fields.
    - "Forgot Password" link.
    - Login button.
    - "Sign Up" link to navigate to the signup page.
    - Login with Google Account.

- **Signup** (`/signup`)
  - **Purpose**: Allows users to register for the platform (with a unified account system).
  - **Components**:
    - Name, email, and password fields.
    - Sign up button.
    - "Already have an account?" link to the login page.

---

## 2. Main Pages

- **Home** (`/`)
  - **Purpose**: Displays smart job and employee recommendations based on user preferences.
  - **Components**:
    - Job recommendations for job seekers.
    - Candidate recommendations for recruiters.
    - Smart recommendation algorithm based on data in the **Required** tab.

- **Search** (`/search`)
  - **Purpose**: Allows users to search for job openings or candidates based on various filters.
  - **Components**:
    - Search bar.
    - Filters (Location, Skills, Experience, etc.).
    - Search results with job openings or profiles of candidates.

- **Required** (`/required`)
  - **Purpose**: Users define whether they are job seekers, hiring, or both, to adjust their preferences for job recommendations.
  - **Components**:
    - New Requirement button.
    - List of Active requirements (with details of job seeker/recruiter, job role, timing, and other relevant information).

- **Profile** (`/profile`)
  - **Purpose**: View and update user profiles (skills, job preferences, and job postings).
  - **Components**:
    - Display user information: name, profile picture, skills, and experience.
    - Edit profile button.
