import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VoucherData } from 'src/app/voucher-data';
import { VoucherService } from 'src/app/voucher.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
    voucherHistory: VoucherData[] = [];
    voucherService: VoucherService = inject(VoucherService);
    sortField: any = '';
    sortOrder: any = 1;
    selectedCostCenter: string = '';
    newId: number = 0;
    costCenters: string[] = [
        'Nestle Shop',
        'Nestle Factory',
        'Nestle Warehouse',
    ];

    constructor(
        private router: Router // private messageService: MessageService
    ) {}

    ngOnInit() {
        this.voucherHistory = this.voucherService.getAllVoucherRecord();
        // console.log(this.voucherHistory);
        // setTimeout(() => {
        //     this.generateVoucher();
        // }, 3000);
        this.generateVoucher()
    }

    onSort(event: any) {
        this.sortField = event.field;
        this.sortOrder = event.order;
    }

    generateVoucher() {
        if (this.selectedCostCenter) {
            this.voucherService.addVoucher(this.selectedCostCenter);
            this.newId = this.voucherHistory.length
                ? this.voucherHistory[this.voucherHistory.length - 1].id 
                : 1;

            this.voucherHistory = this.voucherService.getAllVoucherRecord();
            // console.log(this.voucherHistory)
            this.router.navigate(['/voucher', this.newId]);

            //     this.messageService.add({ severity: 'warn', summary: 'Warning!!', detail: 'Please select a Cost Center before generating the voucher.', key: 'tc', life: 3000 });
            //     alert('Please select a Cost Center before generating the voucher.');
            //     return;
            //   }
        }
        
    }
}
