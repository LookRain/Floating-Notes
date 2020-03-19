/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import { debounce } from 'lodash';
import * as React from 'react';
import { remote } from 'electron';
import cx from 'classnames';
import Editor from '../Editor';
import styles from './styles.css';
const defaultValue = localStorage.getItem('code');

const win = remote.getCurrentWindow();
const Shell = () => {
  const [floating, setFloating] = React.useState(win.isAlwaysOnTop());

  const onChange = React.useCallback((ev: string) => {
    const debouncedSetKeyword = debounce((e: string) => {
      localStorage.setItem('code', ev);
    }, 10);
    debouncedSetKeyword(ev);
  }, []);

  const onPin = React.useCallback(() => {
    if (win.isAlwaysOnTop()) {
      setFloating(false);
      win.setAlwaysOnTop(false);
    } else {
      setFloating(true);
      win.setAlwaysOnTop(true, 'floating', 1);
    }
  }, []);
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        paddingTop: '30px',
        background: 'rgba(45,45,45,1)',
        position: 'absolute',
        top: 0,
        left: 0
      }}
    >
      <div className={styles.draggable}>Floating Notes</div>
      <div className={cx(styles.buttonGroup, styles.buttons)}>
        <div className={styles.close}>
          <a
            onClick={() => win.close()}
            className={styles.closebutton}
            href="#"
          >
            <span>x</span>
          </a>
        </div>
        <div className={styles.minimize}>
          <a className={styles.minimizebutton} href="#">
            <span>&ndash;</span>
          </a>
        </div>
        <div className={styles.zoom}>
          <a className={styles.zoombutton} href="#">
            <span>+</span>
          </a>
        </div>
      </div>
      <div role="button" onClick={onPin} className={styles.pinButtonContainer}>
        <div className={cx(styles.pin, styles.icon, floating && styles.rotated)}>
          {/* {floating && 'Un-pin'}
        {!floating && 'Pin'} */}
        </div>
      </div>
      <Editor defaultValue={defaultValue} onChange={onChange} />
    </div>
  );
};

export default Shell;
