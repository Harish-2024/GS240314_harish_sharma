export type ChartData = {
    week: string;
    gmDollars: number;
    salesDollars: number;
    gmPercent: number;
}

export type CalendarData = {
    seqNo: number;
    week: string;
    weekLabel: string;
    month: string;
    monthLabel: string;
}

export type CalculationData = {
    store: string;
    sku: string;
    week: string;
    salesUnits: number;
    gmDollars: number;
    salesDollars: number;
    costDollars: number;
    gmPercentage: number;
}

export type StoreData = {
    seqNo: number;
    id: string;
    label: string;
    city: string;
    state: string;
}

export type SkuData = {
    id: string;
    label: string;
    price: number;
    cost: number;
}