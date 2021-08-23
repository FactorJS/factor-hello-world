<img src="./icon.svg" width="100px">

# Factor Hello World

This is the repo for Darwin's blog content which includes guides, articles, news updates, etc.

It consists of markdown files and a "map" file which tells the system how to handle things like publication and indexes.

This document will outline how to use the repo to create new content, how to run the blog app to preview your content, and a few tips and tricks we've learned to help you do awesome work.

## Creating Content

To create content here you will just be writing markdown in a markdown file and referencing images in the same folder.

## Installing the Repo

Once you've got the basic software and extensions going, you'll need to clone (i.e. copy) this repository to your computer.

```bash
git clone https://github.com/fiction-com/darwin-blog
```

### Content Files

Once you have cloned the repo, you'll find the blog files and folders in the `/content` directory. If you don't need to 'preview' them in their final format, you should be good to just edit the markdown files here with your content.

## Writing Blog Posts and Articles

Writing rich content with this repository should be pretty straight forward if you're familiar with markdown. There are just a few things you'll need to know:

### Adding Images

Add images for your blog posts into the same folder as your markdown and then just reference them with their "relative path". This is what it looks like to include an image named `myRadImage.jpg` which is located in the same folder as your markdown:

```markdown
![My Rad Image](./myRadImage.jpg)
```

With images follow these guidelines:

- Size Optimization: make sure images are optimized for the web. Don't include full size multi-MB images
- Use any of the following formats: `.jpg`, `.webp`, `.svg`, `.png`, or `.gif`

## Formatting The Markdown File Attributes

Each markdown post has an area at the top known as "frontmatter" where you add the post attributes and meta information. The blog supports the following fields:

```md
---
title: My Title
description: My Description
excerpt: Short overview of article
author: Elvis Presley
username: elvis
email: elvis@fiction.com
date: 2025-6-26
---
```

- Note that your avatar image is generated via [[gravatar](https://en.gravatar.com/)] and the email provided
- Title and description are used on the post as well as the meta title/description (for SEO)

## Formatting

> "Tell them what you're going tell them, tell them, then tell them what you told them"

Generally, all written conclusion should be well formatted and include an intro/overview and a conclusion

The intro portion can be enclosed in `div` with a class of `excerpt` to enlarge the text for aesthetic reasons.

### Topic Research

All topics for posts and articles should be well planned and considered. Its simply not possible to create "useful" content these ways without data and a plan.

If you don't have a topic or schedule, then ask us and we'll help you get one with tools like Semrush.

### Images and Diagrams

- Generally blog posts that are considered useful have a good amount of images as they are easier to digest than written content. In addition, written content is increasingly computed generated and non-useful. Therefore, try and add one image for every 2 or 3 paragraphs.
- Create quick communication diagrams: If you don't have the time to create custom graphics with Illustrator, often a pic of a hand drawn diagram works as well (or better). It has an organic, custom feel and says exactly what you're trying to convey without technical issues getting in the way.

### Readable Text

- 80% of your readers will **only** view the intro, headers and conclusion. So make sure you always include them and spend a good percent of your writing time on them
- Keep your paragraphs short as possible and vary their length. One sentence paragraphs are often preferred to long run on pieces.
- Use bulleted lists often, they are an easier way to digest long form content.
- For asides, use block quotes

### Voice and Personality

- **Be Human:** When writing for this company, please try and be as human as possible. Have a personality, make jokes.
- **Write for Value:** We don't value "corporate speak," and we want content that sounds value driven not SEO driven.
- **No Bloat** Bloated and wordy content is absolutely unacceptable and counter to making valuable content. Make every word relevant to your topic.

## Running the "Coder" setup for 200% Speed Improvement

Before you start with the specifics of this guide, you'll need the following:

- [VSCode](https://code.visualstudio.com/download) - A flexible coding and text editing environment by Microsoft that will help you work lightning fast.
- [Markdown Syntax](https://www.markdownguide.org/basic-syntax/) - Make sure you're familiar with standard markdown syntax

Once you've installed VSCode, we highly recommend the following extensions for content creation:

- [Github Copilot](https://github.com/github/copilot-preview) - Helps with AI generated copy and can help you with ideas, etc.
- [Markdown Lint](https://github.com/DavidAnson/vscode-markdownlint) - Clues about markdown best practices, these can be changed or modified via the `.markdownlint.json` file.
- [Code Spell Checker](https://github.com/streetsidesoftware/vscode-spell-checker) - Spellcheck for VSCode essentially

To manage and commit your changes with Git and Github you'll need one of the following:

- [Github Desktop](https://desktop.github.com/) - If you're not comfortable using your computer's terminal, then you may be able to just use Github Desktop (or similar)
- [iTerm2](https://iterm2.com/) - If you're at all comfortable with the terminal, we recommend ITerm2 to help the experience.
- On Windows [Terminal for Windows](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab) - This should work for terminal on windows (if there are issues let us know)

To use the preview blog app terminal, you'll also need:

- [Yarn](https://classic.yarnpkg.com/lang/en/) - Yarn is terminal utility that runs preview app added to this repo
- [Node](https://nodejs.org/en/) - NodeJS is the code engine needed to run the preview app

> If you discover any other useful content creation plugins, please feel to add them here or in the tips and tricks section.

### Adding Your Post to the Site

The map file for the blog is how we manage post publication, post type and publication date (which sets the order)

You'll find the map file here: `/content/map.ts`

The map just imports configuration from the `/content/mySubFolder/index.ts` files located in any sub folders.
(This keeps the context of the posts close to their source content.)

So inside of an `index.ts` file, to add a blog post in a folder named `orangeJuice` where the post markdown is in a file called `post.md`... it will look like this:

```ts
// index.ts
export const map = {
  whatAreWebsiteHeatmaps: {
    date: "2021-7-21",
    status: "published",
    type: ["article"],
    file: () => import("./whatAre/post.md"),
    image: () => import("./whatAre/image.webp"),
  },
  // ... other posts
}
```

- Type: Available types of posts are: article, guide, tutorial, video, example, resource, reference, update
- Status: Set to either `published` or `draft`. Draft articles only show in `development` mode.
- Date: Set the date to when you'd like to say this post was published. This determines order on index pages.

### Running the Preview App

once you've cloned the repo, enter the folder and install the dependencies:

```bash
cd ./darwin-blog
npm install
```

Now all that's needed to run the app is to use the following command:

```bash
npx factor dev
```

From there, just visit your browser and the default local url: [http://localhost:3000](http://localhost:3000)

## Saving and Deploying Live

The content you write will just need to be committed to the repository to be saved. It will be deployed live to the site based on some automation that occurs on commit.

When committing just add a message that roughly states the post or content you are working on:

```bash
git commit -m "wip(article): how to X"
```

## Tips and Tricks

## Other

### Upgrading Dependencies

Occasionally you may need to upgrade your dependencies to get the latest version of blog code. To do that, just run:

```bash
npm upgrade

# or with yarn
yarn upgrade
```
