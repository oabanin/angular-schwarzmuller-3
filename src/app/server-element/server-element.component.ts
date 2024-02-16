import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {ServerElementItemComponent} from "./server-element-item/server-element-item.component";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-server-element',
  standalone: true,
  imports: [
    ServerElementItemComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './server-element.component.html',
  styleUrl: './server-element.component.scss',
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('serverElements') serverElements: { type: string, name: string, content: string }[];


  constructor() {
    this.serverElements=[];
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges called!');
    // console.log(changes);
  }

  ngOnInit() {
    // console.log(this.el);
    // console.log('ngOnInit called!');
    // console.log(this.element,'this.element');
    // console.log('Text Content: ' + this.header.nativeElement.textContent);
    // console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    // console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit called!');
    // console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit called!');
    // console.log('Text Content: ' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    // console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    // console.log('ngOnDestroy called!');
  }

}
