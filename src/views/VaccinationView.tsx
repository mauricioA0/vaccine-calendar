import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Grid, Header, Table } from "semantic-ui-react";
import { IVaccineEvent } from "../interfaces/VaccineEvent";
import { TableHeader } from "../components/TableHeader";
import { TableRow } from "../components/TableRow";
import { RootState } from "../models/store";
import styles from "./VaccinationView.module.scss";

const VaccinationView = () => {
  const { periods, vaccineEvents } = useSelector(
    (state: RootState) => state.vaccine
  );

  const renderVaccineHistory = useMemo(
    () =>
      vaccineEvents.map((vaccine: IVaccineEvent, index: number) => (
        <TableRow vaccine={vaccine} periods={periods} key={index} />
      )),
    [vaccineEvents, periods]
  );

  return (
    <Grid>
      <Grid.Row columns={1}>
        <Grid.Column>
          <Header
            as="h2"
            textAlign="center"
            size="medium"
            className={styles.title}
          >
            Immunization Dosing Chart for Infants to Preschool-Aged Children
          </Header>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row columns={1}>
        <Grid.Column>
          <Table singleLine size="small" className={styles.container}>
            <TableHeader periods={periods} />
            <Table.Body>{renderVaccineHistory}</Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default VaccinationView;
