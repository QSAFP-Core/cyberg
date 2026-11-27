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

   CHALLENGE card (the "Which AI wrote this?" game):
     { type: "challenge", voice: 1 },        voice 1 to 7

   KILROY WAS HERE (optional, on any card):
     add  kilroy: "https://www.instagram.com/p/XXXXXXXX/"
     to send people to that video's Instagram post to sign the wall
     with their handle in the comments. The site itself saves nothing.
     KILROY_DEFAULT below is used for any card without its own link
     (for example your Instagram profile). Leave it "" to hide the button.

   Add, remove or reorder whole { ... }, blocks.
   Keep the comma after each closing } and the quotes around text.
   ===================================================================== */

window.KILROY_DEFAULT = "";

window.CYBERG_FEED = [
  { type: "video",
    url: "media/cyberg-placeholder-9x16.mp4",
    poster: "media/cyberg-placeholder-poster.jpg",
    label: "What if your mind had a squad?",
    caption: "Paired. Synced. Still you." },

  { type: "challenge", voice: 1 },

  { type: "video",
    url: "media/cyberg-placeholder-9x16.mp4",
    poster: "media/cyberg-placeholder-poster.jpg",
    label: "Build your squad",
    caption: "Placeholder: your next 9:16 video goes here." },

  { type: "challenge", voice: 2 },
];
