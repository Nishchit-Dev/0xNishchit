export const colors = [
  "text-sky-300",
  "text-pink-300",
  "text-green-300",
  "text-yellow-300",
  "text-red-300",
  "text-purple-300",
  "text-blue-300",
  "text-indigo-300",
  "text-violet-300",
];
export const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
