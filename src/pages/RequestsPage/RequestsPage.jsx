import React from "react";

import { Map } from "../../components/Map";
import { RequestsList } from "../../components/RequestsList";

import "./styles.scss";

export function RequestsPage() {
  return (
    <div className="requests-page">
      <RequestsList />
      <Map />
    </div>
  );
}
