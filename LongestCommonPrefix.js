function longestCommonPrefix(strs) {
  if (strs.length == 0) return '';
  let prefix = '';
  for (let i = 0; i < strs.length; i++) {
    const currentWord = strs[i];
    const wordSplit = currentWord.split('');
    let tempPrefix = '';
    wordSplit.forEach(letter => {
      tempPrefix += letter;
      if (strs.every(word => word.includes(tempPrefix))) {
        console.log(`All words contain ${tempPrefix}`);
        if (tempPrefix.length > prefix.length) {
          prefix = tempPrefix;
        }
      } else {
        tempPrefix = '';
        return;
      }
    });
    console.log(tempPrefix.length);
  }
  console.log(prefix + ' PREFIX');
  return prefix;
}
console.log(longestCommonPrefix(['flow', 'xflower']));
// ['flower', 'flow', 'flight'] => 'fl'
// ['cir', 'car'] => 'c'
