import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EsqueceuSenhaComponent } from './pages/esqueceu-senha/esqueceu-senha.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastroGeralComponent } from './pages/cadastro-geral/cadastro-geral.component';
import { CadastroAdminComponent } from './pages/cadastro-admin/cadastro-admin.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'esqueceusenha', component: EsqueceuSenhaComponent },
  { path: 'cadastro', component: CadastroGeralComponent, children: [
    { path: 'admin', component: CadastroAdminComponent },
    { path: 'cliente', component: CadastroClienteComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
