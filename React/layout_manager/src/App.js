import React from "react";
import { LayoutManager } from "./LayoutManager";
import { Panel } from "./Panel";

export default function App() {
  return (
    <LayoutManager>
      <Panel title="Sales Dashboard">
        <p>Sales data and charts here...</p>
      </Panel>
      <Panel title="Analytics Dashboard">
        <p>Analytics data and charts here...</p>
      </Panel>
      <Panel title="User Management">
        <p>Manage users, roles, permissions...</p>
      </Panel>
    </LayoutManager>
  );
}
