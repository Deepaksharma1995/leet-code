export default function PromiseRace(iterable) {
  return new Promise((resolve, reject) => {
    if (iterable.length === 0) return;

    iterable.forEach(async (item) => {
      try {
        const value = await item;
        resolve(value);
      } catch (err) {
        reject(err);
      }
    });
  });
}
