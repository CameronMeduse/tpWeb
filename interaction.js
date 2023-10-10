
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.xStart = 0;
  this.yStart = 0;
  this.xEnd = 0;
  this.yEnd = 0;
  var isClicking = false;
  this.interactor = interactor;

	// Developper les 3 fonctions gérant les événements
  DnD.prototype.press = function(evt) {
    const newPos = getMousePosition(canvas, evt);
    this.xStart = newPos.x;
    this.yStart = newPos.y;

    isClicking = true;

    this.interactor.onInteractionStart(this);
    console.log(this.xStart)
    //console.log("PRESS -- xS : " + xStart + " yS : " + yStart + " xE " + xEnd + " yE " + yEnd);
  }.bind(this);

  DnD.prototype.move = function(evt) {
    if(!isClicking)
      return;
    const newPos = getMousePosition(canvas, evt);
    this.xEnd = newPos.x;
    this.yEnd = newPos.y;

    this.interactor.onInteractionUpdate(this);
    //console.log("MOVE -- xS : " + xStart + " yS : " + yStart + " xE " + xEnd + " yE " + yEnd);
  }.bind(this);

  DnD.prototype.drop = function(evt) {
    if(!isClicking)
      return;
    const newPos = getMousePosition(canvas, evt);
    this.xEnd = newPos.x;
    this.yEnd = newPos.y;

    isClicking = false;

    this.interactor.onInteractionEnd(this);
    //console.log("DROP -- xS : " + xStart + " yS : " + yStart + " xE " + xEnd + " yE " + yEnd);
  }.bind(this);
	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.press, false);
  canvas.addEventListener('mousemove', this.move, false);
  canvas.addEventListener('mouseup', this.drop, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



