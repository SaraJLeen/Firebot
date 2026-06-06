import type { ScriptEffectsApi } from "../../../../types/script-api";
import { defineScriptApiNamespace } from "../internal/define-namespace";
import effectRunner from "../../../common/effect-runner";

export const createEffectsApi = defineScriptApiNamespace<ScriptEffectsApi>(() => {
    return {
        processEffects(context) {
            return effectRunner.processEffects(context);
        }
    };
});
