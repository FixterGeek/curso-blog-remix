import { useState } from "react";
import { Switch } from "@headlessui/react";

type Props = {
  defaultValue?: boolean;
  name: string;
};
export default function ToggleButton({ defaultValue, name }: Props) {
  const [enabled, setEnabled] = useState<boolean>(Boolean(defaultValue));

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-indigo-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full transition-all`}
    >
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
      <input type="checkbox" checked={enabled} name={name} hidden readOnly />
    </Switch>
  );
}
