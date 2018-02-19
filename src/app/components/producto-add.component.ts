import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../services/global';

@Component({
   selector: 'producto-add',
   templateUrl: '../views/producto-add.html',
   providers: [ ProductoService ]
})
export class ProductoAddComponent{
   public titulo:string;
   public producto: Producto;
   public filesToUpload:any;
   public the_result:any;
   //public resultUpload:any;

   constructor(
     private _productoService:ProductoService,
     private _route: ActivatedRoute,
     private _router:Router
   ){
     this.titulo = 'Crear nuevo producto';
     this.producto = new Producto(0,'','',0,'');
     this.the_result = {status: "success", code: 200, message: "", filename: ""}
   }

   onSubmit(){
     console.log(this.producto);
     if(this.filesToUpload.length && this.filesToUpload.length >= 1){
     this._productoService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then((result) => {
       this.the_result = result;
        console.log(result);
       this.producto.imagen = this.the_result.filename;
       this.saveProducto();

     },(error)=>{
       console.log(error);
     });
   }else{
     this.saveProducto();
   }

   }

   saveProducto(){
     this._productoService.addProducto(this.producto).subscribe(
       response => {
         if(response.code == 200){
           this._router.navigate(['/productos']);
         }else{
           console.log(response);
         }
       },
       error => {
         console.log(<any>error);
       }
     );
   }

   fileChangeEvent(fileInput:any){
     this.filesToUpload = <Array<File>>fileInput.target.files;
     console.log(this.filesToUpload);
   }

   ngOnInit(){
     console.log('producto-add.component.ts cargado...');
   }
}
