import React from "react";

type Props = {
  header: string,
  columns: string[],
  data: Array<{
    [ key: string ]: string,
  }>,
};

export default (props: Props) => {
  return (
    <div className="dashboard-widget">
      <h2>{props.header}</h2>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
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
                    <td key={column}>{row[column]}</td>
                  ))}
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
