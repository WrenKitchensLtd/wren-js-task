import React from "react";

import { Log } from "../../types";

interface Props {
  logs: Log[];
}

/**
 * A component that renders the event log.
 * @param logs The event logs.
 * @returns The EventLog component.
 */
const EventLog = ({ logs }: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Outcome</th>
          <th scope="col">Message</th>
        </tr>
      </thead>
      <tbody>
        {logs.map(({ id, outcome, message }) => (
          <tr key={id}>
            <td>{outcome}</td>
            <td>{message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EventLog;
