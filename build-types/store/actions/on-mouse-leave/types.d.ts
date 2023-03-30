import { Payload } from '../../types';
export interface OnMouseLeave {
    type: 'MOUSE_LEAVE';
    target: string;
    id: string;
    payload: Payload;
}
