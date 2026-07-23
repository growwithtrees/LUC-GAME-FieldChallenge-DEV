# Liberty ROW Field Guide Challenge

A digital escape room for the Let Grow app, built for a Liberty Utilities (LUC) conference icebreaker in central Missouri. Each crew scans a QR code that opens their team's quest. Every stop hides a code inside a Let Grow app feature; enter the code, unlock the next stop. Finish all six and get a box fragment, then two teams combine fragments to open a physical prize box.

## Structure

- `index.html` — organizer hub listing every team link
- `app.css`, `app.js` — shared engine (one source of truth)
- `<slug>/index.html` — one thin page per team; sets `window.TEAM_ID` and loads the shared engine

Teams are named for central-Missouri compatible species (not answers in the puzzles):

| Team | Slug | Box | Fragment |
|---|---|---|---|
| Sumac | `/sumac` | Red | 47 |
| Elderberry | `/elderberry` | Red | 12 |
| Bluestem | `/bluestem` | Green | 58 |
| Hazelnut | `/hazelnut` | Green | 36 |

Red box combo: 4712 (Sumac then Elderberry). Green box combo: 5836 (Bluestem then Hazelnut).

## The six stops

1. **Messages** — message a trainer, they reply a trail word
2. **Field Guide / Search** — key out coralberry / buckbrush from a description
3. **Plant Identify / Scan** — scan it on the plant wall, read the hidden Field Code (`SONGBIRD`)
4. **Tutorial Video** — Johnny names the incompatible tree to treat (Eastern redcedar)
5. **ChatTrain** — reassure Mrs. Webb, earn the pass phrase (`COMPATIBLE COVER`)
6. **FieldBite** — log an observation, then reveal the box fragment

Progress is saved per team in `localStorage`, so a refresh or dropped signal keeps their place.

## Adding or changing teams

Edit the `TEAMS` object in `app.js` (name, slug, box color, trainer, reply word, fragment), then add a matching `<slug>/index.html` and a row in `index.html`. Nothing else to touch.

## Notes / open items before the event

- The **Johnny redcedar clip** must exist and be uploaded to Tutorial Videos.
- The **app content** (coralberry field-guide entry with the `SONGBIRD` field code, the Mrs. Webb ChatTrain flow, the FieldBite survey) must be built in the correct LUC deployment.
- **Trainer names** (Dale, Gary, Rhonda, Sue) are placeholders — swap for the real train-the-trainer people.
- Answers are matched case- and punctuation-insensitively and accept common variants.
