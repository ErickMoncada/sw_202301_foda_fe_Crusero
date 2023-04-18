import { FC } from "react";

import Page from "../../components/Page";
import { Field, FieldSelect } from "../../components/InputField";
import { PrimaryButton } from "../../components/Buttons";
interface IDestinosFormUXProps {
  _id: string;
  pais: string;
  status: string;
  fecha: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectChangeHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onClickHandler: () => void;
}
export const DestinoFormUpdUX: FC<IDestinosFormUXProps> = ({
  _id,
  pais,
  status,
  fecha,
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
        <Field
          name="pais"
          id="pais"
          type="text"
          labelText="pais"
          placeholder="Pais"
          onChange={onChangeHandler}
          value={pais}
        />
        <Field
          name="fecha"
          id="fecha"
          type="text"
          labelText="Fecha de Salida"
          placeholder="01/10/2023"
          onChange={onChangeHandler}
          value={fecha}
        />
        <FieldSelect
          name="status"
          id="status"
          labelText="Status"
          options={[{value:"Pending", text:"Pending"}, {value:"Active", text:"Active"}, {value:"Inactive", text:"Inactive"}]}
          onChange={onSelectChangeHandler}
          value={status}
        />
        <br /><br />
        <PrimaryButton
          onClick={onClickHandler}
        >Actualizar Destino
        </PrimaryButton>
      </div>
    </Page>
  );
};
