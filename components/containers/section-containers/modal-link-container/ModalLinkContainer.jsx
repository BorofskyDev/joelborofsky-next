import styles from './ModalLinkContainer.module.scss'


export default function ModalLinkContainer({children}) {
    return (
        <div className={styles.modalLinkContainer}>
            {children}
        </div>
    )
}