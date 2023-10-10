// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing (){
    this.formes = new Map();
};

function Forme(lineWidth, color){
    this.lineWidth = lineWidth;
    this.color = color;
};

function Rectangle(a, b, width, height, lineWidth, color) {
    Forme.call(this, lineWidth, color);
    this.a = a;
    this.b = b;
    this.width = width;
    this.height = height;
};
Rectangle.prototype = new Forme();

function Line(a, b, c, d, lineWidth, color) {
    Forme.call(this, lineWidth, color);
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
};
Line.prototype = new Forme();


