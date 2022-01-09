import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const name = "ram";
  return (
   <div>
     <Header></Header>
     <h1>Welcome {name}</h1>
     <div>This is my first app..</div>
     <div>This is the second paragraph..</div>
     <div className='abc'>What's up man?</div>
     <div className='btn btn-warning'>hello</div>
     <Footer></Footer>
   </div>
  );
}

export default App;
