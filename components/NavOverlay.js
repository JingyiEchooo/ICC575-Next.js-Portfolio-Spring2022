import ButtonUI from './ButtonUI';
import styles from './navoverlay.module.scss'

const NavOverlay = ( { closeHandler } ) => {
    return <div className={styles.navoverlay}>
        <ButtonUI 
        icon="close"
        clickHandler={closeHandler}
        />
        Nav Overlay</div>
}

export default NavOverlay;