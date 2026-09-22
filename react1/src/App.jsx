import Card from "./Card";
import "./Card.css";

function App() {
  return <>
  <h1>Trending Product</h1>
    <div className="main">
      <Card title="Laptop" idx={0}/>
      <Card title="Mobile" idx={1}/>
      <Card title="Ps5" idx={2}/>
      <Card title="Fitbit" idx={3}/> 
    </div> 
  </>
  
}

export default App;