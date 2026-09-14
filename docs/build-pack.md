# Field Guide Challenge — Build & Facilitation Pack

Companion to the app in this repo. The **app is the engine** (it gates the codes and sends crews into the Let Grow app); this doc is the human side: what to build in Let Grow, the trainer scripts, the plant wall, the physical setup, and the answer key.

**Client:** Liberty Utilities (LUC), central Missouri ROW · **Delivery:** conference icebreaker, ~100 people, 10 teams of 8–10, all at once, 15–25 min, expect ~50% to sit out.

---

## 1. The app

- Live: `https://growwithtrees.github.io/LUC-GAME-FieldChallenge-DEV/` · one page per team slug, opened by that team's QR code (no picker).
- Each team is named for a central-Missouri **compatible** species that is never a puzzle answer.
- Six stops, each a real Let Grow feature. Enter the code the app gives you, unlock the next stop. Finish → a 2-digit **fragment**; two same-color teams combine fragments into a 4-digit box combo.

| Team | Slug | Box | Fragment | Trainer | Reply word |
|---|---|---|---|---|---|
| Sumac | `/sumac` | Red | 47 | Hannah | `CORRIDOR` |
| Elderberry | `/elderberry` | Red | 12 | Hannah | `COMPATIBLE` |
| Bluestem | `/bluestem` | Green | 58 | Hannah | `SELECTIVE` |
| Hazelnut | `/hazelnut` | Green | 36 | Hannah | `CLEARANCE` |
| Ninebark | `/ninebark` | Blue | 29 | Hannah | `WIRE ZONE` |
| Spicebush | `/spicebush` | Blue | 64 | Hannah | `BORDER ZONE` |
| Pawpaw | `/pawpaw` | Amber | 81 | Hannah | `FLASHOVER` |
| Redbud | `/redbud` | Amber | 53 | Hannah | `CONDUCTOR` |
| Witchhazel | `/witchhazel` | Purple | 70 | Hannah | `LOW GROWING` |
| Wahoo | `/wahoo` | Purple | 26 | Hannah | `ENCROACH` |

**Box combos:** Red `4712` · Green `5836` · Blue `2964` · Amber `8153` · Purple `7026`.

**Team count does not depend on headcount.** All 10 pages are built. Hand the QR cards out **in colour pairs** — if the room only makes 7 or 8 teams, drop whole pairs (e.g. skip Purple and Amber) so every box still has exactly two teams. Anya's headcount only changes how many people stand behind each QR.

