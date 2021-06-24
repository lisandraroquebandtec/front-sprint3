import {
  ProductsContainer,
  ProductsLista
} from "./style";
import { useContext} from "react";
import ProductItem from "./ProductItem/productItem"
import FilterContext from "../../../context/FilterContext";
import ProductsContext from "../../../context/ProductsContext";

function Products() {
  const products = useContext(ProductsContext);
  return (
    <ProductsContainer>
      <ProductsLista>
        
        {products &&
          products.products.length > 0 &&
          products.products.map((product) => (
            <ProductItem
            key={product.sku}
            image={product.image}
            name={product.name}
            price={product.price}
            />
          ))}
      </ProductsLista>
    </ProductsContainer>
  );
}

export default Products;
