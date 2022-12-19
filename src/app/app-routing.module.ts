import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { WarehouseComponent } from './warehouse/warehouse.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: "warehouse", component: WarehouseComponent },
  { path: "dashboard", component: DashboardComponent },
  // { path: "stores", component: StoresComponent },
  // { path: "items", component: ItemsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
