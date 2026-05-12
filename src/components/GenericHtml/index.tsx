import styles from "./styles.module.css";

type MainTemplateProps = {
  children: React.ReactNode;
};
export function GenericHtml({ children }: MainTemplateProps) {
  return <div className={styles.genericHtml}>{children}</div>;
}
