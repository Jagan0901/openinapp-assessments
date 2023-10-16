import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Activities',
    },
  },
};

;

export const BarChart = ({ data }) => {
    const labels = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6", "Week 7", "Week 8"]
    const data1 = {
      labels,
      datasets: [
        {
          label: "Guest",
          data: data.map((data) => data.guest),
          backgroundColor: "#98D89E",
        },
        {
          label: "User",
          data: data.map((data) => data.user),
          backgroundColor: "#EE8484",
        },
      ],
    };
  return <div className="bar-chart"><Bar options={options} data={data1}/></div>;
};
