const getWordService = async (word = "") => {
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  console.log(url);
  const resp = await fetch(url);
  const data = await resp.json();
  console.log(data);
  const meanings = data[0].meanings;
  console.log(meanings);
  return meanings;
};

export default getWordService;
