import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerElementItemComponent } from './server-element-item.component';

describe('ServerElementItemComponent', () => {
  let component: ServerElementItemComponent;
  let fixture: ComponentFixture<ServerElementItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerElementItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServerElementItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
