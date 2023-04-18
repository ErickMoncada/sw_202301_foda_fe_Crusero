import {useState} from 'react';
import decode from 'jwt-decode';
import { NewUserUX } from "./newuserUX";
import { setSec } from '@/store/slices/secSlice';
import {useCreateuserMutation} from '@/store/services/secServices';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NewUser = () => {
  const [createuser] = useCreateuserMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
      setPasswordError("");
    }
  }
  const onClickHandler = async () => {
    if (!(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm).test(password)) {
      setPasswordError("Password is not valid");
    } else {
      const data = await createuser({email, password}).unwrap();
      console.log(data);
      navigate('/');
    }
  }
  return (
    <NewUserUX
      email={email}
      password={password}
      passwordError={passwordError}
      onChangeHandler={onChangeHandler}
      onClickHandler={onClickHandler}
    />
  )
}
export default NewUser;
