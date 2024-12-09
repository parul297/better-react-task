# React Sign Up and Login Forms

This project contains a simple React application with two forms: Sign Up and Login. The forms use Formik for form handling, Yup for validation, and include features such as password strength indicator and "Remember Me" functionality.

## How to Run the Project

1. Clone the repository:
   git clone <repository-url>
Navigate to the project folder:


cd <project-folder>
Install the dependencies:

npm install
Run the development server:

npm start
The application should be accessible at http://localhost:3000 in your browser.

Design Choices
Formik is used for form handling and validation to streamline form management.
Yup is used for schema-based validation of form inputs.
Password strength indicator is added for the Sign Up form to enhance user experience.
"Remember Me" checkbox in the Login form saves the email in local storage for convenience.

Assumptions and Limitations
This project assumes the user is using a modern web browser.
No third-party UI libraries like Material-UI or Ant Design were used, relying solely on plain CSS for styling.
The password strength indicator is basic and only checks length for simplicity.