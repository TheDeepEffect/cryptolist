import { useMemo } from "react";
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { useStore } from "../../utils/hooks/useStore";
import { CurrentCoinInfo } from "../CurrentCoinInfo";
import "./Chart.scss";
export const Chart = () => {
  const {
    state: { currentCoin },
  } = useStore();
  const currentCoinWithTime = useMemo(() => {
    return {
      ...currentCoin,
      timeSeries: currentCoin?.timeSeries.map((item) => ({
        ...item,
        time: new Date(item.time * 1000).toLocaleDateString(),
      })),
    };
  }, [currentCoin]);
  return (
    <div className='chart'>
      <CurrentCoinInfo />
      <ResponsiveContainer width='95%' height='55%'>
        <LineChart data={currentCoinWithTime?.timeSeries}>
          <XAxis dataKey='time' />
          <Legend />
          <Tooltip />
          <Line type='monotone' dataKey='open' stroke='#8884d8' />
          <Line type='monotone' dataKey='close' stroke='#82ca9d' />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
