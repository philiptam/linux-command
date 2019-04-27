import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
import {Select} from 'antd';
import DeployDamWar from './component/deploy-dam-war'

const Option = Select.Option;

class App extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  render() {

    return (
      <div className='App'>
        <HomeHeader>
          Linux命令快捷生成页面
        </HomeHeader>
        <HomeSelector>
          <div>
            <label>请选择对应的操作命令：</label>
            <Select allowClear style={{width: 500}} placeholder="请选择操作" onChange={this.handleChange}>
              <Option value="1">Deploy DAM war package</Option>
              <Option value="2">Import data</Option>
            </Select>
          </div>
        </HomeSelector>
        <DeployDamWar>

        </DeployDamWar>
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
