import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynTabComponent } from './dyn-tab.component';

describe('DynTabComponent', () => {
  let component: DynTabComponent;
  let fixture: ComponentFixture<DynTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
