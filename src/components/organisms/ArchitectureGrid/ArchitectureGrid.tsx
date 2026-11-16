import React from "react";

import {  SKILL_GROUPS } from "@/lib/data";

export const ArchitectureGrid: React.FC = () => {
 
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_GROUPS?.map((group) => (
              <div
                key={group.step}
                className="gradient-border-hover rounded-lg border border-(--color-border) bg-(--color-surface) p-6"
               >
                  <span
                     className="mb-2 block font-mono text-xs font-semibold tracking-wider"
                     style={{ color: group.color }}>
                        {group.step}
                    </span>
                    <h3 className="mb-2 text-lg font-bold text-(--color-text)">{group.title}</h3>
                    <p className="text-xs leading-relaxed text-(--color-text-muted)">{group.desc}</p>
                </div>
            ))}
        </div>
    );
};