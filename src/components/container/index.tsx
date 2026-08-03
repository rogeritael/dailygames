import React from "react";

export function Container({children}: {children: React.ReactNode}){
    return (
        <div className="w-full max-w-7xl mx-auto px-3">
          {children}
        </div>
    )
}