# React Portfolio

This is a personal portfolio website built with React, Tailwind CSS, and Vite. It showcases projects, experiences, and contact information.

## Table of Contents

- [React Portfolio](#react-portfolio)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [Components](#components)
  - [Constants](#constants)
  - [Styling](#styling)
  - [Configuration](#configuration)
  - [Scripts](#scripts)
  - [Dependencies](#dependencies)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/react-portfolio.git
2. Navigate to the project directory:
   cd react-portfolio
3. Install dependencies:
   npm install

## Usage

1. Start the development server:
   ```sh
   npm run dev
2. Open your web browser and visit http://localhost:5173 to view the portfolio.
3. To build the project for production:
   ```sh
   npm run build
4. To preview the production build:
   ```sh
   npm run preview
5. To run linting:
   ```sh
   npm run lint
## Project Structure
📂 Project Root
├── 📄 .gitignore
├── 📂 .vscode/
│ └── 📄 settings.json
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 package.json
├── 📄 postcss.config.js
├── 📂 public/
│ └── 📄 favicon.ico
├── 📄 README.md
├── 📂 src/
│ ├── 📄 App.jsx
│ ├── 📂 asset/
│ │ ├── 🖼 about1.jpg
│ │ ├── 🖼 Pda.png
│ │ ├── 🖼 PdaProfile.jpg
│ │ ├── 🖼 PdaProfile.png
│ │ └── 📂 projects/
│ ├── 📂 components/
│ │ ├── 📄 About.jsx
│ │ ├── 📄 Contact.jsx
│ │ ├── 📄 Experience.jsx
│ │ ├── 📄 Hero.jsx
│ │ ├── 📄 Navbar.jsx
│ │ ├── 📄 Projects.jsx
│ │ └── 📄 Technologies.jsx
│ ├── 📂 constants/
│ │ └── 📄 index.js
│ ├── 📄 index.css
│ └── 📄 main.jsx
├── 📄 tailwind.config.js
└── 📄 vite.config.js
## Components
- About: Displays information about you.
- Contact: Provides contact information and a way to get in touch.
- Experience: Lists your professional experiences.
- Hero: The main section with your name and title.
- Navbar: The navigation bar with links to social media.
- Projects: Showcases your projects.
- Technologies: Lists the technologies you are proficient in.

## Constants
Defined in index.js:

- HERO_CONTENT: Content for the Hero section.
- ABOUT_TEXT: Content for the About section.
- EXPERIENCES: Array of experience objects.
- PROJECTS: Array of project objects.
- CONTACT: Contact information.

## Styling
Styling is done using Tailwind CSS. The main stylesheet is index.css.

## Configuration
- PostCSS: Configured in postcss.config.js.
- ESLint: Configured in eslint.config.js.
- Tailwind CSS: Configured in tailwind.config.js.
- Vite: Configured in vite.config.js.

## Scripts
Defined in package.json:

- dev: Starts the development server.
- build: Builds the project for production.
- lint: Lints the code.
- preview: Previews the production build.

## Dependencies
- framer-motion: For animations.
- react: React library.
- react-dom: React DOM library.
- react-icons: For icons.