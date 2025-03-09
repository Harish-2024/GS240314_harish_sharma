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
      pinned: "center",
      children: calendar
        .filter((week) => week.monthLabel === month)
        .map((week) => ({
          headerName: `Week ${week.week.slice(1)}`,
          children: [
            { headerName: "Sales Unit", field: `sales_unit_${week.week}`, width: 120 },
            { headerName: "Sales Dollars", field: `sales_dollars_${week.week}`, width: 120 },
            { headerName: "GM Dollars", field: `gm_dollars_${week.week}`, width: 120 },
            { headerName: "GM Percent", field: `gm_pecentage_${week.week}`, width: 120 },
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
