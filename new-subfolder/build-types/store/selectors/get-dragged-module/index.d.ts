import { DraggedModule, StoreState } from '../../types';
/**
 * Get dragged module data of given module id.
 *
 * @since ??
 *
 * @param {StoreState} state Store state.
 * @param {string} id Module id.
 *
 * @returns {DraggedModule}
 */
export declare const getDraggedModule: (state: StoreState, id: string) => DraggedModule;
