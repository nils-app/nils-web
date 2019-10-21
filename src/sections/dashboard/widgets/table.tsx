import React from "react";
import { Table } from "react-bootstrap";

type Props = {
  header: string,
  columns: string[],
  data: Array<{
    [ key: string ]: any,
  }>,
};

export default (props: Props) => {
  return (
    <div className="dashboard-widget">
      <h2>{props.header}</h2>
      <div className="table-widget">
        <Table responsive striped size='sm'>
          <thead>
            <tr>
              {props.columns.map(column => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.map((row, $index) => (
                <tr key={ $index }>
                  {props.columns.map(column => (
                    <td key={column}>{row[column.toLowerCase()]}</td>
                  ))}
                </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
