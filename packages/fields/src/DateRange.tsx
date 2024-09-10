"use client";
import { RangePicker as RaftyRangePicker } from "@rafty/ui";
import { useBlueprint, useDuckForm, useField } from "duck-form";
import { useId, useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export type DateRangeFieldProps = {
  type: "dateRange";
  placeholder?: {
    from?: string;
    to?: string;
  };
  defaultValue?: [string] | [string, string];
};

export function DateRangeField() {
  const props = useField<DateRangeFieldProps>();

  const { generateId } = useDuckForm();
  const { schema } = useBlueprint();

  const autoId = useId();
  const customId = useMemo(
    () => generateId?.(schema, props),
    [generateId, schema, props],
  );

  const componentId = customId ?? autoId;

  const { control } = useFormContext();

  return (
    <Controller
      name={componentId}
      control={control}
      render={({ field: { name, disabled, value, onChange, ref } }) => (
        <RaftyRangePicker
          name={name}
          placeholder={props.placeholder}
          disabled={disabled}
          value={value}
          onValueChange={onChange}
          ref={ref}
        />
      )}
    />
  );
}
