# **Jobify**

**Jobify** is a full-stack MERN-based CRUD web application designed to help users manage their job applications effectively. Users can add, edit, and delete job entries while tracking their job search journey.

## **Tech Stack**
- MongoDB
- Express.js
- React
- Node.js (MERN)
- JWT (JSON Web Tokens)

## **Core Features**
- **User Authentication**: Secure account management with JWT for authentication, ensuring privacy for each user’s job data.
- **Job Application Management**: Add, edit, and delete job applications.
- **Job Visualization**: Jobs data is represented using interactive charts, allowing users to track progress visually.
- **Advanced Searching**: Implemented debounce-based searching to improve the search experience with real-time filtering.
- **Pagination & Sorting**: Jobs can be sorted and paginated to efficiently manage large datasets.
- **Responsive UI**: Designed to be fully responsive, providing a seamless experience across devices.

## **Impact**
- Helped users stay organized in their job search by providing efficient tools for managing applications, visualizing progress, and enhancing the overall user experience with advanced features like charts and sorting.

## **Live Demo**
🌐 [Jobify Live](https://jobify-elnashar.onrender.com/)

#### Run The App Locally

```sh
npm run install-dependencies
```

- rename .env.temp to .env
- setup values for - MONGO_URL, JWT_SECRET, JWT_LIFETIME

```sh
npm start
```
