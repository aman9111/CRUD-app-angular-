import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprocesscrudComponent } from './myprocesscrud.component';

describe('MyprocesscrudComponent', () => {
  let component: MyprocesscrudComponent;
  let fixture: ComponentFixture<MyprocesscrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyprocesscrudComponent]
    });
    fixture = TestBed.createComponent(MyprocesscrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
