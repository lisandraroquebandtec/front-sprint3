import { useContext } from "react";
import CategoriesContext from "../../../context/CategoriesContext";
import BreadcrumbItem from "./BreadcrumbItem/breadcrumbItem";
import { ProductsBreadcrumbs, BreadcrumbsNav, BreadcrumbsMenu } from "./style";

function Breadcrumbs() {
  const breadcrumbs = useContext(CategoriesContext);
  return (
    <ProductsBreadcrumbs>
      <BreadcrumbsNav>
        <BreadcrumbsMenu>
          {breadcrumbs &&
            breadcrumbs.current.length > 0 &&
            breadcrumbs.current.map((breadcrumb) => (
              <BreadcrumbItem
                link={breadcrumb.link}
                breadcrumbs={breadcrumb.name}
                key={breadcrumb.id}
              />
            ))}
        </BreadcrumbsMenu>
      </BreadcrumbsNav>
    </ProductsBreadcrumbs>
  );
}

export default Breadcrumbs;
