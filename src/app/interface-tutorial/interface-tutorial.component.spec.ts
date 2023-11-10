import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceTutorialComponent } from './interface-tutorial.component';

describe('InterfaceTutorialComponent', () => {
  let component: InterfaceTutorialComponent;
  let fixture: ComponentFixture<InterfaceTutorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceTutorialComponent]
    });
    fixture = TestBed.createComponent(InterfaceTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
