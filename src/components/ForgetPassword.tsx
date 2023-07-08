import React, { useState } from 'react';
import { Input, Button, Form } from 'antd';
import { Link } from 'react-router-dom';

const ForgetPassword = () => {
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
            <Form form={form} onFinish={handleSubmit}  className="custom_form">
                <h2>找回密码</h2>
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
                    <Input onChange={handlePhoneChange} placeholder="请输入有效的手机号"/>
                </Form.Item>
                <Form.Item
                    name="newPassword"
                    rules={[
                        { required: true, message: '请输入新密码' },
                        { min: 6, message: '密码最少6位' },
                        {
                            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                            message: '密码需包含至少1个大写字母、1个小写字母、1个数字和1个特殊字符',
                        },
                    ]}
                >
                    <Input.Password placeholder="请输入新密码"/>
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
                            onClick={handleSendCode} 
                            disabled={isCodeButtonDisabled}
                        >
                            发送验证码
                        </Button>
                    </Form.Item>
                </div>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className='submitButton'>
                        确定
                    </Button>
                </Form.Item>
                <div className='toRouter'>
                    <Link to="/login">立即登录</Link>
                    <span>没有账号?<Link to="/register">快速注册</Link></span>
                </div>
            </Form>
        </div>
    );
};

export default ForgetPassword;
