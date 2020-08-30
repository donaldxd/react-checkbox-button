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
                <Form.Item label="专业：" name="level" initialValue={['北京', '成都']}>    
                    <ReactCheckboxButton data={list} />
                </Form.Item>
            </Form>
        </>
    );
}

render(<App />, document.querySelector('#app'));
```
![test.gif](https://i.loli.net/2020/08/30/Tqh762QoeIrn3g5.gif)

在Antd表单和不在Antd表单中一起使用代码：

```
import React, {useState} from 'react';
import './App.css';
import {Form} from 'antd'
import ReactCheckBoxButton from "react-checkbox-button";

const list = [  
    {id: 1, value: '上海', label: '上海'},  
    {id: 2, value: '北京', label: '北京'},  
    {id: 3, value: '成都', label: '成都'},  
    {id: 4, value: '广州', label: '广州'},  
    {id: 5, value: '杭州', label: '杭州'}
]


function App() {
    const [value, setValue] = useState(['上海', '成都']);
    return (
        <div className="App">
        
            {/*不在antd表单中*/}
            <header className="App-header">
                <ReactCheckBoxButton
                    data={list}
                    size="small"
                    value={value}
                    onChange={(values) => setValue(values)} />
                    
            <div>----------------------------------------------------</div>

             {/*antd表单中*/}
             
            <Form
                name="basic"
            >
                <Form.Item
                    initialValue={['上海']}
                    name="citys"
                    rules={[{ required: true, message: 'Please select your citys!' }]}
                >
                    <ReactCheckBoxButton data={list}/>
                </Form.Item>
            </Form>
            </header>
        </div>
    );
}

export default App;



```
![test1.gif](https://i.loli.net/2020/08/30/RCGBtOKcSHUP9pT.gif)

## API

| 参数 | 说明 | 类型 | 示例 |
| --- | --- | --- | --- |
| data | 数据源(必传)  | Array | data={[{value: '成都', label: '成都'}, {value: '上海', label: '上海'}]} |
| value | 默认选中值(不在Antd表单场景必传， antd表单中使用表单initialValue)  | Array | value={['成都']}或者initialValue={['成都', '北京']} |
| size | 选择按钮大小(默认default，非必传)  | String | size="default" |
| onChange | 选中按钮时调用此函数(不在Antd表单场景，必传)  | function(arr: any[], checked: boolean) | onChange={(values) => setValue(values)} |

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
