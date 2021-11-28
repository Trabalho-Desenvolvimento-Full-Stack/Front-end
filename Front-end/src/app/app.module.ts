import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { EsqueceuSenhaComponent } from './pages/esqueceu-senha/esqueceu-senha.component';
import { CardProdutoComponent } from './components/template/card-produto/card-produto.component';
import { CadastroGeralComponent } from './pages/cadastro-geral/cadastro-geral.component';
import { CadastroAdminComponent } from './pages/cadastro-admin/cadastro-admin.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { RelatorioVendasComponent } from './pages/relatorio-vendas/relatorio-vendas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    EsqueceuSenhaComponent,
    CardProdutoComponent,
    CadastroGeralComponent,
    CadastroAdminComponent,
    CadastroClienteComponent,
    RelatorioVendasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
