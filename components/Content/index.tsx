import React, {ReactNode} from 'react';
import styles from './Content.module.scss'

interface ContentProps {
    children: ReactNode,
    className?: string,
}
const Content = ({ children, className } : ContentProps) => {
    return (
        <div className={`${styles.content} ${className}`}>
            {children}
        </div>
    );
};

export default Content;