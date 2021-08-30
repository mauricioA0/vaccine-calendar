import { useMemo } from "react";
import { Table } from "semantic-ui-react";
import IPeriod from "../../interfaces/Period";
import { IVaccineEvent } from "../../interfaces/VaccineEvent";
import { VaccineEvent } from "../VaccineEvent";
import styles from "./TableRow.module.scss";

interface TableRowProps {
  vaccine: IVaccineEvent;
  periods: IPeriod[];
}

export const TableRow = ({ vaccine, periods }: TableRowProps) => {
  const renderVaccineEvent = useMemo(
    () =>
      periods.map((period: IPeriod, index: number) => (
        <VaccineEvent period={period} vaccine={vaccine} key={index} />
      )),
    [vaccine, periods]
  );

  return (
    <Table.Row key={vaccine.name}>
      <Table.Cell className={styles.vaccineTitleColumn}>
        <b>{vaccine.name}</b>
      </Table.Cell>
      {renderVaccineEvent}
    </Table.Row>
  );
};
