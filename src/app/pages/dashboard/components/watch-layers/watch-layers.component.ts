import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch-layers',
  templateUrl: './watch-layers.component.html',
  styleUrls: ['./watch-layers.component.scss']
})
export class WatchLayersComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
