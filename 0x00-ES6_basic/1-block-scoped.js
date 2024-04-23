export default function taskBlock(trueOrFalse) {
  const task = false; // Using let instead of var
  const task2 = true; // Using let instead of var

  if (trueOrFalse) {
    const task = true; // Using let instead of var
    const task2 = false; // Using let instead of var
  }

  return [task, task2];
}
