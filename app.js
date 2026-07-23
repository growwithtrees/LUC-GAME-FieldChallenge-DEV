/* Liberty ROW Field Guide Challenge
   Per-team page: set window.TEAM_ID before loading this file.
   Teams are named for central-Missouri compatible species (not answers). */
(function () {
  "use strict";

  var TEAMS = {
    "Sumac":      { slug: "sumac",      color: "Red",   trainer: "Dale",   word: "corridor",   frag: "47" },
    "Elderberry": { slug: "elderberry", color: "Red",   trainer: "Gary",   word: "compatible", frag: "12" },
    "Bluestem":   { slug: "bluestem",   color: "Green", trainer: "Rhonda", word: "selective",  frag: "58" },
    "Hazelnut":   { slug: "hazelnut",   color: "Green", trainer: "Sue",    word: "clearance",  frag: "36" }
  };

  var SPRITE = '<svg width="0" height="0" style="position:absolute" aria-hidden="true">'
    + '<symbol id="ic-talk" viewBox="0 0 512 512"><path d="M488 348.78h-70.24l-15.1 87.44-48.78-87.44H169v-50h190v-157h129zm-145-273v207H158.13l-48.79 87.47-15.11-87.47H24v-207zM136.724 215.324c0-10.139-12.257-15.214-19.425-8.046-7.168 7.168-2.093 19.426 8.046 19.426 6.285 0 11.38-5.095 11.38-11.38zm60.945 0c-.068-10.12-12.32-15.122-19.452-7.943-7.131 7.18-2.047 19.399 8.073 19.399 6.314 0 11.422-5.141 11.38-11.456zm60.945 0c0-10.139-12.257-15.214-19.425-8.046-7.169 7.168-2.093 19.426 8.046 19.426 6.284 0 11.38-5.095 11.38-11.38z"/></symbol>'
    + '<symbol id="ic-search" viewBox="0 0 512 512"><path d="M333.78 20.188c-39.97 0-79.96 15.212-110.405 45.656-58.667 58.667-60.796 152.72-6.406 213.97l-15.782 15.748 13.25 13.25 15.75-15.78c61.248 54.39 155.3 52.26 213.968-6.407 60.887-60.886 60.888-159.894 0-220.78C413.713 35.4 373.753 20.187 333.78 20.187zm0 18.562c35.15 0 70.285 13.44 97.158 40.313 53.745 53.745 53.744 140.6 0 194.343-51.526 51.526-133.46 53.643-187.5 6.375l.218-.217c-2.35-2.05-4.668-4.17-6.906-6.407-2.207-2.206-4.288-4.496-6.313-6.812l-.218.22c-47.27-54.04-45.152-135.976 6.374-187.502C263.467 52.19 298.63 38.75 333.78 38.75zm-157 240.938L41.094 432.5l34.562 34.563L211.47 332.25l-34.564-34.563zM40 456.813L24 472.78 37.22 486l15.968-16L40 456.812z"/></symbol>'
    + '<symbol id="ic-cam" viewBox="0 0 512 512"><path d="M109.285 30.402c-14.82-.007-30.414 2.144-46.822 6.932-9.13 2.66-15.06 11.4-13.86 20.83l-15.18 98.39a9.5 9.5 0 0 0 5.63 10.61l82.02 34.58 31.62 162.13-116.53 25.31a9.5 9.5 0 0 0-7.5 9.16l-1.06 76.47a9.5 9.5 0 0 0 12.37 9.19l146.47-46.82 24.12-4.67c10.13.1 19.61-4.66 26.28-12.46 6.54-7.72 9.97-17.79 9.96-28.16-.01-6.6-1.39-13.06-4.06-18.88l-25.27-130.57 125.77 53.02c8.13 3.06 16.62 1.44 25.53.88l83.41-5.28a9.5 9.5 0 0 0 7.97-5.44l50.52-106.95a9.5 9.5 0 0 0-5.49-13.2c-7.79-4.27-15.8-7.26-23.96-9.15L152.273 36.688c-13.32-3.85-27.37-6.02-42.19-6.02zM82.94 44.13a9.5 9.5 0 0 1 3.69.72l290.75 116.53a9.5 9.5 0 0 1 5.06 12.25l-.83 2.07a9.5 9.5 0 0 1-11.29 3.34L79.56 62.47a9.5 9.5 0 0 1 3.38-18.34zm58.7 166.68l16.01 6.75 29.73 139.56c-5.32-1.62-11-1.5-16.29-.37zm37.35 15.75l17.02 7.17 23 118.83c-4.32-1.19-8.86-.99-13.31-.77zM211.09 370.3c8.11 0 16.9 8.29 16.9 21.57.01 5.9-2.21 12-5.42 15.79-1.53 1.8-3.32 3.18-5.19 4.14l-6.14 1.19c3.28-8.2 3.02-17.85 1.64-25.93zm-32.52 4.3c8.12 0 16.9 8.29 16.9 21.59-.01 12.14-9.2 21.57-16.9 21.57-7.71 0-16.9-9.43-16.9-21.57 0-13.3 8.79-21.59 16.9-21.59zm-34.5 10.59c-1.42 7.51-1.31 15.32.34 22.81 1.44 6.55 4.19 12.62 8.05 17.9L46.78 461.88l.78-55.72z"/></symbol>'
    + '<symbol id="ic-video" viewBox="0 0 512 512"><path d="M53.15 117.516l-30.803 41.443 17.332 3.5 21.82-29.357zm344.355 16.125c-12.346.048-23.357.238-33.852.336v34.18c23.779.22 54.2 1.112 80.252-1.06 14.555-1.212 27.448-3.51 35.627-6.814 4.09-1.651 6.896-3.533 8.338-5.07 1.442-1.537 1.783-2.397 1.783-4.147 0-1.75-.341-2.61-1.783-4.146-1.442-1.537-4.248-3.419-8.338-5.07-8.179-3.304-21.072-5.602-35.627-6.815-14.554-1.213-30.773-1.455-46.4-1.394zm-111.668 8.425l-32 48h21.633l20-30h50.183v-18zM73.985 146.48L56.09 170.557l82.668 61.441c9.23 6.86 20.98 1.4 24.27-6.09s.31-16.42-6.38-20.32zm104.87 61.586c1.14 2.815 1.852 5.715 2.105 8.602l.128 6h108.207c-1.13-6.29.28-13.29 3.61-19H291.39zm-23.43 23c-4.63 5.23-10.84 9.18-18.08 10.69-8.33 1.73-17.9-.2-26.12-6.31l-2.37-1.76v71.38h60v-46h87.65a32.62 32.62 0 0 1-3.65-15c0-4.61.96-9.01 2.7-13zm31.43 46v28h140v-28h-41zm275.24-71l-46 11.5v113.945l46 11.5zm-140.24 71v78h30v-78zm-160 46v46h60v-46zm52.183 80l-17.614 26.418c62.625-10.657 116.488-11.084 168.956-.957l-16.975-25.46zm-4.183-126h140v-28h-140zm188-46.28V235.88l-41.66-27.81c1.14 2.81 1.85 5.71 2.1 8.6l.13 6h29.65v64h-254V231.31l-16-11.89v130.65h263c10 0 26-13 26-32z"/></symbol>'
    + '<symbol id="ic-chat" viewBox="0 0 512 512"><path d="M211.313 21.094c-51.776 0-98.754 12.252-133.5 32.718C43.066 74.28 19.874 103.78 19.874 137.69c0 33.54 22.692 62.81 56.813 83.25L48.156 327.094l96.97-79.844c20.65 4.58 42.924 7.063 66.186 7.063 51.776 0 98.786-12.252 133.532-32.72 34.746-20.466 57.937-49.997 57.937-83.905s-23.19-63.41-57.936-83.875c-34.746-20.467-81.756-32.72-133.53-32.72zm0 18.687c48.8 0 92.866 11.77 124.03 30.126 31.165 18.357 48.75 42.447 48.75 67.78 0 25.338-17.585 49.457-48.75 67.814-31.164 18.357-75.23 30.125-124.03 30.125S118.445 223.857 87.28 205.5c-31.163-18.357-48.718-42.476-48.718-67.813 0-25.336 17.555-49.424 48.72-67.78C118.445 51.55 162.51 39.78 211.31 39.78zm167.55 217.25c-74.88 0-135.594 41.762-135.594 93.283 0 51.52 60.716 93.28 135.594 93.28 18.23 0 35.623-2.48 51.5-6.968l68.53 51.156-24.873-71.03c24.947-16.918 40.437-40.432 40.437-66.438 0-51.518-60.714-93.28-135.594-93.28z"/></symbol>'
    + '<symbol id="ic-note" viewBox="0 0 512 512"><path d="M131.3 20.35c-14.6.1-28.1 10-31.93 24.82-2.33 9.13-.55 18.4 4.13 25.84-7.67 4.26-13.69 11.53-16.03 20.66-2.32 9.13-.56 18.33 4.1 25.83a32.687 32.687 0 0 0-15.96 20.6c-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.33 9.1-.54 18.4 4.19 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.08 20.7-2.34 9.1-.54 18.4 4.18 25.8-7.72 4.3-13.75 11.5-16.09 20.7-2.35 9.2-.51 18.5 4.3 26a32.915 32.915 0 0 0-16.28 20.8c-4.48 17.5 6.25 35.6 23.79 40.1l31.81 8.4-1.47 5.7 261.56 67L374 326.5l-22.4 21.2-87.8 26.5 15.5-42.5-151.7-38.8 4.4-17.4 153.5 39.3 9.7-26.7 15.3-14.4-167-42.8 4.4-17.4 178 45.6 39.6-37.4-206.1-52.8 4.4-17.4L380.7 207l31.4-29.4 18.3-71.4-261.6-67.04c2.2-16.32-8.1-32.27-24.5-36.44-2.7-.7-5.5-1.04-8.2-1.03zm48.3 76.55l217 55.66-4.4 17.4-217-55.6zM465.4 152l21.4 22.5-10.2 9.6-31.6-33.5zm-23.3 22l31.5 33.5-126.5 119.5-31.5-33.5zM252.5 315.4L293 346.6l-56.9 17.2z"/></symbol>'
    + '<symbol id="ic-chest" viewBox="0 0 512 512"><path d="M146.857 20.842c-12.535-.036-24.268 2.86-37.285 9.424C61.356 54.6 19.966 120.734 17.982 175.91l41.848 14.236c4.33-61.89 47.057-128.37 101.527-155.86 4.423-2.23 8.822-4.162 13.185-5.8l-22.26-7.45c-1.83-.123-3.637-.19-5.428-.194zm233.31 78.513c-10.476-.09-22.83 3.092-36.42 9.94-48.577 24.518-90.225 91.473-91.586 146.623l46.205 15.72c3.914-62.188 46.825-129.274 101.607-156.92 4.522-2.283 9.04-4.258 13.53-5.91l-26.544-8.884c-2.164-.35-4.423-.55-6.785-.57zm63.554 22.014c-10.267.093-22.094 3.353-35.333 10.034-47.158 23.8-87.777 87.587-91.362 141.75l174.55-73.726c-.404-39.01-10.754-61.304-24.415-71.082-2.347-1.68-4.867-3.057-7.55-4.137l-4.745-1.55c-3.48-.887-7.195-1.327-11.144-1.29zM17.9 195.622l-.035 187.484L59.46 397.58V209.764zM78.15 216.12v187.962l156.282 54.37V269.288l-29.053-9.886v119.43l-101.054-34.082V225.025zm414.22 3.683L318.433 293.27v189.236l173.935-73.504zm-369.354 11.582v99.947l63.675 21.477v-99.763zm31.306 28.797c9.705 0 17.573 7.867 17.573 17.572 0 6.34-3.37 11.88-8.407 14.97v28.53h-18.69v-28.746c-4.838-3.13-8.048-8.562-8.048-14.754 0-9.705 7.867-17.572 17.572-17.572zm98.797 15.464v189.307l46.626 16.22V291.51z"/></symbol>'
    + '<symbol id="ic-open-chest" viewBox="0 0 512 512"><path d="M457.03 213.037L416.514 100.24C425 77.232 433.27 68.075 437.527 64.633c3.162-2.563 5.922-3.534 8.185-2.904 4.134 1.168 8.775 7.7 12.278 17.456 11.266 31.347 10.377 87.094-.96 133.85zm-324.287-17.9l312.804 34.84-43.82-122.1L145.558 79.34c2.593 36.102-1.913 79.913-12.817 115.796zM128.98 77.5l-45.06-5.02 37.03 103.123c7.773-32.06 10.625-68.357 8.03-98.102zM101.46 27.19c-3.793 3.1-10.77 10.666-18.25 28.566L402.23 91.3c5.333-13.695 11.37-24.702 17.88-32.495L108.796 24.13c-2.573-.29-5.415 1.51-7.338 3.06zm280.63 283.338l.61 169.352 66.352-53.63-.61-169.35zM366.163 487.9L46.62 452.306 46 278.396l319.553 35.594zM435.996 245.665l-307.46-34.25v59.54l242.712 27.037zM58.31 263.13l54.34 6.058v-49.98z"/></symbol>'
    + '<symbol id="ic-trophy" viewBox="0 0 512 512"><path d="M256.156 21.625c-45.605 0-86.876 2.852-117.22 7.563-15.17 2.355-27.554 5.11-36.874 8.53-4.66 1.71-8.568 3.515-11.968 6.094-3.238 2.457-6.65 6.36-6.97 11.75h-.75c0 10.08.362 20.022 1.064 29.813H57.53c-.12-7.952.003-15.922.376-23.875l-26.812-6.28C22.55 161.892 64.1 265.716 140.564 339.655l15.655-29.594c-4.198-3.477-8.25-7.063-12.157-10.75 5.846-6.112 12.293-11.76 19.28-16.843 13.468 13.172 28.182 23.565 43.813 30.655 22.114 17.744 8.053 29.368-23.5 36.25 58.863 10.6 38.948 62.267-14.125 92.313l-6.28.812c-12.047 1.718-21.876 3.71-29.406 6.25-3.765 1.27-6.958 2.6-9.906 4.656-2.95 2.055-6.626 5.705-6.626 11.406 0 5.702 3.677 9.32 6.626 11.375 2.948 2.055 6.14 3.387 9.906 4.657 7.53 2.54 17.36 4.532 29.406 6.25 24.094 3.436 56.784 5.53 92.906 5.53 36.123 0 68.812-2.094 92.906-5.53 12.048-1.718 21.877-3.71 29.407-6.25 3.764-1.27 6.957-2.602 9.905-4.656 2.948-2.055 6.625-5.674 6.625-11.375 0-5.702-3.677-9.352-6.625-11.407-2.948-2.055-6.14-3.387-9.906-4.656-7.53-2.54-17.36-4.532-29.408-6.25l-6.25-.813c-53.076-30.045-72.99-81.71-14.125-92.312-31.568-6.886-45.63-18.522-23.468-36.28 15.74-7.15 30.547-17.655 44.092-30.97 6.648 4.773 12.84 10.038 18.47 15.72-4.105 4.172-8.338 8.257-12.72 12.217l16.188 29.594c79.118-71.955 116.195-179.53 110.03-285l-27.342 7.97c.45 7.61.64 15.19.562 22.75h-25.594c.702-9.792 1.063-19.735 1.063-29.814h-.75c-.323-5.39-3.763-9.293-7-11.75-3.402-2.58-7.31-4.383-11.97-6.093-9.32-3.422-21.704-6.177-36.875-8.532-30.342-4.71-71.613-7.563-117.22-7.563zm0 18.688c44.822 0 85.426 2.854 114.344 7.343 14.46 2.245 26.06 4.932 33.313 7.594l2.625 1.125-2.625 1.125c-7.252 2.662-18.854 5.38-33.313 7.625-28.918 4.49-69.522 7.344-114.344 7.344-44.82 0-85.425-2.855-114.344-7.345-14.46-2.245-26.06-4.963-33.312-7.625l-2.625-1.125 2.625-1.125c7.252-2.662 18.853-5.35 33.313-7.594 28.918-4.49 69.522-7.343 114.343-7.343zm-197.25 71.874H86.25c8.057 57.878 28.23 108.83 56.188 146.25-6.974 5.74-13.407 11.968-19.188 18.688-38.648-46.456-59.042-104.647-64.344-164.938zm367.188 0h27C447.51 171.82 425.336 228.34 388.03 275c-5.44-6.055-11.406-11.73-17.842-16.97 27.81-37.38 47.873-88.175 55.906-145.842z"/></symbol>'
    + '<symbol id="ic-grass" viewBox="0 0 512 512"><path d="M461.563 38.938C313.435 165.053 232.49 371.144 210.313 492.5h77.218c31.597-122.495 51.135-263.494 174.033-453.563zM78.375 91.374c52.397 62.796 102.31 132.45 142.094 199.28 7.298 12.263 14.236 24.417 20.81 36.408 7.833-19.184 16.525-38.697 26.095-58.282-51.817-71.23-113.464-135.005-189-177.405zm391.188 133.72c-51.588 46.498-78.856 114.453-90.594 190.655 13.775 25.835 26.704 51.295 38.936 75.875h39.375c-25.25-71.46-11.537-162.36 12.283-266.53zM67 240.437c72.962 73.26 120.794 188.6 80.094 250.78h45c4.494-25.12 11.34-53.633 20.687-84.25C194.338 322.68 131.42 242.927 67 240.44zm-32.875 87.937C87.145 409.31 95.83 453.34 75.063 490.97h67.5c-13.1-72.02-31.444-116.305-108.438-162.595zm300.938 45.594c-10.65 41.36-19.188 80.437-28.813 118.25h91.72c-19.144-38.286-39.92-78.392-62.908-118.25z"/></symbol>'
    + '</svg>';

  var SHELL =
      '<div class="app">'
    + '<section class="screen" id="quest">'
    + '<div class="brandbar"><svg class="ic"><use href="#ic-grass"/></svg> Grow With Trees</div>'
    + '<div class="qhead"><span class="team" id="qteam"></span></div>'
    + '<div class="dots" id="dots"></div>'
    + '<div id="stopmount"></div>'
    + '</section>'
    + '<section class="screen" id="finale">'
    + '<div class="finale-inner">'
    + '<div class="chesticn"><svg class="ic"><use href="#ic-chest"/></svg></div>'
    + '<h2>All six stops cleared</h2>'
    + '<p class="sub">You just used every part of the app a Liberty crew works with in the field. Here is your box number.</p>'
    + '<div class="fragbox">'
    + '<p class="fraglabel">Your team\'s fragment</p>'
    + '<div class="fragnum" id="fragnum">--</div>'
    + '<div class="boxtag" id="boxtag"></div>'
    + '<div class="combine-steps">'
    + '<div class="cstep"><span class="n">1</span><span>Take this number to a <b id="boxcolor2">--</b> prize box.</span></div>'
    + '<div class="cstep"><span class="n">2</span><span>Find <b>another team with the same box color</b>.</span></div>'
    + '<div class="cstep"><span class="n">3</span><span>Put your two numbers together into the <b>4-digit combo</b> (your number goes first) and open the box.</span></div>'
    + '</div>'
    + '<div class="prize"><svg class="ic"><use href="#ic-trophy"/></svg> Buttons, stickers, and candy inside</div>'
    + '</div>'
    + '<div class="restart"><button id="restartBtn">start over</button></div>'
    + '</div>'
    + '</section>'
    + '</div>'
    + '<div class="flash" id="flash"><svg class="ic"><use href="#ic-open-chest"/></svg><div class="word">Unlocked</div></div>';

  function buildStops(team) {
    var t = TEAMS[team];
    return [
      {
        icon: "ic-talk", feat: "Messages", title: "Radio the crew lead",
        body: "Open the Let Grow app and tap <b>Messages</b>. Find <b>" + t.trainer + "</b> in your list and send exactly this:"
          + "<span class='send'>" + team.toUpperCase() + " CHECKING IN</span>"
          + t.trainer + " will message you back a trail word. Type it in below.",
        accept: [t.word],
        hintBad: "That is not the word " + t.trainer + " sent. Open Messages and check the reply.",
        hintExtra: "Still nothing? Make sure you sent <b>" + team.toUpperCase() + " CHECKING IN</b> to " + t.trainer + ", not another trainer."
      },
      {
        icon: "ic-search", feat: "Field Guide · Search", title: "Name that compatible plant",
        body: "You do not have this one in hand, just the field notes a crew would jot down. Use <b>Search</b> in the app to find the plant that matches, then type its common name."
          + "<ul class='fieldnotes'>"
          + "<li>Low, bushy native shrub that stays well under the wires</li>"
          + "<li>Slender arching stems, small pinkish flowers</li>"
          + "<li>Tight clusters of coral-pink berries that hang on into winter</li>"
          + "<li>White-tailed deer browse it hard, a compatible species we keep</li>"
          + "</ul>",
        accept: ["coralberry", "coral berry", "buckbrush", "buck brush"],
        hintBad: "Not the coral-berry shrub. Try searching the field guide again.",
        hintExtra: "It goes by two names in Missouri. One sounds like a <b>color</b>, one is what <b>deer</b> do to it. Search 'coral'."
      },
      {
        icon: "ic-cam", feat: "Plant Identify · Scan", title: "Find it and scan it",
        body: "Head to the <b>plant wall</b>. Most of what is posted are incompatible trees a crew would control, redcedar, black locust, hedge, sweetgum. <b>One</b> is your deer favorite from the last stop."
          + "<br><br>Point the app's <b>Identify</b> camera at the plants and scan until it names the coralberry / buckbrush. Open its field-guide entry and read the <b>Field Code</b> near the bottom.",
        accept: ["songbird"],
        hintBad: "No code yet. Make sure the app actually identified the coralberry.",
        hintExtra: "The <b>Field Code</b> only shows on the coralberry's own field-guide entry. Scroll to the bottom of that page."
      },
      {
        icon: "ic-video", feat: "Tutorial Video", title: "Johnny in the field",
        body: "In the app, open <b>Tutorial Videos</b> and play <b>“Johnny – Compatible or Not?”</b> (about 90 seconds)."
          + "<br><br>Johnny walks a Missouri right-of-way and points out one <b>incompatible</b> tree that fools new crews. It looks harmless small, then grows fast, right into the conductors. Which tree does Johnny say to <b>treat, not leave?</b>",
        accept: ["redcedar", "red cedar", "cedar", "eastern redcedar", "eastern red cedar"],
        hintBad: "Not the one Johnny means. Watch the last part of the clip again.",
        hintExtra: "It is the <b>evergreen</b> that is all over central Missouri pastures and fence lines."
      },
      {
        icon: "ic-chat", feat: "ChatTrain", title: "The landowner conversation",
        body: "Open <b>ChatTrain</b> and start <b>“Mrs. Webb – the spraying question.”</b>"
          + "<br><br>She saw your crew treating brush near her fence and she is worried you are killing everything, including the plants she likes for wildlife. Talk her through it: you run <b>selective treatment</b> to control the tall incompatible trees and <b>keep the compatible, deer-friendly plants</b> like her coralberry."
          + "<br><br>Work it until ChatTrain says you passed the beat. It shows a pass phrase, type that in.",
        accept: ["compatible cover", "compatiblecover"],
        hintBad: "That is not the phrase ChatTrain gave you.",
        hintExtra: "Keep going until Mrs. Webb is reassured. The <b>pass phrase</b> appears the moment you pass the beat."
      },
      {
        icon: "ic-note", feat: "FieldBite", title: "Log your find", confirm: true,
        body: "Last stop. Open <b>FieldBite</b> and fill out today's quick log:"
          + "<ul class='fieldnotes'>"
          + "<li>Which compatible species did your team find on the wall?</li>"
          + "<li>Roughly how tall was it?</li>"
          + "<li>Is it compatible with the right-of-way? (yes / no)</li>"
          + "</ul>"
          + "Submit it in the app, then tap the button below for your box number.",
        confirmLabel: "We submitted our FieldBite"
      }
    ];
  }

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var state = { team: null, stop: 0, stops: [] };

  function norm(s) { return (s || "").toString().trim().toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " "); }
  function keyFor(team) { return "luc-escape-" + team; }
  function save() { try { localStorage.setItem(keyFor(state.team), JSON.stringify({ stop: state.stop })); } catch (e) {} }
  function load(team) { try { var r = localStorage.getItem(keyFor(team)); return r ? JSON.parse(r) : null; } catch (e) { return null; } }

  function show(id) {
    ["quest", "finale"].forEach(function (s) { var el = $("#" + s); if (el) el.classList.toggle("on", s === id); });
    window.scrollTo(0, 0);
  }

  function renderQuest() {
    var t = TEAMS[state.team];
    $("#qteam").innerHTML = "<span class='swatch " + t.color + "'></span>Team " + state.team;
    var dots = $("#dots"); dots.innerHTML = "";
    for (var i = 0; i < state.stops.length; i++) {
      var d = document.createElement("span");
      d.className = "d" + (i < state.stop ? " done" : "") + (i === state.stop ? " cur" : "");
      dots.appendChild(d);
    }
    renderStop();
  }

  function renderStop() {
    var s = state.stops[state.stop];
    var m = $("#stopmount");
    var html = "<div class='stopcard'>"
      + "<div class='stop-icn'><svg class='ic'><use href='#" + s.icon + "'/></svg></div>"
      + "<p class='stop-feat'>Stop " + (state.stop + 1) + " of " + state.stops.length + " · " + s.feat + "</p>"
      + "<h2>" + s.title + "</h2>"
      + "<div class='body'>" + s.body + "</div>";
    if (s.confirm) {
      html += "<button class='btn-confirm' id='confirmBtn'>" + s.confirmLabel + "</button>";
    } else {
      html += "<div class='answer'>"
        + "<label for='codein'>Enter the code</label>"
        + "<div class='inrow'>"
        + "<input id='codein' autocomplete='off' autocapitalize='characters' spellcheck='false' placeholder='type it here'>"
        + "<button class='btn-go' id='goBtn'>Unlock</button>"
        + "</div>"
        + "<div class='hint' id='hint'></div>"
        + "<button class='hintlink' id='hintlink'>Stuck? Show a hint</button>"
        + "<div class='hint-extra' id='hintextra'>" + (s.hintExtra || "") + "</div>"
        + "</div>";
    }
    html += "</div>";
    m.innerHTML = html;

    if (s.confirm) {
      $("#confirmBtn").addEventListener("click", advance);
    } else {
      var input = $("#codein");
      $("#goBtn").addEventListener("click", check);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") check(); });
      $("#hintlink").addEventListener("click", function () { $("#hintextra").classList.add("show"); this.style.display = "none"; });
      input.focus();
    }
  }

  function check() {
    var s = state.stops[state.stop];
    var input = $("#codein");
    var val = norm(input.value);
    if (!val) return;
    var ok = s.accept.some(function (a) { return val.indexOf(norm(a)) !== -1; });
    if (ok) { flashThen(advance); }
    else {
      input.classList.remove("wrong"); void input.offsetWidth; input.classList.add("wrong");
      $("#hint").innerHTML = "<span class='msg-bad'>" + s.hintBad + "</span>";
      input.select();
    }
  }

  function flashThen(fn) {
    var f = $("#flash"); f.classList.add("on");
    setTimeout(function () { f.classList.remove("on"); fn(); }, 780);
  }

  function advance() {
    state.stop++; save();
    if (state.stop >= state.stops.length) { show("finale"); renderFinale(); }
    else { renderQuest(); }
  }

  function renderFinale() {
    var t = TEAMS[state.team];
    $("#fragnum").textContent = t.frag;
    $("#boxtag").innerHTML = "<span class='sw " + t.color + "'></span>" + t.color + " box";
    $("#boxcolor2").textContent = t.color;
  }

  function fail(msg) {
    document.body.innerHTML = "<div style='max-width:520px;margin:60px auto;padding:24px;font-family:sans-serif;color:#4B5A50'>"
      + "<h2 style='color:#B4442E'>Unknown team</h2><p>" + msg + "</p></div>";
  }

  function init() {
    var team = window.TEAM_ID;
    if (!team || !TEAMS[team]) { fail("This link is not set to a valid team. Check the QR code or the organizer hub."); return; }
    document.body.insertAdjacentHTML("afterbegin", SPRITE + SHELL);
    state.team = team;
    state.stops = buildStops(team);
    var saved = load(team);
    state.stop = saved ? Math.min(saved.stop, state.stops.length) : 0;
    $("#restartBtn").addEventListener("click", function () {
      try { localStorage.removeItem(keyFor(team)); } catch (e) {}
      state.stop = 0; show("quest"); renderQuest();
    });
    if (state.stop >= state.stops.length) { show("finale"); renderFinale(); }
    else { show("quest"); renderQuest(); }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
