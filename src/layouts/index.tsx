import React, { useEffect } from 'react';
import { Avatar, Dropdown, Layout, Menu, theme, Typography  } from "antd";
import styles from './style.module.css';
import Logo from "../assets/Gsynergy Logo.svg";
import { items } from './items';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { readExcelFile } from '../utils';
import { useDispatch } from 'react-redux';
import { setChartData } from '../store/slices/chartSlice';
import { setCalculationData } from '../store/slices/calculation';
import { setCalendarData } from '../store/slices/calendarSlice';
import { setStoreData } from '../store/slices/storeSlice';
import { setSkuData } from '../store/slices/skuSlice';
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const MainLayout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const menu = (
    <Menu>
      <Menu.Item key="signout" icon={<LogoutOutlined />}>
        Sign Out
      </Menu.Item>
    </Menu>
  );

  const selectedKey = items.find(item => location.pathname.includes(item.path))?.key;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const fetchExcelData = async () => {
    try {
      const jsonData = await readExcelFile("/SampleData.xlsx");
      if (jsonData) {
        dispatch(setChartData(jsonData.Chart))
        dispatch(setCalculationData(jsonData.Calculations))
        dispatch(setCalendarData(jsonData.Calendar))
        dispatch(setStoreData(jsonData.Stores));
        dispatch(setSkuData(jsonData.SKUs));
      }
    } catch (error) {
      console.error("Error reading Excel file:", error);
    }
  };

  useEffect(() => {
    fetchExcelData();
  }, []);

  return (
    <Layout className={styles.container}>
      <Sider
        style={{ background: colorBgContainer }}
        breakpoint="lg"
        collapsedWidth="0"
      >
        <div className={styles.demoLogoVertical}>
          <img src={Logo} alt="logo" />
        </div>
        <Menu
          mode="inline"
          selectedKeys={[selectedKey || '1']}
          onClick={(e) => {
            const selectedItem = items.find(item => item.key === e.key);
            if (selectedItem?.path) {
              navigate(selectedItem.path);
            }
          }}
          items={items}
        />
      </Sider>
      <Layout>
      <Header
          style={{
            background: "#fff",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <div style={{ flex: 1 }}></div>
          <Title
            level={3}
            style={{
              flex: 1,
              textAlign: "center",
              margin: 0,
              fontWeight: "bold",
            }}
          >
            DATA VIEWER APP
          </Title>
          <div style={{ flex: 1, textAlign: "right" }}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <Avatar
                size="large"
                icon={<UserOutlined />}
                style={{ cursor: "pointer" }}
              />
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: '10px 10px 0' }}>
          <div
            style={{
              padding: 24,
              minHeight: "100%",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;