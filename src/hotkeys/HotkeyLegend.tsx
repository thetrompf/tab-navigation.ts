import React from 'react';
import { Hotkey } from './parser';

interface Props {
    className?: string;
    hotkey: Hotkey;
}

const macRegex = /mac/i;
// const linuxRegex = /linux/i;
// const windowsRegex = /win(32|64)/i;

const isMac = () => navigator.platform.match(macRegex);
// const isLinux = () => navigator.platform.match(linuxRegex);
// const isWindows = () => navigator.platform.match(windowsRegex);

function buildHotkeyText(hotkey: Hotkey): string {
    const keys = new Set<string>();
    if (hotkey.mod) {
        isMac() ? keys.add('cmd') : keys.add('ctrl');
    } else if (hotkey.ctrl) {
        keys.add('ctrl');
    } else if (hotkey.cmd) {
        keys.add('cmd');
    }

    if (hotkey.alt) {
        keys.add('alt');
    }
    if (hotkey.meta) {
        keys.add('meta');
    }
    if (hotkey.shift) {
        keys.add('shift');
    }
    if (hotkey.key) {
        keys.add(hotkey.key);
    }

    return Array.from(keys).join('+');
}

export class HotkeyLegend extends React.Component<Props> {
    public render() {
        return <span className={this.props.className}>{buildHotkeyText(this.props.hotkey)}</span>;
    }
}
