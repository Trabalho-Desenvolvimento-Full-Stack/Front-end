import { ClienteService } from './../../services/cliente.service';
import { Cliente } from './../../models/Cliente.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.css']
})
export class CadastroClienteComponent implements OnInit {
  id !: number;
  cliente !: Cliente;
  form: FormGroup;
  nomeFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  cpfFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  dataNascimetoFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  emailFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  senhaFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  ruaFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  numeroFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  complementoFormControl = this.fb.control('', { validators: [], updateOn: 'blur' });
  bairroFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  cidadeFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });
  cepFormControl = this.fb.control('', { validators: [Validators.required], updateOn: 'blur' });


  constructor(private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private clienteService: ClienteService) {
    this.form = this.fb.group({
      nomeFormControl: this.nomeFormControl,
      cpfFormControl: this.cpfFormControl,
      dataNascimetoFormControl: this.dataNascimetoFormControl,
      emailFormControl: this.emailFormControl,
      senhaFormControl: this.senhaFormControl,
      ruaFormControl: this.ruaFormControl,
      numeroFormControl: this.numeroFormControl,
      complementoFormControl: this.complementoFormControl,
      bairroFormControl: this.bairroFormControl,
      cidadeFormControl: this.cidadeFormControl,
      cepFormControl: this.cepFormControl
    });
  }

  ngOnInit(): void {

    //Arrumar questão do ID
  }
}