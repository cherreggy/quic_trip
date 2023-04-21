import { Modal, Tabs } from "antd";
import { message, Button, Checkbox, Form, Input, Space } from "antd";
import { QRCode } from "antd";
import { useEffect, useState, useContext } from "react";
import { ValueContext } from "@/pages/_app";
import axios from "axios";

function UserNameAndPassword(props) {
  // 根组件状态
  const { isShow, setisShow, token, setToken } = useContext(ValueContext);
  // 表单
  const [form] = Form.useForm();
  // 是否记住我
  const [rememberMe, setRememberMe] = useState(false);
  // 点击登录按钮逻辑
  const handleLogin = async () => {
    axios
      .post("http://localhost:3000/api/mock/login", {
        username: form.getFieldValue("username"),
        password: form.getFieldValue("password"),
        rememberMe: rememberMe,
      })
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res.data.data);
          message.success("登录成功");
          // 判断是否记住用户名，写入本地，下次自动登录
          if (rememberMe) {
            // 写入本地存储
            localStorage.setItem("token", res.data.data.username);
            // 设置临时token
            setToken(res.data.data.username);
            setRememberMe(false);
            // 关闭弹窗
            props.setIsModalOpen(false);
          } else {
            // 设置临时token
            setToken(res.data.data.username);
            // 关闭弹窗
            props.setIsModalOpen(false);
          }
          form.resetFields();
        } else if (res.data.status === 203) {
          message.error("用户不存在");
          form.resetFields();
        } else if (res.data.status === 202) {
          message.error("密码错误");
          form.resetFields();
        }
      })
      .catch((err) => {
        message.error("操作失败" + err);
        console.log(err);
      });
  };
  // 用户名密码登录样式
  return (
    <div>
      <Form
        name="username"
        labelCol={{
          span: 6,
        }}
        form={form}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: "请输入用户名！",
            },
          ]}
          style={{ paddingTop: "2rem" }}
        >
          <Input style={{ width: "80%" }} />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: "请输入密码！",
            },
          ]}
        >
          <Input.Password style={{ width: "80%" }} />
        </Form.Item>

        <Form.Item name="remember">
          <Checkbox
            style={{ marginLeft: "3rem" }}
            onChange={(e) => {
              // 设置是否记住我
              setRememberMe(e.target.checked);
            }}
          >
            记住我
          </Checkbox>
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            style={{ width: "80%", height: "rem", fontSize: "1rem" }}
            onClick={handleLogin}
          >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

function Phone(props) {
  // 根组件状态
  const { isShow, setisShow, token, setToken } = useContext(ValueContext);
  // 存放随机验证码
  const [valiNum, setValiNum] = useState("");
  // 标记获取验证码功能是否可用
  const [countdown, setCountdown] = useState(5);
  const [disabled, setDisabled] = useState(false);
  // 保存计时器的引用，以便能够即使销毁，防止内存泄漏
  const [timer, setTimer] = useState(null);
  // 组件卸载时释放定时器
  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, [timer]);

  // 提示泡泡显示
  const showMessage = (m) => {
    if (m) {
      // console.log(m.errorFields[0].errors[0]);
      message.error(m.errorFields[0].errors[0]);
    } else {
      // 生成随机验证码
      let rand = ("000000" + Math.floor(Math.random() * 999999)).slice(-6);
      message.success("你的验证码：" + rand);
      // 将验证码存储到状态
      setValiNum(rand);
    }
  };
  // 表单定义
  const [form] = Form.useForm();
  // 点击获取验证码操作
  const handlePhone = () => {
    // 验证表单操作
    form
      .validateFields(["phonenum"])
      .then(() => {
        // 验证成功后发送随机验证码
        showMessage();
        // 设置按钮为disabled
        setDisabled(true);
        setCountdown(5);
        // 每秒减少倒计时的值
        const t = setInterval(() => {
          setCountdown((old) => {
            if (old == 1) {
              clearInterval(timer);
              setDisabled(false);
            }
            return old - 1;
          });
        }, 1000);
        setTimer(t);
        // // 倒计时结束后重置状态
        // setTimeout(() => {
        //   clearInterval(intervalId);
        //   setCountdown(60);
        //   setDisabled(false);
        // }, 60000);
      })
      .catch((err) => {
        showMessage(err);
      });
  };
  // 点击手机验证码登录逻辑
  const handleLogin = () => {
    if (form.getFieldValue("varifycode") == valiNum) {
      axios
        .post("http://localhost:3000/api/mock/login", {
          username: "wzb",
          password: "111",
          rememberMe: true,
        })
        .then((res) => {
          if (res.data.status === 200) {
            console.log(res.data.data);
            message.success("登录成功");
            // 写入本地存储
            localStorage.setItem("token", res.data.data.username);
            // 设置临时token
            setToken(res.data.data.username);
            // 关闭弹窗
            props.setIsModalOpen(false);
            form.resetFields();
          } else if (res.data.status === 203) {
            message.error("用户不存在");
            form.resetFields();
          } else if (res.data.status === 202) {
            message.error("密码错误");
            form.resetFields();
          }
        })
        .catch((err) => {
          message.error("操作失败" + err);
          console.log(err);
        });
    } else {
      message.error("您输入的验证码错误！");
    }
  };
  // 手机号登录样式
  return (
    <div>
      <Form
        name="phone"
        labelCol={{
          span: 6,
        }}
        form={form}
      >
        <Form.Item
          label="手机号"
          name="phonenum"
          rules={[
            {
              required: true,
              message: "请输入正确电话号码！",
              pattern: new RegExp(/^1(3|4|5|6|7|8|9)\d{9}$/, "g"),
            },
          ]}
          style={{ paddingTop: "2rem" }}
        >
          <Space.Compact
            style={{
              width: "80%",
            }}
          >
            <Input />
            <Button
              style={{ backgroundColor: "#9f1bfa", color: "white" }}
              onClick={handlePhone}
              disabled={disabled}
            >
              {disabled ? `${countdown}秒后重新发送` : "发送验证码"}
            </Button>
          </Space.Compact>
        </Form.Item>

        <Form.Item
          label="验证码"
          name="varifycode"
          rules={[
            {
              required: true,
              message: "请输入验证码！",
            },
          ]}
        >
          <Input style={{ width: "80%" }} />
        </Form.Item>

        <Form.Item style={{ textAlign: "center" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "80%", height: "2.5rem", fontSize: "1rem" }}
            onClick={handleLogin}
          >
            手机验证登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default function Login(props) {
  const uname = (
    <UserNameAndPassword
      setIsModalOpen={props.setIsModalOpen}
      open={props.isModalOpen}
    ></UserNameAndPassword>
  );
  const phone = (
    <Phone
      setIsModalOpen={props.setIsModalOpen}
      open={props.isModalOpen}
    ></Phone>
  );
  return (
    <Modal
      title={null}
      open={props.isModalOpen}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      centered
      footer={null}
    >
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: "用户名/密码登录",
            key: "1",
            children: uname,
          },
          {
            label: "短信登录",
            key: "2",
            children: phone,
          },
          {
            label: "扫码登录",
            key: "3",
            children: (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <QRCode
                  errorLevel="H"
                  value="https://ant.design/"
                  icon="https://cdn-icons-png.flaticon.com/512/9379/9379368.png"
                  size={200}
                />
              </div>
            ),
          },
        ]}
      />
    </Modal>
  );
}
