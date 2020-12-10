import React, { useEffect, useState } from "react";
import ScanData from "../@types/ScanData";
import { createCtx } from "./utils";
import HistoryService from "../services/api/history";
import HistoryEntry from "../@types/HistoryEntry";
import Id from "../@types/Id";

interface HistoryContext {
  initialize: () => void;
  loading: boolean;
  history: HistoryEntry[];
  addEntry: (historyEntry: ScanData) => Promise<boolean>;
  findById: (id: Id) => HistoryEntry | undefined;
}

const [useHistoryContext, CtxProvider] = createCtx<HistoryContext>();

const HistoryContextProvider: React.FC = ({ children }) => {
  const [history, changeHistory] = useState<HistoryEntry[]>([]);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    history.sort((a: HistoryEntry, b: HistoryEntry) =>
      a["scanDate"] > b["scanDate"] ? -1 : a["scanDate"] < b["scanDate"] ? 1 : 0
    );
  }, [history]);

  const initialize = () => {
    if (!initialized) {
      HistoryService.getAll().then((history: HistoryEntry[]) => {
        changeHistory(history);
        setLoading(false);
      });
      setInitialized(true);
      setLoading(true);
    }
  };

  const findById = (id: Id) => {
    return history.find((history: HistoryEntry) => history.id === id);
  };

  const addEntry = async (scanData: ScanData): Promise<boolean> => {
    const historyEntry = await HistoryService.add(scanData);
    if (historyEntry) {
      changeHistory([...history, historyEntry]);
      return true;
    }
    return false;
  };

  const exposed = {
    initialize,
    loading,
    history,
    addEntry,
    findById,
  };

  return <CtxProvider value={exposed}>{children}</CtxProvider>;
};

export { useHistoryContext, HistoryContextProvider };
