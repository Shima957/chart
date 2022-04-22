import axios from 'axios';
import useSWR from 'swr';
import '../App.css';

type DataType = {
  prefConde: number;
  prefName: string;
};

export const PrefesList = () => {
  const url = 'https://opendata.resas-portal.go.jp/api/v1/prefectures';

  const fetcher = async (url: string) => {
    const res = await axios.get(url);
    const data = res.data.result;

    return data;
  };

  const { data } = useSWR<DataType[]>(url, fetcher, { suspense: true });
  return (
    <div className='pref'>
      {data?.map((data) => (
        <p key={data.prefConde}>{data.prefName}</p>
      ))}
    </div>
  );
};
