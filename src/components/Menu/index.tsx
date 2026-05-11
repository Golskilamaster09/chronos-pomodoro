import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";
import { useState, useEffect } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>("dark");

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault(); //Não segue o link

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  // useEffect(() => {
  //   console.log("useEffect sem dependencia", Date.now());
  // }); //Executado todas vezes que o componente renderiza na tela

  // useEffect(() => {
  //   console.log("useEffect com array deps vazio", Date.now());
  // }, []); //Executa apenas quando o React monta o componente pela primeira vez na tela

  useEffect(() => {
    console.log("Theme mudou", theme, Date.now());
    document.documentElement.setAttribute("data-theme", theme);

    return () => {
      console.log("Esse componente será atualizado");
    };
  }, [theme]); //Executa apenas quando o valor de Theme mudar

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver Histórico"
        title="Ver Histórico"
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ver as configurações"
        title="Ver as configurações"
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Alterar tema"
        title="Alterar tema"
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
