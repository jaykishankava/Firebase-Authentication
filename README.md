React-Redux CRUD Application with Firebase Integration
Overview
This project is a React and Redux-based CRUD (Create, Read, Update, Delete) application. It allows users to log in, add tasks, and view or manage the tasks. The project uses localStorage for login data and integrates with Firebase for the backend and Redux for state management.

Features
Login System: Users can log in with an email and password stored in localStorage.
Add Task: Logged-in users can add tasks with details such as name, email, task description, gender, hobbies, and city.
View and Manage Tasks: Users can view a list of tasks, delete tasks, or navigate to an edit page to modify them.
Firebase Integration: Firebase is used for storing application data and configurations.
React-Redux Integration: Application state is managed using Redux.
Project Structure
Login Component: Handles user authentication using data stored in localStorage.
Add Component: Allows users to add a task with fields like name, email, gender, and more. It dispatches actions to add users.
View Component: Displays all tasks in a table, with options to delete or edit records. The list of users is fetched from the Redux store.
Header Component: Common header included across pages.
Firebase Setup: Firebase configuration for backend services.
Redux Actions & Reducers: Actions like addUser, deleteUser, viewUser are dispatched to update the state. The reducers handle changes to the state.
Technologies Used
React: Frontend framework for building user interfaces.
Redux: State management library.
React-Redux: Integration between React and Redux.
Firebase: Backend as a service, used for storing and managing user data.
React Router: Used for navigation between pages.
React Icons: Icon library for adding icons to components.
Toastify: Library for displaying notifications.

