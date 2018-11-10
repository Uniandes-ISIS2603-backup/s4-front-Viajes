import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';


import {BookService} from '../book.service';
import {Book} from '../book';
import {BookDetail} from '../book-detail';
import {BookReviewComponent} from '../book-reviews/book-review.component';
import {BookAddReviewComponent} from '../book-add-review/book-add-review.component';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param bookService The book service which communicates with the API
    * @param route The route which helps to retrieves the id of the book to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private bookService: BookService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        //This is added so we can refresh the view when one of the books in
        //the "Other books" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
    * The book's id retrieved from the path
    */
    book_id: number;

    /**
    * The book whose details are shown
    */
    bookDetail: BookDetail;

    /**
    * The other books shown in the sidebar
    */
    other_books: Book[];

    /**
    * The suscription which helps to know when a new book
    * needs to be loaded
    */
    navigationSubscription;

    showEdit: boolean;

    /**
     * The child BookReviewListComponent
     */
    @ViewChild(BookReviewComponent) reviewListComponent: BookReviewComponent;

    /**
     * The child BookReviewListComponent
     */
    @ViewChild(BookAddReviewComponent) reviewAddComponent: BookAddReviewComponent;

    toggleReviews(): void {
        if (this.reviewAddComponent.isCollapsed == false) {
            this.reviewAddComponent.isCollapsed = true;
        }
        this.reviewListComponent.isCollapsed = !this.reviewListComponent.isCollapsed;
    }

    toggleCreateReview(): void {
        if (this.reviewListComponent.isCollapsed == false) {
            this.reviewListComponent.isCollapsed = true;
        }
        this.reviewAddComponent.isCollapsed = !this.reviewAddComponent.isCollapsed;
    }


    /**
    * The method which retrieves the details of the book that
    * we want to show
    */
    getBookDetail(): void {
        this.bookService.getBookDetail(this.book_id)
            .subscribe(bookDetail => {
                this.bookDetail = bookDetail;
            });
    }

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getOtherBooks(): void {
        this.bookService.getBooks()
            .subscribe(books => {
                this.other_books = books;
                this.other_books = this.other_books.filter(book => book.id !== this.book_id);
            });
    }

    /**
     * The function called when a review is posted, so that the child component can refresh the list
     */
    updateReviews(): void {
        this.getBookDetail();
        this.reviewListComponent.updateReviews(this.bookDetail.reviews);
        this.reviewListComponent.isCollapsed = false;
        this.reviewAddComponent.isCollapsed = true;
    }

    /**
    * The method which initilizes the component
    * We need to initialize the book and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.book_id = +this.route.snapshot.paramMap.get('id');
        this.bookDetail = new BookDetail();
        this.getBookDetail();
        this.getOtherBooks();
        this.showEdit = true;
    }

    /**
    * This method helps to refresh the view when we need to load another book into it
    * when one of the other books in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
