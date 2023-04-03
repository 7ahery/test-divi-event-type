import { HoveredArea, Payload } from '../../types';
export interface OnMouseEnter {
    type: 'MOUSE_ENTER';
    target: string;
    id: string;
    payload: Payload;
    area: HoveredArea;
}
