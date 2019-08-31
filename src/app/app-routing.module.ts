import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then(mod => mod.HomeModule)
  },
  {
    path: "contacts",
    loadChildren: () =>
      import("./contacts/contacts.module").then(mod => mod.ContactsModule)
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
