import React, { Component } from "react";
import { Table, Input, Space } from "antd";
import axios from "axios";

import "antd/dist/antd.less";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      find: [],
    };
    this.UpdateData = this.UpdateData.bind(this);
    this.UpdateData();
  }

  UpdateData() {
    axios
      .get(`/posts`)
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((res) => {});
  }
  render() {
    const columns = [
      {
        title: "ID",
        dataIndex: "id",
        key: "id",
        sorter: true,

        render: (text) => <Space>{text}</Space>,
      },
      {
        title: "Заголовок",
        dataIndex: "title",
        sorter: true,

        key: "title",
      },
      {
        title: "Описание",
        dataIndex: "body",
        sorter: true,

        key: "body",
      },
    ];
    const onSearch = (value) => {
      this.setState({
        data: this.state.data.filter((element) =>
          element.title.toLowerCase().includes(value.toLowerCase())
        ),
      });
    };

    return (
      <>
        <Input.Search
          placeholder="Поиск"
          onSearch={onSearch}
          onChange={(e) => {
            if (e.target.value === "") {
              this.UpdateData();
            }
          }}
          style={{ width: 200 }}
        />
        <Table
          columns={columns}
          dataSource={this.state.data}
          rowKey={(record) => record.id}
          bordered={true}
        />
      </>
    );
  }
}
