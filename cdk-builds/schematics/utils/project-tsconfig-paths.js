"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkspaceConfigGracefully = exports.getTargetTsconfigPath = void 0;
const core_1 = require("@angular-devkit/core");
/** Name of the default Angular CLI workspace configuration files. */
const defaultWorkspaceConfigPaths = ['/angular.json', '/.angular.json'];
/** Gets the tsconfig path from the given target within the specified project. */
function getTargetTsconfigPath(project, targetName) {
    if (project.targets && project.targets[targetName] && project.targets[targetName].options &&
        project.targets[targetName].options.tsConfig) {
        return core_1.normalize(project.targets[targetName].options.tsConfig);
    }
    if (project.architect && project.architect[targetName] && project.architect[targetName].options &&
        project.architect[targetName].options.tsConfig) {
        return core_1.normalize(project.architect[targetName].options.tsConfig);
    }
    return null;
}
exports.getTargetTsconfigPath = getTargetTsconfigPath;
/**
 * Resolve the workspace configuration of the specified tree gracefully. We cannot use the utility
 * functions from the default Angular schematics because those might not be present in older
 * versions of the CLI. Also it's important to resolve the workspace gracefully because
 * the CLI project could be still using `.angular-cli.json` instead of thew new config.
 */
function getWorkspaceConfigGracefully(tree) {
    const path = defaultWorkspaceConfigPaths.find(filePath => tree.exists(filePath));
    const configBuffer = tree.read(path);
    if (!path || !configBuffer) {
        return null;
    }
    try {
        // Parse the workspace file as JSON5 which is also supported for CLI
        // workspace configurations.
        return core_1.parseJson(configBuffer.toString(), core_1.JsonParseMode.Json5);
    }
    catch (e) {
        return null;
    }
}
exports.getWorkspaceConfigGracefully = getWorkspaceConfigGracefully;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC10c2NvbmZpZy1wYXRocy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jZGsvc2NoZW1hdGljcy91dGlscy9wcm9qZWN0LXRzY29uZmlnLXBhdGhzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7O0dBTUc7OztBQUVILCtDQUF5RTtBQUl6RSxxRUFBcUU7QUFDckUsTUFBTSwyQkFBMkIsR0FBRyxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBRXhFLGlGQUFpRjtBQUNqRixTQUFnQixxQkFBcUIsQ0FBQyxPQUF5QixFQUFFLFVBQWtCO0lBQ2pGLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTztRQUNyRixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7UUFDaEQsT0FBTyxnQkFBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ2hFO0lBRUQsSUFBSSxPQUFPLENBQUMsU0FBUyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPO1FBQzNGLE9BQU8sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRTtRQUNsRCxPQUFPLGdCQUFTLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7S0FDbEU7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFYRCxzREFXQztBQUVEOzs7OztHQUtHO0FBQ0gsU0FBZ0IsNEJBQTRCLENBQUMsSUFBVTtJQUNyRCxNQUFNLElBQUksR0FBRywyQkFBMkIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDakYsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsQ0FBQztJQUV0QyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1FBQzFCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJO1FBQ0Ysb0VBQW9FO1FBQ3BFLDRCQUE0QjtRQUM1QixPQUFPLGdCQUFTLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLG9CQUFhLENBQUMsS0FBSyxDQUErQixDQUFDO0tBQzlGO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLElBQUksQ0FBQztLQUNiO0FBQ0gsQ0FBQztBQWZELG9FQWVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SnNvblBhcnNlTW9kZSwgbm9ybWFsaXplLCBwYXJzZUpzb259IGZyb20gJ0Bhbmd1bGFyLWRldmtpdC9jb3JlJztcbmltcG9ydCB7VHJlZX0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L3NjaGVtYXRpY3MnO1xuaW1wb3J0IHtXb3Jrc3BhY2VQcm9qZWN0LCBXb3Jrc3BhY2VTY2hlbWF9IGZyb20gJ0BzY2hlbWF0aWNzL2FuZ3VsYXIvdXRpbGl0eS93b3Jrc3BhY2UtbW9kZWxzJztcblxuLyoqIE5hbWUgb2YgdGhlIGRlZmF1bHQgQW5ndWxhciBDTEkgd29ya3NwYWNlIGNvbmZpZ3VyYXRpb24gZmlsZXMuICovXG5jb25zdCBkZWZhdWx0V29ya3NwYWNlQ29uZmlnUGF0aHMgPSBbJy9hbmd1bGFyLmpzb24nLCAnLy5hbmd1bGFyLmpzb24nXTtcblxuLyoqIEdldHMgdGhlIHRzY29uZmlnIHBhdGggZnJvbSB0aGUgZ2l2ZW4gdGFyZ2V0IHdpdGhpbiB0aGUgc3BlY2lmaWVkIHByb2plY3QuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFyZ2V0VHNjb25maWdQYXRoKHByb2plY3Q6IFdvcmtzcGFjZVByb2plY3QsIHRhcmdldE5hbWU6IHN0cmluZyk6IHN0cmluZ3xudWxsIHtcbiAgaWYgKHByb2plY3QudGFyZ2V0cyAmJiBwcm9qZWN0LnRhcmdldHNbdGFyZ2V0TmFtZV0gJiYgcHJvamVjdC50YXJnZXRzW3RhcmdldE5hbWVdLm9wdGlvbnMgJiZcbiAgICAgIHByb2plY3QudGFyZ2V0c1t0YXJnZXROYW1lXS5vcHRpb25zLnRzQ29uZmlnKSB7XG4gICAgcmV0dXJuIG5vcm1hbGl6ZShwcm9qZWN0LnRhcmdldHNbdGFyZ2V0TmFtZV0ub3B0aW9ucy50c0NvbmZpZyk7XG4gIH1cblxuICBpZiAocHJvamVjdC5hcmNoaXRlY3QgJiYgcHJvamVjdC5hcmNoaXRlY3RbdGFyZ2V0TmFtZV0gJiYgcHJvamVjdC5hcmNoaXRlY3RbdGFyZ2V0TmFtZV0ub3B0aW9ucyAmJlxuICAgICAgcHJvamVjdC5hcmNoaXRlY3RbdGFyZ2V0TmFtZV0ub3B0aW9ucy50c0NvbmZpZykge1xuICAgIHJldHVybiBub3JtYWxpemUocHJvamVjdC5hcmNoaXRlY3RbdGFyZ2V0TmFtZV0ub3B0aW9ucy50c0NvbmZpZyk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmVzb2x2ZSB0aGUgd29ya3NwYWNlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIHNwZWNpZmllZCB0cmVlIGdyYWNlZnVsbHkuIFdlIGNhbm5vdCB1c2UgdGhlIHV0aWxpdHlcbiAqIGZ1bmN0aW9ucyBmcm9tIHRoZSBkZWZhdWx0IEFuZ3VsYXIgc2NoZW1hdGljcyBiZWNhdXNlIHRob3NlIG1pZ2h0IG5vdCBiZSBwcmVzZW50IGluIG9sZGVyXG4gKiB2ZXJzaW9ucyBvZiB0aGUgQ0xJLiBBbHNvIGl0J3MgaW1wb3J0YW50IHRvIHJlc29sdmUgdGhlIHdvcmtzcGFjZSBncmFjZWZ1bGx5IGJlY2F1c2VcbiAqIHRoZSBDTEkgcHJvamVjdCBjb3VsZCBiZSBzdGlsbCB1c2luZyBgLmFuZ3VsYXItY2xpLmpzb25gIGluc3RlYWQgb2YgdGhldyBuZXcgY29uZmlnLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V29ya3NwYWNlQ29uZmlnR3JhY2VmdWxseSh0cmVlOiBUcmVlKTogbnVsbHxXb3Jrc3BhY2VTY2hlbWEge1xuICBjb25zdCBwYXRoID0gZGVmYXVsdFdvcmtzcGFjZUNvbmZpZ1BhdGhzLmZpbmQoZmlsZVBhdGggPT4gdHJlZS5leGlzdHMoZmlsZVBhdGgpKTtcbiAgY29uc3QgY29uZmlnQnVmZmVyID0gdHJlZS5yZWFkKHBhdGghKTtcblxuICBpZiAoIXBhdGggfHwgIWNvbmZpZ0J1ZmZlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBQYXJzZSB0aGUgd29ya3NwYWNlIGZpbGUgYXMgSlNPTjUgd2hpY2ggaXMgYWxzbyBzdXBwb3J0ZWQgZm9yIENMSVxuICAgIC8vIHdvcmtzcGFjZSBjb25maWd1cmF0aW9ucy5cbiAgICByZXR1cm4gcGFyc2VKc29uKGNvbmZpZ0J1ZmZlci50b1N0cmluZygpLCBKc29uUGFyc2VNb2RlLkpzb241KSBhcyB1bmtub3duIGFzIFdvcmtzcGFjZVNjaGVtYTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=