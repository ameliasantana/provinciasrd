import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownBottonComponent } from './down-botton.component';

describe('DownBottonComponent', () => {
  let component: DownBottonComponent;
  let fixture: ComponentFixture<DownBottonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownBottonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DownBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
