import React from "react";

export function Panel({ index, title, collapsed, width, toggleCollapse, resizePanel, children }) {
  const handleResize = (event) => {
    const newWidth = parseInt(event.target.value, 10);
    resizePanel(newWidth);
  };

  return (
    <div
      style={{
        border: "1px solid #333",
        width: width,
        padding: "1rem",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>
          {title} (Panel {index})
        </h3>
        <button onClick={toggleCollapse}>{collapsed ? "Expand" : "Collapse"}</button>
      </div>
      <label>
        Resize:
        <input type="number" value={width} onChange={handleResize} style={{ width: "60px", marginLeft: "10px" }} />
        px
      </label>
      {!collapsed && <div style={{ marginTop: "1rem" }}>{children}</div>}
    </div>
  );
}
