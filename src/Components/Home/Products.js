import { useContext } from "react";
import CartContext from "../../Contexts/CartContext";
import { getCartProducts, addToCart } from "../../Common/Service/Service";
import { ProductCard } from '../../Styles/HomeStyle';
import { BsPlusCircle } from 'react-icons/bs';


export default function Products ({products}) {

    const { setCart } = useContext(CartContext)

    return (
        products.map((product, index) => (

            <ProductCard key={index}>
                <img src={product.url}/>
                <p>{product.title}</p>
                <div>
                    <span>{product.price}</span>
                    <BsPlusCircle className="plus" onClick={()=>{
                        const promise = addToCart(product);
                        promise.then(getCartProducts().then(res=>{setCart(res.data);console.log(res.data);}))
                        }}/>
                </div>
            </ProductCard>

        ))
    )
}