import { ImageInfluxLogo } from "@/components/assets"
import {
  Navbar as AppNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from "@nextui-org/navbar";
import { ThemeSwitcher } from "../ThemeSwitcher";

export default function Navbar() {
  return (
    <AppNavbar>
      <NavbarBrand>
        <ImageInfluxLogo />
        Image Influx
      </NavbarBrand>
    </AppNavbar>
  )
}
