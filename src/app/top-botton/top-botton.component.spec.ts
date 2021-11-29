import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBottonComponent } from './top-botton.component';

describe('TopBottonComponent', () => {
  let component: TopBottonComponent;
  let fixture: ComponentFixture<TopBottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBottonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
