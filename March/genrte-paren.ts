const generateParenthesis = (n: number): string[] => {
  //Given n pairs of parentheses
  //for example n = 3, ()()(), ((())), (())()
  //what is a well formed parentheses?
  const parens: string[] = [];
  let cur: string = "";
  backTrack(parens, cur, 0, 0, n);
  return parens;
};

const backTrack = (
  parens: string[],
  cur: string,
  open: number,
  close: number,
  max: number
): void => {
  //base case to escape recursion
  if (cur.length === max * 2) {
    parens.push(cur);
    return;
  }
  if (open < max) {
    cur += "(";
    backTrack(parens, cur, open + 1, close, max);
    cur = cur.slice(0, cur.length - 1);
  }
  if (close < open) {
    cur += ")";
    backTrack(parens, cur, open, close + 1, max);
    cur = cur.slice(0, cur.length - 1);
  }
};

console.log(generateParenthesis(3));
