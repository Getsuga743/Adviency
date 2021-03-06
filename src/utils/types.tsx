export type Gift = {
    title:string;
    price:number;
    quantity:number;
    dest:string;
    id:number | string;
    src?:string;
}

export type Title = {
    [key: string]: string
}
