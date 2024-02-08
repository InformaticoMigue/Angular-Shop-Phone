import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-purchase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './register-purchase.component.html',
  styleUrls: ['../../styles.css']
})
export class RegisterPurchaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
