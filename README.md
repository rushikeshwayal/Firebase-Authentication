

# React Firebase Authentication App

## Overview

This project is a React application that integrates Firebase for user authentication. It includes features for user registration, login, password reset, and email verification. The application uses Firebase Authentication to manage user accounts and provides a seamless user experience with real-time updates.

## Features

- **User Registration**: Allows users to register with an email and password. Sends a verification email and logs out the user upon successful registration.
- **User Login**: Users can log in with email and password, or use Google authentication. Checks if the user's email is verified before granting access.
- **Password Reset**: Users can reset their password by providing their email address. A reset link is sent to their email.
- **Loading Indicator**: Displays a loading video while authentication state is being determined.

## Technologies Used

- **React**: Frontend library for building the user interface.
- **Firebase**: Backend service for authentication.
- **React Router**: For handling navigation within the app.

## Setup and Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**

   Make sure you have Node.js installed. Then, run the following command to install the project dependencies:

   ```bash
   npm install
   ```

3. **Configure Firebase**

   Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/). Obtain your Firebase configuration details and replace the values in `src/firebase/firebase.js` with your own.

4. **Run the Application**

   Start the development server:

   ```bash
   npm start
   ```

   Open `http://localhost:3000` in your browser to view the application.

## Components

- **`AuthProvider`**: Manages authentication state and provides context to the application.
- **`Register`**: Component for user registration.
- **`Login`**: Component for user login.
- **`ResetPassword`**: Component for password reset.
- **`AfterLogin`**: Component displayed after a successful login.
- **`Lodder`**: Component displaying a loading video while authentication state is being determined.

## Project Structure

```
src/
│
├── components/
│   ├── Register.js
│   ├── Login.js
│   ├── ResetPassword.js
│   ├── AfterLogin.js
│   └── Lodder.js
│
├── firebase/
│   └── firebase.js
│
├── App.js
├── index.js
└── styles/
    └── styles.css
```

## Contributing

Feel free to submit issues or pull requests if you find bugs or have suggestions for improvements.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions, please contact [your-email@example.com](mailto:your-email@example.com).


##Vercel: https://firebase-authentication-mu.vercel.app/
(https://firebase-authentication-mu.vercel.app/)This page was not restored from back/forward cache because a content script from the extension with ID fmkadmapgofadopljbjfkapdkoienihi received a message while the page was cached. This behavior will change shortly which may break the extension. If you are the developer of the extension, see 
