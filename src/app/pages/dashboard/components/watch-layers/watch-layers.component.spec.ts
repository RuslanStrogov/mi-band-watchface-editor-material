import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchLayersComponent } from './watch-layers.component';

describe('WatchLayersComponent', () => {
  let component: WatchLayersComponent;
  let fixture: ComponentFixture<WatchLayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WatchLayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
