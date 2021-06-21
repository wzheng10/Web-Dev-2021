const franc = require("franc");
const langs = require("langs");
const colors = require("colors")

const input = process.argv[2];
// const langCode = franc("Alle menslike wesens word vry")

const langCode = franc(input)

if (langCode === 'und'){
  console.log("Sorry, I couldn't figure out! Try with more words".rainbow)
} else {
  const language = langs.where("3", langCode);
  console.log(`Our best guess is : ${language.name}`.rainbow)
}
