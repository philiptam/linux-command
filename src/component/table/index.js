import React, {Component} from 'react';
import styled from 'styled-components';
import {Table} from 'antd';

const columns = [{
  title: '步骤',
  dataIndex: 'step',
  key: 'step',
}, {
  title: '命令',
  dataIndex: 'command',
  key: 'command',
}];

const dataSource = [{
  key: '1',
  step: '胡彦斌',
  command: '西湖区湖底公园1号'
}];

export default class ConmmandTable extends Component {
  render() {
    return (
      <div>
        <TableContent>
          <Table dataSource={dataSource} columns={columns}>

          </Table>
        </TableContent>
      </div>
    )
  }
}

const TableContent = styled.div`
  width: 800px;
  margin: 0 auto;
`;