import styles from "./Pill.module.scss";

interface Props {
  backgroundColor: string;
  shadowColor: string;
  textColor: string;
  content: string;
  rangePeriod?: number;
  appliedOnPeriod?: number;
}

export const Pill = (props: Props) => {
  const {
    backgroundColor,
    shadowColor,
    textColor: color,
    content,
    rangePeriod = 1,
    appliedOnPeriod,
  } = props;

  return (
    <div
      className={styles.pillRange}
      style={{
        backgroundColor: shadowColor,
        color,
        width: `${100 * rangePeriod}%`,
      }}
    >
      <div>
        <span
          className={styles.pill}
          style={{
            backgroundColor,
            color,
            marginLeft: `${appliedOnPeriod ? 100 * appliedOnPeriod : 0}%`,
          }}
        >
          {content}
        </span>
      </div>
    </div>
  );
};
