import { InputsType } from "@/types";
import { Input } from "@heroui/input";

const Inputs = ({ type, onChange, name , label }: InputsType) => {
  return (
    <>
      <Input  variant="underlined" name={name} onChange={onChange} label={label} />
    </>
  );
};


export default Inputs ;