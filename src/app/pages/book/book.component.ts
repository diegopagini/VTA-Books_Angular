import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '@pages/main/interfaces/book.interface';

import { books } from '../../data/books';

@Component({
  selector: 'books-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _router = inject(Router);
  book?: Book;

  ngOnInit(): void {
    this.book = books.find(
      (el) => el.id === this._activatedRoute.snapshot.params['id']
    );
  }

  onBack() {
    this._router.navigate(['']);
  }
}
