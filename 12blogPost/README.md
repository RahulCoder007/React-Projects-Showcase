# Blog Post

## Features

### User Authentication:
Sign up, log in, and log out using Appwrite backend.
### Protected Routes:
Only authenticated users can add or edit posts.
### Create, Edit, and View Posts:
Rich text editor, image upload, and post management.
### Responsive UI:
Built with reusable components and Tailwind CSS.
### Global State Management:
Redux Toolkit for authentication and app state.
### Fast Development:
Powered by Vite for instant reloads and builds.

### Folder Structure:
```
src/
  App.jsx           # Main app component
  main.jsx          # Entry point, router and Redux provider
  appwrite/         # Appwrite integration (auth, config)
  assets/           # Images and icons
  components/       # Reusable UI components
  conf/             # Environment/config logic
  pages/            # Route-level components (Home, Login, Signup, etc.)
  store/            # Redux slices and store setup
public/             # Static assets
.env                # Environment variables
vite.config.js      # Vite configuration

```

### Getting Started
Install dependencies
```npm install ```

### Configure environment variables
Copy .env.sample to .env and fill in your Appwrite credentials.

### Run the development server
```npm run dev```

### Usage
* Sign Up / Log In: Create an account or log in to access protected features.

* Add/Edit Posts: Authenticated users can create and edit blog posts with images and rich text.

* View Posts: All users can browse published posts.
