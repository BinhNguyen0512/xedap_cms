import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";
import { Control, Controller, FieldErrors } from "react-hook-form";

interface Props {
  errors: FieldErrors<{
    [type: string]: any;
  }>;
  control: Control<any, any>;
  name: string;

  label?: string;
  isRequired?: boolean;
  defaultValue?: string | number;
}

export const InputCustom = (props: Props) => {
  const { label, isRequired, errors, control, name, defaultValue } = props;
  return (
    <FormControl isRequired={isRequired} isInvalid={!!errors[name]}>
      {label && <FormLabel mb={"4px"}>{label}</FormLabel>}
      <Controller
        render={({ field }) => <Input {...field} />}
        control={control}
        name={name}
        defaultValue={defaultValue}
      />
      <FormErrorMessage mt={"4px"}>
        {!!errors[name] && <Text>{errors[name]?.message as string}</Text>}
      </FormErrorMessage>
    </FormControl>
  );
};
