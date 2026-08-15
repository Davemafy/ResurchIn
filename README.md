# ResurchIn

Website for ResurchIn, a research fellowship/community focused on helping students get into research and understand the process better.

This is the current production version of the site rebuilt with Next.js and TypeScript.

## Stack

* Next.js
* TypeScript
* CSS
* Firebase Hosting

## Running it locally

Clone the repo and install the dependencies.

```bash
npm install
```

Then start the dev server:

```bash
npm run dev
```

Open `http://localhost:3000`.

For a production build:

```bash
npm run build
```

## Pages

The site currently includes:

* Home
* About
* Program
* Curriculum
* Mentors
* Community
* Apply
* Application success page
* Resources
* Resource article page

## Performance

I also spent some time cleaning up the production version, mostly around images and unnecessary client-side work.

Images have smaller responsive versions so mobile devices don't have to load the same large files as desktop, and most of the site can render without turning every component into a client component.

## Project structure

```text
app/          pages and routes
components/   shared components
public/       images, fonts and other assets
```

## Deployment

The site is set up to be exported and hosted on Firebase Hosting.

---

Still working on the site, so I'll update this README when anything important changes.
