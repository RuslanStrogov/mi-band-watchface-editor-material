import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-canvas',
  templateUrl: './watch-canvas.component.html',
  styleUrls: ['./watch-canvas.component.scss']
})
export class WatchCanvasComponent implements OnInit {

  zoom: number = 1.5;
  width: number = 126;
  height: number = 294;

  constructor() { }

  ngOnInit(): void {
  }

  zoomIn() {
    this.zoom += this.zoom / 2;
  }

  zoomOut() {
    this.zoom -= this.zoom / 2;
  }

}
