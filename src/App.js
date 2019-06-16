import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import {Upload, Icon, message, Select, Button} from 'antd';

const Option = Select.Option;
const Dragger = Upload.Dragger;

// const props = {
//   name: 'file',
//   multiple: true,
//   action: '',
//   showUploadList: false,
//   onChange(info) {
//     console.log(info.fileList);
//     const status = info.file.status;
// if (status !== 'uploading') {
//   console.log(info.file, info.fileList);
// }
//
// if (status === 'done') {
//   message.success(`${info.file.name} file uploaded successfully.`);
// } else if (status === 'error') {
//   message.error(`${info.file.name} file upload failed.`);
// }
//   },
// };


class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      selectValue: 'jack'
    }
  }


  handleChange(e) {
    console.log(e);
    this.setState({
      selectValue: e
    })
    console.log(this.state.selectValue);
  }

  handleClick() {
    this.setState({
      selectValue: ''
    })
  }

  render() {

    return (
      <div className='App'>
        <HomeHeader>
          Linux命令快捷生成页面
        </HomeHeader>
        <Select
          style={{width: 300}}
          value={this.state.selectValue}
          onChange={this.handleChange}>
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="disabled">Disabled</Option>
          <Option value="Yiminghe">yiminghe</Option>
        </Select>
        <Button onClick={this.handleClick}>重置</Button>
        <div>
          {/*<Dragger {...props}>*/}
          {/*<p className="ant-upload-drag-icon">*/}
          {/*<Icon type="inbox"/>*/}
          {/*</p>*/}
          {/*<p className="ant-upload-text">Click or drag file to this area to upload</p>*/}
          {/*<p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company*/}
          {/*data or other band files</p>*/}
          {/*</Dragger>,*/}
        </div>
      </div>
    )
  }
}

const HomeHeader = styled.div`
  height: 50px;
  width: 100%;
  background-color: #000;
  font-size: 20px;
  color: #ffffff;
  line-height: 50px;
`;

const HomeSelector = styled.div`
   margin-top: 30px;
   margin-bottom: 20px;
  >div{
    width: 800px;
    margin:0 auto;
    label{
      display: inline-block;
      width: 200px;
      float: left;
      margin-right: 30px;
      text-align: right;
    }
  }
`;


export default App;
