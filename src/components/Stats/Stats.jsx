import { useTranslation } from "react-i18next";
import styles from "./style.module.css";

const statsData = [
  {
    title: "home.stats.registeredUsersTitle",
    value: "44",
    key: "registeredUsersValue",
  },
  {
    title: "home.stats.dailyOrdersTitle",
    value: "119",
    key: "dailyOrdersValue",
  },
  {
    title: "home.stats.globalReachTitle",
    value: "46",
    key: "globalReachValue",
  },
  {
    title: "home.stats.monthlyRevenueTitle",
    value: "46",
    key: "monthlyRevenueValue",
  },
];

export default function Stats() {
  const { t } = useTranslation();

  return (
    <div
      className={`${styles.container} flex flex-col justify-center gap-y-15 relative overflow-hidden py-20 px-2 sm:px-18 lg:px-20`}
    >
      <p className="relative z-10 text-3xl font-extrabold text-center sm:text-start text-white">
        {t("home.statsDescription")}
      </p>
      <dl className="relative z-10 grid grid-cols-1 gap-x-8 gap-y-16 text-center sm:text-start sm:grid-cols-2">
        {statsData.map(({ title, value, key }, index) => (
          <div key={index} className="flex flex-col gap-y-4">
            <dt className="text-base/7 text-gray-400">{t(title)}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-3xl">
              {value}
              {t(`home.stats.${key}`)}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
