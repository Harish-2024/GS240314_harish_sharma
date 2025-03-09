import { useEffect, useMemo, useRef, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  ClientSideRowModelModule,
  ColDef,
  ModuleRegistry,
} from "ag-grid-community";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Modal, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { addSku, deleteSku } from "../../store/slices/skuSlice";
import "./style.css";
import { SkuData } from "../../types";

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const Sku = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const skuData = useSelector((state: any) => state.skuSlice.data);
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const gridRef = useRef<AgGridReact>(null);
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);

  const [rowData, setRowData] = useState<any[]>([]);

  useEffect(() => {
    if (skuData?.length) {
      const formattedData = skuData.map((item: any) => ({
        id: item.id,
        label: item.label,
        price: item.price,
        cost: item.cost,
      }));
      setRowData(formattedData);
    }
  }, [skuData]);

  const handleDelete = (id: string) => {
    dispatch(deleteSku(id));
  };

  const [columnDefs] = useState<ColDef[]>([
    {
      headerName: "",
      field: "delete",
      width: 50,
      cellRenderer: (params: any) => (
        <DeleteOutlined
          style={{ color: "red", cursor: "pointer", fontSize: "18px" }}
          onClick={() => handleDelete(params.data.id)}
        />
      ),
    },
    { headerName: "Sku", field: "label" },
    { headerName: "Price", field: "price" },
    { headerName: "Cost", field: "cost" },
  ]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      const newSku: SkuData = {
        id: `SKU${Date.now()}`,
        label: values.label,
        price: parseFloat(values.price),
        cost: parseFloat(values.cost),
      };

      dispatch(addSku(newSku));
      setIsModalOpen(false);
      form.resetFields();
    });
  };

  return (
    <div style={containerStyle}>
      <div className="example-wrapper">
        <div className="ag-theme-alpine" style={{ height: "500px", width: "100%" }}>
          <AgGridReact ref={gridRef} rowData={rowData} columnDefs={columnDefs} />
        </div>
        <div>
          <Button
            style={{
              marginTop: 10,
              background: "#ff7f50",
              border: "none",
              fontSize: "16px",
            }}
            onClick={openModal}
          >
            NEW SKU
          </Button>
        </div>
      </div>

      <Modal
        title="Add New SKU"
        open={isModalOpen}
        onOk={handleSave}
        onCancel={() => setIsModalOpen(false)}
        okText="Save"
        cancelText="Cancel"
      >
        <Form form={form} layout="vertical">
          <Form.Item name="label" label="SKU Name" rules={[{ required: true, message: "SKU Name is required!" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{ required: true, message: "Price is required!" }]}>
            <Input type="number" />
          </Form.Item>
          <Form.Item name="cost" label="Cost" rules={[{ required: true, message: "Cost is required!" }]}>
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Sku;