import { EventService } from 'src/app/event.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Event } from '../../models/Event';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.sass']
})
export class EventCreateComponent implements OnInit {
  items
  lat = 41.3851;
  lon = 2.1734;
  public currentDate = null;
  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private eventService: EventService) {
    this.form = this.formBuilder.group({
      name: '',
      nParticipants: '',
      date: '',
      time: ''
    });
  }

  ngOnInit() {
    this.currentDate = new Date().toISOString().slice(0, 10);
    console.log(this.currentDate);
    const date = new Date()
  }

  onSubmit() {
    // Process checkout data here
    console.warn('Your order has been submitted', this.form.value);
    const event = new Event();
    event.name = this.form.get('name').value;
    event.maxMembers = this.form.get('nParticipants').value;
    const date = this.form.get('date').value;
    const time = this.form.get('time').value;
    event.date = this.generateDate(date, time);
    console.log(event.date);
    
    event.latitude = 43;
    event.longitude = 2;

    this.eventService.createEvent(event).subscribe(res=>{
      console.log('resultado del form',res)
    });


    this.form.reset();
  }

  generateDate(date: string, time: string) {
    const dateToArray: string[] = date.split('-');
    const year = parseInt(dateToArray[0]);
    console.log(year);
    const month = parseInt(dateToArray[1]);
    console.log(month);
    const day = parseInt(dateToArray[2]);
    console.log(day);
    const timeToArray: string[] = time.split(':');
    console.log(timeToArray);
    
    const hours = parseInt(timeToArray[0]);
    console.log(hours);
    const minutes = parseInt(timeToArray[1]);
    console.log(minutes);

    return new Date(Date.UTC(year, month, day, hours, minutes));
  }

}
