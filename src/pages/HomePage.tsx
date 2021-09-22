import { Chart } from "../components/Chart";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { Trending } from "../components/Trending";
import { useHomePage } from "../utils/hooks/useHomePage";
import "./HomePage.scss";

export const HomePage = () => {
  const { loading } = useHomePage();

  return (
    <div className='home-page-wrapper'>
      {loading ? (
        <Loading />
      ) : (
        <div className='home-page'>
          <Header />
          <Trending />
          <Chart />
        </div>
      )}
    </div>
  );
};
