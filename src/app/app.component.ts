import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;
  
    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = 's4-front-Viajes';
    }

    /**
     * @ignore
     */
    constructor() {}
}
