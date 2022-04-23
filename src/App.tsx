import './App.css';
import './reset.css';
import { Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import axios from 'axios';
import useSWR from 'swr';

type DataType = {
  year: number;
  value: number;
};

function App() {
  const url =
    'https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=11';

  const fetcher = async (url: string) => {
    const res = await axios.get(url);
    const data = res.data.result.data[0].data;

    return data;
  };

  const { data } = useSWR<DataType[]>(url, fetcher, { suspense: true });

  return (
    <div className='App'>
      <LineChart width={730} height={250} data={data}>
        <XAxis dataKey='year' />
        <YAxis />
        <Legend />
        <Line type='monotone' dataKey='value' stroke='#8884b8' />
      </LineChart>
    </div>
  );
}

export default App;
