import React, { Component } from "react";
import { Form, Button, Input } from "antd";

const nameRules = {
  required: true,
  message: "please input ur name"
};
const passwordRules = {
  required: true,
  message: "please input ur password"
};
//高阶函数装饰器，装饰在props里面的this.props.form
@Form.create()
class FormPage extends Component {
  submit = () => {
    const { getFieldsValue, getFieldValue, validateFields } = this.props.form;
    validateFields((err, values) => {
      if (err) {
        console.log("err", err);
      } else {
        console.log("success", values);
      }
    });
    //console.log("submit", getFieldsValue(), getFieldValue("name"));
  };
  render() {
    console.log("props", this.props);
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h3>FormPage</h3>
        <Form>
          <Form.Item label="姓名">
            {getFieldDecorator("name", { rules: [nameRules] })(<Input />)}
          </Form.Item>
          <Form.Item label="密码">
            {getFieldDecorator("password", { rules: [passwordRules] })(
              <Input type="password" />
            )}
          </Form.Item>
        </Form>
        <Button onClick={this.submit}>submit</Button>
      </div>
    );
  }
}

export default FormPage;
