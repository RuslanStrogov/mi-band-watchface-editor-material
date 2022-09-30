import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiMaterialModule } from '../../ui/ui-material.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { WatchCanvasComponent } from 'src/app/pages/dashboard/components/watch-canvas/watch-canvas.component';
import { WatchLayersComponent } from './components/watch-layers/watch-layers.component';

@NgModule({
  declarations: [DashboardComponent, WatchCanvasComponent, WatchLayersComponent],
  imports: [CommonModule, UiMaterialModule, DashboardRoutingModule],
})
export class DashboardModule {}
