import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailsAngularDirectivesComponent } from './userdetails-angular-directives.component';

describe('UserdetailsAngularDirectivesComponent', () => {
  let component: UserdetailsAngularDirectivesComponent;
  let fixture: ComponentFixture<UserdetailsAngularDirectivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserdetailsAngularDirectivesComponent]
    });
    fixture = TestBed.createComponent(UserdetailsAngularDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
