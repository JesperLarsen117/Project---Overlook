import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderImageHandlerComponent } from './header-image-handler.component';

describe('HeaderImageHandlerComponent', () => {
  let component: HeaderImageHandlerComponent;
  let fixture: ComponentFixture<HeaderImageHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderImageHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderImageHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
