import React, { forwardRef } from "react";

export const DownArrow = forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(function MenuIcon(props) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#A1A2AB" d="M12 17.2L4 9.2L6.1 7L12 12.9L17.9 7L20 9.2L12 17.2Z" fill-opacity="0.6" />
        </svg>

    );
});