export interface VoucherData {
    [x: string]: any;
    id: number;
    user_name:string;
    email_id:string;
    ean_code:number;
    import_date:Date;
    activate_date:Date;
    cost_center:number | string;
    line_manager:string;
    status:string;
    url:string|URL;
}
