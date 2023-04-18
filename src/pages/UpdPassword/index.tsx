import {useState} from 'react';
import decode from 'jwt-decode';
import { NewUserUX } from "./updpasswordUX";
import { setSec } from '@/store/slices/secSlice';
import {usePasswordMutation} from '@/store/services/secServices';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const newpassword = () => {
  const [updpassword] = usePasswordMutation();
  const [email, setEmail] = useState('');
  const [id, setid] = useState('');
  const [password, setPassword] = useState('');
  const [newpassword, setnewPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === 'email') {
      setEmail(value);
    }else if (name === 'id') {
      setid(value);
    } else if (name === 'password') {
      setPassword(value);
      setPasswordError("");
    }else if (name === 'newpassword') {
      setnewPassword(value);
      setPasswordError("");
    }
  }
  const onClickHandler = async () => {
    if (!(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm).test(password)) {
      setPasswordError("Password is not valid");
    }if (!(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm).test(newpassword)) {
      setPasswordError("Password is not valid");
    } else {
      const data = await updpassword({id,email, password, newpassword}).unwrap();
      console.log(data);
      navigate('/');
    }
  }
  return (
    <NewUserUX
    id={id}
    newpassword={newpassword}
    email={email}
    password={password}
    passwordError={passwordError}
    onChangeHandler={onChangeHandler}
    onClickHandler={onClickHandler}
    />
  )
}
export default newpassword;
