import { Component, Output, HostListener, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoFridaV1';

  sideBarIsOpened = false;

  ngOnInit() {
    this.sideBarIsOpened = true;
  }

  toggleSideBar(shouldOpen: boolean) {
    this.sideBarIsOpened = !this.sideBarIsOpened;
  }
  
}
