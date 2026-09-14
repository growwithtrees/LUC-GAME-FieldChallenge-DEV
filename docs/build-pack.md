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
2. **Field Guide / Search** — clue only (low compatible shrub, coral-pink berry clusters, heavy deer browse). Search the field guide to name it. **Answer = `CORALBERRY`** (`BUCKBRUSH` and `INDIAN CURRANT` also accepted).
   > **CONFIRMED loaded — plant ids 143 (WZC-BZS) and 455 (WZS-BZS), filed as “Coralberry.”** Note LUC's own 26-species compatible list and the shipped *Ozark Buckbrush vs Multiflora Rose* Field Bite both call it **Buckbrush**, so crews may type the name their own training taught them. Both accepted; the facilitator should not correct anyone who says buckbrush.
3. **Plant Identify / Scan** — on the plant wall, find the one **compatible shrub that grows in standing water** (buttonbush), scan it, open its entry, read its **max height**. **Answer = `12`** (`144` also accepted as a safety net). Reads real entry data, no planted code — see [design note](#7-design-notes).
   > **CONFIRMED loaded — plant ids 75 (WZD-BZS) and 380 (LET_GROW), *Cephalanthus occidentalis*, max height `144`.** The database stores inches; the learner app runs it through `inchToFeet()` and renders **feet + inches**, so the entry reads **12 ft 0 in**. The answer is therefore `12`, as written.
4. **Field Clips** — play **“Botany In A Blink — Name That Tree.”** Johnny reads one tree part by part (2:10, vertical) and **never names it**, on screen or in audio. The team names it from the field marks. **Answer = `CALLERY PEAR`** (`BRADFORD PEAR` and bare `PEAR` also accepted).
   > **The clip must be published under a title that does not contain the species.** The source file on disk is named *…Botany In A Blink - Callery Pear.mp4*; publishing it under that name hands the team the answer and the stop is dead. Publish as **“Botany In A Blink — Name That Tree”** (what the in-app clue tells them to open) or any other neutral title, and change the clue to match.
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

> **Confirmed (Mike, 14 Sep): participants can message other people in the app**, so stop 1 works as designed. Hannah just needs to be watching her inbox during the icebreaker.

---

## 4. Content to build in Let Grow (admin)

| Stop | Feature | Build |
|---|---|---|
| 2, 3 | Plantdex | **BOTH CONFIRMED LOADED, no build needed.** Coralberry (ids 143/455) and Buttonbush (ids 75/380, 144 in = **12 ft**). Verified against the exported LUC plant list, `GWT/GWT Let Grow/PlantDex/LUC plant list .csv` + `2023.06.01 Let Grow Plant List.csv`. **Each is duplicated** under two ids/growth zones (and id 380 is `"Buttonbush "` with a trailing space) — harmless here, since both buttonbush rows carry the same 144 and stop 2 only needs the name, but expect two hits in search. |
| 4 | Field Clips | **EXISTS, NO SHOOT NEEDED** — `2026.01.19 Botany In A Blink - Callery Pear.mp4` (96 MB, 2:10, vertical, in `LUC Training/Environmental Tailgates/2025 Johnny videos/!Completed/`). Verified: no species name in the audio, no title card, lower-thirds are trait labels only (LEAF / SMELL / …), generic *Botany In A Blink* outro. **Publish it to Field Clips as “Botany In A Blink — Name That Tree”** — never under the filename. |
| 5 | ChatTrain | The **Mrs. Webb** flow (spec below). |
| 6 | Field Bites | **BUILT** — *What Makes a Plant Compatible?* (`luc-what-makes-a-plant-compatible`), at `~/Documents/GitHub/luc-fb-compatible-species/`. **Not yet in a repo and not yet loaded into Field Bites.** |

**Footnote on the clip, for non-game use.** Johnny *did* record a reveal — `November Videos/Johnny Voice Audio/callery pear pt 3.mp3`: *"What do you think it is? …this is Callery pear. A problem tree, invasive… obviously this can't grow in the line… I take it out."* It was cut from the published 2:10 edit. For the escape room that cut is what makes the stop work, so leave it out. If a straight training version is ever wanted, that audio is the ending.

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
- **Coralberry / Buckbrush** — the field-guide (search) answer. Filed in the app as **Coralberry**.
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
| 2 | Field Guide / Search | `CORALBERRY` (app name) / `BUCKBRUSH` (LUC's name) — both accepted |
| 3 | Plant Identify / Scan | `12` (buttonbush max height) |
| 4 | Field Clips | `CALLERY PEAR` (or `BRADFORD PEAR`) |
| 5 | ChatTrain | `COMPATIBLE COVER` |
| 6 | Field Bites | `BIOLOGICAL CONTROL` |
| — | Finale | fragment → 4-digit box combo (Red 4712, Green 5836, Blue 2964, Amber 8153, Purple 7026) |

---

### Open items before the event

**In the app — nothing here is blocked:**
1. **Upload the clip to Field Clips as “Botany In A Blink — Name That Tree.”** Source: `2026.01.19 Botany In A Blink - Callery Pear.mp4`. **Never publish it under the filename** — the video itself never names the tree, so the listing title is the only thing that can kill this stop.
2. Have **Hannah watching her Messages inbox** during the icebreaker, reply-word card in hand.

**On us:**
3. Push the **Field Bite** to `growwithtrees/LUC-LG-FB-CompatibleSpecies-DEV` and load it into Field Bites.
4. **Print:** 10 team QR cards (against the `growwithtrees.github.io` URL), the plant wall, Hannah's reply-word card, role cards.
5. **Buy:** five combo locks + boxes; prizes. Poison-ivy soap and similar practical items were floated on the 8 Sep call.
6. Buttonbush must be the **only** wetland plant on the wall, callery pear **must** be on it, and elderberry must not be on it at all.

**Nothing is blocked on a Liberty answer any more.** Everything above is ours to do.

**Closed:** ~~trainer names~~ (Hannah, all teams) · ~~can a participant message a trainer?~~ (yes, 14 Sep) · ~~redcedar clip must be shot~~ (Callery pear clip exists, verified it never names the tree) · ~~team count waits on headcount~~ (10 pages, handed out in colour pairs) · ~~are the plants in Plantdex?~~ (Coralberry 143/455 · Buttonbush 75/380 at 144 in = 12 ft) · ~~Mrs. Webb ChatTrain~~ (trainer 62, `https://chattrain.org/play/252ffb2cf73a`) · ~~Field Bite keyword~~ (`BIOLOGICAL CONTROL`).
