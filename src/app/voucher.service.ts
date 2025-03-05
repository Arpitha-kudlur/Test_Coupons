import { Injectable } from '@angular/core';
import { VoucherData } from './voucher-data';

@Injectable({
    providedIn: 'root',
})
export class VoucherService {


    VoucherRecord: VoucherData[] = [
        {
          user_name: 'Nikolas Eric',
          email_id: 'nikolaseric.jason@nestle.com',
          ean_code: 456789123456,
          import_date: new Date ( 2025, 0, 12),
          activate_date: new Date (2024, 8, 26),
          cost_center: 'Nestle Warehouse',
          line_manager: 'Laurent Mul',
          status: 'Assigned',
          url: 'https://www.tec-nestle..',
          id:1,
        },
        {
          id:2,
          user_name: 'Nikolas Eric',
          email_id: 'nikolaseric.jason@nestle.com',
          ean_code: 456789123456,
          import_date: new Date ( 2025, 0, 12),
          activate_date: new Date ( 2024, 8, 26),
          cost_center: 'Nestle Warehouse',
          line_manager: 'Kunfu Wankde',
          status: 'Assigned',
          url: 'https://www.tec-nestle..',
      },
      {
        id:3,
        user_name: 'Nikolas Eric',
        email_id: 'nikolaseric.jason@nestle.com',
        ean_code: 456789123456,
        import_date: new Date ( 2025, 0, 12),
        activate_date:  new Date ( 2025, 0, 12),
        cost_center: 'Nestle Warehouse',
        line_manager: 'John DSouza',
        status: 'Assigned',
        url: 'https://www.tec-nestle..',
    },
    {
      id:4,
      user_name: 'Nikolas Eric',
      email_id: 'nikolaseric.jason@nestle.com',
      ean_code: 456789123456,
      import_date: new Date ( 2024, 8, 26 ),
      activate_date:  new Date ( 2020, 8, 26 ),
      cost_center: 'Nestle Warehouse',
      line_manager: 'John GuttenBerg',
      status: 'Assigned',
      url: 'https://www.tec-nestle..',
  },
  {
    id:5,
    user_name: 'Nikolas Eric',
    email_id: 'nikolaseric.jason@nestle.com',
    ean_code: 456789123456,
    import_date: new Date ( 2025, 0, 12),
    activate_date:  new Date ( 2024, 4, 3 ),
    cost_center: 'Nestle Warehouse',
    line_manager: 'Alexander Nicholas',
    status: 'Assigned',
    url: 'https://www.tec-nestle..',
},
    ];
    constructor() {}

    getAllVoucherRecord() {
      return this.VoucherRecord;
    }
    getVoucherRecord (id:number) {
      return this.VoucherRecord.find(voucher => voucher.id === id);
    }

    addVoucher(selectedValue: string) {
      const newId = this.VoucherRecord.length ? this.VoucherRecord[this.VoucherRecord.length-1].id + 1 : 1;
      const eanCode = Math.floor(1000000000 + Math.random() * 98765);

      const newVoucher = {
        id: newId,
        user_name: 'Laura Peter',
        email_id: 'nikolaseric.jason@nestle.com',
        ean_code: eanCode,
        import_date: new Date ( 2025, 0, 12),
        activate_date:  new Date ( 2024, 4, 3 ),
        cost_center: selectedValue,
        line_manager: 'Alexandar',
        status: 'Assigned',
        url: 'https://nche-pp-upp1-app-euwe-app.azurewebsites.net/',
      };

      this.VoucherRecord.push(newVoucher);
    }

}
