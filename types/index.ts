import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type InputsType = {
  type?: String;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string; 
  label?:String
};
