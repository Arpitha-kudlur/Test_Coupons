import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AutoCompleteModule } from 'primeng/autocomplete';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    FormsModule,
} from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToggleButtonModule } from 'primeng/togglebutton';
@Component({
    selector: 'app-shop-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        AutoCompleteModule,
        ReactiveFormsModule,
        FormsModule,
        InputSwitchModule,
        
    ],
    templateUrl: './shop-dashboard.component.html',
    styleUrl: './shop-dashboard.component.scss',
})
export class ShopDashboardComponent {
    currentButton: string = 'All'; // Initial button state

    products: any[] = [];
    sortField: any = '';
    sortOrder: any = 1;
    formGroup: FormGroup | undefined;
    toggleValue: boolean = false;
    value1: any;

    value2: any;

    value3: any;
    constructor() {}

    ngOnInit() {
        this.formGroup = new FormGroup({
            checked: new FormControl<boolean>(false),
        });
        this.products = [
            {
                code: '456789123456',
                imported: '12/02/2024',
                activated: '12/02/2024',
                costCenter: '0000025104 Bounus auf salaren',
                lineManager: 'Laurent Mul',
                status: 'Assigned',
                url: 'https://www.tec-nestle..',
            },
            {
                code: '7610100106811',
                imported: '12/02/2024',
                activated: '12/02/2024',
                costCenter: '0001000101 Communication & Publ',
                lineManager: 'Alexander',
                status: 'Available',
                url: 'https://www.tec-nestle..',
            },
            {
                code: '7610100106811',
                imported: '12/02/2024',
                activated: '12/02/2024',
                costCenter: '0001000101 Communication & Publ',
                lineManager: 'Peter Pan',
                status: 'Assigned',
                url: 'https://www.tec-nestle..',
            },
            {
                code: '7610100741944',
                imported: '12/02/2024',
                activated: '12/02/2024',
                costCenter: '0001000104 Consumer Newspaper',
                lineManager: 'Lisa Lauden',
                status: 'Assigned',
                url: 'https://www.tec-nestle..',
            },
            {
                code: '7610100741920',
                imported: '12/02/2024',
                activated: '12/02/2024',
                costCenter: '0001000103 Consumer Service',
                lineManager: 'Amand Burr',
                status: 'Available',
                url: 'https://www.tec-nestle..',
            },
            {
                code: '7610100741937',
                imported: '12/02/2024',
                activated: '12/02/2024',
                costCenter: '0001000103 Consumer Service',
                lineManager: 'Lisa Lauden',
                status: 'Assigned',
                url: 'https://www.tec-nestle..',
            },
            {
                code: '7445868223635',
                imported: '12/02/2024',
                activated: '12/02/2024',
                costCenter: '0001000104 Consumer Newspaper',
                lineManager: 'Laurent Mul',
                status: 'Available',
                url: 'https://www.tec-nestle..',
            },
            {
                code: '789456123456',
                imported: '12/02/2024',
                activated: '12/02/2024',
                costCenter: '0000025104 Bounus auf salaren',
                lineManager: 'Laurent Mul',
                status: 'Available',
                url: 'https://www.tec-nestle..',
            },
            {
                code: '7610100741930',
                imported: '12/02/2024',
                activated: '12/02/2024',
                costCenter: '0000025104 Bounus auf salaren',
                lineManager: 'Laurent Mul',
                status: 'Assigned',
                url: 'https://www.tec-nestle..',
            },
            {
                code: '7610100196010',
                imported: '12/02/2024',
                activated: '12/02/2024',
                costCenter: '0001000101 Communication & Publ',
                lineManager: 'Laurent Mul',
                status: 'Available',
                url: 'https://www.tec-nestle..',
            },
            {
                code: '7610100741944',
                imported: '12/02/2024',
                activated: '12/02/2024',
                costCenter: '0000025104 Bounus auf salaren',
                lineManager: 'Laurent Mul',
                status: 'Assigned',
                url: 'https://www.tec-nestle..',
            },
        ];
    }

    onSort(event: any) {
        this.sortField = event.field;
        this.sortOrder = event.order;
    }

    toggleButton(): void {
        // Toggle between 'All' and 'Available'
        this.currentButton = this.currentButton === 'All' ? 'Available' : 'All';
    }
}
