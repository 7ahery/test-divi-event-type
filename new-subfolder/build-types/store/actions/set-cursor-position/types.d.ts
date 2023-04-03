export interface SetCursorPosition {
    type: 'SET_CURSOR_POSITION';
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
}
