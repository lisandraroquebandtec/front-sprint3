import {
  HeaderSpace,
  HeaderContainer,
  HeaderLogo,
  HeaderImg,
  HeaderMobile,
  HeaderDrawer,
  MobileImg,
  MenuTitle,
  MobileLogo,
  LogoImg,
  HeaderSearch,
  SearchIcon,
  SearchInput
} from "./style";
import LogoRiachuelo from "../../assets/riachuelo.svg";
import menu from "../../assets/menu.svg";
import Logorchlo from "../../assets/rchlo.svg";
import search from "../../assets/search.svg";

function Header() {
  return (
    <HeaderSpace>
      <HeaderContainer>
        <HeaderMobile>
          <HeaderDrawer>
            <MobileImg src={menu} />
            <MenuTitle>menu</MenuTitle>
          </HeaderDrawer>
          <MobileLogo>
            <LogoImg src={Logorchlo} />
          </MobileLogo>
        </HeaderMobile>
        <HeaderLogo>
          <HeaderImg src={LogoRiachuelo} />
        </HeaderLogo>
        <HeaderSearch>
          <SearchIcon src={search} />
          <SearchInput
            type="search"
            placeholder="O que você está procurando?"
          />
        </HeaderSearch>
      </HeaderContainer>
    </HeaderSpace>
  );
}
export default Header;
