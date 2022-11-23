HTMLWidgets.widget({

  name: "fabric",
  type: "output",


  
  renderValue: function (el, x) {

    $('div.canvas-container').remove();
    $('#upper-canvas ').remove();
    $('#lower-canvas').remove();
    $('#annotator_canvas').remove();
    $('#clear_annotations').remove();
    
    $('<canvas id="annotator_canvas"> </canvas>').appendTo(el);
    $('<button id="clear_annotations" class="button">Clear annotations</button>').appendTo(el);


    annotator(el, x.im, x.W, x.H, x.resultId, x.brushWidth, x.brushColor, x.opacity, x.fill) 

    }
    

  })