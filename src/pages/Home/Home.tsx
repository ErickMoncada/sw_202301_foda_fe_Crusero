import { FC, useState, useEffect } from "react";
import { Card } from "../../components/Card";
import { getHomeData } from "./HomeService";
import Page from "../../components/Page";
import '../../components/home.css';
export const Home: FC = () => {
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getHomeData()
      .then((apiData) => {
        setData(apiData.msg);
        setIsLoading(false);
        setError(null);
      })
      .catch(() => {
        setIsLoading(false);
        setError("Error while loading data");
      });
  }, [refresh]);
  return (
    <Page>
      <div className="home">
        <br />
      <h1>Cruceros</h1>


<center>
  {data && !isLoading && !error && (
    <Card>
      <h2>{data}</h2>
    </Card>
  )}
</center>

  {isLoading && <p>Loading...</p>}
  {error && <p>{error}</p>}
  
  <a className="refresh"
    onClick={() => {
      setRefresh(!refresh);
    }}
  >
    Refresh
  </a>
      </div>

    </Page>
  );
};
