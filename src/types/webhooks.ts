import type { ScriptWebhookEventHandler } from "./script-api";

export type WebhookConfig = {
    id: string;
    name: string;
    scriptId?: string;
};

export type PluginWebhooks = {
    webhookNames: string[];
    handler: ScriptWebhookEventHandler;
};