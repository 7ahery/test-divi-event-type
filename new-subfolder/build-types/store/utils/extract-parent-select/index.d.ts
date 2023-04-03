/**
 * Extract `parentSelectMap` into `parentSelect`.
 * ParentSelect value needs to be extracted from parentSelectMap because selected id can share the
 * same parent / grand parent. Consider two selected modules with the following parents:
 * 1. `['section1', 'row1', 'column1', 'module1']`
 * 2. `['section1', 'row1', 'column2', 'module2']`
 * This means extracted `parentSelect` would be `{section1: 'section1', row1: 'row1', column1:
 * 'column1', column2: 'column2', module1: 'module1`, module2: 'module2'}`. The importance of
 * `parentSelectMap` becomes even more obvious when parentSelect gets deselected.
 *
 * @since ??
 *
 * @param {Record<string, string[]>} parentSelectMap Parent select map.
 *
 * @returns {Record<string, string>}
 */
export declare const extractParentSelect: (parentSelectMap: Record<string, string[]>) => Record<string, string>;
