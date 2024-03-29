import React, {Component} from 'react';
import styled from 'styled-components';
import {Input, Select, Button} from 'antd';
import ConmmandTable from './../table';
import {serverPath, serverDam, tmpPath, damWarName} from './serverdata'


const Option = Select.Option;
export default class DeployDamWar extends Component {
  constructor(props) {
    super(props);
    this.handldClick = this.handldClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handldReset = this.handldReset.bind(this);
    this.state = {
      packageName: '',
      tipText: '',
      serverValue: "",
      tableList: []
    };
  }

  handleSelectChange(e) {
    this.setState({
      serverValue: e,
      tipText: ""
    })
  }

  handldClick() {
    if (this.state.packageName === '') {
      this.setState({
        tipText: "请输入包名"
      });
      return false;
    }
    if (this.state.serverValue === '') {
      this.setState({
        tipText: "请选择服务器"
      });
      return false;
    }
    const cpCommand = `cp ${tmpPath}/${this.state.packageName} ${serverPath}/${this.state.serverValue}/apps`;//生成CD命令
    const rmCommand = `rm -rf ${serverPath}/${this.state.serverValue}/apps/${damWarName}`;//生成删除快捷方式命令
    const lnCommand = `ln -s ${serverPath}/${this.state.serverValue}/apps/${this.state.packageName} ${serverPath}/${this.state.serverValue}/apps/${damWarName}`;//创建快捷方式
    const tableList = [{
      key: '1',
      step: '1',
      command: cpCommand,
      describe: '复制war包到指定目录',
    }, {
      key: '2',
      step: '2',
      command: rmCommand,
      describe: '删除原来的快捷方式',
    }, {
      key: '3',
      step: '3',
      command: lnCommand,
      describe: '生成新的快捷方式',
    }];
    this.setState({
      tableList
    })
  }

  handleOnChange(e) {
    // 通过setState函数改变数据
    this.setState({
      packageName: e.target.value,
      tipText: ""
    });
  }

  handldReset() {
    this.setState({
      packageName: '',
      tipText: '',
      serverValue: "",
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
                   placeholder="请输入包名"/>
          </div>
          <div style={{marginTop: "20px"}}>
            <label>请选择服务器：</label>
            <Select
              allowClear
              style={{width: 500}}
              placeholder="请选择服务器"
              onChange={this.handleSelectChange}>
              {
                serverDam.map((item, index) => {
                  return <Option key={item.serverFolder}>{item.serverName}</Option>
                })
              }
            </Select>
          </div>
          <Tip>{this.state.tipText}</Tip>
          <ButtonContent>
            <Button onClick={this.handldClick} type="primary">生成命令</Button>
            <Button style={{marginLeft: "20px"}} onClick={this.handldReset} type="danger">重置</Button>
          </ButtonContent>

        </DamContent>
        <ConmmandTable dataSource={this.state.tableList}></ConmmandTable>
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