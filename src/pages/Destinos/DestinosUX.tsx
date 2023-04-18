import { FC } from "react";
import { PrimaryButton } from "../../components/Buttons";

export interface IDestino {
  _id: string;
  pais: string;
  status: string;
  fechaComienzo: string;
  created?: string;
  updated?: string;
  observacion?: string;
}

export interface IDestinosUXProps {
  destinos: any[];
  isLoading: boolean;
  error: string;
  onViewDestinoClick: (id: string) => void;
  onAddClick: () => void;
  onUpdClick: () => void;
  onDelClick: () => void;
  onHomeClick: () => void;
}

export const DestinosUX: FC<IDestinosUXProps> = ({
  destinos,
  isLoading,
  error,
  onViewDestinoClick,
  onAddClick,
  onUpdClick,
  onDelClick,
  onHomeClick
}) => {
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <PrimaryButton 
        onClick={onHomeClick}
      >Home
      </PrimaryButton>
      <PrimaryButton className="botonactualizar"
        onClick={onAddClick}
      >Añadir
      </PrimaryButton>
      <PrimaryButton 
        onClick={onUpdClick}
      >Actualizar
      </PrimaryButton>
      <PrimaryButton className="botonactualizar"
        onClick={onDelClick}
      >Eliminar
      </PrimaryButton>


      <TitulosUX

      />
      

      {destinos && destinos.map((destino: IDestino) => (
        <DestinoUX
          _id={destino._id}
          pais={destino.pais}
          status={destino.status}
          fechaComienzo={destino.fechaComienzo}
          onViewDestinoClick={function (id: string): void {
            onViewDestinoClick(id);
          }}
        />
      ))}
    </>
  );
};
export interface IDestinoUXProps {
  _id: string;
  pais: string;
  status: string;
  fechaComienzo: string;
  onViewDestinoClick: (id: string) => void;
}
export const DestinoUX: FC<IDestinoUXProps> = ({
  _id,
  pais,
  status,
  fechaComienzo,
  onViewDestinoClick,
}) => {
  return (
    <div
      data-id={_id}
      onClick={() => {
        onViewDestinoClick(_id);
      }}
    >

      <center>
        <table className="table1">
          
          <tbody>
            <tr>
              <td className="id">{_id}</td>
              <td className="pais">{pais}</td>
              <td className="fecha">{fechaComienzo}</td>
              <td className="estado">{status}</td>
            </tr>
          </tbody>

        </table>
      </center>

    </div>
  );
};


export const TitulosUX = ({

}) => {
  return (

      <center>
        <table className="table">
          <thead>
            <tr className="titulos">
              <th className="id">Id</th>
              <th className="pais">Pais</th>
              <th className="fecha">Fecha</th>
              <th className="estado">Estado</th>
            </tr>
          </thead>

        </table>
      </center>
  );
};
