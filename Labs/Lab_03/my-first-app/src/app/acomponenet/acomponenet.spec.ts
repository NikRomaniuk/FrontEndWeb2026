import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AComponenet } from './acomponenet';

describe('AComponenet', () => {
  let component: AComponenet;
  let fixture: ComponentFixture<AComponenet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AComponenet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AComponenet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
