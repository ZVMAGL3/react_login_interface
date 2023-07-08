import React, { useState } from 'react';
import { Input, Button, Form } from 'antd';
import { Link } from 'react-router-dom';
import './MyForm.css';

const Register = () => {
    const [form] = Form.useForm();
    const [isCodeButtonDisabled, setIsCodeButtonDisabled] = useState(true);

    const handleSubmit = (values: any) => {
        // 验证通过后的处理逻辑，可以将表单数据存储至React Redux和localStorage
        console.log(values);
    };

    const handlePhoneChange = (e) => {
        const phoneNumber = e.target.value;
        setIsCodeButtonDisabled(phoneNumber.length !== 11);
    };

    const handleSendCode = () => {
        // 发送验证码逻辑
        console.log('Sending verification code...');
    };


    return (
        <div className="form_container">
            <Form form={form} onFinish={handleSubmit} className="custom_form">
                <h2>用户注册</h2>
                <Form.Item
                    name="username"
                    rules={[
                        { required: true, message: '请输入用户名' },
                        { max: 6, message: '用户名不超过6位' },
                        {
                            pattern: /^(?:\d+|[a-zA-Z]+|[a-zA-Z\d]+)$/i,
                            message: '用户名为纯数字、纯英文字母或数字与英文字母组合',
                        },
                    ]}
                >
                    <Input placeholder="请输入用户名"/>
                </Form.Item>
                <Form.Item
                    name="phoneNumber"
                    rules={[
                        { required: true, message: '请输入手机号' },
                        {
                            pattern: /^1[3-9]\d{9}$/,
                            message: '请输入有效的手机号',
                        },
                    ]}
                >
                    <Input placeholder="请输入手机号" onChange={handlePhoneChange} />
                </Form.Item>
                <div className='verificationArea'>
                    <Form.Item
                        name="verificationCode"
                        className='verificationCode'
                        rules={[{ required: true, message: '请输入验证码' }]}
                    >
                        <Input placeholder="请输入验证码"/>
                    </Form.Item>
                    <Form.Item>
                        <Button 
                            type="primary" 
                            className='verificationCode_button' 
                            onClick={handleSendCode} 
                            disabled={isCodeButtonDisabled}
                        >
                            发送验证码
                        </Button>
                    </Form.Item>
                </div>
                <Form.Item
                    name="password"
                    rules={[
                        { required: true, message: '请输入密码' },
                        { min: 6, message: '密码最少6位' },
                        {
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                            message: '密码需包含至少1个大写字母、1个小写字母、1个数字和1个特殊字符',
                        },
                    ]}
                >
                    <Input.Password placeholder="请输入密码"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className='submitButton'>
                        立即注册
                    </Button>
                </Form.Item>
                <div className='toRouter'>
                    <Link to="/forget_password">忘记密码</Link>
                    <span>已有账号?<Link to="/login" >马上登录</Link></span>
                </div>
            </Form>
        </div>
    );
};

export default Register;
