import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBankingComponent } from './view-banking.component';

describe('ViewBankingComponent', () => {
  let component: ViewBankingComponent;
  let fixture: ComponentFixture<ViewBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBankingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
