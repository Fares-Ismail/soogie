// Packages
import PropTypes from "prop-types";
// Hooks
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

// Logo
import logo from "/logo.svg";

// Components
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

// Icons
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  MoonIcon,
  ShoppingCartIcon,
  SunIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

// Components
export default function Navbar({ setTheme }) {
  // Lists
  const languages = [
    {
      id: 1,
      value: "ar",
      name: "العربية",
    },
    {
      id: 2,
      value: "en",
      name: "English",
    },
  ];

  // States
  const { t, i18n } = useTranslation();
  const [selected, setSelected] = useState(
    languages.find((item) => item.value === i18n.language) || languages[1]
  );

  // Functions
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "" : "dark"));
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelected(languages.find((item) => item.value === language));
  };

  const location = useLocation();

  // حالة لتخزين العنصر النشط
  const [activeNav, setActiveNav] = useState(location.pathname); // تحديد الصفحة النشطة بناءً على المسار الحالي

  // استخدام useEffect لتحديث activeNav عند تغيير المسار

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location]);

  const handleNavClick = (href) => {
    setActiveNav(href);
  };

  // Define the navigation items
  const navigation = [
    { id: 1, name: t("navbar.home"), href: "/", current: activeNav === "/" },
    {
      id: 2,
      name: t("navbar.products"),
      href: "/products",
      current: activeNav === "/products",
    },
    {
      id: 3,
      name: t("navbar.collections"),
      href: "/collections",
      current: activeNav === "/collections",
    },
    {
      id: 4,
      name: t("navbar.contactUs"),
      href: "/contact-us",
      current: activeNav === "/contact-us",
    },
    {
      id: 6,
      name: t("navbar.yourProfile"),
      href: "/profile",
      current: activeNav === "/profile",
    },
    {
      id: 7,
      name: t("navbar.settings"),
      href: "/settings",
      current: activeNav === "/settings",
    },
    {
      id: 8,
      name: t("navbar.signout"),
      href: "/signout",
      current: activeNav === "/signout",
    },
  ];

  // JSX
  return (
    <Disclosure
      as='nav'
      className='fixed z-20 top-0 w-full bg-white dark:bg-gray-800 transition-all'>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
        <div className='gap-5 flex h-16 items-center justify-between'>
          {/* Logo */}
          <div className='flex shrink-0 items-center'>
            <img alt='Soogie Logo' src={logo} className='h-8 w-auto' />
          </div>

          {/* Search Field */}
          <div className='flex w-full shrink-1 gap-1 py-2.5 px-2 bg-gray-50 dark:bg-gray-600 rounded-md'>
            <button
              type='button'
              className='relative text-gray-400 hover:text-black focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden transition-all cursor-pointer'>
              <span className='absolute -inset-1.5' />
              <span className='sr-only'>Search</span>
              <MagnifyingGlassIcon aria-hidden='true' className='size-4' />
            </button>
            <input
              type='text'
              name='search'
              autoComplete='false'
              placeholder={t("navbar.search")}
              className='text-xs w-full text-gray-400 outline-0 placeholder:text-gray-400 focus:placeholder:text-transparent placeholder:transition-all'
            />
          </div>

          {/* Menu */}
          <div className='hidden shrink-0 md:block'>
            <div className='flex space-x-4 items-center'>
              {navigation.slice(0, 4).map((item) => (
                <Link
                  key={item.id}
                  to={item.href}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "text-black dark:text-white"
                      : "text-gray-300 hover:text-black dark:hover:text-white",
                    "rounded-md px-2 py-2 text-sm font-medium"
                  )}>
                  {item.name}
                </Link>
              ))}

              {/* Languages List Box */}
              <Listbox
                value={selected}
                onChange={(lang) => changeLanguage(lang.value)}>
                <div className='relative'>
                  <ListboxButton className='grid w-full cursor-pointer grid-cols-1 rounded-md py-0.5 ltr:text-left rtl:text-right text-gray-300 hover:text-black dark:hover:text-white sm:text-sm/6'>
                    <span className='col-start-1 row-start-1 flex items-center gap-3 ltr:pr-3 rtl:pl-3'>
                      <span className='block truncate'>{selected.name}</span>
                    </span>

                    <ChevronDownIcon
                      aria-hidden='true'
                      className='col-start-1 row-start-1 size-5 self-center justify-self-end sm:size-3'
                    />
                  </ListboxButton>

                  <ListboxOptions
                    transition
                    className='absolute ltr:right-0 rtl:left-0 z-10 mt-2 w-48 ltr:origin-top-right rtl:origin-top-left rounded-md bg-white dark:bg-gray-800 py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in'>
                    {languages.map((language) => (
                      <ListboxOption
                        key={language.id}
                        value={language}
                        className='block px-4 py-2 text-sm text-gray-300  data-focus:text-black data-focus:ps-6 data-focus:bg-gray-50 dark:data-focus:bg-gray-600 dark:data-focus:text-white data-focus:outline-hidden transition-all cursor-pointer'>
                        {language.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                </div>
              </Listbox>
            </div>
          </div>

          {/* Buttons */}
          <div className='inset-y-0 flex items-center ltr:pr-2 rtl:pl-2 sm:static sm:inset-auto ltr:sm:pr-0 rtl:sm:pl-0'>
            <button
              type='button'
              onClick={toggleTheme}
              className='relative rounded-full p-1 text-gray-400 hover:text-black dark:hover:text-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden transition-all cursor-pointer'>
              <span className='absolute -inset-1.5' />
              <span className='sr-only'>View Cart</span>
              <SunIcon aria-hidden='true' className='dark:hidden size-6' />
              <MoonIcon
                aria-hidden='true'
                className='hidden dark:block size-6'
              />
            </button>

            <button
              type='button'
              className='relative rounded-full p-1 text-gray-400 hover:text-black dark:hover:text-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden transition-all cursor-pointer'>
              <span className='absolute -inset-1.5' />
              <span className='sr-only'>View Cart</span>
              <ShoppingCartIcon aria-hidden='true' className='size-6' />
            </button>

            <div className='inset-y-0 flex items-center md:hidden'>
              {/* Mobile menu button*/}
              <DisclosureButton className='group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-black dark:hover:text-white focus:outline-hidden focus:ring-inset'>
                <span className='absolute -inset-0.5' />
                <span className='sr-only'>Open main menu</span>
                <Bars3Icon
                  aria-hidden='true'
                  className='block size-6 group-data-open:hidden transition-all'
                />
                <XMarkIcon
                  aria-hidden='true'
                  className='hidden size-6 group-data-open:block transition-all'
                />
              </DisclosureButton>
            </div>

            {/* Profile dropdown */}
            <Menu as='div' className='relative hidden md:block'>
              <div>
                <MenuButton className='relative rounded-full p-1 text-gray-400 hover:text-black dark:hover:text-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden transition-all cursor-pointer'>
                  <span className='absolute -inset-1.5' />
                  <UserIcon aria-hidden='true' className='size-6' />
                  <span className='sr-only'>View User Menu</span>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className='absolute ltr:right-0 rtl:left-0 z-10 mt-2 w-48 ltr:origin-top-right rtl:origin-top-left rounded-md bg-white dark:bg-gray-800 py-1 ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in'>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-300  data-focus:text-black data-focus:ps-6 data-focus:bg-gray-50 dark:data-focus:bg-gray-600 dark:data-focus:text-white data-focus:outline-hidden transition-all'>
                    {t("navbar.yourProfile")}
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-300  data-focus:text-black data-focus:ps-6 data-focus:bg-gray-50 dark:data-focus:bg-gray-600 dark:data-focus:text-white data-focus:outline-hidden transition-all'>
                    {t("navbar.settings")}
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href='#'
                    className='block px-4 py-2 text-sm text-gray-300  data-focus:text-black data-focus:ps-6 data-focus:bg-gray-50 dark:data-focus:bg-gray-600 dark:data-focus:text-white data-focus:outline-hidden transition-all'>
                    {t("navbar.signout")}
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className='md:hidden'>
        <div className='space-y-1 px-2 pt-2 pb-3'>
          {navigation.map((item) => (
            <DisclosureButton
              key={item.id}
              as={Link} // تغيير from "a" to Link
              to={item.href} // استخدام `to` بدلاً من `href` مع Link
              onClick={() => handleNavClick(item.href)}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-50 dark:bg-gray-600 text-black dark:text-white ps-6"
                  : "text-gray-300 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-600 hover:ps-7 hover:text-black dark:hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium transition-all"
              )}>
              {item.name}
            </DisclosureButton>
          ))}
          {/* Languages List Box */}
          <Listbox
            value={selected}
            onChange={(lang) => changeLanguage(lang.value)}>
            <div className='relative'>
              <ListboxButton className='grid w-full cursor-pointer grid-cols-1 rounded-md py-2 px-3 ltr:text-left rtl:text-right text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 hover:ps-7 hover:text-black dark:hover:text-white sm:text-sm/6 transition-all'>
                <span className='col-start-1 row-start-1 flex items-center gap-3 ltr:pr-3 rtl:pl-3'>
                  <span className='block truncate'>{selected.name}</span>
                </span>

                <ChevronDownIcon
                  aria-hidden='true'
                  className='col-start-1 row-start-1 size-5 self-center justify-self-end sm:size-3'
                />
              </ListboxButton>

              <ListboxOptions
                transition
                className='mt-2 w-full rounded-md dark:bg-gray-800  transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in'>
                {languages.map((language) => (
                  <ListboxOption
                    key={language.id}
                    value={language}
                    className='block rounded-md px-3 py-2 text-sm text-gray-300  data-focus:text-black data-focus:ps-6 data-focus:bg-gray-50 dark:data-focus:bg-gray-600 dark:data-focus:text-white data-focus:outline-hidden transition-all cursor-pointer'>
                    {language.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

// Define Prop Type
Navbar.propTypes = {
  setTheme: PropTypes.func.isRequired,
};
