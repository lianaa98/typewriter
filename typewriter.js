const sentence = "hello there from lighthouse labs";
let s = sentence + "\n";

for (let i = 0; i < s.length; i++) {
  setTimeout(() => {
    process.stdout.write(s[i]);
  }, 1000 + i * 500);
}