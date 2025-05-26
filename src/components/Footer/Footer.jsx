// Hooks
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

// Logo
import logo from "/logo.svg";

// Components
import { Link } from "react-router-dom";

// Reusable List Component
const FooterList = ({ title, items }) => (
  <div>
    <h2 className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
      {title}
    </h2>
    <ul className='text-gray-500 dark:text-gray-400 font-medium'>
      {items.map((item, index) => (
        <li key={index} className='mb-4'>
          <Link to={item.link} className='hover:underline'>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

// Add PropTypes validation for FooterList
FooterList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Reusable Icon Component
const SocialIcon = ({ href, icon, label }) => (
  <a href={href} className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5' aria-label={label}>
    <svg className='w-4 h-4' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox={icon.viewBox}>
      <path d={icon.path} />
    </svg>
  </a>
);

// Add PropTypes validation for SocialIcon
SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.shape({
    viewBox: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
};

export default function Footer() {
  // States
  const { t } = useTranslation();

  const companyItems = [
    { label: t("footer.companyList.about"), link: "#" },
    { label: t("footer.companyList.careers"), link: "#" },
    { label: t("footer.companyList.brandCenter"), link: "#" },
    { label: t("footer.companyList.blog"), link: "#" },
  ];

  const helpCenterItems = [
    { label: t("footer.helpCenterList.discordServer"), link: "#" },
    { label: t("footer.helpCenterList.twitter"), link: "#" },
    { label: t("footer.helpCenterList.facebook"), link: "#" },
    { label: t("footer.helpCenterList.contactUs"), link: "#" },
  ];

  const legalItems = [
    { label: t("footer.legalList.privacyPolicy"), link: "#" },
    { label: t("footer.legalList.licensing"), link: "#" },
    { label: t("footer.legalList.termsConditions"), link: "#" },
  ];

  const downloadItems = [
    { label: t("footer.downloadList.IOS"), link: "#" },
    { label: t("footer.downloadList.android"), link: "#" },
    { label: t("footer.downloadList.windows"), link: "#" },
    { label: t("footer.downloadList.macOS"), link: "#" },
  ];

  const socialIcons = [
    {
      href: "#",
      label: "Facebook page",
      icon: { viewBox: "0 0 8 19", path: "M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" },
    },
    {
      href: "#",
      label: "Discord community",
      icon: { viewBox: "0 0 21 16", path: "M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" },
    },
    {
      href: "#",
      label: "Twitter page",
      icon: { viewBox: "0 0 20 17", path: "M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" },
    },
  ];

  return (
    <footer className='bg-gray-200 dark:bg-gray-800'>
      <div className='mx-auto w-full max-w-screen-xl px-4 pt-20 pb-10'>
        <div className='md:flex md:justify-between gap-10'>
          <div className='mb-6 md:mb-0'>
            <Link to='/' className='block mb-5'>
              <img src={logo} className='h-10 me-3' alt='Soogie Logo' />
            </Link>
            <p className='w-full text-gray-400'>{t("footer.aboutUs")}</p>
          </div>
          <div className='grid grid-cols-2 gap-8 px-4 md:grid-cols-4 shrink-0'>
            <FooterList title={t("footer.companyList.title")} items={companyItems} />
            <FooterList title={t("footer.helpCenterList.title")} items={helpCenterItems} />
            <FooterList title={t("footer.legalList.title")} items={legalItems} />
            <FooterList title={t("footer.downloadList.title")} items={downloadItems} />
          </div>
        </div>
        <hr className='my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © {new Date().getFullYear()}{" "}
            <Link to='/' className='hover:underline'>
              {t("footer.siteName")}™
            </Link>
            . {t("footer.copyRight")}.
          </span>
          <div className='flex mt-4 sm:justify-center sm:mt-0'>
            {socialIcons.map((icon, index) => (
              <SocialIcon key={index} {...icon} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
