import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireStorage} from 'angularfire2/storage';
import {Location} from '../models/location.model';
import {Book} from '../models/book.model';
import 'firebase/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
private bookListRef = this.db.list<Book>('bookData');
private locationListRef = this.db.list<Location>('locationData');
public currentLocation: Location;
public currentBook: Book;

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }
setCurrentLocation(location: Location){
  this.currentLocation = location;
}
setCurrentBook(book: Book){
  this.currentBook = book;
}
getCurrentLocation(){
  return this.currentLocation;
}
getCurrentBook(){
  return this.currentBook;
}
getLocationsList(){
  return this.locationListRef;
}
getBooksList(){
  return this.bookListRef;
}
addLocation(location:Location){
  return this.locationListRef.push(location);

}
addBook(book:Book){
  return this.bookListRef.push(book);
}
editLocation(location:Location){
  return this.locationListRef.update(location.key, location);

}
deleteLocation(location: Location){
  return this.locationListRef.remove(location.key);
}
editBook(book:Book){
  return this.bookListRef.update( book.key, book);
}
deleteBook(book:Book){
  return this.bookListRef.remove(book.key);
}
}
