import { jsx as _jsx } from "react/jsx-runtime";
import * as React from "react";
export const Progress = React.forwardRef(({ value = 0, className = "", ...props }, ref) => (_jsx("div", { ref: ref, role: "progressbar", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": value, className: `relative h-2 w-full overflow-hidden rounded-full bg-gray-100 ${className}`, ...props, children: _jsx("div", { className: "h-full w-full flex-1 bg-blue-600 transition-all", style: { transform: `translateX(-${100 - (value || 0)}%)` } }) })));
