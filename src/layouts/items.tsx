import { AppstoreAddOutlined, AreaChartOutlined, BarChartOutlined, RadarChartOutlined} from '@ant-design/icons';


export const items = [
    {
        label: 'Store',
        key: 'store',
        icon: <AppstoreAddOutlined />,
        path: '/store'
    },
    {
        label: 'SKU',
        key: 'sku',
        icon: <RadarChartOutlined />,
        path: '/sku'
    },
    {
        label: 'Planning',
        key: 'planning',
        icon: <BarChartOutlined />,
        path: '/planning'
    },
    {
        label: 'Charts',
        key: 'charts',
        icon: <AreaChartOutlined />,
        path: '/charts'
    },
];