import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.sass']
})
export class EventCreateComponent implements OnInit {
  checkoutForm
  items
  lat=41.3851;
  lon=2.1734;
  public currentDate = null;

  constructor(private formBuilder: FormBuilder) { 
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  ngOnInit() {
    this.currentDate = new Date().toISOString().slice(0,10);
    console.log(this.currentDate);
    
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    //this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
