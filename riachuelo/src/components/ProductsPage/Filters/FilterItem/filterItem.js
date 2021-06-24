import { FiltersItemContainer,FiltersLabel, FilterImg} from "./style";
import filter from "../../../../assets/filter.svg";
function FilterItem(props) {
  return (
    <FiltersItemContainer>
      <FiltersLabel>{props.filters}</FiltersLabel>
      <FilterImg src={filter}/>
    </FiltersItemContainer>
  );
} 
export default FilterItem;

