import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'esp-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.scss']
})


export class ConsumoComponent implements OnInit {
  geracao:any;
  private apiUrl ="http://localhost:3000/geracoes";
  constructor( private http:HttpClient) {
    this.geracao={
      apelido:'',
      data:'',
      kw:'',}
      
   }

  ngOnInit(): void {
      }

  Salva(){
    return this.http.post(this.apiUrl, this.geracao).subscribe((result)=>{
      alert("Geração salva com sucesso")
  })}

}
