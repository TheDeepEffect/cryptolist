import { Chart } from "../components/Chart";
import { Header } from "../components/Header";
import { Trending } from "../components/Trending";
import "./HomePage.scss";
export const HomePage = () => {
  return (
    <div className='home-page-wrapper'>
      <div className='home-page'>
        <Header />
        <Trending />
        <Chart />
      </div>
    </div>
  );
};
