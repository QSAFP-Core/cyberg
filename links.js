/* =====================================================================
   CYBERGING.ORG: LINKS + QUOTE
   ---------------------------------------------------------------------
   Every button on the site that leaves cyberging.org reads its address
   from here. Change a link once and it changes everywhere.
   Leave a grade-specific Talkspresso link "" and the main one is used.
   ===================================================================== */

window.CYBERG_LINKS = {
  instagram:   "https://www.instagram.com/mofactmax/",     // Kilroy wall
  talkspresso: "https://talkspresso.com/maxbruce",          // main booking page

  // Grade-specific Talkspresso sessions (optional; "" = use the main page)
  talkspressoElementary: "",
  talkspressoMiddle:     "",
  talkspressoHigh:       "",

  challenge:   "https://thefinalsay.org/commandments/",     // the original Challenge
  finalsay:    "https://thefinalsay.org/",                  // free book
  quorum:      "https://aicomsci.org"                       // the Quorum / Cyberg method
};

/* The quote screen right after the title. Change the words any time.
   Put *stars* around words to show them in gold. Leave "" to hide the screen. */
window.CYBERG_QUOTE = {
  text: "We treat smartphones like *synapses*.",
  by:   "",          // optional line under the quote, e.g. "MAXBRUCE"
  more: "What's a synapse? Play and find out ↓",   // "" hides the link
  moreLesson: "synapses"                            // which lesson it jumps to
};
