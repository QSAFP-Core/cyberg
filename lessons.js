/* =====================================================================
   CYBERGING.ORG: LESSONS
   ---------------------------------------------------------------------
   Each lesson is a list of steps that play inside one 9:16 card.
   Put a lesson in the feed with  { type: "lesson", id: "fall-leaves" }
   in feed.js.

   grade:  "E" Elementary (grades 3-5) · "M" Middle School (6-8) · "H" High School (9-12)

   STEP TYPES
     hook     big opening question
     quorum   three example AI answers, one has a mistake ("glitch"); wrong: true marks it
     sort     tap each item into the right bin (2 or 3 bins)
     order    tap the items in the right order (write them here in the correct order)
     call     the player's own answer. Stays on their phone only. mvup = the squad tip
     mission  something to do off-screen. links use names from links.js:
              instagram, talkspresso, challenge, finalsay, quorum
              (talkspresso automatically uses the grade's link if set)
   BACKDROP VIDEO (bg): a 9:16 MP4 that plays dimmed behind the game.
     Open it in Clipchamp or Adobe Express, add your music and voiceover,
     export with the SAME file name into the media folder, and the game
     picks it up. Sound starts muted; one tap turns it on.
   All lessons are original Cyberg(TM) content.
   ===================================================================== */

window.CYBERG_LESSONS = {

  /* ------------------------- CYBERG CORE (Middle + High School) ------------------------- */
  "synapses": {
    grade: "MH", subject: "Brain science", color: "#73e0ff", bg: "media/bg-synapse.mp4",
    title: "Is your phone a synapse?",
    steps: [
      { type: "hook", text: "We say \"we treat smartphones like synapses.\" Bold claim! First, find out what a synapse really is. Then YOU decide if the comparison holds up." },
      { type: "quorum", q: "What is a synapse?",
        answers: [
          { t: "The tiny junction where one nerve cell passes a signal to the next one, usually by releasing chemical messengers across a small gap." },
          { t: "A synapse is a type of nerve cell in your brain. You have billions of them, and they do your thinking.", wrong: true },
          { t: "A connection point between neurons. Signals cross it, and connections you use a lot tend to get stronger." } ],
        explain: "A synapse isn't a cell. It's the connection BETWEEN nerve cells (neurons), where a signal crosses from one to the next. Your brain has trillions of them, and learning changes them." },
      { type: "sort", prompt: "Fact or myth?", bins: ["Fact", "Myth"],
        items: [
          { t: "Signals often cross a synapse using chemical messengers", bin: 0 },
          { t: "A synapse is a whole brain cell", bin: 1 },
          { t: "Connections you use often tend to get stronger", bin: 0 },
          { t: "Your brain's connections are fixed and never change", bin: 1 },
          { t: "Learning something new changes your synapses", bin: 0 },
          { t: "Only grown-ups have synapses", bin: 1 } ] },
      { type: "sort", prompt: "Critical thinking: where does \"phone = synapse\" hold up, and where does it break?",
        bins: ["Holds up", "Breaks down"],
        items: [
          { t: "A synapse connects one neuron to others. Your phone connects your mind to your AI squad and to people.", bin: 0 },
          { t: "Connections you practice get stronger. Practicing with your squad makes you sharper.", bin: 0 },
          { t: "A synapse is part of your body. Your phone is a tool you can put down.", bin: 1 },
          { t: "A synapse can't choose what to pass along. YOU choose what to share and what to believe.", bin: 1 },
          { t: "Signals cross a synapse fast. Your squad can bring you ideas in seconds.", bin: 0 },
          { t: "Mindless scrolling builds brainpower, just like a synapse firing.", bin: 1 } ] },
      { type: "call", prompt: "In your own words: what is a synapse, and is your phone one? Make your call.",
        mvup: "Tell your squad how you like new words explained: with examples, pictures, or comparisons. That's part of your MVUP." },
      { type: "mission", title: "Teach it back",
        text: "Explain what a synapse is to someone at home in 30 seconds or less. Then ask them: \"Is a phone like a synapse?\" If you can explain it simply, you really understand it.",
        links: [ { key: "quorum", label: "Meet the Quorum behind Cyberg™" } ] }
    ]
  },

  /* ------------------------------ ELEMENTARY ------------------------------ */
  "fall-leaves": {
    grade: "E", subject: "Science", color: "#ffb347", bg: "media/bg-fall-leaves.mp4",
    title: "Why do leaves change color?",
    steps: [
      { type: "hook", text: "Every fall, green trees turn yellow, orange and red. Where do those colors come from?" },
      { type: "quorum", q: "Why do leaves turn yellow and orange in fall?",
        answers: [
          { t: "The yellow and orange were in the leaf all summer. Green chlorophyll covered them up. In fall the green fades, so the other colors show." },
          { t: "Cold air paints the leaves orange. The colder it gets, the more paint the tree makes.", wrong: true },
          { t: "Shorter days tell the tree to stop making green chlorophyll. When the green is gone, hidden yellows and oranges appear." } ],
        explain: "Trees don't paint their leaves! Yellow and orange were hiding under the green all summer. (Bright reds are different: some trees make those new in fall.)" },
      { type: "sort", prompt: "Summer or fall?", bins: ["Summer", "Fall"],
        items: [
          { t: "Days are long and sunny", bin: 0 },
          { t: "Days get shorter", bin: 1 },
          { t: "Leaves are full of green chlorophyll", bin: 0 },
          { t: "The green fades away", bin: 1 },
          { t: "Leaves make lots of food from sunlight", bin: 0 },
          { t: "Hidden yellow and orange show through", bin: 1 } ] },
      { type: "call", prompt: "If you were a leaf, what color would you turn, and why?",
        mvup: "Squad tip: your AIs explain things better when they know what makes YOU curious. Leaves? Space? Animals? That's part of your MVUP." },
      { type: "mission", title: "Leaf hunt",
        text: "Go outside with a grown-up and find three leaves of different colors. Line them up from most green to least green. Which one has lost the most chlorophyll?",
        note: "Ask a grown-up before going online or posting anything." }
    ]
  },

  "fair-shares": {
    grade: "E", subject: "Math", color: "#7aa8ff", bg: "media/bg-fair-shares.mp4",
    title: "Fair shares: fractions",
    steps: [
      { type: "hook", text: "Would you rather have 1/3 of a pizza or 1/4 of the same pizza? Think fast!" },
      { type: "quorum", q: "Which is bigger: 1/3 or 1/4?",
        answers: [
          { t: "1/3 is bigger. Sharing with fewer people means each piece is bigger." },
          { t: "1/4 is bigger, because 4 is a bigger number than 3.", wrong: true },
          { t: "1/3. Cut a pizza into 3 equal slices and each slice is bigger than when you cut it into 4." } ],
        explain: "Tricky! A bigger number on the bottom means MORE slices, so each slice is SMALLER. 1/3 beats 1/4." },
      { type: "sort", prompt: "Is it the same as one half?", bins: ["Same as 1/2", "Not 1/2"],
        items: [
          { t: "2/4", bin: 0 }, { t: "1/3", bin: 1 }, { t: "3/6", bin: 0 },
          { t: "3/4", bin: 1 }, { t: "4/8", bin: 0 }, { t: "2/3", bin: 1 }, { t: "5/10", bin: 0 } ] },
      { type: "order", prompt: "Tap from smallest slice to biggest slice.",
        items: ["1/8", "1/4", "1/3", "1/2"] },
      { type: "call", prompt: "How do you like math explained best: with pictures, with stories, or step by step?",
        mvup: "Add this to your MVUP! When your squad knows how you learn best, they can explain things YOUR way." },
      { type: "mission", title: "Share it fairly",
        text: "Next snack time, split something fairly with someone at home. How many pieces did you make? What fraction did each person get?",
        note: "Bonus: tell a grown-up why 1/3 is bigger than 1/4." }
    ]
  },

  /* ----------------------------- MIDDLE SCHOOL ---------------------------- */
  "battery-power": {
    grade: "M", subject: "Science", color: "#52ff9e", bg: "media/bg-battery-power.mp4",
    title: "How does a battery work?",
    steps: [
      { type: "hook", text: "Your phone, your earbuds, electric cars and even city power grids run on batteries. What's actually happening inside one?" },
      { type: "quorum", q: "In a battery, what moves through the electrolyte?",
        answers: [
          { t: "Ions cross the electrolyte inside the battery, while electrons take the outside path through the wire and power your device." },
          { t: "Electrons flow straight through the electrolyte from one side to the other. That's what makes the current.", wrong: true },
          { t: "Charged atoms called ions travel through the electrolyte. The electrons go around through the circuit instead." } ],
        explain: "The electrolyte lets ions through but blocks electrons. That forces the electrons to take the long way, through your device, and that flow is the power you use." },
      { type: "sort", prompt: "Inside the battery, or out in the circuit?", bins: ["Inside the battery", "Outside circuit"],
        items: [
          { t: "Electrolyte", bin: 0 }, { t: "The wire", bin: 1 }, { t: "Anode (−)", bin: 0 },
          { t: "The light bulb", bin: 1 }, { t: "Separator", bin: 0 }, { t: "Cathode (+)", bin: 0 }, { t: "The on/off switch", bin: 1 } ] },
      { type: "order", prompt: "Put the flashlight in order.",
        items: ["You flip the switch on", "Electrons leave the anode", "Electrons travel through the wire", "The bulb lights up", "Electrons arrive at the cathode"] },
      { type: "call", prompt: "If batteries were ten times cheaper, what would you build or power?",
        mvup: "Your big ideas belong in your MVUP. A squad that knows your goals can help you chase them." },
      { type: "mission", title: "Research mission: sodium vs. lithium",
        text: "Most batteries today use lithium. Some new ones use sodium, the element in table salt. Ask two different AIs: \"Why might sodium-ion batteries matter?\" Find one thing they disagree on, then check it against a trusted source like a science site or your teacher. You're the judge.",
        links: [ { key: "quorum", label: "How the Quorum method works" } ],
        note: "Most AI apps require users to be 13+. Younger? Do this one with a teacher or parent." }
    ]
  },

  "bill-of-rights": {
    grade: "M", subject: "Civics", color: "#ff7a6b", bg: "media/bg-bill-of-rights.mp4",
    title: "Your rights: the Bill of Rights",
    steps: [
      { type: "hook", text: "Ten short amendments protect your freedom to speak, worship, gather and get a fair trial. How well do you know them?" },
      { type: "quorum", q: "When was the Bill of Rights ratified?",
        answers: [
          { t: "1791, a couple of years after the Constitution took effect in 1789." },
          { t: "1776, at the same time as the Declaration of Independence.", wrong: true },
          { t: "In 1791. Many states wanted guarantees for individual rights before they'd fully trust the new Constitution." } ],
        explain: "1776 is the Declaration of Independence. The Constitution came later, and the Bill of Rights was added in 1791." },
      { type: "sort", prompt: "Is it in the First Amendment?", bins: ["1st Amendment", "Another amendment"],
        items: [
          { t: "Freedom of speech", bin: 0 }, { t: "Right to a speedy, public trial", bin: 1 },
          { t: "Freedom of the press", bin: 0 }, { t: "Protection from unreasonable searches", bin: 1 },
          { t: "Freedom to peacefully assemble", bin: 0 }, { t: "No cruel and unusual punishment", bin: 1 },
          { t: "Freedom of religion", bin: 0 } ] },
      { type: "order", prompt: "Put these in time order.",
        items: ["Declaration of Independence (1776)", "Constitution signed (1787)", "Constitution takes effect (1789)", "Bill of Rights ratified (1791)"] },
      { type: "call", prompt: "Which right matters most to you, and why?",
        mvup: "Your values are part of your MVUP. Tell your squad what you stand for so their help respects it." },
      { type: "mission", title: "Ask a grown-up",
        text: "Ask an adult you trust: \"Which right would you never give up?\" Compare their answer with yours. Same or different? Why?",
        links: [ { key: "instagram", label: "Kilroy wall on Instagram (13+)" } ],
        note: "Instagram is for ages 13 and up." }
    ]
  },

  /* ------------------------------ HIGH SCHOOL ----------------------------- */
  "spot-the-fallacy": {
    grade: "H", subject: "Logic", color: "#ad7aff", bg: "media/bg-spot-the-fallacy.mp4",
    title: "Spot the fallacy",
    steps: [
      { type: "hook", text: "Arguments online are full of tricks that sound convincing but don't hold up. Can you catch them, even when an AI makes them?" },
      { type: "quorum", q: "What is a straw man argument?",
        answers: [
          { t: "Twisting someone's argument into a weaker version, then attacking that version instead of what they said." },
          { t: "Attacking the person making the argument instead of the argument itself.", wrong: true },
          { t: "Arguing against an exaggerated or distorted version of someone's position." } ],
        explain: "Attacking the person is a different fallacy: ad hominem. A straw man attacks a fake, weaker version of the argument. Even confident answers can mix up the labels." },
      { type: "sort", prompt: "Name the fallacy.", bins: ["Ad hominem", "Straw man", "False choice"],
        items: [
          { t: "\"Don't trust her climate data. She failed chemistry in high school.\"", bin: 0 },
          { t: "\"Either we ban phones in school or students will never learn anything.\"", bin: 2 },
          { t: "\"He wants a later curfew, so he obviously thinks teens shouldn't have any rules.\"", bin: 1 },
          { t: "\"You're either with us or against us.\"", bin: 2 },
          { t: "\"Why listen to his budget plan? Look at how he dresses.\"", bin: 0 },
          { t: "\"She says we should eat less sugar, so she wants to ban birthday cake.\"", bin: 1 } ] },
      { type: "call", prompt: "When an AI isn't sure, how do you want it to tell you?",
        mvup: "Set your squad's honesty rules in your MVUP: \"Tell me when you're unsure. Show me sources.\" Cybergs keep the final say." },
      { type: "mission", title: "Fallacy hunt",
        text: "This week, find one fallacy in the wild: an ad, a comment section, a speech. Name it and explain it in one sentence. Leave out people's names and don't screenshot anyone.",
        links: [ { key: "instagram", label: "Post it on the Kilroy wall" }, { key: "challenge", label: "Test your judgment: The Challenge" } ],
        note: "Instagram is for ages 13 and up." }
    ]
  },

  "supply-demand": {
    grade: "H", subject: "Economics", color: "#ffc74d", bg: "media/bg-supply-demand.mp4",
    title: "Supply and demand",
    steps: [
      { type: "hook", text: "Why do concert tickets cost a fortune for some shows and almost nothing for others? Two forces run every market." },
      { type: "quorum", q: "A drought cuts the orange harvest in half. What happens to orange juice prices?",
        answers: [
          { t: "They'll likely rise. Supply drops while demand stays about the same." },
          { t: "They'll fall, because farmers need to sell the oranges they have left quickly.", wrong: true },
          { t: "They tend to go up: fewer oranges are available for roughly the same number of buyers." } ],
        explain: "Less supply with the same demand usually means higher prices. The second answer sounds reasonable but gets the basic economics backwards." },
      { type: "sort", prompt: "Will the price likely go up or down?", bins: ["Price likely ↑", "Price likely ↓"],
        items: [
          { t: "A hit game launches and everyone wants the new console", bin: 0 },
          { t: "A factory doubles how many sneakers it makes", bin: 1 },
          { t: "A superstar announces their final tour", bin: 0 },
          { t: "A record strawberry harvest", bin: 1 },
          { t: "Fewer people want to buy DVDs", bin: 1 },
          { t: "A storm closes ports, so fewer imported goods arrive", bin: 0 } ] },
      { type: "call", prompt: "If you started a business tomorrow, what would you sell, and who needs it?",
        mvup: "Your goals belong in your MVUP. When your squad knows what you're building, they can help you plan it." },
      { type: "mission", title: "Bring it to your school",
        text: "Pick one thing you buy often and watch its price for two weeks. Did it change? Use supply and demand to explain why. Want to go deeper with your class? Max and the Quorum run live Cyberg™ sessions for schools.",
        links: [ { key: "talkspresso", label: "Book a Cyberg™ session" }, { key: "finalsay", label: "Read the free book" } ] }
    ]
  }
};
