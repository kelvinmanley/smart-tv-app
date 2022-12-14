# Smart TV Application

Have you been looking for that special app that allows you to navigate through awe-inspiring photos based on carefully curated topics? Well, look no further! Smart TV App is a simple but spantastic application which will satisfy your browsing needs by displaying your library of images in a horizontally scrolling grid.

<br>

## Getting Started

To run this application locally you'll need to have Node.js and NPM installed - [here](https://treehouse.github.io/installation-guides/mac/node-mac.html) is a useful guide for getting these up and running.

This project utilises Yarn for its package management (see [here](https://yarnpkg.com/getting-started/install/) for installation) however feel free to use NPM if you find this more suitable.

<br>

Once you've cloned this repo to your local you can install all the required packages by running:

```bash
yarn install
# or
npm install
```

<br>

Before you run this application you'll need to create a `.env` file in the root folder and add the environment variables. Please request these directly from the developer.

Once you've added the `.env` file you can run these commands to start the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to access Smart TV Application.

<br>

## Feature flags

This application utilises feature flags which allows for pushing features through to production safely behind a controlled, access layer. Flags can be toggled per environment.

With the current implementation, there is only one flag which limits access to the application – a "Watch this space..." screen displays when the flag is toggled off.

If you need to toggle a flag for an environment you can either request this to be done by the admin or request admin access to the feature flag service.

Read more at https://www.growthbook.io/

<br>

## Viewing the live application

The Smart TV App can be viewed at https://smart-tv-app-henna.vercel.app/. As mentioned previously, you may need to toggle the production feature flag to view the application.

_Happy viewing!_
