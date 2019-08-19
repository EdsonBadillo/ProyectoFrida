import { Component, OnInit, HostListener, Input } from '@angular/core';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() sideBar: RegistroComponent;

  @HostListener('click')
  click() {
    this.sideBar.toggle();
  }

}
