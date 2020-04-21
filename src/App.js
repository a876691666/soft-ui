import React from "react";
import { Shell } from '@alifd/next';
import "./App.scss";

function App() {
  return (
    <Shell>
      <Shell.Branding />
      <Shell.Navigation />
      <Shell.Action />

      <Shell.MultiTask />

      <Shell.AppBar />
      <Shell.Content />
      <Shell.Footer />

      <Shell.ToolDock>
        <Shell.ToolDockItem />
      </Shell.ToolDock>
    </Shell>
  );
}

export default App;
