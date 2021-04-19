import { Component } from '@angular/core';
import { categories } from 'src/app/class/categories';
import { Subscription} from 'rxjs';
import { ElementRef, OnInit, ViewChild } from '@angular/core';
import { APIServiceService } from 'src/app/apiservice.service';

@Component({
  templateUrl: 'profile.component.html',
  styleUrls: [ './profile.component.scss' ]
})

export class ProfileComponent implements OnInit{
  employee: any;
  colCountByScreen: object;
  sub:Subscription = new Subscription;
  sub2:Subscription = new Subscription;


  imageURL:string ;
  fileUpload:File = null;

  constructor(public sevicePost:APIServiceService) {

  }

  public cate:categories[] = [];
  ngOnInit(): void {

    this.getApiCategories();
  }

  getApiCategories()
  {
    this.sub = this.sevicePost.GetCategories().subscribe(data => {

      this.cate = data;
      console.log(data);
    });
  }

  getPicture(picture:ElementRef)
  {
    let pic = String(picture);
    this.imageURL = pic;
  }
  postApiCategories(id:ElementRef, name:ElementRef, des:ElementRef, picture:ElementRef)
  {
    let categoryID:number = Number(id);
    let categoryName:string = String(name);
    let description:string = String(des);
    let pictuteCate:any = picture;
    var cate = new categories(categoryName,description,pictuteCate);
    this.sub = this.sevicePost.PostCategories(cate).subscribe(data => {

      console.log(data);
    });
  }

  putApiCategories(id:ElementRef, name:ElementRef, des:ElementRef, picture:ElementRef)
  {
    let categoryID:number = Number(id);
    let categoryName:string = String(name);
    let description:string = String(des);
    let pictuteCate:any = picture;
    var cate = new categories(categoryName,description,null);
    cate.CategoryId = categoryID;
    this.sub = this.sevicePost.PutCategories(cate).subscribe(data => {
      console.log(data);
    });


  }

  deleteApiCategories(id:ElementRef)
  {
    let i = String(id);
    this.sub = this.sevicePost.DeleteCategories(i).subscribe(data => {
      console.log(data);
    });
  }
}
