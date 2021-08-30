import { Table } from "semantic-ui-react";
import { IDose } from "../../interfaces/Dose";
import IPeriod from "../../interfaces/Period";
import { IVaccineEvent } from "../../interfaces/VaccineEvent";
import { Pill } from "../Pill";
import styles from "./VaccineEvent.module.scss";

interface VaccineEventProps {
  period: IPeriod;
  vaccine: IVaccineEvent;
}

export const VaccineEvent = ({ period, vaccine }: VaccineEventProps) => {
  const validPeriod = vaccine.doses.find(
    (application: IDose) => application.periodId === period.periodId
  );

  return (
    <Table.Cell className={styles.vaccinePillCell}>
      {validPeriod && (
        <Pill
          textColor={vaccine.textColor}
          backgroundColor={vaccine.stroke}
          shadowColor={vaccine.shadowColor}
          content={validPeriod.name}
          rangePeriod={validPeriod.rangePeriods}
        />
      )}
    </Table.Cell>
  );
};
