import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const NavbarComponents = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-customBlue font-poppins">
      <li>
        <Link to="home" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          Beranda
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          Tentang
        </Link>
      </li>
      <li>
        <Link to="services" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          Layanan
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer">
          Kontak
        </Link>
      </li>
    </ul>
  );

  return (
    <Navbar className="fixed top-0 left-0 right-0 z-50 mx-auto max-w-screen-xl px-4 py-2 lg:px-8 mt-3 lg:py-4 bg-white shadow-md">
      <div className="flex items-center justify-between text-customBlue">
        <Typography as="a" href="#" className="mr-4 cursor-pointer py-1.5 font-semibold font-poppins">
          Halo, I'm PujaShindu
        </Typography>
        <div className="mr-4 hidden lg:block">{navList}</div>

        {/* Dropdown Hubungi Saya */}
        <div className="hidden flex-wrap items-center gap-2 lg:flex">
          <Menu>
            <MenuHandler>
              <Button className="font-poppins text-xs bg-customBlue">
                Hubungi Saya
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem>
                <a
                  href="https://wa.me/6281339145075"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaWhatsapp className="text-green-500" /> WhatsApp
                </a>
              </MenuItem>
              <MenuItem>
                <a
                  href="mailto:pujashindu1121@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaEnvelope className="text-red-500" /> Gmail
                </a>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      <Collapse open={openNav}>
        {navList}
        <div className="flex w-full flex-col gap-y-2 lg:hidden">
          <a
            href="https://wa.me/6281339145075"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-customBlue text-white rounded-md flex items-center justify-center gap-2"
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href="mailto:pujashindu1121@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-customBlue text-white rounded-md flex items-center justify-center gap-2"
          >
            <FaEnvelope /> Gmail
          </a>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default NavbarComponents;
