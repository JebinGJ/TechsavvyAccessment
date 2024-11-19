

//Api contants
export const UserLogin = '/auth/login'
export const MetricsList = '/day-parting/DayPartingFilterList'
export const MetricsPerformanceLine = '/day-parting/DayPartingPerformanceGraphList'
export const MetricsHeatMap = '/day-parting/heatmap-list'


export const userIdentity = 'U2FsdGVkX1/s3KYiwn1BdNtI1nNitQYbPVGs5G6NloO7PVGlCBTzYpJzAOD/8GaIp30IcvyKuBArXvm5xNN+gOhrSx51l49Ejxan4p7mt1vAUIE6/O277AUuMZVIMsmOtF5YGyaGkyDk9bMjArr3ekLdCKAZu9xXN/b92jqFqXb2jy4tbQbp8UUQxgywAWk1gR4dSb/vaJt4oEIeh0EWuEc4xU2NVdGSedANzYRqUEatsdtRYbNbdkZMt9koQcKO55/Y6fGafYUCztvkASn6i8WyPIxXMq6vf+xo4IYXeOh2WP8WgH/cQgq6V74Fnl82KYtUvGzWVMXpm2rrhsHewJptgJvJY+NinV05HdRJGtXQ1SN3/IhqyJZJhTb/TcO5SkDa8dIGfwgcciGspOofrA=='
export const HeatMapTableHeader = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
export const ignorderHeatmapHeader = ['show', 'time_part']

//Variable constants
export const heatMapColors: { [key: string]: string[] } = {
    "CPC": ["#FFEAF8", "#FFBFEB"],     
    "ROAS": ["#90DEF3", "#16ABD4"],      
    "Spend": ["#bbdefb", "#2196f3"],    
    "Revenue": ["#ffe0b2", "#ffc107"],   
    "Orders": ["#e1bee7", "#9c27b0"],    
    "CR_perc": ["#c5cae9", "#3f51b5"],   
    "ACOS": ["#ef9a9a", "#f44336"],       
    "AOV": ["#b2ebf2", "#00bcd4"],        
    "Impressions": ["#d7ccc8", "#795548"],
    "Clicks": ["#b0bec5", "#607d8b"],     
    "CPM": ["#f48fb1", "#e91e63"],        
    "CTR": ["#dcedc8", "#8bc34a"]         
};