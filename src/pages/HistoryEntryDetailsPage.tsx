import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HistoryEntry from "../@types/HistoryEntry";
import Id from "../@types/Id";
import { useHistoryContext } from "../contexts/HistoryContext";
import Page from "./Page";

const HistoryEntryDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: Id }>();
  const { history, findById, initialize } = useHistoryContext();
  const [historyEntry, setHistoryEntry] = useState<HistoryEntry | undefined>();

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    console.log(history);
    setHistoryEntry(findById(id));
  }, [id, history, findById]);

  return (
    <Page title="QR Code">
      <h1>OK</h1>
      <p>{JSON.stringify(historyEntry)}</p>
    </Page>
  );
};

export default HistoryEntryDetailsPage;
