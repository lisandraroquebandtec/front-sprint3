import Breadcrumbs from "./Breadcrumbs/breadcrumbs";
import { Main } from "./style";
import Filters from "./Filters/filters";
import Products from "./Product/products";
import ProductsContext from "../../context/ProductsContext";
import { useContext, useEffect } from "react";
import FilterContext from "../../context/FilterContext";
import { useSnackbar } from "notistack";

function ProductsPage() {
  const products = useContext(ProductsContext);
  const filters = useContext(FilterContext);
  const { search, allProducts, setProduct } = filters;
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    if (search && search.length > 0) {
      const test = allProducts;
      const result = test.filter((p) => p.name.toLowerCase().includes(search));
      enqueueSnackbar("Produtos carregados com sucesso...", {
        variant: "success",
      });
      //   setProduct((prevState)=>({...prevState, products: result}))
      console.log(1);
    } else {
      //  setProduct((prevState)=>({...prevState, products: allProducts}))
      console.log(2);
    }
  }, [search]);
  return (
    <Main>
      <Breadcrumbs />
      <Filters />
      <Products />
    </Main>
  );
}

export default ProductsPage;
