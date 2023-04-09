/**
 *
 * @description : This is part 1 of Patterns Implementation in Javascript.
 * @author  : Jagroop
 */
// Pattern  : 1
// *****
// *****
// *****
// *****
// *****

// This function will print the Pattern 1 that is described above
const printSquare = (input) => {
  let patternCapturer = "";
  for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= input; j++) {
      patternCapturer += "* ";
    }
    patternCapturer += "\n";
  }
  console.log(patternCapturer);
};

// Providing Input value on the basis of this  Pattern Printed
printSquare(3);

// Pattern 2 :
// *
// **
// ***
// ****
// *****

// This function will print Pattern 2 as described above
const printRightAngledTriangle = (input) => {
  let patternCapturer = "";
  for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
      patternCapturer += "* ";
    }
    patternCapturer += "\n";
  }
  console.log(patternCapturer);
};

// Providing Input value on the basis of this  Pattern Printed
printRightAngledTriangle(5);

// Pattern: 3
// 1
// 12
// 123
// 1234
// 12345

// This function will print Pattern 2 as described above
const printRightAngledTriangleWithNums = (input) => {
  let patternCapturer = "";
  for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
      patternCapturer += `${j} `;
    }
    patternCapturer += "\n";
  }
  console.log(patternCapturer);
};

// Providing Input value on the basis of this  Pattern Printed
printRightAngledTriangleWithNums(5);

// Pattern: 4
// 1
// 22
// 333
// 4444
// 55555

// This function will print Pattern 2 as described above
const printRightAngledTriangleWithIdenticalNums = (input) => {
  let patternCapturer = "";
  for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
      patternCapturer += `${i} `;
    }
    patternCapturer += "\n";
  }
  console.log(patternCapturer);
};

// Providing Input value on the basis of this  Pattern Printed
printRightAngledTriangleWithIdenticalNums(5);

// Pattern : 5

// *****
// ****
// ***
// **
// *

// This function will print Pattern 5 as described above
const reversedRtAngledT = (input) => {
  let patternCapturer = "";
  for (let i = 1; i <= input; i++) {
    for (let j = input; j >= i; j--) {
      patternCapturer += "* ";
    }
    patternCapturer += "\n";
  }
  console.log(patternCapturer);
};

// Providing Input value on the basis of this  Pattern Printed
reversedRtAngledT(5);

// Pattern : 6

// 12345
// 1234
// 123
// 12
// 1

// This function will print Pattern 6 as described above
const reversedRtAngledTWithNums = (input) => {
  let patternCapturer = "";
  for (let i = 1; i <= input; i++) {
    for (let j = input; j >= i; j--) {
      patternCapturer += `${input - (j - 1)}`;
    }
    patternCapturer += "\n";
  }
  console.log(patternCapturer);
};

// Providing Input value on the basis of this  Pattern Printed
reversedRtAngledTWithNums(5);

// Pattern : 7
//    *
//   ***
//  *****

// This function will print Pattern 7 as described above
const pyramidPattern = (input) => {
  let patternCapturer = "";

  for (let i = 1; i <= input; i++) {
    // Printing Spaces
    for (let j = 1; j <= input - i; j++) {
      patternCapturer += " ";
    }

    //Printing Stars
    for (let k = 0; k < 2 * i - 1; k++) {
      patternCapturer += "*";
    }

    patternCapturer += "\n";
  }
  console.log(patternCapturer);
};
// Providing Input value on the basis of this  Pattern Printed
pyramidPattern(5);

// Pattern :8
//   *****
//    ***
//     *

// This function will print Pattern 8 as described above
const reversePyramid = (input) => {
  let patternCapturer = "";

  for (let i = 0; i < input; i++) {
    // For printing spaces
    for (let j = 0; j < i; j++) {
      patternCapturer += " ";
    }

    // For printing stars
    for (let k = 0; k < 2 * (input - i) - 1; k++) {
      patternCapturer += "*";
    }
    patternCapturer += "\n";
  }
  console.log(patternCapturer);
};

// Providing Input value on the basis of this  Pattern Printed
reversePyramid(5);

// Pattern : 9
//    *
//   ***
//  *****
//  *****
//   ***
//    *

// This function will print Pattern 9 as described above
const printDiamond = (input) => {
  let patternCapturer = "";

  for (let i = 1; i <= input; i++) {
    // for spaces
    for (let j = 1; j <= input - i; j++) {
      patternCapturer += " ";
    }

    //for Stars
    for (let k = 0; k < 2 * i - 1; k++) {
      patternCapturer += "*";
    }
    patternCapturer += "\n";
  }
  for (let i = 0; i < input; i++) {
    // for spaces
    for (let j = 0; j < i; j++) {
      patternCapturer += " ";
    }
    // for stars
    for (let k = 0; k < 2 * (input - i) - 1; k++) {
      patternCapturer += "*";
    }
    patternCapturer += "\n";
  }
  console.log(patternCapturer);
};

// Providing Input value on the basis of this  Pattern Printed
printDiamond(5);

// Pattern: 10
// 1
// 01
// 101
// 0101
// 10101

// This function will print Pattern 10 as described above
const printRightAngledTriangleWithBoolNums = (input) => {
  let patternCapturer = "";
  for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
      patternCapturer += `${(i + j) % 2 == 0 ? 1 : 0} `;
    }
    patternCapturer += "\n";
  }
  console.log(patternCapturer);
};

// Providing Input value on the basis of this  Pattern Printed
printRightAngledTriangleWithBoolNums(5);

// Pattern 11

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

// This function will print Pattern 11 as described above
const rightArrowPattern = (input) => {
  let patternCapturer = "";

  for (let i = 1; i <= input; i++) {
    for (let j = 1; j <= i; j++) {
      patternCapturer += "* ";
    }
    patternCapturer += "\n";
  }

  for (let i = 1; i < input; i++) {
    for (let j = input - 1; j >= i; j--) {
      patternCapturer += "* ";
    }
    patternCapturer += "\n";
  }

  console.log(patternCapturer);
};

// Providing Input value on the basis of this  Pattern Printed
rightArrowPattern(5);
