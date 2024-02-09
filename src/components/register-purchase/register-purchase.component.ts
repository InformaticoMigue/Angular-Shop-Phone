import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-purchase',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register-purchase.component.html',
  styleUrls: ['../../styles.css']
})
export class RegisterPurchaseComponent implements OnInit {

  @Output() shareForm = new EventEmitter<void>();
  purshaseForm: FormGroup = new FormGroup({});

  formBuilder: FormBuilder = inject(FormBuilder);

  ngOnInit() {
      this.purshaseForm = this.formBuilder.group({
        email: ['', [
            Validators.required,
            Validators.email
          ]
      ],
        password: ['',[
          Validators.required,
          Validators.minLength(4)
        ]
      ]
    })
  }

  submit(){
    this.shareForm.emit();
  }


}
