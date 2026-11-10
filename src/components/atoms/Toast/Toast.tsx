import React from "react";

interface ToastProps {
    message: string;
    isVisible: boolean;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible }) => {
    return (
        <div
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-(--color-surface) border border-(--color-primary) text-(--color-text) shadow-2xl font-mono text-sm z-50 transition-all duration-300 pointer-events-none ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
            {message}
        </div>
    );
};