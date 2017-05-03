import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './components/devices/devices.component';
import { RulesComponent } from './components/rules/rules.component';

export const routes: Routes = [
  { path: '', redirectTo: '/devices', pathMatch: 'full' },
  { path: 'devices', component: DevicesComponent },
  { path: 'rules', component: RulesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);