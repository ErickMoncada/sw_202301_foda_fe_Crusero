import { FC } from "react";

import Page from "../../components/Page";
import { Field, FieldSelect } from "../../components/InputField";
import { PrimaryButton } from "../../components/Buttons";
interface IDestinosFormUXProps {
  _id: string;
  status:string,
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onClickHandler: () => void;
}
export const DestinoFormDelUX: FC<IDestinosFormUXProps> = ({
  _id,
  status,
  onChangeHandler,
  onSelectChangeHandler,
  onClickHandler
}) => {
  return (
    <Page useAbsoluteCenter={true} pageTitle="Destinos">
      <div className="login-ux">
        <Field
          name="_id"
          id="_id"
          type="text"
          labelText="ID"
          placeholder="EMP001"
          onChange={onChangeHandler}
          value={_id}
        />
        <br /><br />
        <PrimaryButton
          onClick={onClickHandler}
        >borrar Destino
        </PrimaryButton>
      </div>
    </Page>
  );
};
