import { Component, OnInit } from '@angular/core';
//import { GeracoesService } from '../services/geracoes.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'esp-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  private apiUrl ="http://localhost:3000/unidades";
  usina:any;
  constructor(private http: HttpClient) {
    this.usina ={
      apelido:'',
      local:'',
      marca:'',
      modelo:''

   }}

  ngOnInit(): void {
  }
  
  Salva(){
  
    return this.http.post(this.apiUrl, this.usina).subscribe((result)=>{
      alert("Usina Salva com Sucesso")
  
  })

}}
