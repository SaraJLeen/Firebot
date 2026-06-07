import type { ScriptVariableFactoryApi } from "../../../../types/script-api";
import { defineScriptApiNamespace } from "../internal/define-namespace";
import { createEventDataVariable } from "../../../variables/variable-factory";

export const createVariableFactoryApi = defineScriptApiNamespace<ScriptVariableFactoryApi>(() => {
    return {
        createEventDataVariable(config) {
            return createEventDataVariable(config);
        }
    };
});
