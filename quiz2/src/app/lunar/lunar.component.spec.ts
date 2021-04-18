import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunarComponent } from './lunar.component';

describe('LunarComponent', () => {
  let component: LunarComponent;
  let fixture: ComponentFixture<LunarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
