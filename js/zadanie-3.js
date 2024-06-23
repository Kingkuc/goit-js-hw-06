class StringBuilder {
    // Konstruktor przyjmuje początkową wartość ciągu znaków
    constructor(initialValue) {
      this.#value = initialValue; // Prywatna właściwość value
    }
  
    // Prywatna właściwość value
    #value;
  
    // Metoda zwraca aktualną wartość prywatnej właściwości value
    getValue() {
      return this.#value;
    }
  
    // Metoda dodaje parametr str na końcu wartości prywatnej właściwości value
    padEnd(str) {
      this.#value += str;
    }
  
    // Metoda dodaje parametr str na początku wartości prywatnej właściwości value
    padStart(str) {
      this.#value = str + this.#value;
    }
  
    // Metoda dodaje parametr str na początku i na końcu wartości prywatnej właściwości value
    padBoth(str) {
      this.#value = str + this.#value + str;
    }
  }

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
