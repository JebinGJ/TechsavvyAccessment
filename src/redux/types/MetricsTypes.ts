export interface MatricsListResponse {
    success: boolean,
    message: string,
    result: Array<MatricsList>
}

export interface MatricsList {
    label: string;
    code: string
}

export interface SeriesData {
    name: string;
    type: string;
    data: number[];
}

export interface MatricsPerformanceChartData {
    categories: string[];
    series: SeriesData[];
}

export interface MatricsPerformanceChartResponse {
    success: boolean;
    message: string;
    result: MatricsPerformanceChartData;
}


export interface HourlyData {
    [key: string]: string | number
}

export interface HeatmapDataProps {
    Hourly_Data: HourlyData[];
}

export interface RangeDetails {
    [key: string]: {
        min: number;
        max: number;
    };
}

export interface MetricsHeatMapResponse {
    success: boolean;
    message: string;
    result: HeatmapDataProps[];
    rangeDetails: RangeDetails;
}
