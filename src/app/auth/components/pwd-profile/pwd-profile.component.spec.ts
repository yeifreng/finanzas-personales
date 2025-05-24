import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdProfileComponent } from './pwd-profile.component';

describe('PwdProfileComponent', () => {
  let component: PwdProfileComponent;
  let fixture: ComponentFixture<PwdProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PwdProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PwdProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
