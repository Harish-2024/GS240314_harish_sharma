import { Select } from "antd";
import Chart from "../../components/chart";
import { useSelector } from "react-redux";

const Charts = () => {
  const chartData = useSelector((state: any) => state.chart.data);
  const data = [
      { "week": "W01", "gmDollars": 140061.78, "salesDollars": 239526.34, "gmPercent": 58 },
      { "week": "W02", "gmDollars": 110391.21, "salesDollars": 258634.60, "gmPercent": 43 },
      { "week": "W03", "gmDollars": 101657.28, "salesDollars": 263774.46, "gmPercent": 39 },
      { "week": "W04", "gmDollars": 134341.07, "salesDollars": 332652.41, "gmPercent": 40 },
      { "week": "W05", "gmDollars": 130398.15, "salesDollars": 275162.26, "gmPercent": 47 },
      { "week": "W06", "gmDollars": 137438.96, "salesDollars": 319884.60, "gmPercent": 43 },
      { "week": "W07", "gmDollars": 116387.03, "salesDollars": 252500.95, "gmPercent": 46 },
      { "week": "W08", "gmDollars": 159070.65, "salesDollars": 335894.42, "gmPercent": 47 },
      { "week": "W09", "gmDollars": 88328.55, "salesDollars": 174790.68, "gmPercent": 51 },
      { "week": "W10", "gmDollars": 119284.46, "salesDollars": 261782.66, "gmPercent": 46 },
      { "week": "W11", "gmDollars": 130099.18, "salesDollars": 292137.38, "gmPercent": 45 },
      { "week": "W12", "gmDollars": 139360.58, "salesDollars": 284207.55, "gmPercent": 49 },
      { "week": "W13", "gmDollars": 128456.87, "salesDollars": 294047.89, "gmPercent": 44 },
      { "week": "W14", "gmDollars": 86661.91, "salesDollars": 189073.83, "gmPercent": 46 },
      { "week": "W15", "gmDollars": 151592.15, "salesDollars": 271421.42, "gmPercent": 56 },
      { "week": "W16", "gmDollars": 151686.17, "salesDollars": 347732.00, "gmPercent": 44 },
      { "week": "W17", "gmDollars": 88672.61, "salesDollars": 206735.46, "gmPercent": 43 },
      { "week": "W18", "gmDollars": 81851.01, "salesDollars": 175256.89, "gmPercent": 47 },
      { "week": "W19", "gmDollars": 117644.42, "salesDollars": 257209.45, "gmPercent": 46 },
      { "week": "W20", "gmDollars": 75460.72, "salesDollars": 196483.55, "gmPercent": 38 },
      { "week": "W21", "gmDollars": 89873.37, "salesDollars": 232307.36, "gmPercent": 39 },
      { "week": "W22", "gmDollars": 217801.24, "salesDollars": 400567.98, "gmPercent": 54 },
      { "week": "W23", "gmDollars": 80015.21, "salesDollars": 187739.22, "gmPercent": 43 },
      { "week": "W24", "gmDollars": 99365.58, "salesDollars": 233854.94, "gmPercent": 42 },
      { "week": "W25", "gmDollars": 146165.37, "salesDollars": 338581.81, "gmPercent": 43 },
      { "week": "W26", "gmDollars": 90708.15, "salesDollars": 281071.52, "gmPercent": 32 },
      { "week": "W27", "gmDollars": 180504.75, "salesDollars": 276942.13, "gmPercent": 65 },
      { "week": "W28", "gmDollars": 139442.48, "salesDollars": 303695.38, "gmPercent": 46 },
      { "week": "W29", "gmDollars": 139216.77, "salesDollars": 314421.17, "gmPercent": 44 },
      { "week": "W30", "gmDollars": 100489.04, "salesDollars": 262484.91, "gmPercent": 38 },
      { "week": "W31", "gmDollars": 152765.66, "salesDollars": 316858.04, "gmPercent": 48 },
      { "week": "W32", "gmDollars": 75704.04, "salesDollars": 169452.56, "gmPercent": 45 },
      { "week": "W33", "gmDollars": 167605.48, "salesDollars": 340037.18, "gmPercent": 49 },
      { "week": "W34", "gmDollars": 79485.96, "salesDollars": 234269.32, "gmPercent": 34 },
      { "week": "W35", "gmDollars": 119596.45, "salesDollars": 256836.52, "gmPercent": 47 },
      { "week": "W36", "gmDollars": 120675.47, "salesDollars": 260032.26, "gmPercent": 46 },
      { "week": "W37", "gmDollars": 97413.66, "salesDollars": 257055.42, "gmPercent": 38 },
      { "week": "W38", "gmDollars": 155962.01, "salesDollars": 340058.58, "gmPercent": 46 },
      { "week": "W39", "gmDollars": 37571.16, "salesDollars": 161007.90, "gmPercent": 23 },
      { "week": "W40", "gmDollars": 121974.94, "salesDollars": 242047.42, "gmPercent": 50 },
      { "week": "W41", "gmDollars": 128438.16, "salesDollars": 196580.97, "gmPercent": 65 },
      { "week": "W42", "gmDollars": 71208.94, "salesDollars": 201049.32, "gmPercent": 35 },
      { "week": "W43", "gmDollars": 128752.29, "salesDollars": 293362.74, "gmPercent": 44 },
      { "week": "W44", "gmDollars": 55866.91, "salesDollars": 259462.35, "gmPercent": 22 },
      { "week": "W45", "gmDollars": 134230.98, "salesDollars": 358561.15, "gmPercent": 37 },
      { "week": "W46", "gmDollars": 146587.86, "salesDollars": 281889.16, "gmPercent": 52 },
      { "week": "W47", "gmDollars": 73497.75, "salesDollars": 209428.43, "gmPercent": 35 },
      { "week": "W48", "gmDollars": 133371.47, "salesDollars": 233990.84, "gmPercent": 57 },
      { "week": "W49", "gmDollars": 73773.56, "salesDollars": 225732.78, "gmPercent": 33 },
      { "week": "W50", "gmDollars": 110037.62, "salesDollars": 244378.20, "gmPercent": 45 },
      { "week": "W51", "gmDollars": 96149.38, "salesDollars": 266757.29, "gmPercent": 36 },
      { "week": "W52", "gmDollars": 138093.51, "salesDollars": 245570.72, "gmPercent": 56 }
  ];

  const options = [
    { value: "a1", label: "A1" },
    { value: "a2", label: "A2" },
    { value: "a3", label: "A3" },
    { value: "a4", label: "A4" }
  ]

  console.log(chartData,"chartDtarfugdgaj");

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
