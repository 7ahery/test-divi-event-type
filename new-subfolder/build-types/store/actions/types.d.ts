import { StoreInstance } from '../types';
import { clearSelection, deselect, endDrag, onMouseEnter, onMouseLeave, select, setCursorPosition, setDraggedModuleDropZone, setHoveredArea, startDrag } from './index';
export declare type ActionObject = ReturnType<typeof clearSelection> | ReturnType<typeof deselect> | ReturnType<typeof endDrag> | ReturnType<typeof onMouseEnter> | ReturnType<typeof onMouseLeave> | ReturnType<typeof select> | ReturnType<typeof setCursorPosition> | ReturnType<typeof setDraggedModuleDropZone> | ReturnType<typeof setHoveredArea> | ReturnType<typeof startDrag>;
export interface Effects {
    MOUSE_ENTER: (action: ActionObject, store: StoreInstance) => void;
    MOUSE_LEAVE: (action: ActionObject, store: StoreInstance) => void;
    SET_CURSOR_POSITION: (action: ReturnType<typeof setCursorPosition>, store: StoreInstance) => void;
    END_DRAG: () => void;
    SELECT: (action: ReturnType<typeof select>) => void;
}
