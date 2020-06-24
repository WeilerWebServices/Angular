"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputNamesMigration = void 0;
const migration_1 = require("../../update-tool/migration");
const angular_1 = require("../html-parsing/angular");
const upgrade_data_1 = require("../upgrade-data");
/**
 * Migration that walks through every inline or external HTML template and switches
 * changed output binding names to the proper new output name.
 */
class OutputNamesMigration extends migration_1.Migration {
    constructor() {
        super(...arguments);
        /** Change data that upgrades to the specified target version. */
        this.data = upgrade_data_1.getVersionUpgradeData(this, 'outputNames');
        // Only enable the migration rule if there is upgrade data.
        this.enabled = this.data.length !== 0;
    }
    visitTemplate(template) {
        this.data.forEach(name => {
            const whitelist = name.whitelist;
            const relativeOffsets = [];
            if (whitelist.attributes) {
                relativeOffsets.push(...angular_1.findOutputsOnElementWithAttr(template.content, name.replace, whitelist.attributes));
            }
            if (whitelist.elements) {
                relativeOffsets.push(...angular_1.findOutputsOnElementWithTag(template.content, name.replace, whitelist.elements));
            }
            relativeOffsets.map(offset => template.start + offset)
                .forEach(start => this._replaceOutputName(template.filePath, start, name.replace.length, name.replaceWith));
        });
    }
    _replaceOutputName(filePath, start, width, newName) {
        this.fileSystem.edit(filePath)
            .remove(start, width)
            .insertRight(start, newName);
    }
}
exports.OutputNamesMigration = OutputNamesMigration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0cHV0LW5hbWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2Nkay9zY2hlbWF0aWNzL25nLXVwZGF0ZS9taWdyYXRpb25zL291dHB1dC1uYW1lcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HOzs7QUFJSCwyREFBc0Q7QUFHdEQscURBR2lDO0FBQ2pDLGtEQUFtRTtBQUVuRTs7O0dBR0c7QUFDSCxNQUFhLG9CQUFxQixTQUFRLHFCQUFzQjtJQUFoRTs7UUFDRSxpRUFBaUU7UUFDakUsU0FBSSxHQUE0QixvQ0FBcUIsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFM0UsMkRBQTJEO1FBQzNELFlBQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7SUE4Qm5DLENBQUM7SUE1QkMsYUFBYSxDQUFDLFFBQTBCO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDakMsTUFBTSxlQUFlLEdBQWEsRUFBRSxDQUFDO1lBRXJDLElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRTtnQkFDeEIsZUFBZSxDQUFDLElBQUksQ0FDaEIsR0FBRyxzQ0FBNEIsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7YUFDNUY7WUFFRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RCLGVBQWUsQ0FBQyxJQUFJLENBQ2hCLEdBQUcscUNBQTJCLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ3pGO1lBRUQsZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDO2lCQUNqRCxPQUFPLENBQ0osS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQzVCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVPLGtCQUFrQixDQUFDLFFBQXVCLEVBQUUsS0FBYSxFQUFFLEtBQWEsRUFDckQsT0FBZTtRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7YUFDM0IsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUM7YUFDcEIsV0FBVyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFuQ0Qsb0RBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7V29ya3NwYWNlUGF0aH0gZnJvbSAnLi4vLi4vdXBkYXRlLXRvb2wvZmlsZS1zeXN0ZW0nO1xuaW1wb3J0IHtSZXNvbHZlZFJlc291cmNlfSBmcm9tICcuLi8uLi91cGRhdGUtdG9vbC9jb21wb25lbnQtcmVzb3VyY2UtY29sbGVjdG9yJztcbmltcG9ydCB7TWlncmF0aW9ufSBmcm9tICcuLi8uLi91cGRhdGUtdG9vbC9taWdyYXRpb24nO1xuXG5pbXBvcnQge091dHB1dE5hbWVVcGdyYWRlRGF0YX0gZnJvbSAnLi4vZGF0YSc7XG5pbXBvcnQge1xuICBmaW5kT3V0cHV0c09uRWxlbWVudFdpdGhBdHRyLFxuICBmaW5kT3V0cHV0c09uRWxlbWVudFdpdGhUYWcsXG59IGZyb20gJy4uL2h0bWwtcGFyc2luZy9hbmd1bGFyJztcbmltcG9ydCB7Z2V0VmVyc2lvblVwZ3JhZGVEYXRhLCBVcGdyYWRlRGF0YX0gZnJvbSAnLi4vdXBncmFkZS1kYXRhJztcblxuLyoqXG4gKiBNaWdyYXRpb24gdGhhdCB3YWxrcyB0aHJvdWdoIGV2ZXJ5IGlubGluZSBvciBleHRlcm5hbCBIVE1MIHRlbXBsYXRlIGFuZCBzd2l0Y2hlc1xuICogY2hhbmdlZCBvdXRwdXQgYmluZGluZyBuYW1lcyB0byB0aGUgcHJvcGVyIG5ldyBvdXRwdXQgbmFtZS5cbiAqL1xuZXhwb3J0IGNsYXNzIE91dHB1dE5hbWVzTWlncmF0aW9uIGV4dGVuZHMgTWlncmF0aW9uPFVwZ3JhZGVEYXRhPiB7XG4gIC8qKiBDaGFuZ2UgZGF0YSB0aGF0IHVwZ3JhZGVzIHRvIHRoZSBzcGVjaWZpZWQgdGFyZ2V0IHZlcnNpb24uICovXG4gIGRhdGE6IE91dHB1dE5hbWVVcGdyYWRlRGF0YVtdID0gZ2V0VmVyc2lvblVwZ3JhZGVEYXRhKHRoaXMsICdvdXRwdXROYW1lcycpO1xuXG4gIC8vIE9ubHkgZW5hYmxlIHRoZSBtaWdyYXRpb24gcnVsZSBpZiB0aGVyZSBpcyB1cGdyYWRlIGRhdGEuXG4gIGVuYWJsZWQgPSB0aGlzLmRhdGEubGVuZ3RoICE9PSAwO1xuXG4gIHZpc2l0VGVtcGxhdGUodGVtcGxhdGU6IFJlc29sdmVkUmVzb3VyY2UpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGNvbnN0IHdoaXRlbGlzdCA9IG5hbWUud2hpdGVsaXN0O1xuICAgICAgY29uc3QgcmVsYXRpdmVPZmZzZXRzOiBudW1iZXJbXSA9IFtdO1xuXG4gICAgICBpZiAod2hpdGVsaXN0LmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmVsYXRpdmVPZmZzZXRzLnB1c2goXG4gICAgICAgICAgICAuLi5maW5kT3V0cHV0c09uRWxlbWVudFdpdGhBdHRyKHRlbXBsYXRlLmNvbnRlbnQsIG5hbWUucmVwbGFjZSwgd2hpdGVsaXN0LmF0dHJpYnV0ZXMpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHdoaXRlbGlzdC5lbGVtZW50cykge1xuICAgICAgICByZWxhdGl2ZU9mZnNldHMucHVzaChcbiAgICAgICAgICAgIC4uLmZpbmRPdXRwdXRzT25FbGVtZW50V2l0aFRhZyh0ZW1wbGF0ZS5jb250ZW50LCBuYW1lLnJlcGxhY2UsIHdoaXRlbGlzdC5lbGVtZW50cykpO1xuICAgICAgfVxuXG4gICAgICByZWxhdGl2ZU9mZnNldHMubWFwKG9mZnNldCA9PiB0ZW1wbGF0ZS5zdGFydCArIG9mZnNldClcbiAgICAgICAgICAuZm9yRWFjaChcbiAgICAgICAgICAgICAgc3RhcnQgPT4gdGhpcy5fcmVwbGFjZU91dHB1dE5hbWUoXG4gICAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5maWxlUGF0aCwgc3RhcnQsIG5hbWUucmVwbGFjZS5sZW5ndGgsIG5hbWUucmVwbGFjZVdpdGgpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlcGxhY2VPdXRwdXROYW1lKGZpbGVQYXRoOiBXb3Jrc3BhY2VQYXRoLCBzdGFydDogbnVtYmVyLCB3aWR0aDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdOYW1lOiBzdHJpbmcpIHtcbiAgICB0aGlzLmZpbGVTeXN0ZW0uZWRpdChmaWxlUGF0aClcbiAgICAgIC5yZW1vdmUoc3RhcnQsIHdpZHRoKVxuICAgICAgLmluc2VydFJpZ2h0KHN0YXJ0LCBuZXdOYW1lKTtcbiAgfVxufVxuIl19