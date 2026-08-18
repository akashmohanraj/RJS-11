# React Practical – Conditional Rendering

## Title

Use Conditional Rendering to Show a Welcome Message After Login

---

## Aim

To implement conditional rendering in React using:

- `useState` Hook
- Event Handling (`onClick`)
- Conditional Rendering
- Ternary Operator

---

## Problem Statement

Create a React application using **Create React App**.

Initially, the application should display a **Login** button.

When the user clicks the **Login** button:

- Display the message **Welcome Student**
- Hide the Login button.

The **Welcome Student** message should be displayed only after login.

---

## Concepts to be Used

The following React concepts must be used:

1. `useState`
2. Event Handling using `onClick`
3. Conditional Rendering
4. Ternary Operator

---

# Instructions

### Step 1: Open the GitHub Codespace

Open your GitHub Classroom repository.

Click:

**Code → Codespaces → Create codespace on main**

---

### Step 2: Create the React Application

Open the terminal in Codespaces and execute:

```bash
npx create-react-app .
```

Wait until the React application is created successfully.

---

### Step 3: Install Dependencies

Run:

```bash
npm install
```

---

### Step 4: Start the Application

Run:

```bash
npm start
```

The React application will open in the browser.

---

### Step 5: Complete the Program

Open:

```text
src/App.js
```

Complete the program according to the requirements.

---

## Program Requirements

Your program must satisfy all the following requirements:

### 1. Create Login State

Use the `useState` Hook to maintain the login status.

The initial login status should be:

```text
false
```

---

### 2. Login Button

Initially display:

```text
Login
```

The Login button must use an `onClick` event.

When the button is clicked, change the login state.

---

### 3. Conditional Rendering

Use a **ternary operator** to conditionally display the content.

The application should display:

```text
Welcome Student
```

when the user is logged in.

Otherwise, it should display:

```text
Login
```

---

## Expected Output

### Initial Screen

```text
Login
```

### After Clicking Login

```text
Welcome Student
```

The Login button should no longer be displayed.

---

# Folder Structure

After completing the practical, your repository should have the following structure:

```text
React-Practical/
│
├── .github/
│   └── workflows/
│       └── autograding.yml
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   └── ...
│
├── tests/
│   └── test.js
│
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

---

# Important Instructions

- Write your solution in **`src/App.js`**.
- Use `useState`.
- Use `onClick` for the Login button.
- Use a **ternary operator** for conditional rendering.
- Display exactly **Welcome Student** after login.
- Do not modify `tests/test.js`.
- Do not modify `.github/workflows/autograding.yml`.
- Do not delete the `tests` folder.
- Do not delete the `.github` folder.
- Do not change the test cases.
- Do not hard-code the final output without implementing `useState` and conditional rendering.

---
After pushing, GitHub Actions will automatically run the test cases.

Go to:

**GitHub Repository → Actions**

to view your test result.

---

# Mark Distribution

| Criteria | Description | Marks |
|---|---|---:|
| 1 | `useState` Hook is used | 2 |
| 2 | `onClick` event handling is implemented | 2 |
| 3 | Ternary operator is used for conditional rendering | 2 |
| 4 | `Welcome Student` is displayed after login | 2 |
| 5 | Login button is displayed initially | 2 |
| | **Total** | **10** |

---

# Evaluation

### 9–10 Marks
Excellent

### 7–8 Marks
Very Good

### 6–7 Marks
Good

### Below 6 Marks
Needs Improvement

---

# GitHub Actions

The submitted program will be automatically evaluated using GitHub Actions.

The following checks will be performed:

```text
1. Install Dependencies
        ↓
2. Build React Application
        ↓
3. Check useState
        ↓
4. Check onClick
        ↓
5. Check Ternary Operator
        ↓
6. Check Login
        ↓
7. Check Welcome Student
```

The final score will be calculated out of **10 marks**.
