import React from "react";

import styles from "./Section.module.css";

function Section({ Icon, title, color, selected }) {
    return (
        <div
            className={`${styles.section} ${
                selected && styles.section__selected
            }`}
            style={{
                borderBottom: `0px solid ${color}`,
                borderWidth: selected ? "3px" : "",
                color: `${selected && color}`,
            }}
        >
            <Icon />
            <h4>{title}</h4>
        </div>
    );
}

export default Section;
