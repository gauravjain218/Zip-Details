import { Component, OnInit } from "@angular/core";
import { ZipCodeService } from "../services/zipcode.service";
@Component({
  selector: "zip-details",
  templateUrl: "./zipdetails.html"
})
export class ZipDetails implements OnInit {
  zipCodeResult: any;
  constructor(private zipCodeService: ZipCodeService) {}

  ngOnInit() {}

  onSubmit(zipcode: any) {
    alert(zipcode.value);
    debugger;
    this.zipCodeResult = this.zipCodeService.search(zipcode.value).subscribe((res) => {
        console.log(res);
      });
  }
}
