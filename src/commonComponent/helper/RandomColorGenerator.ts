import { useTheme } from '@mui/material/styles';

export function getRandomColor(theme: any): string {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    if (theme.palette.mode === 'dark') {
        return adjustColorBrightness(color, 40); 
    } else {
        return adjustColorBrightness(color, -40); 
    }
}

function adjustColorBrightness(color: string, percent: number) {
    let num = parseInt(color.slice(1), 16);
    let r = (num >> 16) + percent;
    let g = ((num >> 8) & 0x00FF) + percent;
    let b = (num & 0x0000FF) + percent;

    r = Math.min(255, Math.max(0, r));
    g = Math.min(255, Math.max(0, g));
    b = Math.min(255, Math.max(0, b));

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}
