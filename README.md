# Image Gallery

A responsive image gallery built with plain HTML, CSS and JavaScript. No frameworks, no build step.

## Features

- Responsive grid layout (works on phone, tablet and desktop)
- Lightbox view with next / previous buttons and an "n / total" counter
- Keyboard navigation: `←` `→` to move, `Esc` to close
- Swipe left / right on touch screens
- Hover effects: image zoom, card lift and a sliding caption
- Smooth transitions between images and when opening or closing the lightbox
- Category filters (All, Nature, Space, City, Ocean, Abstract) with image counts
- Dark and light theme that follows the device setting
- Photo credit shown in the lightbox
- If a photo fails to load, a generated image is shown instead

## Project structure

```
gallery-project/
├── index.html   # page structure
├── style.css    # layout, theme, hover effects, transitions
├── script.js    # image list, filters, lightbox logic
└── README.md
```

## How to run

1. Put all files in one folder.
2. Open `index.html` in any modern browser.

An internet connection is needed for the Unsplash photos and the Google Fonts.

## How to use

- Click or tap a photo to open it.
- Use the arrow buttons, the arrow keys or a swipe to change photo.
- Click the dark area, the close button or press `Esc` to close.
- Use the category buttons above the grid to filter.

## Add your own images

Open `script.js` and edit the `IMAGES` list. Each item looks like this:

```js
{ title: "Alpine Dawn", cat: "Nature", src: "images/alpine.jpg" }
```

- `title`: name shown on hover and in the lightbox
- `cat`: category used by the filter buttons (a new category gets its own button automatically)
- `src`: path or URL of your image

The `p` field on the built-in items only sets colors for the generated fallback image, so your own items do not need it.

Items that use `ph` (an Unsplash photo path) and `by` / `link` (photo credit) come from Unsplash. For your own images you only need `title`, `cat` and `src`.

## Tech

- HTML5, CSS3 (grid, custom properties, transitions), vanilla JavaScript
- Fonts: Inter and Space Grotesk from Google Fonts

## Credits

Photos by various photographers on [Unsplash](https://unsplash.com/?utm_source=image_gallery&utm_medium=referral). The photographer's name is shown with each photo in the lightbox.
