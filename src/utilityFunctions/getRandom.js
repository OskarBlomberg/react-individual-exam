export default function getRandomNumber(num) {
  return Math.floor(Math.random() * num) + 1;
}

export function getRandomSection() {
  const charNum = getRandomNumber(5);
  return String.fromCharCode(charNum + 64);
}
