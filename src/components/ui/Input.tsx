import { FC } from "react";

interface InputProps {
    className?: string;
    label: string;
    name: string;
    value?: string;
    onChange?: (e: any) => void;
}

const Input: FC<InputProps> = ({className, label, name, value, onChange}) => {
    return (
        <div className={`input-flex ${className}`}>
            <span>{label}</span>
            <div className="input-container">
                <input type="text" name={name} autoComplete="off" required value={value} onChange={onChange} />
                <label htmlFor={name} className="label-name" />
            </div>
            <span>,</span>
        </div>
    )
}
 
export default Input;