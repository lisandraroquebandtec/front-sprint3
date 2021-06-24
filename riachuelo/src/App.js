import React, { useEffect, useState } from "react";
import Header from "./components/Header/header";
import ProductsPage from "./components/ProductsPage/productsPage";
import CategoriesContext from "./context/CategoriesContext";
import FilterContext from "./context/FilterContext";
import ProductsContext from "./context/ProductsContext";
import { GlobalStyle } from "./Reset.js";
import {SnackbarProvider, useSnackbar} from "notistack"

function App() {
  const [categories, setCategories] = useState();
  const [breadcrumb, setBreadcrumb] = useState();
  const [filter, setFilter] = useState();
  const [product, setProduct] = useState();
  const [search, setSearch] = useState();
  const [allProducts, setAllProducts] = useState();
  const teste = useSnackbar();

  useEffect(() => {
    fetch("/data/categories.json")
      .then((data) => data.json())
      .then((json) => {
        setCategories(json);
        setBreadcrumb(json);
        // teste.enqueueSnackbar("Categorias carregadas com sucesso...", {variant:"success"})
      })
      // .catch((erro)=>teste.enqueueSnackbar("Ocorreu um erro ao carregar as categorias...", {variant:"error"}))
  }, []);

  useEffect(() => {
    fetch("/data/products.json")
      .then((data) => data.json())
      .then((json) => {
        setFilter(json);
        setProduct(json);
        setAllProducts(json.products);
      })
      // .catch((erro)=>teste.enqueueSnackbar("Ocorreu um erro ao carregar os produtos...", {variant:"error"}))
  }, []);

  return (
    <>
      <GlobalStyle />
      <SnackbarProvider>

      <FilterContext.Provider value={{ search, setSearch, allProducts, setProduct}}>
        <CategoriesContext.Provider value={(categories, breadcrumb)}>
          <Header />
          <ProductsPage />
        </CategoriesContext.Provider>
        <ProductsContext.Provider value={(filter, product)}>
          <ProductsPage />
        </ProductsContext.Provider>
        </FilterContext.Provider>
      </SnackbarProvider>
      
    </>
  );
}

export default App;
