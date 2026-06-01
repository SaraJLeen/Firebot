import type { ScriptSettingsApi } from "../../../../types/script-api";
import { defineScriptApiNamespace } from "../internal/define-namespace";
import { SettingsManager } from "../../../common/settings-manager";

export const createSettingsApi = defineScriptApiNamespace<ScriptSettingsApi>(() => {
    return {
        getSetting(settingName) {
            return SettingsManager.getSetting(settingName);
        }
    };
});
