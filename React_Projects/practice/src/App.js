import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom'; 
import Mid from './components/Mid';

function App() {
  const name = "ram";
  const data = {
    username: "gauri003",
    address : "Morang",
    phone: "9876543210",
  }
  return (
   <div>
     <BrowserRouter>
     <Header username={data.username} add="Morang"></Header>
     <h1>Welcome {name}</h1>
     <p>{data.username}, {data.address}</p>
     <Mid></Mid>
     <div>This is my first app..</div>
     <div>This is the second paragraph..</div>
     <div className='abc'>What's up man?</div>
     <div className='btn btn-warning'>hello</div>
     <Footer></Footer>        
     </BrowserRouter>
   </div>
  );
}

export default App;
