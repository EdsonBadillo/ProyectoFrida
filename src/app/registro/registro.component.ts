import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  @HostBinding('class.is-open')
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
