import React, {useState} from 'react';
import { render } from 'react-dom';
import ReactCheckboxButton from "../../src/components/ReactCheckboxButton";

/**
 * 不在antd Form表单内调用此组件示例
 * @constructor
 */
// 默认数据
const list: any[] = [
    {id: 1, value: '上海', label: '上海'},
    {id: 2, value: '北京', label: '北京'},
    {id: 3, value: '成都', label: '成都'},
    {id: 4, value: '广州', label: '广州'},
    {id: 5, value: '杭州', label: '杭州'}
]

const App = () => {
    const [value, setValue] = useState<any[]>([]);
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: '300px'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div>large：</div>
                <ReactCheckboxButton
                    data={list}
                    value={value}
                    size="large"
                    onChange={(values:any[]) => setValue(values)}
                />
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                <div>default：</div>
                <ReactCheckboxButton
                    data={list}
                    value={value}
                    size="default"
                    onChange={(values:any[]) => setValue(values)}
                />
            </div>
            <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                <div>small：</div>
                <ReactCheckboxButton
                    data={list}
                    value={value}
                    size="small"
                    onChange={(values:any[]) => setValue(values)}
                />
            </div>
        </div>
    );
}
render(<App />, document.querySelector('#app'));