import type { ScriptPluginsApi } from "../../../../types/script-api";
import { defineScriptApiNamespace } from "../internal/define-namespace";

export const createPluginsApi = defineScriptApiNamespace<ScriptPluginsApi>(() => {
    return {
        async getInstalledPlugins() {
            const scriptManager = (await import("../../../scripts/script-manager")).default;
            return scriptManager.getInstalledPlugins();
        }
    };
});
