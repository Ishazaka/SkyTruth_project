
import React from "react";

interface InputLabelProps {
  checked: boolean;
  onChange: () => void;
  label: string;
  icon: React.ReactNode;

}

const InputLabel: React.FC<InputLabelProps> = ({
  checked, onChange, label, icon,
}) => {
  return (
    <div className="flex items-center gap-2">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <label className="flex items-center gap-2">
        {icon} {label}
      </label>
    </div>
  );
};

export default InputLabel;
