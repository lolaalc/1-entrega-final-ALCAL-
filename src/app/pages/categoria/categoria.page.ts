import { Component, OnInit } from '@angular/core';
import { CATEGORIAS } from 'src/app/core/constants/categorias';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  constructor(private activatedRoute : ActivatedRoute) {

    activatedRoute.params.subscribe((params: any)=>{ 
      console.log(params)
if(params ['id']){
const categoriaEncontrada = CATEGORIAS.find(categoria=> categoria.id == params['id'])
if(categoriaEncontrada) {
  this.categoria = categoriaEncontrada;
}
}
 })
   }

  ngOnInit() {
  }

  categoria = CATEGORIAS[0];

}
