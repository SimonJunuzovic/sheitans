# Sheitans website

Coming-soon landing page for Sheitans, a playful app that helps people tame their addictions ("inner demons"). Tagline: **Tame your inner demons.**

Static site: plain HTML, CSS and JavaScript. No build step, no framework, no dependencies. Hosted on GitHub Pages at sheitans.com.

## Structure

```
index.html                 Landing page (fresque layout), menu screen, footer
press.html contact.html    Help pages (contact@sheitans.com)
manifest.webmanifest       Lets people save the site to their home screen like an app
CNAME                      Custom domain for GitHub Pages
.nojekyll                  Tells GitHub Pages to serve files as they are
assets/css/styles.css      All shared styles: tokens, header, menu screen, footer, neon demons
assets/js/main.js          Demon drawings (SVG paths), random neon lighting, menu screen logic
assets/fonts/Sheitans.ttf  Display face (Pirata One, SIL Open Font License, see OFL.txt)
favicon.ico                Tab icon fallback with 16/32/48 px inside (browsers ask for it at the root)
assets/img/                favicon.svg, apple-touch-icon, app icons (192/512, maskable 512), og-image (1200 x 630)
assets/img/social/         Footer brand icons from Tabler Icons (MIT, see LICENSE there), square caps, miter joins
```

Page-specific layout styles (the fresque wall) live in a `<style>` block in `index.html`. Text pages share the `.page` / `.doc` styles in `styles.css`.

The header, footer and menu screen are copied into every page (no build step). When you change one, change it on all three pages. The current page's footer link carries `aria-current="page"`.

## Run locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000. Opening `index.html` directly from disk also works, except the manifest.

## Deploy

Push to the branch GitHub Pages serves from. Keep `CNAME` and `.nojekyll` at the root.

## Brand rules (follow these in every edit)

**Direction:** Neon Sigil. Dark, sharp, mischievous, never cute and never mocking the person.

**Colors** (tokens in `:root` of `styles.css`):
- Board `#08080C` page background everywhere (header, wall, footer, menu screen, theme-color, manifest), Void `#050507` only for dark text on light buttons, the tagline's cut-out outline and the Coming soon button, Panel `#0D0D12` for boxes
- Smoke `#EDEDF2` text, Muted `#9A9AA8` secondary text
- Line `#2A2A35`, Line lit `#4A4A5A` for thin frame lines
- Ash `#EDEDF2` resting demons (drawn at 30% opacity)
- Five neon colors, used only when a demon lights up: Inferno `#3D6BFF`, Hellfire `#A855F7`, Wildfire `#FF2E4D`, Bonfire `#FF7A1A`, Spark `#FFE14D`
- Never show the neon colors together as a stripe, gradient or palette bar. They only appear on separate demons.

**Type:**
- Display: Sheitans (the self-hosted TTF), for the logo, tagline and big headings. Never all caps, never below 32px except the header logo.
- Text: Space Grotesk from Google Fonts, 400/500/700, for everything else.

**Demons:** defined in `assets/js/main.js` in the `D` map, keys `d1` to `d10`. Each entry is `[lit color, outline path, face path]` on a 200 x 220 viewBox.
- Shape rules: angular, every corner pointed, no curves. Everything is a stroked line and nothing is filled: the outline at full weight, the eyes and smirk as thinner outlines (`.f`), like the app icon.
- Every demon is an abstract creature: its own body shape, horns, eyes and smirk. None is shaped like an object.
- Moods range from cheeky to menacing, all sharp. Cheeky: d2, d4, d6, d9. Medium: d1, d7. Menacing: d3, d5, d8, d10. Keep a mix on the wall.
- `d1` is the logo demon and must match the app icon exactly. It also appears on the menu screen.
- Never name what a demon stands for, anywhere: not in copy, alt text, file names, keys or comments. A demon can be any habit, and everything in the repo is publicly served.
- To add a demon: add an entry to `D` under the next key (`d11`), then add a `<span class="piece" data-demon="d11">` to the fresque with `--x`, `--y`, `--w`, `--r` (position, width, rotation).

**Audience:** adults 18 and over only. This keeps Sheitans out of the stricter children's data rules (GDPR parental consent, UK Children's Code, COPPA). Do not lower it without a legal review.

**Voice:** short, dry, a bit cheeky. The joke is on the demon, never on the person. No dates or promises about recovery timelines. No em dashes in copy.

**Care:** the footer line "In danger or in crisis right now? Call your local emergency number." must stay on every page. Never joke about overdose, self-harm or crisis.

## Menu screen

The burger opens a full-screen "Nothing hidden here." screen with Close (also Escape), Log in (shows a "opens at launch" message for now) and Save as an app (shows iPhone and Android steps, linked as `#install`).

## Accessibility

- Touch targets at least 44px. Visible focus outlines.
- Decorative SVGs are `aria-hidden`. The "Coming soon" button uses `aria-disabled="true"`.
- Respect `prefers-reduced-motion`.
- Text contrast at least 4.5:1 on the dark background.

## To do

- Privacy policy, Terms and conditions, Cookie policy and Safety: drafts exist but are deliberately not in this repo. The footer shows their names as plain text (`.unlinked`), not links. Publish them only after the company details are filled in and a lawyer has reviewed them, then turn the footer items back into links.
- Social links: Instagram (@sheitansapp) and TikTok (@sheitansapp) are live. Facebook, Snapchat and X show as dimmed, non-clickable icons (`.social.is-off`) until their profiles exist; turn each into a link like the others when it does.
- Real Log in and launch CTA
- An `/install` page if the "Save as an app" steps move out of the menu screen
