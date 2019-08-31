import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContactsRoutingModule } from "./contacts-routing.module";
import { ContactsComponent } from "./contacts/contacts.component";
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [ContactsComponent, ContactComponent],
  imports: [CommonModule, ContactsRoutingModule]
})
export class ContactsModule {}
