// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

const pattern = (n) => {
  let patternCapturer = "";
  let counter = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      counter++;
      patternCapturer += `${counter} `;
    }
    patternCapturer += "\n";
  }
  console.log(patternCapturer);
};

pattern(5);

// A
// AB
// ABC
// ABCD
// ABCDE

const alphabetPattern = (n) => {
  let patternCapturer = "";
  for (let i = 1; i <= n; i++) {
    let alphabetIndex = 65;
    for (let j = 1; j <= i; j++) {
      patternCapturer += `${String.fromCharCode(alphabetIndex)}`;
      alphabetIndex++;
    }
    patternCapturer += "\n";
  }
  console.log(patternCapturer);
};
alphabetPattern(5);

// ABCDE
// ABCD
// ABC
// AB
// A

const alphabetPatternReverse = (n) => {
  let patternCapturer = "";
  for (let i = 1; i <= n; i++) {
    let alphabetIndex = 65;
    for (let j = n; j >= i; j--) {
      patternCapturer += `${String.fromCharCode(alphabetIndex)}`;
      alphabetIndex++;
    }
    patternCapturer += "\n";
  }
  console.log(patternCapturer);
};
alphabetPatternReverse(5);

// A
// BB
// CCC
// DDDD
// EEEEE

const alphabetPatternIdentical = (n) => {
  let patternCapturer = "";
  let alphabetIndex = 65;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      patternCapturer += `${String.fromCharCode(alphabetIndex)}`;
    }
    alphabetIndex++;
    patternCapturer += "\n";
  }
  console.log(patternCapturer);
};
alphabetPatternIdentical(5);

// *****
// *   *
// *   *
// *   *
// *****

const hollowSquarePattern = (n) => {
  let patternCapturer = "";
  for (let i = 1; i <= n; i++) {
    if (i == 1 || i == n) {
      for (let j = 1; j <= n; j++) {
        patternCapturer += "* ";
      }
    } else {
      for (let j = 1; j <= n; j++) {
        if (j == 1 || j == n) {
          patternCapturer += "* ";
        } else {
          patternCapturer += " ";
        }
      }
    }
    patternCapturer += "\n";
  }

  console.log(patternCapturer);
};

hollowSquarePattern(5);
