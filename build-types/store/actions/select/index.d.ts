import { ModuleType } from '@divi/types';
import { Select } from './types';
/**
 * Set selected module.
 *
 * @since ??
 *
 * @param {string} id Module id.
 * @param {ModuleType} moduleType Module Type.
 *
 * @returns {Select}
 */
export declare const select: (id: string, moduleType: ModuleType) => Select;
