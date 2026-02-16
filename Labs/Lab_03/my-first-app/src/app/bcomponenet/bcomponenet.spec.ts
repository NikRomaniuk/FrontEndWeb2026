import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BComponenet } from './bcomponenet';

describe('BComponenet', () => {
  let component: BComponenet;
  let fixture: ComponentFixture<BComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BComponenet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BComponenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
