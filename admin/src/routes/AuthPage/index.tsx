import React, { useCallback, useEffect, useState } from 'react';
import { Button, Card, Form, Input, message } from 'antd';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import AuthTemplate from '../../components/templates/AuthTemplate';
import { FormBottomBox } from './styles';
import useUsers from '../../hooks/useUsers';

const AuthPage = () => {
  const { data, error, mutate } = useUsers();
  const [mode, setMode] = useState('login');
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    return () => setLoading(false); // cleanup function을 이용
  }, []);

  const onClickModeChange = useCallback(() => {
    setMode(mode === 'login' ? 'join' : 'login');
  }, [mode]);

  const onFinish = useCallback(
    async (values: any) => {
      setLoading(true);
      try {
        if (mode === 'login') {
          const res = await axios.post('/api/user/login', values);
          console.log(res);
          if (res.data.result === 'success') {
            await mutate();
          }
        } else {
          const res = await axios.post('/api/user', values);
          console.log(res);
          if (res.data.result === 'success') {
            message.success('회원가입에 성공했습니다');
            form.resetFields();
            onClickModeChange();
          }
        }
      } catch (e: any) {
        if (e.response?.data?.result === 'fail') {
          message.error(e.response.data.message);
        } else {
          message.error('서버에러가 발생했습니다');
        }
      } finally {
        setLoading(false);
      }
    },
    [mode],
  );

  if (!error && data) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <AuthTemplate>
        <Card title={mode === 'login' ? '로그인' : '회원가입'} bordered={false}>
          <Form form={form} name="basic" initialValues={{ remember: false }} onFinish={onFinish} autoComplete="off" layout="vertical">
            <Form.Item label="이메일" name="email" rules={[{ required: true, message: '아이디를 입력해주세요' }]} required>
              <Input />
            </Form.Item>
            {mode === 'join' && (
              <Form.Item label="닉네임" name="nickname" rules={[{ required: true, message: '닉네임을 입력해주세요' }]} required>
                <Input />
              </Form.Item>
            )}
            <Form.Item label="비밀번호" name="password" rules={[{ required: true, message: '비밀번호를 입력해주세요' }]} required>
              <Input.Password />
            </Form.Item>
            {mode === 'join' && (
              <Form.Item
                label="비밀번호 확인"
                name="passwordCheck"
                rules={[
                  { required: true, message: '비밀번호를 입력해주세요' },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('비밀번호가 서로 다릅니다'));
                    },
                  }),
                ]}
                required
              >
                <Input.Password />
              </Form.Item>
            )}

            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} block>
                {mode === 'login' ? '로그인' : '회원가입'}
              </Button>
            </Form.Item>
            <FormBottomBox>
              <Button type="link" onClick={onClickModeChange}>
                {mode === 'login' ? '회원가입하기' : '로그인하기'}
              </Button>
            </FormBottomBox>
          </Form>
        </Card>
      </AuthTemplate>
    </>
  );
};

export default AuthPage;
