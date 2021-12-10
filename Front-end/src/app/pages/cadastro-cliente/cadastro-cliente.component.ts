import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../../services/cliente.service';
import { Cliente } from './../../models/cliente.model';


@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {

  id!: number;
  cliente!: Cliente;
  form: FormGroup;
  emailFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  senhaFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  nomeFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  cpfFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  endereçoFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  numeroFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  complementoFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  bairroFormControl = this.fb.control('', { validators: [], updateOn: 'blur' });
  cepFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  cidadeFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });

  constructor(private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private clienteService: ClienteService) {
    this.form = this.fb.group({
      emailFormControl: this.emailFormControl,
      senhaFormControl: this.senhaFormControl,
      nomeFormControl: this.nomeFormControl,
      cpfFormControl: this.cpfFormControl,
      endereçoFormControl: this.endereçoFormControl,
      numeroFormControl: this.numeroFormControl,
      complementoFormControl: this.complementoFormControl,
      bairroFormControl: this.bairroFormControl,
      cepFormControl: this.cepFormControl,
      cidadeFormControl: this.cidadeFormControl
    });
  }

ngOnInit(): void {
  let id: string | null;
  id = this.route.snapshot.paramMap.get("id");
  if(id != undefined || id != null) {
  this.id = Number.parseInt(id);
  this.clienteService.getPeloId(this.id).subscribe((cliente: Cliente) => {
    this.emailFormControl.setValue(cliente.email);
    this.senhaFormControl.setValue(cliente.senha);
    this.nomeFormControl.setValue(cliente.nome);
    this.cpfFormControl.setValue(cliente.cpf);
    this.endereçoFormControl.setValue(cliente.endereco_rua);
    this.numeroFormControl.setValue(cliente.endereco_numero);
    this.complementoFormControl.setValue(cliente.endereco_complemento);
    this.bairroFormControl.setValue(cliente.endereco_bairro);
    this.cidadeFormControl.setValue(cliente.endereco_cidade);
    this.cliente = cliente;
  })
}
  }

salvar() {
  if (this.form.valid) {
    if (this.cliente == undefined || this.cliente == null)
      this.cliente = new Cliente();
    this.cliente.nome = this.nomeFormControl.value;
    this.cliente.cpf = this.cpfFormControl.value;
    this.cliente.email = this.emailFormControl.value;
    this.cliente.senha = this.senhaFormControl.value;
    if (this.cliente.endereco_rua == undefined || this.cliente.endereco_rua == null)
    this.cliente.endereco_bairro = this.bairroFormControl.value;
    this.cliente.endereco_cep = this.cepFormControl.value;
    this.cliente.endereco_cidade = this.cidadeFormControl.value;
    this.cliente.endereco_complemento = this.complementoFormControl.value;
    this.cliente.endereco_numero = this.numeroFormControl.value;
    this.cliente.endereco_rua = this.endereçoFormControl.value;

    if (this.cliente.id == undefined || this.cliente.id == 0)
      this.clienteService.post(this.cliente).subscribe(() => {

      });
    else
      this.clienteService.put(this.cliente).subscribe(() => {

      });
  }
}
}
