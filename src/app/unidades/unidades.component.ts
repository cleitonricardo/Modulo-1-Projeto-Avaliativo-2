import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsinasService } from '../services/usinas.service';


  @Component({
  selector: 'esp-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss'],
  
})
export class UnidadesComponent implements OnInit {

  @Input() 
  lista: any;
  usina:any;
 

  constructor(private usinasService:UsinasService, private route:ActivatedRoute, private router:Router) { }
 

  ngOnInit(): void {
    this.usinasService.getUsina().subscribe((resultado) =>{this.lista=resultado;
    })

   
  }

  onDelete(id:number){
    this.usinasService.deleteUsina(id).subscribe();
    alert("Unidade removida com sucesso")
    this.ngOnInit();
  }
 
  edita(id:number){
  this.router.navigate(['cadastro',id])

}}
  
  



