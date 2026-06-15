const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  }
};

guests.BURTUS = {
    title: "Senator",
    region: "Rome",
    dietaryPreference: "Vegan",
    pastGifts: ["Silver Dagger", "Marble Bust"]
  } // this will add "BURTUS" to the guests object.


guests.CICERO.pastGifts.push("Golden Lyre");  // to update the pastGifts array for "CICERO" from ["Scroll of Proverbs", "Quill"] to ["Scroll of Proverbs", "Quill", "Golden Lyre"].

const ANTONYRegion =guests.ANTONY.region; // to retrieve the region for "ANTONY" from the guests object.

delete guests.CICERO; // will delete the "CICERO" entry from the guests object.

const generalProfile = guests.ANTONY; // to assigen generalProfile for "ANTONY" and it will retrive it from the guests object.
generalProfile.region = "Egypt"; // to change the reion of ANTONY to "Egypt" in generalProfie and guests object.

// we a using the same referece for both generalProfile and guests.ANTONY so when we change region in one the other will change. Hence region for "ANTONY" in guets will be changed to "Egypt" as well.

