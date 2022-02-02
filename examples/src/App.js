import "./App.css";
import React from "react";
import IdeComponent from "react-ide-component";
import { FaReact, FaPhp } from "react-icons/fa";

const tabData = [
  {
    id: "ts",
    icon: <FaReact size={"100%"} />,
    filename: "index.tsx",
    content:
      'import { HTMLAttributes, useEffect, useState } from "react"; <br> interface HiremeType extends HTMLAttributes<HTMLButtonElement> { <br>  action: boolean<br>}<br>export default function HireMeButton({action, ...rest}:HiremeType):JSX.Element {<br>  const [showButton, setShowButton] = useState<boolean>(false)<br><br>  useEffect(() => {<br>    setShowButton(action)<br>  }, [action])<br><br>  if(showButton) return <button {...rest}>Hire Me</button><br>  else return <></><br>}',
    lang: "typescript",
  },
  {
    id: "php",
    icon: <FaPhp size={"100%"} />,
    filename: "index.php",
    content:
      '<?php<br>  function Test(halo) {<br>    var greetings = halo + "nama";<br>    return greetings;<br>  }<br>?>',
    lang: "php",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Place Component Here</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Ide Component</h3>
        <IdeComponent datas={tabData} />
      </div>
    </div>
  );
}

export default App;
