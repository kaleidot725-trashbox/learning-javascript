$(document).ready(function(){
    'use strict';

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    let c = Shape.Circle(200, 200, 80);
    c.fillColor ='black';
    let text = new PointText(200, 200);
    text.justification = 'center'
    text.fillColor = 20;
    text.content = "Hello, World!"

    let tool = new Tool();
    tool.onMouseDown = function(event) {
        let c = Shape.Circle(event.point.x, event.point.y, 20); 
        c.fillColor = 'green';        
    }

    paper.view.draw();
});