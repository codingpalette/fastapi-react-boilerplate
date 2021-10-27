import React, { useCallback, useState } from 'react';
import axios from 'axios';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../../assets/images/svelte-logo.svg';
import { HeaderBox, ModalBox } from './styles';
import useInput from '../../../hooks/useInput';

const Header = () => {
  const [id, onChangeId] = useInput('');
  const [idError, setIdError] = useState({
    open: false,
    msg: '',
  });
  const [nickname, onChangeNickname] = useInput('');
  const [nicknameError, setNicknameError] = useState({
    open: false,
    msg: '',
  });
  const [password, onChangePassword] = useInput('');
  const [passwordError, setPasswordError] = useState({
    open: false,
    msg: '',
  });
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [passwordCheckError, setPasswordCheckError] = useState({
    open: false,
    msg: '',
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [mode, setMode] = useState('login');

  const handleClickOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  const onClickModeChange = useCallback(() => {
    setMode(mode === 'login' ? 'create' : 'login');
  }, [mode]);

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (id.trim().length === 0) {
        setIdError({ open: true, msg: '아이디를 입력해주세요' });
      } else {
        setIdError({
          open: false,
          msg: '',
        });
      }
      if (password.length === 0) {
        setPasswordError({
          open: true,
          msg: '비밀번호를 입력해주세요',
        });
      } else {
        setPasswordError({
          open: false,
          msg: '',
        });
      }
      if (mode === 'create') {
        console.log('create');
        if (nickname.trim().length === 0) {
          setNicknameError({ open: true, msg: '닉네임을 입력해주세요' });
        } else {
          setNicknameError({ open: false, msg: '' });
        }

        if (passwordCheck.length === 0) {
          setPasswordCheckError({
            open: true,
            msg: '비밀번호를 입력해주세요',
          });
        } else if (password !== passwordCheck) {
          setPasswordCheckError({
            open: true,
            msg: '비밀번호가 서로 다릅니다',
          });
        } else {
          setPasswordCheckError({
            open: false,
            msg: '',
          });
        }
      }
      try {
        if (mode === 'login') {
          console.log('로그인');
        } else {
          console.log('회원가입');
          const data = {
            email: id,
            nickname,
            password,
          };
          const res = await axios.post('/api/user', data);
          console.log(res);
        }
      } catch (e) {
        console.error(e);
      }
    },
    [mode, id, nickname, password, passwordCheck],
  );

  return (
    <>
      <HeaderBox color="default" position="static">
        <Toolbar className="tool_bar">
          <div className="left_box">
            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <div className="logo_box">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <Button color="inherit" variant="outlined" onClick={handleClickOpen}>
            로그인
          </Button>
          <ModalBox
            fullWidth
            maxWidth="xs"
            open={modalOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle>{mode === 'login' ? '로그인' : '회원가입'}</DialogTitle>
            <form onSubmit={onSubmit}>
              <DialogContent>
                <div className="input_group">
                  <TextField
                    fullWidth
                    label="아이디"
                    variant="standard"
                    error={idError.open}
                    helperText={idError.msg}
                    value={id}
                    onChange={onChangeId}
                  />
                </div>
                {mode === 'create' && (
                  <>
                    <div className="input_group">
                      <TextField
                        fullWidth
                        label="닉네임"
                        variant="standard"
                        error={nicknameError.open}
                        helperText={nicknameError.msg}
                        value={nickname}
                        onChange={onChangeNickname}
                      />
                    </div>
                  </>
                )}

                <div className="input_group">
                  <TextField
                    fullWidth
                    label="비밀번호"
                    type="password"
                    variant="standard"
                    value={password}
                    onChange={onChangePassword}
                    error={passwordError.open}
                    helperText={passwordError.msg}
                  />
                </div>
                {mode === 'create' && (
                  <>
                    <div className="input_group">
                      <TextField
                        fullWidth
                        label="비밀번호 확인"
                        type="password"
                        variant="standard"
                        value={passwordCheck}
                        onChange={onChangePasswordCheck}
                        error={passwordCheckError.open}
                        helperText={passwordCheckError.msg}
                      />
                    </div>
                  </>
                )}
              </DialogContent>
              <div className="mode_select">
                <button type="button" onClick={onClickModeChange}>
                  {mode === 'login' ? '회원가입하기' : '로그인하기'}
                </button>
              </div>
              <DialogActions>
                <Button color="error" onClick={handleClose}>
                  닫기
                </Button>
                <Button type="submit">{mode === 'login' ? '로그인' : '회원가입'}</Button>
              </DialogActions>
            </form>
          </ModalBox>
        </Toolbar>
      </HeaderBox>
    </>
  );
};

export default Header;
