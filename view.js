
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.rect(this.a, this.b, this.width, this.height);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;
    ctx.stroke();
};


Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.moveTo(this.a, this.b);
    ctx.lineTo(this.c, this.d);
    ctx.lineWidth = this.lineWidth;
    ctx.strokeStyle = this.color;
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
   this.formes.forEach(element => element.paint(ctx))
};

function updateShapeList(index, shape, type){
    var shapeList =  document.getElementById('shapeList')
    var newElement =  document.createElement("li")
    newElement.id = 'liRemove' + index;

    var removeButton = document.createElement("button")
    removeButton.id = "remove"+index;
    removeButton.textContent = "X"

    if(type == editingMode.rect)
        newElement.textContent = "[] ";
    else
        newElement.textContent = '/ ';
    newElement.style.color = shape.color;

    shapeList.appendChild(newElement)
    newElement.appendChild(removeButton);
}
