import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useTranslation } from "react-i18next";
import Heading from "../Heading/Heading";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <form
      action="#"
      method="POST"
      className="w-full py-20 px-2 sm:px-18 lg:px-20"
    >
      <Heading className="mb-5">{t("home.contactHeading")}</Heading>

      <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
        {/* First Name */}
        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-semibold text-gray-600 dark:text-gray-300"
          >
            {t("home.contact.label.firstName")}
          </label>
          <div className="mt-2.5">
            <input
              id="first-name"
              name="first-name"
              type="text"
              autoComplete="given-name"
              placeholder={t("home.contact.placeholder.firstName")}
              className="block w-full rounded-md bg-gray-50 dark:bg-gray-600 focus:placeholder:text-transparent placeholder:transition-all px-3.5 py-3 text-xs text-main-500 dark:text-white outline-0 outline-gray-300 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-semibold text-gray-600 dark:text-gray-300"
          >
            {t("home.contact.label.lastName")}
          </label>
          <div className="mt-2.5">
            <input
              id="last-name"
              name="last-name"
              type="text"
              autoComplete="family-name"
              placeholder={t("home.contact.placeholder.lastName")}
              className="block w-full rounded-md bg-gray-50 dark:bg-gray-600 focus:placeholder:text-transparent placeholder:transition-all px-3.5 py-3 text-xs text-main-500 dark:text-white outline-0 outline-gray-300 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-600 dark:text-gray-300"
          >
            {t("home.contact.label.email")}
          </label>
          <div className="mt-2.5">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder={t("home.contact.placeholder.email")}
              className="block w-full rounded-md bg-gray-50 dark:bg-gray-600 focus:placeholder:text-transparent placeholder:transition-all px-3.5 py-3 text-xs text-main-500 dark:text-white outline-0 outline-gray-300 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone-number"
            className="block text-sm font-semibold text-gray-600 dark:text-gray-300"
          >
            {t("home.contact.label.phoneNumber")}
          </label>
          <div className="mt-2.5">
            <div className="flex rounded-md bg-gray-50 dark:bg-gray-600 outline-0 outline-gray-300 has-[input:focus-within]:outline-0 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-main-600">
              <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  placeholder={t("home.contact.placeholder.country")}
                  aria-label="Country"
                  className="col-start-1 row-start-1 w-full bg-gray-50 dark:bg-gray-600 focus:placeholder:text-transparent placeholder:transition-all appearance-none rounded-md py-2 ltr:pr-7 rtl:pl-7 ltr:pl-3.5 rtl:pr-3.5 text-xs text-main-500 dark:text-white font-bold placeholder:text-gray-400 focus:outline-0 sm:text-xs/6 cursor-pointer"
                >
                  <option className="text-main-600 font-bold">US</option>
                  <option className="text-main-600 font-bold">CA</option>
                  <option className="text-main-600 font-bold">EU</option>
                  <option className="text-main-600 font-bold">SD</option>
                  <option className="text-main-600 font-bold">EG</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 ltr:mr-2 rtl:ml-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                />
              </div>
              <input
                id="phone-number"
                name="phone-number"
                type="text"
                placeholder={t("home.contact.placeholder.phoneNumber")}
                className="block min-w-0 grow py-1.5 pr-3 pl-1 text-xs focus:placeholder:text-transparent placeholder:transition-all text-main-500 dark:text-white placeholder:text-gray-400 focus:outline-none sm:text-xs/6"
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-gray-600 dark:text-gray-300"
          >
            {t("home.contact.label.message")}
          </label>
          <div className="mt-2.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder={t("home.contact.placeholder.message")}
              className="block w-full rounded-md bg-gray-50 dark:bg-gray-600 focus:placeholder:text-transparent placeholder:transition-all px-3.5 py-3 text-xs text-main-500 dark:text-white outline-0 outline-gray-300 placeholder:text-gray-400 resize-none"
              defaultValue={""}
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="w-full block rounded-md bg-main-600 px-3.5 py-3.5 text-xs font-semibold text-white shadow-xs hover:bg-main-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-main-600 transition-all"
        >
          {t("home.contact.label.send")}
        </button>
      </div>
    </form>
  );
}
