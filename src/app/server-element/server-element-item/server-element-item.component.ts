import {Component, ContentChild, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-server-element-item',
  standalone: true,
  imports: [],
  templateUrl: './server-element-item.component.html',
  styleUrl: './server-element-item.component.scss'
})
export class ServerElementItemComponent implements OnInit{
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;
  @Input('serverElement') el: { type: string, name: string, content: string };

  constructor() {
    console.log('constructor called!');
    this.paragraph = new ElementRef(null);
    this.header = new ElementRef(null);
    this.name = '';
    this.element = {type: '', name: "", content: ''}
    this.el ={type: '', name: "", content: ''}
  }

  ngOnInit() {
    //this.header.nativeElement.style.color ="green"
    //this.paragraph.nativeElement.style.background = "yellow"
   // console.dir(this.header.nativeElement);
  }


}
