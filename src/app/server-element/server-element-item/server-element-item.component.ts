import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-server-element-item',
  standalone: true,
  imports: [],
  templateUrl: './server-element-item.component.html',
  styleUrl: './server-element-item.component.scss'
})
export class ServerElementItemComponent implements OnInit, AfterContentInit{
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @Input('serverElement') el: { type: string, name: string, content: string };

  @ViewChild('heading', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;


  constructor() {
    console.log('constructor called!');
    this.paragraph = new ElementRef(null);
    this.header = new ElementRef(null);
    this.name = '';
    this.element = {type: '', name: "", content: ''}
    this.el ={type: '', name: "", content: ''}
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges called!');
    // console.log(changes['name']?.previousValue);
  }

  ngOnInit() {
    //this.header.nativeElement.style.color ="green"
    //this.paragraph.nativeElement.style.background = "yellow"
   console.dir('text - '+this.header.nativeElement.innerText);
    // console.log('ngOnInit');
  }
  ngAfterContentInit() {
    // console.log('ngAfterContentInit called!');
    // console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterViewInit(){
    console.dir('text - '+this.header.nativeElement.innerText);
  }

  ngDoCheck(){
    // console.log('ng docheck log');
  }



}
