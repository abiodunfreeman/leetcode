// @ts-nocheck
/*
    - Returns True if needle is found in haystack
    - Returns False otherwise
    - finds the middle (lo + (hi - lo) / 2)
    - do while(lo < hi)
    - if the middle value === needle -> return true
    - if the middle value is less than the needle -> set the new low as middle position + 1 and continue;
    - if the middle value is higgher than the needle -> set the new high as middle position - 1 and continue;
    - return false if to the end
*/
const h = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170];
const n = 110;
function Search(hayStack, needle) {
  let lo = 0;
  let hi = hayStack.length;
  let steps = 0;

  do {
    let m = Math.floor(lo + (hi - lo) / 2);
    let v = hayStack[m];
    steps += 1;
    if (v === needle) {
      console.log(
        `STEPS Taken  (${steps}) - for size ${hayStack.length} - Position ${m}`
      );
      return true;
    }
    if (v < needle) {
      lo = m + 1;
    } else if (v > needle) {
      hi = m - 1;
    }
  } while (lo < hi);
  return false;
}
console.log(Search(h, n));
