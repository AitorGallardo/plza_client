import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footerbar',
  templateUrl: './footerbar.component.html',
  styleUrls: ['./footerbar.component.sass']
})
export class FooterbarComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "unicorn",
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/icons/svg_icons/home-white-24dp.svg')
    );
   }

  ngOnInit() {
  }

}
