export default function sum(number) {
  return function (numB) {
    return numB === undefined ? number : sum(number + numB);
  };
}