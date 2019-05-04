import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import{FirebaseService} from '../services/firebase.service';
import {Book} from '../models/book.model';
import 'rxjs-compat/add/operator/map';
import{Observable} from 'rxjs-compat/Observable';
import {Router} from '@angular/router';

declare var google;

@Component({
  selector: 'app-book-base',
  templateUrl: './book-base.page.html',
  styleUrls: ['./book-base.page.scss'],
})
export class BookBasePage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  public base64Image2: string;
  booksList$: Observable<Book[]>;
  map: any;
  bookKey: any;
  currentBook: any;
  public bookTitle: string;

  constructor(private router:Router, public firebaseService: FirebaseService) {
  this.booksList$ = this.firebaseService.getBooksList().snapshotChanges().map(changes =>{
    return changes.map(c=>({
      key: c.payload.key, ...c.payload.val()
    }));
});
}
  ngOnInit() {
  }
  onContextChange(ctxt:string):void{
    this.booksList$ = this.firebaseService.getBooksList().snapshotChanges().map(changes =>{
      return changes.map(c=>({
        key:c.payload.key, ...c.payload.val()
     }));
   });
  }
  assignBook(book:Book){
    this.firebaseService.setCurrentBook(book);
    this.currentBook=book;
    this.bookKey = book.key;
    this.bookTitle = book.title;
    console.log("Assigned Book available: ")
  }
  addInfoWindow(marker, book){
    let contentString = '<div class="info-window" id = "clickableItem">'+
    '<h3>' + book.title + '</h3>'+
    '<div class="info-content">'+
    '<img src=' + book.picture + 'alt = "picture" style="width:30px; height 30px; padding: 20px, 20px, 20px, 20px;">' +
    '<p>' +book.content + '</p>' + '<p>' + book.available + '</p>' +
    '</div>' +
    '</div>';

       let infoWindow = new google.maps.InfoWindow({
         content: contentString,
         maxWidth: 400
       });
       google.maps.event.addListener(infoWindow, 'domready',()=>{
         var clickableItem = document.getElementById('clickableItem');
         clickableItem.addEventListener('click', () =>{
           console.log("clicked on marker");
           this.firebaseService.setCurrentBook(book);
           this.bookTitle = book.title;
           this.router.navigate(['/book-list', this.bookTitle]);
         });
       });
       google.maps.event.addListener(marker, 'click', ()=>{
         infoWindow.open(this.map, marker);
       });
       google.maps.event.addListener(marker, 'click',()=>{
         infoWindow.close(this.map, marker);
       });
  }

}
