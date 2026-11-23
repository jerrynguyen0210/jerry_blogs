# Jerry's blog

Personal site for Phuoc (Jerry) Nguyen. Posts are Markdown files. The site is built with [Astro](https://astro.build) and published at:

https://jerrynguyen0210.github.io/jerry_blogs/

## One-time GitHub Pages setting

The deploy workflow is already in this repo. GitHub will not use it until you change one setting. That setting cannot be committed from here.

1. Open this repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push a commit to `main`, or open the **Actions** tab and run **Deploy to GitHub Pages**.

After that, every push to `main` builds the site and publishes it. The first deploy can take a minute. The address above will not work until this is done.

## Write a new post

1. Copy `templates/post.md` to `src/content/posts/my-new-post.md`.
   The file name is the link. `my-new-post.md` is published at `/jerry_blogs/posts/my-new-post/`.
   Use lowercase letters and hyphens, with no spaces.
2. Edit the title, date, category, and the words.
   Category is one of **Tech**, **Career**, or **Life**.
3. Leave `draft: true` while you are still writing. Drafts show in the local preview and stay off the live site.
4. Set `draft: false` when you want it published.
5. Commit the file and push it to `main`.

That is the whole publishing flow.

## Preview on your machine

You need Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:4321/jerry_blogs/

To check the production build:

```bash
npm run build
npm run preview
```

Then open http://localhost:4321/jerry_blogs/

## Links and images

The site lives under `/jerry_blogs/` because it is a GitHub project site. You do not type that prefix inside a post.

- Link to another page like this: `[About](/about/)`.
- Put images in `public/images/` and use them like this: `![A photo](/images/photo.jpg)`.

The base path is added when the site builds. The RSS feed is https://jerrynguyen0210.github.io/jerry_blogs/rss.xml

## Change the bio and the placeholder links

- About page copy: `src/pages/about.astro`
- Short description, GitHub, LinkedIn, and email: `src/config.ts`
- LinkedIn and email in that file are placeholders. Swap in your real ones.
- The public URL and the `/jerry_blogs` base path: `src/site.config.mjs`. Leave this alone unless the repository moves.

## Where things live

- Posts: `src/content/posts/`
- Post template: `templates/post.md`
- Deploy workflow: `.github/workflows/deploy.yml`
- Design: `src/styles/global.css`
