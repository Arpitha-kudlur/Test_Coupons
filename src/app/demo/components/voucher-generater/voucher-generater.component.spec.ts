import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoucherGeneraterComponent } from './voucher-generater.component';

describe('VoucherGeneraterComponent', () => {
  let component: VoucherGeneraterComponent;
  let fixture: ComponentFixture<VoucherGeneraterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoucherGeneraterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoucherGeneraterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
