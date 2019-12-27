import { add } from "./func";
test("add", () => {
  const value = add(1, 2);
  expect(true).toBeTruthy();
  expect(value).toBe(3);
});
