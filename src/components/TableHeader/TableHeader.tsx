import { useMemo } from "react";
import { Table } from "semantic-ui-react";
import IPeriod from "../../interfaces/Period";
import styles from "./TableHeader.module.scss";

interface TableHeaderProps {
  periods: IPeriod[];
}

export const TableHeader = ({ periods }: TableHeaderProps) => {
  const renderHeader = useMemo(
    () =>
      periods.map((period: IPeriod, index: number) => (
        <Table.HeaderCell
          className={styles.headerTable}
          verticalAlign="bottom"
          key={index}
          textAlign="center"
        >
          {period.title}
          <br />
          {period.subtitle}
        </Table.HeaderCell>
      )),
    [periods]
  );

  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell
          className={styles.headerTable}
          verticalAlign="bottom"
          textAlign="center"
        >
          VACCINE
        </Table.HeaderCell>
        {renderHeader}
      </Table.Row>
    </Table.Header>
  );
};
