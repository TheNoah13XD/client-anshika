import { FC } from "react";

interface ButtonProps {
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
    type?: 'elevated' | 'filled' | 'tonal' | 'outlined' | 'text';
    icon?: string;
}

const Button: FC<ButtonProps> = ({ children, disabled, className, type = 'filled', icon }) => {
    return (
        <div className={className}>
            <button
                className={`${type}-btn`}
                disabled={disabled}
            >
                {icon && <span className="material-symbols-outlined btn-icon">{icon}</span>}
                <span className="btn-label">{children}</span>
            </button>
        </div>
    )
}

export default Button;