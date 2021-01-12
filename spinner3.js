let delay = 100;
let interval = 200;

do {

  setTimeout(() => {
  
    process.stdout.write('\r|   ');
  }, delay += interval);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, delay += interval);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, delay += interval);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, delay += interval);

} while (delay < 6000);