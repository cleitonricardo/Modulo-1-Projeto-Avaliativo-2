import { Component, Input, OnInit } from '@angular/core';
import { UsinasService } from '../services/usinas.service';


  @Component({
  selector: 'esp-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.scss'],
  
})
export class UnidadesComponent implements OnInit {

  @Input() usina:any;
  lista: any;
 

  constructor(private usinasService:UsinasService) { }
 

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
  
  }
  
  
  }



