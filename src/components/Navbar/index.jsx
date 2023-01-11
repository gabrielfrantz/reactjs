import { Nav, NavbarContainer, NavIcon, NavItem, NavLinks, NavLogo, NavMenu } from "./NavbarStyles";

function Navbar() {
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon src="./assets/logo.png" />
                    OmegaSec
                </NavLogo>
                <NavMenu>
                    <NavItem>
                        <NavLinks to={"/"}>Sobre</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to={"/ofertas"}>Ofertas</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks>Cadastro</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;