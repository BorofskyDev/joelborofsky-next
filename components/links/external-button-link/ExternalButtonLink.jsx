
import styles from './ExternalButtonLink.module.scss'

export default function ExternalButtonLink({href, className, children}) {
return (
    <li>
        <a target='_blank' href={href} className={`border-4 br-9 font-link fw-extra-bold ${styles.externalButtonLink} ${className}`}>{children}</a>
    </li>
)
}