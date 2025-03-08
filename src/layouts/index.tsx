import React, { useEffect, useState } from 'react';
import { Layout, Menu, theme } from 'antd';
import styles from './style.module.css';
import Logo from "../assets/Gsynergy Logo.svg";
import { items } from './items';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { readExcelFile } from '../utils';
import { useDispatch } from 'react-redux';
import { setChartData } from '../store/slices/chartSlice';

const { Header, Content, Sider } = Layout;

const MainLayout: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [xlData, setXlData] = useState<Record<string, any[]> | null>(null);
  const selectedKey = items.find(item => item.path === location.pathname)?.key;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  console.log(xlData);
  const fetchExcelData = async () => {
    try {
      const jsonData = await readExcelFile("/SampleData.xlsx");
      if (jsonData) {
        setXlData(jsonData);
        dispatch(setChartData(jsonData.Chart))
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
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
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
        <Header style={{ padding: 0, background: colorBgContainer }} />
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