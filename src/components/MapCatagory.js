import ProductCard from './components/ProductCard';
import { resources } from './ressurser';

export default function MapCatagory() {
    return (
        <main>
            {resources.map((ressurs) => (
                <ProductCard category={ressurs.category} title={ressurs.title} url={ressurs.url}/>
            ))}
            
        </main>
    )
}