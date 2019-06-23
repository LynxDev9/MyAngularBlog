import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() posteTitle:string= 'My first post';  
  @Input() posteContent:string= 'My first content';
  @Input() posteDate:Date; 
  @Input() posteLove:number= 0;

  //posteDate = new Date();
  constructor() { }

  ngOnInit() {
  }

  onLove(){
  	this.posteLove++;
  }

  onHate(){
  	  	this.posteLove--;
  }

}
