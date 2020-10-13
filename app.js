let rectBtn = document.getElementById("rectangle-button");
let triangleBtn = document.getElementById("triangle-button");
let squareBtn = document.getElementById("square-button");
let circleBtn = document.getElementById("circle-button");
let rectWidth = document.getElementById("rectangle-width");
let rectHeight = document.getElementById("rectangle-height");
let radius = document.getElementById("circle-radius");
let sqrsideLength = document.getElementById("square-length");
let triHeight = document.getElementById("triangle-height");
let triWidth = document.getElementById("triangle-width");
let container = document.getElementById("shape-container");
let details = document.getElementById("mySidepanel");
let shapeName = document.getElementById("shape-name");
let shapeRadius = document.getElementById("shape-radius");
let shapeLength = document.getElementById("shape-length");
let shapeHeight = document.getElementById("shape-height");
let shapeArea = document.getElementById("shape-area");
let shapePerimeter = document.getElementById("shape-perimeter");
let shapeWidth = document.getElementById("shape-width");
let thisHeight = this.height;
let thisName = this.name;
let thisWidth = this.width;



rectBtn.addEventListener( "click",() => new Rectangle(rectWidth.value, rectHeight.value));
circleBtn.addEventListener("click", () => new Circle(radius.value));
squareBtn.addEventListener("click", () => new Square(sideLength.value));
triangleBtn.addEventListener("click", () => new Triangle(triHeight.value));
class Shape {
  constructor(height, width, radius, sideLength, name) {
    this.radius = radius;
    this.height = height;
    this.width = width;
    this.sideLength = sideLength;
    this.name = name;
  }
  details = (thisName, thisWidth, thisHeight, thisRadius, thissideLength) => {
    shapeName.innerHTML = `Shape Name: ${thisName}`;
    shapeWidth.innerHTML = `Shape Width: ${thisWidth}`;
    shapeHeight.innerHTML = `Shape Height: ${thisHeight}`;
    shapeRadius.innerHTML = `Shape Radius: ${this.radius}`;
    shapePerimeter.innerHTML = `Shape Perimeter: ${thisHeight * 2 + thisWidth * 2}`;
    shapeArea.innerHTML = `Shape Area: ${this.area}`;
  };
}

class Circle extends Shape {
  constructor(radius, height, width, name) {
    super(name);
    name = "circle";
    this.name = name;
    thisName = name;
    this.radius = radius;
    thisHeight = radius;
    thisWidth = radius * 2;
    height = radius * 2;
    this.area = Math.round(radius ** 2 * 3.14159);
    this.perimeter = Math.round(2 * radius * 3.14159);
    this.width = radius * 2;
    this.div = document.createElement("div");
    this.div.className = "circle";
    this.div.style.border = "2px solid black";
    this.div.style.borderRadius = `${this.radius}px`;
    this.div.style.height = `${this.radius}px`;
    this.div.style.width = `${this.radius}px`;
    this.div.style.top = `${Math.floor(Math.random() * 550) + 1}px`;
    this.div.style.right = `${Math.floor(Math.random() * 550) + 1}px`;
    container.appendChild(this.div);
    this.div.addEventListener("click", () => this.details("cirlce", `${this.radius}`, height, width, "circle") );
   
  }
}

class Triangle extends Shape {
  constructor(height, width) {
    super();
    this.height = height;
    this.width = width;
    this.area = (triHeight.value * triWidth.value) / 2;
    this.height = triHeight.value;
    this.width = triWidth.value;
    this.div = document.createElement("div");
    this.div.className = "triangle";
    this.div.style.borderStyle = "solid";
    this.div.style.borderWidth = `0 ${this.width / 2}px ${this.height}px ${this.width / 2}px`;
    this.div.style.borderColor = `transparent transparent yellow transparent`;
    this.div.style.width = `${this.width}px`;
    this.div.style.position = "absolute";
    this.div.style.top = `${Math.floor(Math.random() * 550) + 1}px`;
    this.div.style.right = `${Math.floor(Math.random() * 550) + 1}px`;
    this.div.style.left = `${Math.floor(Math.random() * 550) + 1}px`;
    // this.div.style.borderTop = "0";
    // this.div.style.border = "2px solid transparent";
    // this.div.style.borderBottom = "30px solid transparent";
    // this.div.style.borderRight = "50px solid transparent";
    // this.div.style.borderleft = "50px solid black";
    container.appendChild(this.div);
    this.div.addEventListener("click", () =>this.details("Triangle", `${this.height}`, `${this.width}`, "NA", "NA"));
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.recWidth = width;
    this.area = width * height;
    this.recHeight = height;
    this.div = document.createElement("div");
    this.div.className = "rectangle";
    this.div.style.height = `${this.recHeight}px`;
    this.div.style.width = `${this.recWidth}px`;
    this.div.style.border = "2px solid black";
    this.div.style.top = `${Math.floor(Math.random() * 550) + 1}px`;
    this.div.style.right = `${Math.floor(Math.random() * 550) + 1}px`;
    container.appendChild(this.div);
    this.div.addEventListener("click", () => this.details( "Rectangle",`${this.recWidth}`,`${this.recHeight}`, "NA", "NA" ));
  }
}

class Square extends Shape {
  constructor(sideLength) {
    super();
    this.area = sideLength * sideLength;
    this.sideLength = sideLength;
    this.div = document.createElement("div");
    this.div.className = "square";
    this.div.style.border = "2px solid black";
    this.div.style.height = `${this.sideLength}px`;
    this.div.style.width = `${this.sideLength}px`;
    this.div.style.top = `${Math.floor(Math.random() * 550) + 1}px`;
    this.div.style.left = `${Math.floor(Math.random() * 550) + 1}px`;
    this.div.style.right = `${Math.floor(Math.random() * 550) + 1}px`;
    container.appendChild(this.div);
    this.div.addEventListener("click", () => this.details( "Square",`${this.sideLength}`,`${this.sideLength}`,"NA", "NA" ));
    //this.div.addEventListener('dblclick', () => this.details
  }
}
