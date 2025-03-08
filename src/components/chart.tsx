import { AgChartOptions } from "ag-charts-community";
import { AgCharts } from "ag-charts-react";
import { ChartData } from '../types'

type Props = {
    data: ChartData[]
}
const Chart = (props: Props) => {
    const { data } = props
    const chartOptions: AgChartOptions = {
        title: {
            text: "Gross Margin",
            fontSize: 18,
        },
        height: 400,
        data,
        series: [
            {
                type: "bar",
                xKey: "week",
                yKey: "gmDollars",
                yName: "GM Dollars",
                fill: "#4A90E2",
            },
            {
                type: "line",
                xKey: "week",
                yKey: "gmPercent",
                yName: "GM %",
                stroke: "#E26A26",
                marker: {
                    shape: "circle",
                    size: 5,
                    fill: "#E26A26",
                },
            },
        ],
        axes: [
            {
                type: "category",
                position: "bottom",
                title: { text: "Weeks" },
            },
            {
                type: "number",
                position: "left",
                interval: { step: 50000 },
                title: { text: "GM Dollars" },
                label: {
                    formatter: (params: any) => `$${params.value.toLocaleString()}`,
                },
                keys: ["gmDollars"]
            },
            {
                type: "number",
                position: "right",
                // interval: { step: 5 },
                title: { text: "GM %" },
                label: {
                    formatter: (params: any) => `${params.value}%`,
                },
                keys: ["gmPercent"]
            },
        ],
        legend: {
            position: "bottom",
        },
    };

    return <AgCharts options={chartOptions} />;
};

export default Chart;
