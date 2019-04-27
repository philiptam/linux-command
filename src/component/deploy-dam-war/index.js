import React, {Component} from 'react';
import styled from 'styled-components';
import {Input, Select, Button} from 'antd';

const Option = Select.Option;
export default class DeployDamWar extends Component {
  constructor(props) {
    super(props);
    this.handldClick = this.handldClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSelectChange=this.handleSelectChange.bind(this);
    this.state = {
      packageName: '',
      tipText: ''
    };
  }
  handleSelectChange(e){
    console.log(e);
  }
  handldClick() {
    if(this.state.packageName===''){
      this.setState({
        tipText: "请输入包名"
      });
      return false;
    }
  }

  handleOnChange(e) {
    // 通过setState函数改变数据
    this.setState({
      packageName: e.target.value,
      tipText: ""
    });
  }

  render() {
    return (
      <div>
        <DamContent>
          <div>
            <label>请输入包名：</label>
            <Input allowClear
                   value={this.state.packageName}
                   onChange={this.handleOnChange}
                   style={{width: 500}}
                   placeholder="请输入包名："/>
          </div>
          <div style={{marginTop: "20px"}}>
            <label>请选择服务器：</label>
            <Select
              allowClear
              style={{width: 500}}
              placeholder="请选择服务器"
              onChange={this.handleSelectChange}>
              <Option value="1">123</Option>
              <Option value="2">123</Option>
            </Select>
          </div>
          <Tip>{this.state.tipText}</Tip>
          <ButtonContent>
            <Button onClick={this.handldClick} type="primary">生成命令</Button>
          </ButtonContent>

        </DamContent>
      </div>
    )
  }
}

const tableContent = styled.div`
  
`

const Tip = styled.div`
  width: 500px;
  margin: 0 auto;
  margin-top: 20px;
  color: red;
  font-weight: 700;
`;

const DamContent = styled.div`
  width: 800px;
  margin: 0 auto;
  label{
    display: inline-block;
    width: 200px;
    float: left;
    margin-right: 30px;
    text-align: right;
  }
`;

const ButtonContent = styled.div`
  text-align: center;
  margin-top: 20px;
`;