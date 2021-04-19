import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule, DxCheckBoxModule } from 'devextreme-angular';
import { Service, Customer } from './app.service';
if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-wall-titan',
  templateUrl: './wall-titan.component.html',
  styleUrls: ['./wall-titan.component.scss'],
  providers: [Service]
})
export class WallTitanComponent implements OnInit {
  customers: Customer[];

  constructor(service: Service) {
      this.customers = service.getCustomers();
  }

  ngOnInit() {
  }

}
@NgModule({
  imports: [
      BrowserModule,
      DxDataGridModule,
      DxCheckBoxModule
  ],
  declarations: [WallTitanComponent],
  bootstrap: [WallTitanComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
