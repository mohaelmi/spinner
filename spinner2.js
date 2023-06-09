
const lines = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];

let delay = 300;
for (let i = 0; i < lines.length; i++) {
  const element = lines[i];
  setTimeout(() => {
    process.stdout.write(element);
  }, delay);
  delay += 200;
}

