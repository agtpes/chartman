import React, { Component } from 'react';
import { fabric } from "fabric";
import './App.css';

class App extends Component {
  componentWillMount() {
    // dispatch some actions if you use Redux
  }

  componentDidMount() {
    const canvas = new fabric.Canvas('c', {
      backgroundColor: 'rgb(220,220,220)',
      selectionColor: 'white',
      selectionLineWidth: 1,
    });

    var panel = document.getElementById('panelbox');
    if(panel != null) {
      console.log(panel)
      canvas.setDimensions({width: panel.clientWidth, height: 600});
    }

    var rect = new fabric.Rect({
      top : 120,
      left : 110,
      width : 60,
      height : 70,
      fill : 'red',
      transparentCorners: false,
      cornerColor: 'black',
      cornerStrokeColor: 'white',
      borderColor: 'gray',
      cornerSize: 12,
      padding: 5,
      cornerStyle: 'circle',
      borderDashArray: [3, 3]
    });

    canvas.add(rect);

    var path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');
    path.set({ left: 120, top: 120 });
    canvas.add(path);
    

    canvas.on('mouse:wheel', function(opt) {
      var delta = opt.e.deltaY;
      var zoom = canvas.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      canvas.setZoom(zoom);
      opt.e.preventDefault();
      opt.e.stopPropagation();
    })

  }

  render() {
    return (
      <div>
        <canvas id="c" className="panel" />
      </div>
    )
  }
}

export default App; 