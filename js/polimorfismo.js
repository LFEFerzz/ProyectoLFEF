// ==========================================
// 1: CLASE PADRE Y CIRCULO
// ==========================================
class Figura {
  #nombre;
  constructor(nombre) {
    this.#nombre = nombre;
  }
  getNombre() {
    return this.#nombre;
  }
  calcularArea() {
    return 0;
  }
  calcularPerimetro() {
    return 0;
  }
}

class Circulo extends Figura {
  #radio;
  constructor(radio) {
    super("Circulo");
    this.#radio = radio;
  }
  calcularArea() {
    return Math.PI * Math.pow(this.#radio, 2);
  }
  calcularPerimetro() {
    return 2 * Math.PI * this.#radio;
  }
}

// ==========================================
// 2: RECTANGULO
// ==========================================
class Rectangulo extends Figura {
  #base;
  #altura;
  constructor(base, altura) {
    super("Rectangulo");
    this.#base = base;
    this.#altura = altura;
  }
  calcularArea() {
    return this.#base * this.#altura;
  }
  calcularPerimetro() {
    return 2 * (this.#base + this.#altura);
  }
}

// ==========================================
// 3: TRIANGULO RECTANGULO
// ==========================================
class TrianguloRectangulo extends Figura {
  #base;
  #altura;
  constructor(base, altura) {
    super("Triangulo");
    this.#base = base;
    this.#altura = altura;
  }
  calcularArea() {
    return (this.#base * this.#altura) / 2;
  }
  calcularPerimetro() {
    const hipotenusa = Math.sqrt(Math.pow(this.#base, 2) + Math.pow(this.#altura, 2));
    return this.#base + this.#altura + hipotenusa;
  }
}

// ==========================================
// 4: ZONA DE PRUEBAS
// ==========================================

const circulo = new Circulo(5);
console.log(circulo.getNombre(), circulo.calcularArea(), circulo.calcularPerimetro());

const rectangulo = new Rectangulo(4, 6);
console.log(rectangulo.getNombre(), rectangulo.calcularArea(), rectangulo.calcularPerimetro());

const triangulo = new TrianguloRectangulo(3, 4);
console.log(triangulo.getNombre(), triangulo.calcularArea(), triangulo.calcularPerimetro());