Fragment order within a pair is the table order (first team's number goes first).

---

## 2. The six stops (content + answer)

1. **Messages** — team opens Messages, finds their trainer, sends `<TEAM> CHECKING IN` (e.g. `SUMAC CHECKING IN`); trainer replies their word. **Answer = the trainer's word.**
2. **Field Guide / Search** — clue only (low compatible shrub, coral-pink berry clusters, heavy deer browse). Search the field guide to name it. **Answer = `BUCKBRUSH`** (`CORALBERRY` also accepted). LUC's own compatible-species list and the shipped *Ozark Buckbrush vs Multiflora Rose* Field Bite both call it **Buckbrush**, so that is almost certainly the Plantdex entry name — check which name the entry is filed under before printing anything.
3. **Plant Identify / Scan** — on the plant wall, find the one **compatible shrub that grows in standing water** (buttonbush), scan it, open its entry, read its **max height**. **Answer = `12`.** (Reads real entry data — no planted code. See [design note](#5-design-notes).)
4. **Field Clips** — play **“Botany In A Blink”** (Johnny, 19 Jan 2026). He reads one tree part by part and withholds its name until the closing line, where he identifies it and says he takes it out. **Answer = `CALLERY PEAR`** (`BRADFORD PEAR` also accepted). The withheld name is the puzzle, so the team has to watch it through rather than skip to the end.
5. **ChatTrain** — reassure landowner **Mrs. Webb** about spraying; pass the beat for the phrase. **Answer = `COMPATIBLE COVER`.**
6. **Field Bites** — complete the microlearning *What Makes a Plant Compatible?*; enter the keyword it ends on. **Answer = `BIOLOGICAL CONTROL`.** The keyword only appears once all three knowledge checks are answered, so the stop cannot be skipped by swiping to the last card.

---

## 3. Trainer cards (print one per trainer)

**One trainer: Hannah.** All ten teams message the same person, so there is nothing to staff and nothing to brief beyond one card. Each team still gets its **own** reply word, and the team's name is right there in the message they send, so Hannah just reads the name and looks up the row.

**Hannah's card (print the table from §1 on the back):**
> **Teams will message you `<TEAM NAME> CHECKING IN`.** Read the team name, find it on your card, reply with **that team's one word** and nothing else. Ten teams, ten messages. Wrong message? Reply: *"Say again — send me your team name and CHECKING IN."*
>
> `SUMAC`→CORRIDOR · `ELDERBERRY`→COMPATIBLE · `BLUESTEM`→SELECTIVE · `HAZELNUT`→CLEARANCE · `NINEBARK`→WIRE ZONE · `SPICEBUSH`→BORDER ZONE · `PAWPAW`→FLASHOVER · `REDBUD`→CONDUCTOR · `WITCHHAZEL`→LOW GROWING · `WAHOO`→ENCROACH

Per-team words are what stop one team shouting the answer across the room. **If ten lookups under pressure turns out to be too much on the day, the fallback is one shared word for everybody** — set every `word` in `app.js` to the same string and reprint the card. Swapping Hannah for Lindsey is a one-line find-and-replace in `app.js`.

> Confirm with Lindsey that the Messages feature lets a participant message a named trainer and that trainers can watch an inbox during the icebreaker.

---

## 4. Content to build in Let Grow (admin)

| Stop | Feature | Build |
|---|---|---|
| 2, 3 | Plantdex | **No new build expected** — uses existing entries (buckbrush/coralberry for the search clue; buttonbush's real height for the scan). Confirm both are loaded for LUC **and note which common name each is filed under**. Both are on LUC's official 26-species compatible list and both have complete photo sets, so absence would be a surprise. |
| 4 | Field Clips | **EXISTS, NO SHOOT NEEDED** — *2026.01.19 Botany In A Blink — Callery Pear.mp4* (96 MB, in `LUC Training/Environmental Tailgates/2025 Johnny videos/!Completed/`). Only open item: confirm it is **published to Field Clips in the app**, and under a title the clue can name. |
| 5 | ChatTrain | The **Mrs. Webb** flow (spec below). |
| 6 | Field Bites | **BUILT** — *What Makes a Plant Compatible?* (`luc-what-makes-a-plant-compatible`), at `~/Documents/GitHub/luc-fb-compatible-species/`. **Not yet in a repo and not yet loaded into Field Bites.** |

### ChatTrain — "Mrs. Webb — the spraying question" (single beat)
- **Persona:** Mrs. Webb, a landowner. Concerned, not hostile. (Approved LUC persona surname.)
- **Opening (Mrs. Webb):** *"I saw your crew out there spraying by my fence. Are you killing everything? I've got some good brush the deer use — I don't want it gone."*
- **Score these behaviors (not vocabulary):** (1) reassures her the crew is **selective**, not clearing everything; (2) names that the target is **tall incompatible trees** near the lines, not her low shrubs; (3) affirms the **compatible / wildlife plants (coralberry) stay**.
- **Fail-1/2 coaching** if she isn't reassured (dismissive or over-technical) — brief redirect from the coach.
- **Eval / reveal on pass:** *"That makes me feel a lot better. Thank you for explaining."* → shows **Pass phrase: COMPATIBLE COVER**.
- **Prompt lengths** per house rule: roleplay ~30–50 words, coaching ~50–80, eval ~120–150.

---

## 5. The plant wall

Print laminated images. **Test that each IDs in the app before the event.**

- **Buttonbush** — the scan target; must be the **only wetland / standing-water plant** on the wall so the trait clue is unique. (Max height 12 ft in its entry.)
- **Buckbrush / Coralberry** — the field-guide (search) answer.
- Other compatibles as near-misses: **Blackberry**, **Gray dogwood**.
- Incompatible trees a crew controls: **Callery pear** (the Field Clip answer — it must be on the wall), **Eastern redcedar**, **Black locust**, **Osage orange / hedge**, **Sweetgum**.
- **Keep elderberry off the wall.** It is a team name, and team names must never be puzzle answers. Same reason the other nine team species stay off it.

One shared wall serves all 10 teams (they photograph images, not each other).

---

## 6. Finale, physical setup, roles

- **Five combo-lock prize boxes**, one per colour, for a full ten-team room. Two same-colour teams combine their fragments into the 4-digit combo — set the locks to `4712` (Red), `5836` (Green), `2964` (Blue), `8153` (Amber), `7026` (Purple), or change the fragments in `app.js` to match locks you already own. Fewer teams = fewer boxes; drop whole colours. Prize inside (buttons / stickers / candy).
- **Roles (print one card per team):** Scanner (drives the app), Scribe (runs the screen), Navigator (reads the clues) — forces ≥2 people hands-on.
- **On-site setup, target ≤30 min:** tape up the plant wall · set 10 team QR cards on tables · set the boxes with combo locks + prizes · hand Hannah her reply-word card. All Let Grow content + all printing is done ahead.

---

## 7. Design notes

- **Stop 3 reads real content, not a planted code.** Entries are all structured the same, so a hidden keyword is gameable; filtering by a trait then reading a real field (buttonbush height) tests the actual skill and needs no admin change.
- **No hints.** Directions say exactly what to do; a wrong answer just shakes with a plain retry. (See the `feedback_interactive_build_design` memory.)

---

## 8. Answer key (facilitator cheat sheet)

| Stop | Feature | Answer |
|---|---|---|
| 1 | Messages | Hannah's per-team word (see §1 table) |
| 2 | Field Guide / Search | `BUCKBRUSH` (or `CORALBERRY`) |
| 3 | Plant Identify / Scan | `12` (buttonbush max height) |
| 4 | Field Clips | `CALLERY PEAR` (or `BRADFORD PEAR`) |
| 5 | ChatTrain | `COMPATIBLE COVER` |
| 6 | Field Bites | `BIOLOGICAL CONTROL` |
| — | Finale | fragment → 4-digit box combo (Red 4712, Green 5836, Blue 2964, Amber 8153, Purple 7026) |

---

### Open items before the event

**Needs someone at Liberty to confirm (cannot be settled from our side):**
1. **Does Messages let a participant message a named trainer?** Stop 1 does not exist if the answer is no. Still the single biggest unknown.
2. **Is *Botany In A Blink — Callery Pear* published to Field Clips?** The video is finished and it says exactly what stop 4 needs. It just has to be in the app.
3. **Are buckbrush and buttonbush loaded in Plantdex, and under which common name?** Stop 2 is typed by the learner, stop 3 depends on buttonbush's entry listing a 12 ft max height.

**On us:**
4. Push the **Field Bite** to `growwithtrees/LUC-LG-FB-CompatibleSpecies-DEV` and load it into Field Bites.
5. **Print:** 10 team QR cards (against the `growwithtrees.github.io` URL), the plant wall, Hannah's reply-word card, role cards.
6. **Buy:** five combo locks + boxes; prizes. Poison-ivy soap and similar practical items were floated on the 8 Sep call.
7. Buttonbush must be the **only** wetland plant on the wall, and elderberry must not be on it at all.

**Closed:** ~~trainer names~~ (Hannah, all teams) · ~~redcedar clip must be shot~~ (Callery pear clip already exists) · ~~team count waits on headcount~~ (10 pages built, hand out in colour pairs) · ~~Mrs. Webb ChatTrain~~ (trainer 62, `https://chattrain.org/play/252ffb2cf73a`) · ~~Field Bite keyword~~ (`BIOLOGICAL CONTROL`).
