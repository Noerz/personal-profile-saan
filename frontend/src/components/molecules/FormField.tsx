import { Input } from "@/components/atoms";
import type { InputProps } from "@/components/atoms";

export interface FormFieldProps extends InputProps {
  // InputProps already includes label, error, hint
}

/**
 * FormField molecule = Input atom packaged as a controlled form field.
 * Adds no extra logic — simply re-exports Input with a semantic name
 * so usage in forms is semantically clear.
 *
 * @example
 * <FormField
 *   label="Email"
 *   type="email"
 *   placeholder="you@example.com"
 *   error={errors.email}
 *   {...register("email")}
 * />
 */
export function FormField(props: FormFieldProps) {
  return <Input {...props} />;
}
