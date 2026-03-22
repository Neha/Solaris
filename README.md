# Solaris

A responsive React app that shows an animated solar system with the Sun at the center and the eight planets orbiting around it.

## Features

- **Planet orbit animation** – Each planet follows its own circular path with different speeds (inner planets orbit faster).
- **Planet names on hover** – Hover over any planet to see its name in a tooltip.
- **Speed controls** – Use the slider to change orbit speed from 0.25× to 3×.
- **Planet properties on hover** – Hover any planet to see its name, distance from Sun, diameter, orbital period, and moon count.
- **Light / dark theme** – Toggle in the header; preference is saved in `localStorage`.
- **Background music** – Use the speaker icon to play/pause. Add your own track as `public/space.mp3` (e.g. a space ambient MP3).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
npm run preview
```

## Tech

- React 18 + Vite
- CSS animations and custom properties for orbit speed
