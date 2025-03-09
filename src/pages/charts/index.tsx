import { Select } from "antd";
import Chart from "../../components/chart";
import { useSelector } from "react-redux";

const Charts = () => {
  const chartData = useSelector((state: any) => state.chart.data);
  const options = [
    { value: "a1", label: "A1" },
    { value: "a2", label: "A2" },
    { value: "a3", label: "A3" },
    { value: "a4", label: "A4" }
  ]
  
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <div>
      <Select
          size="middle"
          defaultValue="a1"
          onChange={handleChange}
          style={{ width: 200 }}
          options={options}
        />
      </div>
      <Chart data={chartData} />
    </div>
  );
};

export default Charts;
