import Page from "@/components/Page";
import { DestinosUX } from "./DestinosUX";
import { DestinoFormUX } from "./DestinoFormUX";
import { DestinoFormUpdUX } from "./DestinoFormUpdUX";
import { DestinoFormDelUX } from "./DestinoDeleteUX";
import { FC, useState } from "react";
import { useGetAllQuery, useAddNewMutation, useGetByIdQuery,useUpdMutation,useDeleteMutation } from "@/store/services/desServices";
import { useNavigate, useParams } from "react-router-dom";

export const Destinos: FC = () => {
  const { data: destinos, isLoading, error } = useGetAllQuery([]);
  const navigate = useNavigate();
  return (
    <Page>
      <h1>Destinos</h1>
      <DestinosUX
        destinos={destinos}
        isLoading={isLoading}
        error={error?.toString() || ""}
        onViewDestinoClick={(id: string): void => {
          navigate(`/destinos/${id}`);
        }}
        onHomeClick={(): void => {
          navigate(`/home`);
        }}
        onAddClick={(): void => {
          navigate(`/destinos/new`);
        }}
        onUpdClick={(): void => {
          navigate(`/destinos/upd`);
        }}
        onDelClick={(): void => {
          navigate(`/destinos/delete`);
        }}
      />
    </Page>
  );
};

export const DestinoForm: FC = () => {
  const navigate = useNavigate();
  const [_id, setCodigo] = useState("");
  const [pais, setPais] = useState("");
  const [status, setStatus] = useState("");
  const [fechaComienzo, setFecha] = useState("");
  const [newDestino] = useAddNewMutation();
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    switch (name) {
      case "_id":
        setCodigo(value);
        break;
      case "pais":
        setPais(value);
        break;
        case "fecha":
        setFecha(value);
        break;
      default:
        break;
    }
  };
  const onSelectChangeHandler = (
    event: React.SelectChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    switch (name) {
      case "status":
        setStatus(value);
        break;
      default:
        break;
    }
  };
  const onClickHandler = async ()=>{
    const result = await newDestino({
      _id, pais, status,
      fechaComienzo
    }).unwrap();
    console.log(result);
    navigate("/destinos");
  }
  return <DestinoFormUX
    _id={_id}
    pais={pais}
    status={status}
    fecha={fechaComienzo}
    onChangeHandler={onChangeHandler}
    onSelectChangeHandler={onSelectChangeHandler}
    onClickHandler={onClickHandler}
  />;
};
export const DestinoUpdForm: FC = () => {
  const navigate = useNavigate();
  const [_id, setCodigo] = useState("");
  const [pais, setPais] = useState("");
  const [status, setStatus] = useState("");
  const [fechaComienzo, setFecha] = useState("");
  const [updDestino] = useUpdMutation();
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    switch (name) {
      case "_id":
        setCodigo(value);
        break;
      case "pais":
        setPais(value);
        break;
        case "fecha":
        setFecha(value);
        break;
      default:
        break;
    }
  };
  const onSelectChangeHandler = (
    event: React.SelectChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    switch (name) {
      case "status":
        setStatus(value);
        break;
      default:
        break;
    }
  };
  const onClickHandler = async ()=>{
    const result = await updDestino({
      _id, pais, status,
      fechaComienzo
    }).unwrap();
    console.log(result);
    navigate("/destinos");
  }
  return <DestinoFormUpdUX
    _id={_id}
    pais={pais}
    status={status}
    fecha={fechaComienzo}
    onChangeHandler={onChangeHandler}
    onSelectChangeHandler={onSelectChangeHandler}
    onClickHandler={onClickHandler}
  />;
};


//----------------
export const DestinodeleteForm: FC = () => {
  const navigate = useNavigate();
  const [_id, setCodigo] = useState("");
  const [status, setStatus] = useState("");
  const [delDestino] = useDeleteMutation();
  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    switch (name) {
      case "_id":
        setCodigo(value);
        break;
      default:
        break;
    }
  };
  const onSelectChangeHandler = (
    event: React.SelectChangeEvent<HTMLSelectElement>
  ): void => {
    const { name, value } = event.target;
    switch (name) {
      case "status":
        setStatus(value);
        break;
      default:
        break;
    }
  };
  const onClickHandler = async ()=>{
    const result = await delDestino({
      _id
    }).unwrap();
    console.log(result);
    navigate("/destinos");
  }
  return <DestinoFormDelUX
    _id={_id}
    status={status}
    onChangeHandler={onChangeHandler}
    onSelectChangeHandler={onSelectChangeHandler}
    onClickHandler={onClickHandler}
  />;
};
//-no da aun

export const DestinoView: FC = () => {
  const { id = '' } = useParams();
  const {data: destino, isLoading, error} = useGetByIdQuery(id);
  return (
    <>
    {isLoading && <div>Loading...</div>}
    {error && <div>{error?.toString() || ''}</div>}
    {destino && <div>{JSON.stringify(destino)}</div>}
    </>
  );
};
