import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltTabComponent } from './alt-tab.component';

describe('AltTabComponent', () => {
  let component: AltTabComponent;
  let fixture: ComponentFixture<AltTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
