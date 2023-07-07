import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '@pages/main/interfaces/book.interface';

@Component({
  selector: 'books-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input({ required: true }) book: Book;
  private readonly _router = inject(Router);

  onClick() {
    this._router.navigateByUrl(`${this.book.id}`);
  }
}
