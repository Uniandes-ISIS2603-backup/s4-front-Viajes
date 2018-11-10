import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookService} from './book.service';
import {BookListComponent} from './book-list/book-list.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BookReviewComponent} from './book-reviews/book-review.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookAddReviewComponent} from './book-add-review/book-add-review.component';
import {BookEditComponent} from './book-edit/book-edit.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule
    ],
    declarations: [
        BookListComponent, BookDetailComponent, BookReviewComponent, BookCreateComponent, BookAddReviewComponent, BookEditComponent
    ],
    providers: [BookService],
    exports: [BookListComponent, BookEditComponent]
})
export class BookModule {}
