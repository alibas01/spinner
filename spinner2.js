let delay = 100;
let interval = 200;
const str = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ' ]

for (let i = 0; i < 10; i++) {
  for (let item of str) {
    setTimeout(() => {
  
      process.stdout.write(item);
    }, delay += interval);
    
  }
};
