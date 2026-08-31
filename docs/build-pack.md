# Field Guide Challenge — Build & Facilitation Pack

Companion to the app in this repo. The **app is the engine** (it gates the codes and sends crews into the Let Grow app); this doc is the human side: what to build in Let Grow, the trainer scripts, the plant wall, the physical setup, and the answer key.

**Client:** Liberty Utilities (LUC), central Missouri ROW · **Delivery:** conference icebreaker, ~100 people, 10 teams of 8–10, all at once, 15–25 min, expect ~50% to sit out.

---

## 1. The app

- Live: `https://growwithtrees.github.io/LUC-GAME-FieldChallenge-DEV/` · one page per team slug, opened by that team's QR code (no picker).
- Each team is named for a central-Missouri **compatible** species that is never a puzzle answer.
- Six stops, each a real Let Grow feature. Enter the code the app gives you, unlock the next stop. Finish → a 2-digit **fragment**; two same-color teams combine fragments into a 4-digit box combo.

| Team | Slug | Box | Fragment | Trainer | Trainer's reply word |
|---|---|---|---|---|---|
| Sumac | `/sumac` | Red | 47 | Dale | `CORRIDOR` |
| Elderberry | `/elderberry` | Red | 12 | Gary | `COMPATIBLE` |
| Bluestem | `/bluestem` | Green | 58 | Rhonda | `SELECTIVE` |
| Hazelnut | `/hazelnut` | Green | 36 | Sue | `CLEARANCE` |

Red box combo = **4712** (Sumac 47 then Elderberry 12). Green box = **5836** (Bluestem 58 then Hazelnut 36). Trainer names are placeholders — swap for the real train-the-trainer people.

---

## 2. The six stops (content + answer)

1. **Messages** — team opens Messages, finds their trainer, sends `<TEAM> CHECKING IN` (e.g. `SUMAC CHECKING IN`); trainer replies their word. **Answer = the trainer's word.**
2. **Field Guide / Search** — clue only (low compatible shrub, coral-pink berry clusters, heavy deer browse). Search the field guide to name it. **Answer = `CORALBERRY` / `BUCKBRUSH`.**
3. **Plant Identify / Scan** — on the plant wall, find the one **compatible shrub that grows in standing water** (buttonbush), scan it, open its entry, read its **max height**. **Answer = `12`.** (Reads real entry data — no planted code. See [design note](#5-design-notes).)
4. **Field Clips** — play the clip on right-of-way trees; it names the incompatible tree that fools new crews (looks harmless small, grows into the conductors). **Answer = `CEDAR` (Eastern redcedar).**
5. **ChatTrain** — reassure landowner **Mrs. Webb** about spraying; pass the beat for the phrase. **Answer = `COMPATIBLE COVER`.**
6. **Field Bites** — complete the microlearning on compatible ROW plants; enter the keyword on its last card. **Answer = `LOW AND SLOW` (placeholder — set to whatever the real Field Bite ends on).**

---

## 3. Trainer cards (print one per trainer)

Only 3–4 trainers needed. Each team's message stop can be staggered to a different position in their flow so no trainer gets swarmed (the app currently puts it at stop 1; adjust per team if desired).

**Example — Dale (Team Sumac):**
> **You are Dale, crew lead.** Sumac will message you `SUMAC CHECKING IN`. Reply with one word: **CORRIDOR**. That's it — that word unlocks their next stop. If two teams message at once, just reply to each. Wrong message? Reply: *"Say again — send me your team name and CHECKING IN."*

Reply words: Dale → `CORRIDOR`, Gary → `COMPATIBLE`, Rhonda → `SELECTIVE`, Sue → `CLEARANCE`.

> Confirm with Lindsey that the Messages feature lets a participant message a named trainer and that trainers can watch an inbox during the icebreaker.

---

## 4. Content to build in Let Grow (admin)

| Stop | Feature | Build |
|---|---|---|
| 2, 3 | Plantdex | **No new build** — uses existing entries (coralberry for the search clue; buttonbush's real height for the scan). Just make sure both are loaded. |
| 4 | Field Clips | A clip on ROW trees that clearly flags **Eastern redcedar** as the incompatible tree to treat. Must exist / be shot — longest lead time. |
| 5 | ChatTrain | The **Mrs. Webb** flow (spec below). |
| 6 | Field Bites | A microlearning on compatible ROW plants ending with a **keyword** on the last card. |

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
- **Coralberry / Buckbrush** — the field-guide (search) answer.
- Other compatibles as near-misses: **Blackberry**, **Gray dogwood**.
- Incompatible trees a crew controls: **Eastern redcedar** (the Field Clip answer), **Black locust**, **Osage orange / hedge**, **Sweetgum**, **Callery pear**.

One shared wall serves all 10 teams (they photograph images, not each other).

---

## 6. Finale, physical setup, roles

- **3–4 combo-lock prize boxes**, grouped by color. Two same-color teams combine their fragments into the 4-digit combo (set the physical locks to `4712` / `5836`, or change the fragments to match your locks). Prize inside (buttons / stickers / candy).
- **Roles (print one card per team):** Scanner (drives the app), Scribe (runs the screen), Navigator (reads the clues) — forces ≥2 people hands-on.
- **On-site setup, target ≤30 min:** tape up the plant wall · set 10 team QR cards on tables · set the boxes with combo locks + prizes · brief the trainers on their reply word. All Let Grow content + all printing is done ahead.

---

## 7. Design notes

- **Stop 3 reads real content, not a planted code.** Entries are all structured the same, so a hidden keyword is gameable; filtering by a trait then reading a real field (buttonbush height) tests the actual skill and needs no admin change.
- **No hints.** Directions say exactly what to do; a wrong answer just shakes with a plain retry. (See the `feedback_interactive_build_design` memory.)

---

## 8. Answer key (facilitator cheat sheet)

| Stop | Feature | Answer |
|---|---|---|
| 1 | Messages | trainer's word (CORRIDOR / COMPATIBLE / SELECTIVE / CLEARANCE) |
| 2 | Field Guide / Search | `CORALBERRY` (or `BUCKBRUSH`) |
| 3 | Plant Identify / Scan | `12` (buttonbush max height) |
| 4 | Field Clips | `CEDAR` (Eastern redcedar) |
| 5 | ChatTrain | `COMPATIBLE COVER` |
| 6 | Field Bites | `LOW AND SLOW` (placeholder keyword) |
| — | Finale | fragment → 4-digit box combo (Red 4712, Green 5836) |

---

### Open items before the event
1. Confirm **coralberry** is loaded (stop 2) and **buttonbush** is the only wetland plant on the wall (stop 3).
2. **Field Clips** redcedar clip exists / gets shot.
3. Build the **Mrs. Webb ChatTrain** flow and the **Field Bites** microlearning (set its real keyword).
4. Real **trainer names + reply words**; confirm Messages supports messaging a named trainer.
5. Number of **boxes** + their real lock combos; prize contents.
