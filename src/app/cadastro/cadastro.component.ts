import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { UsinasService } from '../services/usinas.service';


@Component({
  selector: 'esp-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  private apiUrl ="http://localhost:3000/unidades";
  usina:any;
  
  constructor(private http: HttpClient, private route:ActivatedRoute,private usinas:UsinasService ) {
    this.usina ={
      apelido:'',
      local:'',
      marca:'',
      modelo:'',
      
   }
  }

  
  ngOnInit(): void {
     const curso = this.route.snapshot.data['curso'];
    this.route.params.subscribe(
      (params:any)=>{
      const id = params['id'];

    console.log(id)
      
      })


      }
    
   
  
  


  Salva(){
  
    return this.http.post(this.apiUrl, this.usina).subscribe((result)=>{
      alert("Usina Salva com Sucesso")
  
  })


}
}
