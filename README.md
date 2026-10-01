# EVOL EZOD / DOZE — Game Music Portfolio

A nostalgic / liminal GitHub Pages portfolio for Evol Ezod / DOZE.

## Quick setup

1. Create a GitHub repository.
2. Upload the contents of this folder.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save.
7. GitHub will give you your website address.

## IMPORTANT

Before publishing, open `index.html` and replace:

`YOUR-EMAIL@example.com`

with your actual contact email.

Also replace the social links in `index.html` with your actual profiles.

## Adding a project

Open:

`data.js`

Find:

`portfolioData.projects`

Copy one project object and change the information.

Then create the project's HTML page by copying:

`projects/project-template.html`

Rename it to match the project's `id`.

Example:

`my-new-game` → `projects/my-new-game.html`

## Adding music

Put MP3 files in:

`assets/audio/`

Example:

`assets/audio/achromatic/my-track.mp3`

Then add the track to `portfolioData.tracks` in `data.js`.

Add its ID to the project's `tracks` array.

## Adding project artwork

Put an image in:

`assets/images/projects/`

Example:

`assets/images/projects/my-new-game.jpg`

Then put this path into the project data:

`assets/images/projects/my-new-game.jpg`

## Recommended audio

Use MP3 for the public website.

Recommended:
- 192–320 kbps MP3
- Stereo
- Normalised to a sensible listening level

Keep WAV masters somewhere else. GitHub is hosting your website, not auditioning for the role of your record label's server.

## Updating the site

You only normally need to edit:

`data.js`

and upload:

- new artwork
- new MP3 files
- the matching project HTML page

The layout, music player and styling stay the same.
