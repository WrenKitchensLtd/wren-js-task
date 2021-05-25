import { useState } from "react";
import { v4 as uuid } from "uuid";

import { Log, Outcome } from "../types";

/**
 * A custom hook to allow interaction with the event log.
 * @returns logs, logSuccess and logFailure.
 */
export const useEventLog = () => {
  const [logs, setLogs] = useState<Log[]>([]);

  const logEvent = (outcome: Outcome, message: string) =>
    setLogs((currentLogs) => [
      { id: uuid(), outcome, message },
      ...currentLogs,
    ]);

  /**
   * Adds a success message to the event log.
   * @param message The message to log.
   */
  const logSuccess = (message: string) => {
    logEvent(Outcome.Success, message);
  };

  /**
   * Adds a failure message to the event log.
   * @param message The message to log.
   */
  const logFailure = (message: string) => {
    logEvent(Outcome.Failure, message);
  };

  /**
   * Clears all logs from the event log.
   */
  const clearLogs = () => {
    setLogs([]);
  };

  return {
    logs,
    logSuccess,
    logFailure,
    clearLogs,
  };
};
