import { SetCursorPosition } from '../../actions/set-cursor-position/types';
import { StoreInstance } from '../../types';
/**
 * Automatically scroll window when dragged module reach top or bottom of the page.
 *
 * @since ??
 *
 * @param {SetCursorPosition} action Divi/events action parameter.
 * @param {StoreInstance} store Store instance.
 */
export declare const autoScrollWindowWhileDraggingModule: (action: SetCursorPosition, store: StoreInstance) => void;
