import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadertextComponent } from './headertext.component';

describe('HeadertextComponent', () => {
  let component: HeadertextComponent;
  let fixture: ComponentFixture<HeadertextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadertextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadertextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
