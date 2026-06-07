import type { ScriptWebhooksApi } from "../../../../types/script-api";
import { defineScriptApiNamespace } from "../internal/define-namespace";

import webhookManager from "../../../webhooks/webhook-config-manager";

export const createWebhooksApi = defineScriptApiNamespace<ScriptWebhooksApi>((ctx) => {
    return {
        get(name) {
            return webhookManager.getPluginWebhook(ctx.scriptId, name);
        },

        list() {
            return webhookManager.getAllPluginWebhooks(ctx.scriptId);
        },

        getUrl(name) {
            return webhookManager.getPluginWebhookUrl(ctx.scriptId, name);
        }
    };
});
