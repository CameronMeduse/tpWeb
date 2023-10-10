
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	var indexMap = 0;

	document.getElementById('butRect').onclick = (_) => this.currEditingMode = editingMode.rect;
	document.getElementById('butLine').onclick = (_) => this.currEditingMode = editingMode.line;
	document.getElementById('spinnerWidth').onclick = (e) => this.currLineWidth = e.target.value;
	document.getElementById('colour').onclick = (e) => this.currColour = e.target.value;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function(dnd){
		if(this.currEditingMode == editingMode.rect){
			this.currentShape = new Rectangle();
		} else {
			this.currentShape = new Line();
		}
	}.bind(this);

	this.onInteractionUpdate = function(dnd){
		if(this.currEditingMode == editingMode.rect){
			this.currentShape = new Rectangle(dnd.xStart, dnd.yStart, dnd.xEnd - dnd.xStart, dnd.yEnd - dnd.yStart, this.currLineWidth, this.currColour);
		} else {
			this.currentShape = new Line(dnd.xStart, dnd.yStart, dnd.xEnd, dnd.yEnd, this.currLineWidth, this.currColour);
		}
		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx);

	}.bind(this);

	this.onInteractionEnd = function(dnd){
		drawing.formes.set(indexMap, this.currentShape);
		updateShapeList(indexMap, this.currentShape, this.currEditingMode);
		document.getElementById('remove' + indexMap).onclick = (event) => remove(drawing, event.currentTarget.id.substring(6), ctx, canvas)
		indexMap++
		drawing.paint(ctx, canvas);
		this.currentShape.paint(ctx);
	}.bind(this);
};

function remove(drawing, index, ctx, canvas){
	drawing.formes.delete(parseInt(index))
	document.getElementById('liRemove'+index).remove()
	drawing.paint(ctx, canvas)
}


