import React, { useState } from "react";

export function LayoutManager({ children }) {
  const [collapsedPanels, setCollapsedPanels] = useState({});
  const [panelWidths, setPanelWidths] = useState({});

  // Toggle the collapsed state by panel index
  const toggleCollapse = (index) => {
    setCollapsedPanels((prev) => ({
      ...prev,
      [index]: !prev[index], // if it's collapsed, set to false, and vice versa
    }));
  };

  // Change the width of a panel by index
  const resizePanel = (index, newWidth) => {
    setPanelWidths((prev) => ({
      ...prev,
      [index]: newWidth,
    }));
  };

  // We'll use React.Children.map to get each child (which we expect to be a <Panel>)
  const managedPanels = React.Children.map(children, (child, index) => {
    // If the child is not a <Panel>, just return it as-is or handle differently
    if (!child || child.type.name !== "Panel") return child;

    // We clone the Panel, adding extra props
    return React.cloneElement(child, {
      index,
      collapsed: collapsedPanels[index] || false,
      width: panelWidths[index] || 200, // default width = 200
      toggleCollapse: () => toggleCollapse(index),
      resizePanel: (newWidth) => resizePanel(index, newWidth),
    });
  });

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {managedPanels}
    </div>
  );
}
