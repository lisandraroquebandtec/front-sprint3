import { FiltersContainer, FiltersList } from "./style";
import { useContext } from "react";
import ProductsContext from "../../../context/ProductsContext";
import FilterItem from "./FilterItem/filterItem";

function Filters() {
  const filters = useContext(ProductsContext);
  return (
    <FiltersContainer>
      <FiltersList>
      {filters &&
            filters.filters.length > 0 &&
            filters.filters.map((filter) => (
        <FilterItem
        filters={filter.label}
        key={filter.id}
      />
    ))}
      </FiltersList>
    </FiltersContainer>
  );
}

export default Filters;
