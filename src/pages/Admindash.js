// import './App.css';
import { Dashadmin } from '../components/Dashadmin';
import { Header } from '../components/Header';
import BasicTable from '../components/BasicTable';

function Admindash() {
  return (
    <div className="Admindash">
      <Header />
      <Dashadmin />
      <BasicTable />
    </div>
  )
}

export default Admindash;