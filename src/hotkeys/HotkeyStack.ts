import { Hotkey } from './parser';

interface RefObject<T> {
    current: T | null;
}

const ref = { current: null };

export class HotkeyStack {
    private hotkeys: (Hotkey | HotkeyStack)[];
    public readonly activeStackRef: RefObject<Readonly<HotkeyStack>>;
    public parentStack: HotkeyStack | null = null;

    public constructor(parentStack?: HotkeyStack | null) {
        this.activeStackRef = ref;
        this.hotkeys = [];
        this.parentStack = parentStack || null;
    }

    public add(hotkey: Hotkey | HotkeyStack): void {
        const idx = this.hotkeys.indexOf(hotkey);
        if (idx === -1) {
            this.hotkeys.push(hotkey);
        } else {
            throw new Error('Hotkey already in stack');
        }
    }

    public remove(hotkey: Hotkey | HotkeyStack): void {
        const idx = this.hotkeys.indexOf(hotkey);
        if (idx === -1) {
            throw new Error('Hotkey not in stack');
        } else {
            this.hotkeys.splice(idx, 1);
        }
    }

    // public activateStack(hotkeyStack: HotkeyStack) {
    //     if (this.activeStackRef.current != null) {
    //         this.activeStackRef.current
    //     }
    //     this.activeStackRef.current = hotkeyStack;
    // }
}
