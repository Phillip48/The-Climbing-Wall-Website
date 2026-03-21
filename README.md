# The-Climbing-Wall-Site

[![Version](https://img.shields.io/badge/version-v1.0.0-blue.svg?cacheSeconds=2592000)](https://github.com/Phillip48/climbing-wall-site)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/Phillip48/climbing-wall-site)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Phillip48/climbing-wall-site/graphs/commit-activity)

[View the live site →](https://climbing-wall-site.vercel.app)

## Table of contents

- [The-Climbing-Wall-Site](#the-climbing-wall-site)
  - [Table of contents](#table-of-contents)
  - [The Project](#the-project)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  - [Collaborators](#collaborators)

## The Project

A landing page for The Climbing Wall mobile app, built with React and Vite and deployed on Vercel. The site includes the following:

- A hero section showcasing the app with a real screenshot of the Profile & Stats screen
- A stats strip highlighting key app features at a glance
- A screenshots section displaying all five screens of the app: Home, Projects, Sends, Diary, and Profile
- A features section covering the core functionality of the app including Projects, Sends, Auto Grade Tracking, Calendar Heatmap, Stats & Graphs, and Diary
- A "How it works" section walking visitors through the flow from creating a project to marking a send
- A call to action linking to the live app demo on Appetize
- A Privacy Policy page compliant with Google Play's user data and privacy requirements
- Fully responsive design that works across mobile, tablet, and desktop
- Scroll-triggered animations using a custom IntersectionObserver hook
- CSS Modules for scoped, maintainable styling
- All content centralized in a single `constants.js` file for easy updates

## Usage

**Deployment**

This site is deployed via [Vercel](https://vercel.com). Any push to the `main` branch automatically triggers a redeployment.

To deploy your own instance:

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Vite — no extra configuration needed
4. Hit **Deploy**

**Project Structure**

```
climbing-wall-site/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── constants.js
    ├── hooks/
    │   └── useInView.js
    ├── assets/
    │   └── screenshots/
    │       ├── home.png
    │       ├── projects.png
    │       ├── sends.png
    │       ├── diary.png
    │       └── profile.png
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── PhoneMockup.jsx
        ├── StatsStrip.jsx
        ├── Screenshots.jsx
        ├── Features.jsx
        ├── HowItWorks.jsx
        ├── CTA.jsx
        ├── SectionLabel.jsx
        ├── PrivacyPolicy.jsx
        └── Footer.jsx
```

**Updating Content**

All site copy, feature descriptions, step descriptions, stats, and navigation links live in `src/constants.js`. Edit that file to update any text on the site without touching the components.

To swap out screenshots, replace the images in `src/assets/screenshots/` keeping the same filenames.

## Questions

If you have questions or want to share comments, we will be glad to hear from you.

## Collaborators

* Phillip Pereira - https://github.com/Phillip48

## About

Landing page and marketing site for The Climbing Wall mobile app — a climbing progress tracker for boulderers and top-ropers.
