import './App.css';
import React from "react";
import IdeComponent from 'devices-medias-component'
// import 'devices-medias-component/dist/cjs/index.css'
import { FaReact, FaPhp } from 'react-icons/fa';

const tabData = [
  {id: "ts", icon: <FaReact size={18} />, filename: "index.tsx",
    content: ['import { HTMLAttributes, useEffect, useState } from "react";', '', 'interface HiremeType extends HTMLAttributes<HTMLButtonElement> {', '  action: boolean', '}', '', 'export default function HireMeButton({action, ...rest}:HiremeType):JSX.Element {', '  const [showButton, setShowButton] = useState<boolean>(false)', '', '  useEffect(() => {', '    setShowButton(action)', '  }, [action])', '', '  if(showButton) return <button {...rest}>Hire Me</button>', '  else return <></>', '', '}'], lang: 'typescript'
  },
]

function App() {
  return (
    <div className="App">
      <h1>Place Component Here</h1>
      <h3>Ide Component</h3>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <IdeComponent datas={tabData} />
      </div>
    </div>
  );
}

export default App;
