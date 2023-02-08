import ProductCard from './components/ProductCard';
import ressurser from './ressurser'
import './css/main.css';


function App() {
  return (
    <div className="App">
      {ressurser.map((ressurs) => 
        <ProductCard  key={ressurs.id} category={ressurs.category} title={ressurs.title} url={ressurs.url}/>
      )}
    </div>
  );
}

export default App;
