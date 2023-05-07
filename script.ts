function showMyName(name: string): void {
  console.log(name);
}

showMyName("John");

function square(a: number): number {
  return a * a;
}

square(10);

function sum(title: string, ...numbers: number[]): string {
  let result = `${title} + " = " + ${numbers.reduce(
    (sum, num) => sum + num,
    0
  )}`;
  return result;
}

sum("Numbers", 1, 6, 10);

const executeFunc = (
  func: (title: string, num: number, arr: string[]) => void
): void => {
  const title = "Lorem Ipsum";
  func(title, 24, ["Sport", "Movies"]);
};

executeFunc((title, age, hobbies) => {
  return true;
});
