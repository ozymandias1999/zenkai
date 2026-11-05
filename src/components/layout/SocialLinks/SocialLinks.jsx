import styles from "./SocialLinks.module.css"


export default function SocialIcon({ icon }) {
    return (
        <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path d={icon.path} fill="currentColor" />
        </svg>
    )
}