class PrimitiveString {
  static [Symbol.hasInstance](x) {
    return typeof x === "string";
  }
}
console.log("hello world" instanceof PrimitiveString); // true
