import { SelectedModules, StoreState } from '../../types';
/**
 * Get selected modules.
 *
 * @since ??
 *
 * @param {StoreState} state Store state.
 * @param {boolean} returnIds Choose to return selected module id only.
 *
 * @returns {SelectedModules | string[]}
 */
export declare const getSelectedModules: (state: StoreState, returnIds?: boolean) => SelectedModules | string[];
