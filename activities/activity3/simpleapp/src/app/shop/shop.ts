import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shop.html',
  styleUrls: ['./shop.css']
})
export class ShopComponent {

  question = "What's your name?";
  answer = "unknown";

  appForm = new FormGroup({
    answer: new FormControl('')
  });

  onSubmit(data: any) {
    this.answer = data.answer;
    console.log('Name entered:', this.answer);
  }
}


