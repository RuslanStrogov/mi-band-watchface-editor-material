import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  hidden: boolean = true;

  constructor(private breakpointObserver: BreakpointObserver) {}

  setHidden() {
    console.log('sethidden');
    if(!this.hidden) {
      this.hidden = true;
    } else {
      this.hidden = false;    }
    // this.hidden != this.hidden;
  }

}
