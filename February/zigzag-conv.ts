const convert = (s: string, numRows: number): string => {
  if (numRows === 1) return s;

  const { length } = s;
  let curRow: number = 0;
  let goingDown: boolean = false;
  //how many elements each row should contain?

  const rows: string[] = [];

  for (let i = 0; i < Math.min(numRows, length); i++) {
    rows.push("");
  }

  for (let c = 0; c < s.length; c++) {
    rows[curRow] += s[c];
    if (curRow == 0 || curRow == numRows - 1) goingDown = !goingDown;
    curRow += goingDown ? 1 : -1;
  }

  return rows.join("");
};
