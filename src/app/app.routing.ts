import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosComponent } from './components/productos.component';
import { ProductoAddComponent } from './components/producto-add.component';
import { ProductoDetailComponent } from './components/producto-details.component';
import { ProductoEditComponent} from './components/producto-edit.component';

const appRoutes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'crear-producto', component: ProductoAddComponent},
  {path: 'producto/:id', component: ProductoDetailComponent},
  {path: 'editar-producto/:id', component: ProductoEditComponent},
  {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = []; //Array de tipo cualquiera
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); //Se llama al objeto RouterModule, a su metodo forRoot y le pasamos el array de rutas para que las utilice
//Estos dos son los que se importaran en app.module.ts para que el servicio de routing funcione
