import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ZipDetails } from "./zipDetails/zipdetails.component";
import { ZipCodeService } from "./services/zipcode.service";
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, ZipDetails],
  imports: [BrowserModule, HttpClientModule],
  providers: [ZipCodeService],
  bootstrap: [ZipDetails]
})
export class AppModule {}
