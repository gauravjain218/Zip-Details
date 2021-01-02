import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class ZipCodeService {
  endPoint =
    "https://api.zip-codes.com/ZipCodesAPI.svc/1.0/QuickGetZipCodeDetails/";

  constructor(private httpClient: HttpClient) {}

  search(zipcode: any): Observable<any> {
    debugger;
    return this.httpClient.get(this.endPoint + "/zipcode" + "?key=DEMOAPIKEY");
  }
}
