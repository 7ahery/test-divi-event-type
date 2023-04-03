import { DraggedModules } from '../../types';
export interface StartDrag {
    type: 'START_DRAG';
    items: DraggedModules;
}
