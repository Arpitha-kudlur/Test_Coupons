import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { VoucherService } from 'src/app/voucher.service';

@Component({
    selector: 'app-voucher-generater',
    standalone: true,
    imports: [RouterLink, DatePipe],
    templateUrl: './voucher-generater.component.html',
    styleUrl: './voucher-generater.component.scss',
})
export class VoucherGeneraterComponent {
   
    route: ActivatedRoute = inject(ActivatedRoute);
    voucher: any;
    voucherId:number;
    voucherService: VoucherService = inject(VoucherService);
    voucherRecord:any;
    constructor() {}

    ngOnInit() {
        
        
        // this.voucherService.voucher$.subscribe(vouchers=> {
        //     this.voucher = vouchers;
        // })
        const temp = this.voucherService.getAllVoucherRecord()
        console.log(temp);
        this.voucherId = parseInt(this.route.snapshot.params['id'], 10);
        console.log(this.voucherId)
        this.voucher= this.voucherService.getVoucherRecord(this.voucherId )
        console.log(this.voucher)
        // this.getvoucherrecordById()
        
    }
    // getvoucherrecordById(){
    //     for(let i = 0; i<this.voucherId; i++){
    //         if ((this.voucherId-1) === this.voucherRecord[i].id){
    //             this.voucher =  this.voucherRecord[i];
    //             return this.voucher;
    //         }
    //         else {
    //             return ("Not Found");
    //         }
    //     }
    //    return this.voucher
    // }
}
