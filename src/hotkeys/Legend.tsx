import React from 'react';
import { HotkeyLegend } from './HotkeyLegend';
import { Hotkey } from './parser';

interface Props {
    className?: string;
    hotkeys: ReadonlyArray<Hotkey>;
}

export class Legend extends React.Component<Props> {
    private renderHotkey = (hotkey: Hotkey, i: number) => {
        return (
            <li key={i}>
                <HotkeyLegend hotkey={hotkey} />
            </li>
        );
    };

    private renderHotkeys(hotkeys: ReadonlyArray<Hotkey>) {
        return <ul>{hotkeys.map(this.renderHotkey)}</ul>;
    }

    public render() {
        return <div className={this.props.className}>{this.renderHotkeys(this.props.hotkeys)}</div>;
    }
}
