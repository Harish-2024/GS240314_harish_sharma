import { AgGridReact } from "ag-grid-react";
import { ClientSideRowModelModule, ColDef, ColGroupDef, ModuleRegistry } from "ag-grid-community";
import { useSelector } from "react-redux";
import { CalculationData, CalendarData } from "../../types";

ModuleRegistry.registerModules([ClientSideRowModelModule]);
const Planning = () => {

  const calculations: CalculationData[] = useSelector((state: any) => state.calcuations.data);
  const calendar: CalendarData[] = useSelector((state: any) => state.calendar.data);

  const monthNames = [...new Set(calendar.map((week: CalendarData) => week.monthLabel))];

  const columnDefs: (ColDef | ColGroupDef)[] = [
    { headerName: "Store", field: "store", pinned: "left", width: 100 },
    { headerName: "SKU", field: "sku", pinned: "left", width: 100 },
    ...monthNames.map((month) => ({
      headerName: month,
      pinned: "right",
      children: calendar
        .filter((week) => week.monthLabel === month)
        .map((week) => ({
          headerName: `Week ${week.week.slice(1)}`,
          children: [
            {
              headerName: "Sales Unit",
              valueGetter: (p: any) => p.data[`sales_unit_${week.week}`] || 0,
              width: 120
            },
            {
              headerName: "Sales Dollars",
              valueGetter: (p: any) => p.data[`sales_dollars_${week.week}`] || "$ 0",
              width: 120
            },
            {
              headerName: "GM Dollars",
              valueGetter: (p:any) => p.data[`gm_dollars_${week.week}`] || "$ 0",
              width: 120
            },
            {
              headerName: "GM Percent",
              valueGetter: (p:any) => p.data[`gm_pecentage_${week.week}`] || "0%",
              width: 120
            },
          ],
        })),
    }))
  ];

  const rowData: any = [];
  const groupedData: any = {};

  calculations.forEach(({ store, sku, week, salesUnits, salesDollars, gmDollars, gmPercentage }) => {
    const key = `${store}_${sku}`;
    if (!groupedData[key]) {
      groupedData[key] = { store, sku };
    }
    groupedData[key][`sales_unit_${week}`] = salesUnits;
    groupedData[key][`sales_dollars_${week}`] = `$ ${salesDollars.toFixed(2)}`;
    groupedData[key][`gm_dollars_${week}`] = `$ ${gmDollars.toFixed(2)}`;
    groupedData[key][`gm_pecentage_${week}`] = `${(gmPercentage * 100).toFixed(2)}%`;
  });

  Object.values(groupedData).forEach((data) => rowData.push(data));

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={{ resizable: true }}
      />
    </div>
  );
};

export default Planning;
