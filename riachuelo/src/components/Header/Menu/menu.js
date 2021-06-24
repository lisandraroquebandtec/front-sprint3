import { MenuHeader, MenuList } from "./style";
import MenuItem from "./MenuItem/menuItem";
import CategoriesContext from "../../../context/CategoriesContext";
import { useContext } from "react";

function Menu() {
  const categories = useContext(CategoriesContext);
  return (
    <MenuHeader>
      <MenuList>
        {categories &&
          categories.all.length > 0 &&
          categories.all.map((category) => (
            <MenuItem
              link={category.link}
              categories={category.label}
              key={category.id}
            />
          ))}
      </MenuList>
    </MenuHeader>
  );
}
export default Menu;
