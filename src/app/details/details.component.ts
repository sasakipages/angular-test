import { Component, Input } from '@angular/core';
import { Book } from '../book/book';

@Component({
  selector: 'detail-book',
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.css' ]
})
export class DetailsComponent {
  @Input() btnSuccess: string;

  @Input() item: Book;
  
  @Input() sampleSample = false;

  @Input() okGotit = false;

  @Input() fontRed = false;  
  //@Input('data') item: Book;
  //@Input('item') item: Book;
}
