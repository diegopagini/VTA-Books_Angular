import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { books } from '../../data/books';
import { CardComponent } from './components/card/card.component';
import { Book } from './interfaces/book.interface';

@Component({
  selector: 'books-main',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  books: Book[] = books;
}
