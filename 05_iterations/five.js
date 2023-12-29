const coding = ["js", "ruby", "java", "python", "cpp"];
coding.forEach(function (val) {
  console.log(val);
});

// coding.forEach((item) => {
//   console.log(item);
// });

// function printMe(item) {
//   console.log(item);
// }

// coding.forEach(printMe)

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "javascript",
    languageFileName: "js",
  },
];
myCoding.forEach((item) => {
  console.log(item.languageName);
});
