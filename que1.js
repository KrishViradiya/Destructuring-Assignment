const wordCount = (text) => {
  const words = text.split(" ");

  const wordCounts = {};

  for (const word of words) {
    const cleanedWord = word.replace(/[^a-zA-Z]/g, "").toLowerCase();
    console.log(cleanedWord);

    if (cleanedWord !== "") {
      wordCounts[cleanedWord] = (wordCounts[cleanedWord] || 0) + 1;
    }
  }

  return wordCounts;
}

const text = "one plus one plus one is two two";
const result = wordCount(text);

for (const word in result) {
  console.log(`${word}: ${result[word]}`);
}
