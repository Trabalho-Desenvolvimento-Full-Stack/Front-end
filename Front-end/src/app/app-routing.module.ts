import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EsqueceuSenhaComponent } from './pages/esqueceu-senha/esqueceu-senha.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'esqueceusenha', component: EsqueceuSenhaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
