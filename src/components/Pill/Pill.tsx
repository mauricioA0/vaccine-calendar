import { useEffect, useState } from "react";
import styles from "./Pill.module.scss";

interface Props {
  backgroundColor: string;
  shadowColor: string;
  textColor: string;
  content: string;
  rangePeriod?: number;
}

const PERIOD_WIDTH = 62;

export const Pill = (props: Props) => {
  const [boxShadow, setBoxShadow] = useState<string>("none");

  const {
    backgroundColor,
    shadowColor,
    textColor: color,
    content,
    rangePeriod,
  } = props;

  const getBoxShadow = () => {
    if (!rangePeriod) return "none";
    if (rangePeriod <= 1) {
      return `${PERIOD_WIDTH * rangePeriod}px 0px ${shadowColor}`;
    }

    let shadow = [];

    let i = 0;
    do {
      shadow.push(`${PERIOD_WIDTH * (rangePeriod - i)}px 0px ${shadowColor}`);
      i++;
    } while (i < rangePeriod);

    return shadow.join(",");
  };

  useEffect(() => {
    setBoxShadow(getBoxShadow());
  }, [rangePeriod]);

  return (
    <span className={styles.pill} style={{ backgroundColor, color, boxShadow }}>
      {content}
    </span>
  );
};
