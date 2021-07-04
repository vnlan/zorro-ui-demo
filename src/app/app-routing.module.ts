import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManageCategoryComponent} from "./pages/manage-category/manage-category.component";

const routes: Routes = [
  { path: 'quan-ly-danh-muc', component: ManageCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
