import { Component, OnInit } from '@angular/core';
import{Book} from '../../models/book.model';
import{FirebaseService} from '../../services/firebase.service';
import{Camera, CameraOptions} from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.page.html',
  styleUrls: ['./book-add.page.scss'],
})
export class BookAddPage implements OnInit {
  public base64Image2: string;
book: Book = {
  content: '',
  title: '',
  picture: '',
  available:''
}
  constructor(private camera:Camera, public firebaseService: FirebaseService) { }

  ngOnInit() {
  }
  addBook(book:Book){
    this.firebaseService.addBook(book);
  }
  openCamera2(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType:this.camera.MediaType.PICTURE
    }
  this.camera.getPicture(options).then((imageData)=>{
    this.base64Image2 = "data:image/jpeg;base64," + imageData;
    this.book.picture = this.base64Image2;
  },(err)=>{

  });
  }
}
