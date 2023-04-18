import { FC } from "react";

import Page from "../../components/Page";
import { Field } from "../../components/InputField";
import { PrimaryButton } from "../../components/Buttons";
import ErrorField from "../../components/ErrorField";
interface LoginUXProps {
  id:string;
  email: string;
  password: string;
  newpassword:string;
  passwordError?: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClickHandler: () => void;
}
export const NewUserUX: FC<LoginUXProps> = ({
  id,
  email,
  password,
  newpassword,
  passwordError,
  onChangeHandler,
  onClickHandler
}) => {
  return (
    <Page useAbsoluteCenter={true} pageTitle="UpdPassword">
      <div className="login-ux">
      <Field
          name="id"
          id="id"
          type="id"
          labelText="id"
          placeholder="id"
          onChange={onChangeHandler}
          value={id}
        />
        <Field
          name="email"
          id="email"
          type="email"
          labelText="Correo Electrónico"
          placeholder="Correo Electrónico"
          onChange={onChangeHandler}
          value={email}
        />
        <br /><br />
        <Field
          name="password"
          id="password"
          type="password"
          labelText="Contraseña"
          placeholder="Contraseña"
          onChange={onChangeHandler}
          value={password}
        />
        <br /><br />
        <Field
          name="newpassword"
          id="newpassword"
          type="newpassword"
          labelText="Contraseña Nueva"
          placeholder="Contraseña Nueva"
          onChange={onChangeHandler}
          value={newpassword}
        />
        {passwordError && <ErrorField>{passwordError}</ErrorField>}

        <br /><br />
        <PrimaryButton
          onClick={onClickHandler}
        >Cambiar Contraseña
        </PrimaryButton>
      </div>
    </Page>
  );
};
