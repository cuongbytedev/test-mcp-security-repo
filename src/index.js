function greet(name) {
  return "Hello, " + name;
}

function insecureEval(userInput) {
  // Intentional insecure pattern for CodeQL to potentially flag
  return eval(userInput);
}

console.log(greet("world"));
