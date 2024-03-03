import { BarChart } from '@mui/x-charts/BarChart';

const uData = [6.5, 4, 0, ];
const xLabels = [
  'Website',
  'Tour Operator',
  'Ticketing agent',
];

export default function MyChart() {
  return (
    <BarChart
      width={400}
      height={300}
      series={[
        { data: uData, id: 'uvId' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      options={{
        scales: {
          x: { grid: true }, // Enable grid for x-axis
          y: { grid: true }, // Enable grid for y-axis
        },
      }}
    />
  );
}
