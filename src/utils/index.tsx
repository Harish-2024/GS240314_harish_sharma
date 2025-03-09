import * as XLSX from "xlsx";

export const readExcelFile = async (filePath: string): Promise<Record<string, any[]> | null> => {
  try {
    const response = await fetch(filePath);
    const blob = await response.blob();
    const reader = new FileReader();

    return new Promise((resolve, reject) => {
      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target?.result as ArrayBuffer);
          const workbook = XLSX.read(data, { type: "array" });
          const sheetsJson: Record<string, any[]> = {};
          workbook.SheetNames.forEach((sheetName) => {
            const sheet = workbook.Sheets[sheetName];
            sheetsJson[sheetName] = XLSX.utils.sheet_to_json(sheet);
          });

          resolve(sheetsJson);
        } catch (error) {
          reject(error);
        }
      };
      reader.readAsArrayBuffer(blob);
    });
  } catch (error) {
    console.error("Error fetching Excel file:", error);
    return null;
  }
};
