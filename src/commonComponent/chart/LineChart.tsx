'use client';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  Title,
} from 'chart.js';
import { Box } from '@mui/material';
import { useMemo } from 'react';
import { MatricsPerformanceChartData } from '../../redux/types/MetricsTypes';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
  LineController,
  LineElement,
  Title
);


interface LineChartProps {
  data: MatricsPerformanceChartData;
}
const LineChart = ({ data }: LineChartProps) =>
  useMemo(() => {
    return (
      <Box width={'100%'} height={'100%'}>
        <Line
          data={{
            labels: data.categories.map((labels: string) => labels),
            datasets: data.series.map((objectData: any) => ({
              label: objectData.label,
              data: objectData.data,
              backgroundColor: objectData.backgroundColor,
              borderColor: objectData.backgroundColor,
              borderWidth: data.categories[0] === '' ? 6 : 2,
              tension: 0.1,
            })),
          }}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                grid: {
                  color: 'rgba(189, 189, 189, 1)',
                  lineWidth: 1,
                },
                border: {
                  dash: [2, 2],
                },
                title: {
                  display: true,
                  text: 'Time',
                  align: 'end',
                },
                ticks: {
                  font: {
                    size: 9,
                  },
                },
              },
              y: {
                beginAtZero: true,
                grid: {
                  color: 'rgba(189, 189, 189, 1)',
                  lineWidth: 1,
                },
                border: {
                  dash: [2, 2],
                },
              },
            },
          }}
        />
      </Box>
    );
  }, [data]);

export default LineChart;
