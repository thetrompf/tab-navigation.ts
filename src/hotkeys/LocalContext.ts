import React from 'react';
import { HotkeyStack } from './HotkeyStack';

export const LocalContext = React.createContext<HotkeyStack>(new HotkeyStack());
