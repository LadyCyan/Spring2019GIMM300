import { Component, OnInit } from '@angular/core';
import{Book} from '../../models/book.model';
import{FirebaseService} from '../../services/firebase.service';
import{Camera, CameraOptions} from '@ionic-native/camera/ngx';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {
  public book: Book;
  public BookKey:string;
  public base64Image2: string;

  constructor(private activatedRoute: ActivatedRoute, public firebaseService: FirebaseService, private camera: Camera) {
this.book = this.firebaseService.getCurrentBook();
  }

  ngOnInit() {
    this.base64Image2 = this.book.picture;
  }
  editBook(book: Book){
    this.firebaseService.editBook(book);
  }
  deleteBook(book: Book){
    this.firebaseService.deleteBook(book);
  }
  openCamera2(){
    const options: CameraOptions={
      quality:100,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData)=>{
      this.base64Image2 = "data:image/jpeg;base64," + imageData;
      this.book.picture = this.base64Image2;

    }, (err)=>{

    });
  }

}
