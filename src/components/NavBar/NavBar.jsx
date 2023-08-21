import { NavigBar } from './NavBar.styled'
import { StyledLink } from './NavBar.styled'

export const NavBar = () => {
  return (
    <NavigBar>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>
    </NavigBar>
  );
};