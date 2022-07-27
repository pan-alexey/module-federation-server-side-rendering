import * as React from "react";

export default function App() {
  return <div>
    {window.widget.widget1({propValue:'propValue'})}
    <hr/>
    {window.widget.widget2({propValue:'propValue'})}
  </div>;
}
