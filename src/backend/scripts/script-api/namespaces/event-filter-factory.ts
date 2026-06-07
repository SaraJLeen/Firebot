import type { ScriptEventFilterFactoryApi } from "../../../../types/script-api";
import { defineScriptApiNamespace } from "../internal/define-namespace";
import { createTextFilter, createNumberFilter, createTextOrNumberFilter, createPresetFilter } from "../../../events/filters/filter-factory";

export const createEventFilterFactoryApi = defineScriptApiNamespace<ScriptEventFilterFactoryApi>(() => {
    return {
        createTextFilter(config) {
            return createTextFilter(config);
        },
        createNumberFilter(config) {
            return createNumberFilter(config);
        },
        createTextOrNumberFilter(config) {
            return createTextOrNumberFilter(config);
        },
        createPresetFilter(config) {
            return createPresetFilter(config);
        }
    };
});
