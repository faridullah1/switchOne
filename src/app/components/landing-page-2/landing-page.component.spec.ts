import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageComponentOld } from './landing-page.component';

describe('LandingPageComponentOld', () => {
  let component: LandingPageComponentOld;
  let fixture: ComponentFixture<LandingPageComponentOld>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageComponentOld ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageComponentOld);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
