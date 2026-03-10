import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">K72</div>

      <IconButton className="menuButton">
        <MenuIcon style={{ color: "white" }} />
      </IconButton>
    </div>
  );
}

export default Navbar;