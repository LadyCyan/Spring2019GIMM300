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

  constructor(private db: AngularFireDatabase, private storage: AngularFireStorage) { }
setCurrentLocation(location: Location){
  this.currentLocation = location;
}
getCurrentLocation(){
  return this.currentLocation;
}
getLocationsList(){
  return this.locationListRef;
}
addLocation(location:Location){
  return this.locationListRef.push(location);

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
