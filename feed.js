/* =====================================================================
   CYBERGING.ORG: THE FEED
   ---------------------------------------------------------------------
   Everything below the title screen comes from this list, top to bottom.
   index.html stays unchanged: edit this file, upload it next to
   index.html, done.

   VIDEO card (9:16):
     { type: "video", url: "...", label: "...", caption: "..." },
     url can be a file in the media folder (media/my-video.mp4)
     or a YouTube link. Any of these work as-is, including ?si=...
       https://youtube.com/shorts/xta_jTbuSLw?si=abc123
       https://youtu.be/90xaF7fadL8?si=abc123
       https://www.youtube.com/watch?v=90xaF7fadL8
       <iframe ... src="https://www.youtube.com/embed/90xaF7fadL8" ...></iframe>
     For your own mp4 files you can add  poster: "media/frame.jpg"

   LESSON card (about 10 minutes, from lessons.js):
     { type: "lesson", id: "fall-leaves" },

   GRADE LABELS: lessons carry their own grade. For videos and challenges add
     grades: "E" Elementary, "M" Middle School, "H" High School, or any mix like "MH".
     No grades = shown to everyone. The grade buttons on the title screen use these.

   CHALLENGE card (the "Which AI wrote this?" game):
     { type: "challenge", voice: 1 },        voice 1 to 7
     optional  bg: "media/my-backdrop.mp4"   a video (with your music) behind the game

   KILROY WAS HERE (optional, on any card):
     add  kilroy: "https://www.instagram.com/p/XXXXXXXX/"
     to send people to that video's Instagram post to sign the wall
     with their handle in the comments. The site itself saves nothing.
     KILROY_DEFAULT below is used for any card without its own link
     (for example your Instagram profile). Leave it "" to hide the button.

   PROMISE screen (a short line between cards):
     { type: "note", text: "No ads. *Ever.*" },
     *stars* make words gold. Shown to every grade.
     Add  always: true  to make sure it's never skipped (other promise
     screens are spaced at least 3 cards apart when a grade filter is on).

   Add, remove or reorder whole { ... }, blocks.
   Keep the comma after each closing } and the quotes around text.
   ===================================================================== */

window.KILROY_DEFAULT = "";   // "" = use the Instagram link in links.js

window.CYBERG_FEED = [
  { type: "video", url: "media/v-squad-intro.mp4", poster: "media/v-squad-intro.jpg" },
  { type: "lesson", id: "synapses" },
  { type: "lesson", id: "fall-leaves" },
  { type: "video", url: "media/v-youth-orbital.mp4", poster: "media/v-youth-orbital.jpg" },
  { type: "note", text: "*0* data stored here." },
  { type: "challenge", voice: 1, grades: "MH", bg: "media/bg-challenge-01.mp4" },
  { type: "lesson", id: "battery-power" },
  { type: "video", url: "media/v-crystalline.mp4", poster: "media/v-crystalline.jpg" },
  { type: "note", text: "No ads. *Ever.*" },
  { type: "lesson", id: "spot-the-fallacy" },
  { type: "challenge", voice: 2, grades: "MH", bg: "media/bg-challenge-02.mp4" },
  { type: "video", url: "media/v-youth-crystalline.mp4", poster: "media/v-youth-crystalline.jpg" },
  { type: "lesson", id: "fair-shares" },
  { type: "note", text: "No accounts. No tracking. *Just you.*" },
  { type: "challenge", voice: 3, grades: "MH", bg: "media/bg-challenge-03.mp4" },
  { type: "video", url: "media/v-kling.mp4", poster: "media/v-kling.jpg" },
  { type: "lesson", id: "bill-of-rights" },
  { type: "note", text: "Your MVUP stays *yours*." },
  { type: "challenge", voice: 4, grades: "MH", bg: "media/bg-challenge-04.mp4" },
  { type: "video", url: "media/v-orbital.mp4", poster: "media/v-orbital.jpg" },
  { type: "lesson", id: "supply-demand" },
  { type: "challenge", voice: 5, grades: "MH", bg: "media/bg-challenge-05.mp4" },
  { type: "note", text: "You keep the *final say*." },
  { type: "video", url: "media/v-youth-liquid.mp4", poster: "media/v-youth-liquid.jpg" },
  { type: "challenge", voice: 6, grades: "MH", bg: "media/bg-challenge-06.mp4" },
  { type: "video", url: "media/v-liquid.mp4", poster: "media/v-liquid.jpg" },
  { type: "note", text: "Let's keep *humans* in control.", always: true },
  { type: "challenge", voice: 7, grades: "MH", bg: "media/bg-challenge-07.mp4" },
];
