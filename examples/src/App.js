import './App.css';
import React from "react";
import IdeComponent from 'devices-medias-component'
// import 'devices-medias-component/dist/cjs/index.css'
import { FaReact, FaPhp } from 'react-icons/fa';
import { AiFillSignal, AiOutlineWifi } from "react-icons/ai";
import { IoIosBatteryFull, IoIosWifi } from "react-icons/io";

const tabData = [
  {id: "ts", icon: <FaReact size={18} />, filename: "index.tsx",
    content: ['import { HTMLAttributes, useEffect, useState } from "react";', '', 'interface HiremeType extends HTMLAttributes<HTMLButtonElement> {', '  action: boolean', '}', '', 'export default function HireMeButton({action, ...rest}:HiremeType):JSX.Element {', '  const [showButton, setShowButton] = useState<boolean>(false)', '', '  useEffect(() => {', '    setShowButton(action)', '  }, [action])', '', '  if(showButton) return <button {...rest}>Hire Me</button>', '  else return <></>', '', '}'],
    lang: 'typescript'
  },
  {id: "php", icon: <FaPhp size={18} />, filename: "index.php",
    content: ['<?php','  function Test(halo) {', '    var greetings = halo + "nama";', '    return greetings;','  }', '?>'],
    lang: 'php'
  },
]

function App() {
  return (
    <div className="App">
      <h1>Place Component Here</h1>
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h3>Ide Component</h3>
        <IdeComponent datas={tabData} />
      </div>
      {/* <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h3>Iphone X Component</h3>
        <Iphonex>
          <div>halkslkalsjoajsi kaskjkas</div>
        </Iphonex>
      </div> */}
    </div>
  );
}

export default App;
