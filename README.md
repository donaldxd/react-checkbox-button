## react_checkbox_button
仿elemntUI多选按钮checkbox的React多选按钮组件，可应用于Antd的form表单场景以及不在表单中使用的任何多选场景。


## 安装
yarn
```
yarn add react_checkbox_button
```
npm 
```
npm install react_checkbox_button
```
## 使用
不在Antd表单中使用方法：
```
import React, {useState} from 'react';
import { render } from 'react-dom';
import ReactCheckboxButton from 'react_checkbox_button';


// 数据源
const list: any[] = [    
    {id: 1, value: '上海', label: '上海'},    
    {id: 2, value: '北京', label: '北京'},    
    {id: 3, value: '成都', label: '成都'},    
    {id: 4, value: '广州', label: '广州'},    
    {id: 5, value: '杭州', label: '杭州'}
]


const App = () => { 
    // value 为默认选中数组
    const [value, setValue] = useState<any[]>([]);    

    return (        
        <>            
            <ReactCheckboxButton   
                data={list}
                value={value}                    
                size="large"                    
                onChange={(values:any[]) => setValue(values)}               
             />            
            <ReactCheckboxButton 
                data={list}
                value={value}                    
                size="default"                    
                onChange={(values:any[]) => setValue(values)}                
             />            
             <ReactCheckboxButton    
                data={list}
                value={value}                    
                size="small"                    
                onChange={(values:any[]) => setValue(values)}                
              />
        </>
    );
}

render(<App />, document.querySelector('#app'));

```
在Antd表单中使用方法：
```
import React, {useState} from 'react';
import {  Form, Select } from 'antd';
import ReactCheckboxButton from 'react_checkbox_button';


// 数据源
const list: any[] = [    
    {id: 1, value: '上海', label: '上海'},    
    {id: 2, value: '北京', label: '北京'},    
    {id: 3, value: '成都', label: '成都'},    
    {id: 4, value: '广州', label: '广州'},    
    {id: 5, value: '杭州', label: '杭州'}
]

const App = () => { 
    const [form] = Form.useForm();
    const {Option} = Select;

    
    /** 
     * 查询事件 
     * @param values 
     */
    const onFinish = (values: any) => 
    {    
        console.log(values)
    }


    return (        
        <>            
            <Form className="search-form-wrapper" form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                <Form.Item label="公司：" name="company">    
                    <Select        
                        showSearch        
                        allowClear        
                        style={{width: 200}}        
                        placeholder="请选择"    
                    >        
                        <Option value="jack">Jack</Option>        
                        <Option value="lucy">Lucy</Option>        
                        <Option value="tom">Tom</Option>    
                    </Select>
                </Form.Item>
                // initialValue 为默认选中值
                <Form.Item label="专业：" name="level" initialValue={['beijing', 'chengdu']}>    
                    <ReactCheckboxButton data={list} />
                </Form.Item>
            </Form>
        </>
    );
}

render(<App />, document.querySelector('#app'));

```
## API

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| data | 数据源  | Array |
| value | 默认选中值  | Array |
| size | 选择按钮大小  | String |
| onChange | 选中按钮时调用此函数  | function(arr: any[], checked: boolean) |

## 查看示例
yarn
```
yarn install        // 安装依赖

yarn start         // 启动项目

yarn build       // 打包
```
npm
```
npm install             // 安装依赖

npm start              // 启动项目

npm run build     // 打包
```