import { ImmutableObject } from 'seamless-immutable';
import { DropZoneProps } from '@types/divi__module';
import { ModuleType } from '@divi/types';
declare module '@wordpress/data' {
    function dispatch(key: 'divi/events'): typeof import('./actions');
    function select(key: 'divi/events'): {
        getHoveredModule: () => HoveredModule;
        isHovered: (id: string) => boolean;
        isChildHovered: (id: string) => boolean;
        isChildSelected: (id: string) => boolean;
        isDragged: (id: string) => boolean;
        getDraggingStatus: () => boolean;
        getDraggedModule: (id: string) => DraggedModule;
        getDraggedModules: () => StoreState['draggedModules'];
        getCursorPosition: () => CursorPosition;
        getDraggedModuleDropZone: () => null | DropZoneProps;
        getSelectedModules: <T extends boolean>(returnIds?: T) => T extends true ? string[] : SelectedModules;
        isSelectedModule: (id: string) => boolean;
    };
}
export interface HoveredModule {
    target: string;
    id: string;
    payload: Record<string, any>;
    currentParent?: HoveredModule;
    area: 'top' | 'bottom';
}
export interface DraggedModule {
    id: string;
    moduleType: ModuleType;
    styles?: Record<string, string | number>;
}
export declare type DraggedModules = DraggedModule[];
export interface SelectedModule {
    id: string;
    moduleType: ModuleType;
    styles?: Record<string, string | number>;
}
export declare type SelectedModules = SelectedModule[];
export interface CursorPosition {
    pageX: number;
    pageY: number;
    clientX: number;
    clientY: number;
}
export declare type StoreState = ImmutableObject<{
    parentHover: Record<string, string>;
    parentSelect: Record<string, string>;
    parentSelectMap: Record<string, string[]>;
    currentHover: HoveredModule;
    cursorPosition: CursorPosition;
    isDragging: boolean;
    draggedModules: DraggedModules;
    draggedModuleDropZone: null | DropZoneProps;
    selectedModules: SelectedModules;
}>;
export interface StoreInstance {
    getState(): any;
}
export interface LogPayload {
    target: string;
    eventPayload: Record<string, unknown>;
    state?: {
        currentHover: StoreState['currentHover'];
        parentHover: StoreState['parentHover'];
    };
}
export interface EventsStoreSelectors {
    getState: (path: string | string[], defaultValue: any) => any;
    getDraggingStatus: () => boolean;
    getDraggedModules: () => DraggedModules;
    getSelectedModules: () => SelectedModules;
    getCursorPosition: () => CursorPosition;
    getHoveredModule: () => HoveredModule;
    getDraggedModuleDropZone: () => null | DropZoneProps;
    isHovered: (id: string) => boolean;
    isDragged: (id: string) => boolean;
    isChildHovered: (id: string) => boolean;
    isSelectedModule: (id: string) => boolean;
}
export declare type HoveredArea = 'top' | 'bottom' | 'inside';
export interface Payload {
    label?: string;
}
