import React, {Component} from 'react';
import styled from 'styled-components';
import {Table, Button} from 'antd';
import copy from 'copy-to-clipboard';


const columns = (props) => {
  const {handleOnclick} = props;
  return [{
    title: 'STEP',
    dataIndex: 'step',
    key: 'step',
    width: '50px',
    align: 'center'
  }, {
    title: 'COMMAND',
    dataIndex: 'command',
    key: 'command',
  }, {
    title: 'DESCRIBE',
    dataIndex: 'describe',
    key: 'describe',
    width: '160',
  }, {
    title: '',
    dataIndex: 'copy',
    key: 'copy',
    width: '80px',
    render: (text, record, index) => (
      <Button onClick={() => handleOnclick(text, record, index)} shape={'round'}>copy</Button>
    ),
  }
  ];
};


export default class ConmmandTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: props.dataSource, // 用于接收父组件传过来的参数
    };
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
        dataSource: nextProps.dataSource,  // 通过改变props给数组赋值
      });
  }

  handleOnclick(text, record, index) {
    copy(record.command)
  }

  render() {
    const {dataSource} = this.state;
    return (
      <div>
        <TableContent>
          <Table bordered
                 size={"small"}
                 pagination={false}
                 dataSource={dataSource}
                 columns={columns({
                   handleOnclick: this.handleOnclick
                 })}>

          </Table>
        </TableContent>
      </div>
    )
  }
}

const TableContent = styled.div`
  width: 1200px;
  margin: 20px auto 0;
`;