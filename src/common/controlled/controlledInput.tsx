import {
  FieldValues,
  useController,
  UseControllerProps,
} from "react-hook-form";
import { Input, UIInputPropsType } from "src/components/ui/input";

type Props<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  "rules" | "defaultValues"
> &
  Omit<UIInputPropsType, "onChange" | "value">;

export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  isRequired,
  ...rest
}: Props<T>) => {
  const {
    fieldState: { error },
    field: { ref, ...fieldProps },
  } = useController({
    name,
    control,
  });

  return (
    <Input
      {...fieldProps}
      errorMessage={error?.message}
      {...rest}
      isRequired={isRequired}
    />
  );
};
