import React, {ReactNode} from 'react';
import styles from './Content.module.scss'

interface ContentProps {
    children: ReactNode,
}
const Content = ({ children } : ContentProps) => {
    return (
        <div className={styles.content}>
            {children}
        </div>
    );
};

export default Content;