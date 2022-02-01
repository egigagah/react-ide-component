import React, { useState, useEffect, FC, Fragment, HTMLProps } from "react"
import { AiFillSignal } from "react-icons/ai";
import { IoIosBatteryFull, IoIosWifi } from "react-icons/io";
import '../styles/iphonex.scss'

type LayoutMode = 'landscape' | 'potrait'

interface IphoneDevicesType extends HTMLProps<HTMLDivElement> {
  /**
   * with status bar ios or not?
   * Type: boolean
   * Default: true
   */
  statusBar?: boolean,
  /**
   * iphone color
   * Type: string
   * Default: "black"
   */
  color?: string,
  /**
   * iphone layout / orientation mode (landscape or potrait)
   * Type: enum
   * Default: "potrait"
   */
  layoutMode?: LayoutMode,
}

const Iphonex: FC<IphoneDevicesType> = ({
  statusBar = true,
  color = 'black',
  layoutMode = 'potrait',
  ...rest
}) => {
  // const [uid, setUid] = useState<string | undefined>()

  // useEffect(() => {
  // }, [])

  return (
    <Fragment>
      <div
        // id={`iphonex-${rest.id}`}
        className={`iphonex-device relative z-[99] aspect-[16:9] overflow-clip flex flex-col min-h-60 h-[32rem] w-[15rem] box-border border-[0.9rem] border-black rounded-[2rem] shadow-2xl bg-white ${rest?.className}`}
      >
        {/* <Image
          src={backgroundImage}
          alt={rest.id}
          layout="responsive"
          objectFit="cover"
          priority={true}
          quality={100}
        /> */}
        <figure>
          {rest.children}
        </figure>
        <span
          id="notch-ip"
          className="notch-iphone-wrapper absolute h-[22px] w-full flex flex-row justify-center border-black bg-white"
        >
          <div className="statusbar-iphone-wrapper">
            { statusBar &&
              // <img
              //   src={require('../src/assets/img/ios-statusbar.png')}
              //   className="statusbar-iphone"
              // />
              <div style={{display: 'flex', flexDirection: 'row', height: '19px', alignItems:'end', position: 'absolute', top: 0, left: 0, width: '100%'}}>
                <div style={{display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                  <span style={{fontSize: 10, fontWeight: 'bold', letterSpacing: '-1px'}}>19:00</span>
                </div>
                <div style={{display: 'flex', flex: 1}}></div>
                <div style={{display: 'flex', flex: 1}}></div>
                <div style={{display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'start'}}>
                  <AiFillSignal size={9} style={{paddingRight: '2px'}}/>
                  <IoIosWifi size={12} style={{paddingRight: '2px'}}/>
                  <IoIosBatteryFull size={14} style={{paddingRight: '2px'}}/>
                </div>
              </div>
            }
            {/* <Image
              src={IosStatusbar}
              alt={rest.id}
              layout="fill"
              objectFit="cover"
              priority={true}
              quality={100}
            /> */}
            <div className="notch-iphone-bar bg-black h-[15px] w-[100px] rounded-b-lg"></div>
          </div>
        </span>
        <span
          id="bottombar-ip"
          className="bottom-bar-wrapper absolute bottom-0 h-[10px] w-full flex flex-row justify-center drop-shadow-2xl"
        >
          <div className="bottom-bar bg-black h-[5px] w-[100px] rounded-lg shadow-2xl shadow-yellow-200"></div>
        </span>
      </div>
    </Fragment>
  )
}

export default Iphonex;