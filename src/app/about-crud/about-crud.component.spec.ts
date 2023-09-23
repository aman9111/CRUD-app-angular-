import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCRUDComponent } from './about-crud.component';

describe('AboutCRUDComponent', () => {
  let component: AboutCRUDComponent;
  let fixture: ComponentFixture<AboutCRUDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutCRUDComponent]
    });
    fixture = TestBed.createComponent(AboutCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
