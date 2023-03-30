import { HoveredArea, Payload } from '../../types';
import { OnMouseEnter } from './types';
/**
 * Set mouse-entered element.
 *
 * @since ??
 *
 * @param {string} target Module|.
 * @param {string} id ID.
 * @param {object} payload Payload.
 *
 * @returns {object}
 */
export declare const onMouseEnter: (target: string, id: string, payload: Payload, area: HoveredArea) => OnMouseEnter;
