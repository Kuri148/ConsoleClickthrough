# Console Clickthrough — Project Brief

## Goal
Interactive click-through simulator of a Matrix treadmill console, so trainees 
can explore the menu system on their own time without needing a physical 
machine free. Full menu navigation (not just a hidden code screen).

## Architecture
- `index.html` — displays current screen image + button overlay
- `menuMap.js` — single source of truth: screen → button → next screen (+ description text)
- `images/` — one photo per screen, referenced by filename, NOT base64-embedded
  (base64 embedding burns compute/context — always use separate image files)

## menuMap shape
Each screen is an object keyed by screen name, containing button IDs mapped to 
the next screen name, plus a `description` field with explanatory text shown 
below the console image on that screen.

Example:
{
  "00-home": {
    up: "00-home", down: "00-home", select: "01-quickstart",
    programs: "02-programs-menu", settings: "03-settings-menu",
    description: "..."
  }
}

## Image capture plan (in progress)
- Camera/phone mounted on a fixed stand — same framing every shot, so button 
  hitbox coordinates only need to be defined ONCE and reused across all images
- Lock AE/AF before shooting so exposure/focus stay consistent
- Filenames encode menu hierarchy, e.g. 02-programs-cardio.jpg
- Photographer doesn't fully know the menu tree yet — plan is to shoot 
  everything in raw sequence (shot-001.jpg, shot-002.jpg) with a quick note 
  per photo (screen name, button pressed, where it led), then build the 
  menuMap afterward from that log rather than pre-planning the tree

## Workflow
- Built incrementally, not all at once — architecture (this repo, logic, 
  scaffold) built first with placeholder colored boxes standing in for real 
  photos, so state machine + click logic works before content exists
- Photos/content get swapped in afterward without touching the JS logic
- Git commit history should reflect progress in case work is picked up later

## Deployment
- Hosted via GitHub Pages for portfolio visibility
- Repo: https://github.com/Kuri148/ConsoleClickthrough
- Keep private until reviewed for anything sensitive in photo backgrounds, 
  then make public

## Remote workflow
- Using Claude Code Remote Control (/remote-control) to send photos from 
  phone to this local session while on-site tomorrow
