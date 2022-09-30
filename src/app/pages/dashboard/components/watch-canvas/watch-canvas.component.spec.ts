import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchCanvasComponent } from './watch-canvas.component';

describe('WatchCanvasComponent', () => {
  let component: WatchCanvasComponent;
  let fixture: ComponentFixture<WatchCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
