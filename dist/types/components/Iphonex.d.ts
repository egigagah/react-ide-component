import { FC, HTMLProps } from "react";
import '../styles/iphonex.scss';
declare type LayoutMode = 'landscape' | 'potrait';
interface IphoneDevicesType extends HTMLProps<HTMLDivElement> {
    /**
     * with status bar ios or not?
     * Type: boolean
     * Default: true
     */
    statusBar?: boolean;
    /**
     * iphone color
     * Type: string
     * Default: "black"
     */
    color?: string;
    /**
     * iphone layout / orientation mode (landscape or potrait)
     * Type: enum
     * Default: "potrait"
     */
    layoutMode?: LayoutMode;
}
declare const Iphonex: FC<IphoneDevicesType>;
export default Iphonex;
