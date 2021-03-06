/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Directionality } from '@angular/cdk/bidi';
import { Overlay } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
/**
 * Overridable factory responsible for configuring how cdkPopoverEdit popovers are positioned
 * and sized.
 */
let PopoverEditPositionStrategyFactory = /** @class */ (() => {
    class PopoverEditPositionStrategyFactory {
    }
    PopoverEditPositionStrategyFactory.decorators = [
        { type: Injectable }
    ];
    return PopoverEditPositionStrategyFactory;
})();
export { PopoverEditPositionStrategyFactory };
/**
 * Default implementation of PopoverEditPositionStrategyFactory.
 * Uses a FlexibleConnectedPositionStrategy anchored to the start + top of the cell.
 * Note: This will change to CoverPositionStrategy once it implemented.
 */
let DefaultPopoverEditPositionStrategyFactory = /** @class */ (() => {
    class DefaultPopoverEditPositionStrategyFactory extends PopoverEditPositionStrategyFactory {
        constructor(direction, overlay) {
            super();
            this.direction = direction;
            this.overlay = overlay;
        }
        positionStrategyForCells(cells) {
            return this.overlay.position()
                .flexibleConnectedTo(cells[0])
                .withGrowAfterOpen()
                .withPush()
                .withViewportMargin(16)
                .withPositions([{
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'top',
                }]);
        }
        sizeConfigForCells(cells) {
            if (cells.length === 0) {
                return {};
            }
            if (cells.length === 1) {
                return { width: cells[0].getBoundingClientRect().width };
            }
            let firstCell, lastCell;
            if (this.direction.value === 'ltr') {
                firstCell = cells[0];
                lastCell = cells[cells.length - 1];
            }
            else {
                lastCell = cells[0];
                firstCell = cells[cells.length - 1];
            }
            return { width: lastCell.getBoundingClientRect().right - firstCell.getBoundingClientRect().left };
        }
    }
    DefaultPopoverEditPositionStrategyFactory.decorators = [
        { type: Injectable }
    ];
    DefaultPopoverEditPositionStrategyFactory.ctorParameters = () => [
        { type: Directionality },
        { type: Overlay }
    ];
    return DefaultPopoverEditPositionStrategyFactory;
})();
export { DefaultPopoverEditPositionStrategyFactory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LXBvc2l0aW9uLXN0cmF0ZWd5LWZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LXBvc2l0aW9uLXN0cmF0ZWd5LWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxPQUFPLEVBQXNDLE1BQU0sc0JBQXNCLENBQUM7QUFDbEYsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6Qzs7O0dBR0c7QUFDSDtJQUFBLE1BQ3NCLGtDQUFrQzs7O2dCQUR2RCxVQUFVOztJQWFYLHlDQUFDO0tBQUE7U0FacUIsa0NBQWtDO0FBY3hEOzs7O0dBSUc7QUFDSDtJQUFBLE1BQ2EseUNBQTBDLFNBQVEsa0NBQWtDO1FBQy9GLFlBQStCLFNBQXlCLEVBQXFCLE9BQWdCO1lBQzNGLEtBQUssRUFBRSxDQUFDO1lBRHFCLGNBQVMsR0FBVCxTQUFTLENBQWdCO1lBQXFCLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFFN0YsQ0FBQztRQUVELHdCQUF3QixDQUFDLEtBQW9CO1lBQzNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7aUJBQ3pCLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0IsaUJBQWlCLEVBQUU7aUJBQ25CLFFBQVEsRUFBRTtpQkFDVixrQkFBa0IsQ0FBQyxFQUFFLENBQUM7aUJBQ3RCLGFBQWEsQ0FBQyxDQUFDO29CQUNkLE9BQU8sRUFBRSxPQUFPO29CQUNoQixPQUFPLEVBQUUsS0FBSztvQkFDZCxRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFLEtBQUs7aUJBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ1YsQ0FBQztRQUVELGtCQUFrQixDQUFDLEtBQW9CO1lBQ3JDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQ3RCLE9BQU8sRUFBRSxDQUFDO2FBQ1g7WUFFRCxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN0QixPQUFPLEVBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEtBQUssRUFBQyxDQUFDO2FBQ3hEO1lBRUQsSUFBSSxTQUFTLEVBQUUsUUFBUSxDQUFDO1lBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFO2dCQUNsQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQixRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0wsUUFBUSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEIsU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3JDO1lBRUQsT0FBTyxFQUFDLEtBQUssRUFBRSxRQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxFQUFDLENBQUM7UUFDbEcsQ0FBQzs7O2dCQXZDRixVQUFVOzs7Z0JBNUJILGNBQWM7Z0JBQ2QsT0FBTzs7SUFtRWYsZ0RBQUM7S0FBQTtTQXZDWSx5Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtEaXJlY3Rpb25hbGl0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtPdmVybGF5LCBPdmVybGF5U2l6ZUNvbmZpZywgUG9zaXRpb25TdHJhdGVneX0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBPdmVycmlkYWJsZSBmYWN0b3J5IHJlc3BvbnNpYmxlIGZvciBjb25maWd1cmluZyBob3cgY2RrUG9wb3ZlckVkaXQgcG9wb3ZlcnMgYXJlIHBvc2l0aW9uZWRcbiAqIGFuZCBzaXplZC5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBvcG92ZXJFZGl0UG9zaXRpb25TdHJhdGVneUZhY3Rvcnkge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIFBvc2l0aW9uU3RyYXRlZ3kgYmFzZWQgb24gdGhlIHNwZWNpZmllZCB0YWJsZSBjZWxscy5cbiAgICogVGhlIGNlbGxzIHdpbGwgYmUgcHJvdmlkZWQgaW4gRE9NIG9yZGVyLlxuICAgKi9cbiAgYWJzdHJhY3QgcG9zaXRpb25TdHJhdGVneUZvckNlbGxzKGNlbGxzOiBIVE1MRWxlbWVudFtdKTogUG9zaXRpb25TdHJhdGVneTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBPdmVybGF5U2l6ZUNvbmZpZyBiYXNlZCBvbiB0aGUgc3BlY2lmaWVkIHRhYmxlIGNlbGxzLlxuICAgKiBUaGUgY2VsbHMgd2lsbCBiZSBwcm92aWRlZCBpbiBET00gb3JkZXIuXG4gICAqL1xuICBhYnN0cmFjdCBzaXplQ29uZmlnRm9yQ2VsbHMoY2VsbHM6IEhUTUxFbGVtZW50W10pOiBPdmVybGF5U2l6ZUNvbmZpZztcbn1cblxuLyoqXG4gKiBEZWZhdWx0IGltcGxlbWVudGF0aW9uIG9mIFBvcG92ZXJFZGl0UG9zaXRpb25TdHJhdGVneUZhY3RvcnkuXG4gKiBVc2VzIGEgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5IGFuY2hvcmVkIHRvIHRoZSBzdGFydCArIHRvcCBvZiB0aGUgY2VsbC5cbiAqIE5vdGU6IFRoaXMgd2lsbCBjaGFuZ2UgdG8gQ292ZXJQb3NpdGlvblN0cmF0ZWd5IG9uY2UgaXQgaW1wbGVtZW50ZWQuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBEZWZhdWx0UG9wb3ZlckVkaXRQb3NpdGlvblN0cmF0ZWd5RmFjdG9yeSBleHRlbmRzIFBvcG92ZXJFZGl0UG9zaXRpb25TdHJhdGVneUZhY3Rvcnkge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVhZG9ubHkgZGlyZWN0aW9uOiBEaXJlY3Rpb25hbGl0eSwgcHJvdGVjdGVkIHJlYWRvbmx5IG92ZXJsYXk6IE92ZXJsYXkpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcG9zaXRpb25TdHJhdGVneUZvckNlbGxzKGNlbGxzOiBIVE1MRWxlbWVudFtdKTogUG9zaXRpb25TdHJhdGVneSB7XG4gICAgcmV0dXJuIHRoaXMub3ZlcmxheS5wb3NpdGlvbigpXG4gICAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKGNlbGxzWzBdKVxuICAgICAgICAud2l0aEdyb3dBZnRlck9wZW4oKVxuICAgICAgICAud2l0aFB1c2goKVxuICAgICAgICAud2l0aFZpZXdwb3J0TWFyZ2luKDE2KVxuICAgICAgICAud2l0aFBvc2l0aW9ucyhbe1xuICAgICAgICAgIG9yaWdpblg6ICdzdGFydCcsXG4gICAgICAgICAgb3JpZ2luWTogJ3RvcCcsXG4gICAgICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICAgICAgb3ZlcmxheVk6ICd0b3AnLFxuICAgICAgICB9XSk7XG4gIH1cblxuICBzaXplQ29uZmlnRm9yQ2VsbHMoY2VsbHM6IEhUTUxFbGVtZW50W10pOiBPdmVybGF5U2l6ZUNvbmZpZyB7XG4gICAgaWYgKGNlbGxzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGlmIChjZWxscy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB7d2lkdGg6IGNlbGxzWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRofTtcbiAgICB9XG5cbiAgICBsZXQgZmlyc3RDZWxsLCBsYXN0Q2VsbDtcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24udmFsdWUgPT09ICdsdHInKSB7XG4gICAgICBmaXJzdENlbGwgPSBjZWxsc1swXTtcbiAgICAgIGxhc3RDZWxsID0gY2VsbHNbY2VsbHMubGVuZ3RoIC0gMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxhc3RDZWxsID0gY2VsbHNbMF07XG4gICAgICBmaXJzdENlbGwgPSBjZWxsc1tjZWxscy5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICByZXR1cm4ge3dpZHRoOiBsYXN0Q2VsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5yaWdodCAtIGZpcnN0Q2VsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fTtcbiAgfVxufVxuIl19