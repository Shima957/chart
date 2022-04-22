import './App.css';
import './reset.css';
import { LineChart, Line, Legend, XAxis, YAxis } from 'recharts';
import { PrefesList } from './components/PrefesList';
import { Suspense } from 'react';

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>loading...</div>}>
        <PrefesList />
      </Suspense>
      <LineChart width={730} height={250}>
        <Legend />
        <Line type='monotone' dataKey='uv' stroke='#8884b8' />
        <Line type='monotone' dataKey='pv' stroke='#82ca9b' />
        <XAxis dataKey='name' />
        <YAxis />
      </LineChart>
    </div>
  );
}

export default App;
