import { FC } from 'react';

interface TabDataType {
    /**
     * an id for element id that might be could be usefull for your needed or u can let me generating randomly for you
     * Type: string | undefined
     * Default: ""
     */
    id: string | undefined;
    /**
     * Icon for tab bar editor
     * Type: JSX Element
     * Default: ""
     * Description: you can pass icon JSX in here
     */
    icon: JSX.Element;
    /**
     * Filename for tab bar editor
     * Type: string
     * Default: ""
     * Description: giving name with the extention file like .tsx .js etc
     */
    filename: string;
    /**
     * Content code for editor
     * Type: string[]
     * Default: ""
     * Description: pass your code in here
     */
    content: string;
    /**
     * Language code
     * Type: string
     * Default: ""
     * Description: pass your language code in here
     */
    lang: string;
}
interface IdeComponentType {
    /**
     * Array of object data to render in editor
     * Type: TabDataType[]
     * Default: ""
     */
    datas: TabDataType[];
}
declare const IdeComponent: FC<IdeComponentType>;

export { IdeComponent as default };
