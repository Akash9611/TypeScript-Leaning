//Adding Types to Functions - Parameter & Return Value Types

function add(a: number, b: number) {
  const result = a + b;
  return result;
}

add(10, 20);

function add1(a: number, b: number): number {
  // by default above function will take the number as return type. But here is example that how we can also explicitly specify the return type to a particular function.
  // We can also define return types as undefined, void (means empty) and string, boolean;
  const result = a + b;
  return result;
}
add1(1, 2);
