import { fabric } from "fabric";

function deleteObject(canvas: any) {
    window.addEventListener("keydown", function (e) {
        if(e.keyCode == 46) {
          let selectedElement = canvas.getActiveObject();
          canvas.remove(selectedElement);
        }
    });
}

function zoomCanvas(canvas: any) {
    canvas.on('mouse:wheel', function(opt: any) {
        var delta = opt.e.deltaY;
        var zoom = canvas.getZoom();
        zoom *= 0.999 ** delta;
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        canvas.setZoom(zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
    });
}

function snapGrid(canvas: any, snapSize: number) {
    canvas.on('object:moving', function(options: any) {
        options.target.set({
            left: Math.round(options.target.left / snapSize) * snapSize,
            top: Math.round(options.target.top / snapSize) * snapSize
        });
    });

}

function addIcon(canvas: any) {
    canvas.on('mouse:up', function(e: any) {
        if (!e.isClick || e.target != null) {
          return;
        }
        const x = e.e.offsetX;
        const y = e.e.offsetY;
        // addIcon(x, y - 10);
      });
  
      var defaultIcon = {
        width: 40,
        height: 30,
        originX: 'center',
        originY: 'center',
        hasControls: false,
      };
  
      function addIcon(x: number | undefined, y: number | undefined) {
        var icon = new fabric.Triangle(defaultIcon);
        
        // if (document.getElementById("on").checked == true) { // component
        if(true) {
          icon.left = x;
          icon.top = y;
          canvas.add(icon);
        // } else if (document.getElementById("off").checked == true) { // link
        //  iconTriangle.set('opacity', 0);
        //  icon = null;
        }
        canvas.renderAll();
      }
} 

export {
    zoomCanvas,
    deleteObject, 
    addIcon,
    snapGrid
}