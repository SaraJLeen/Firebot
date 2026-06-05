import type { ScriptWebServerApi } from "../../../../types/script-api";

import { WebSocketServerManager } from "../../../../server/websocket-server-manager";

import { defineScriptApiNamespace } from "../internal/define-namespace";

export const createWebServerApi = defineScriptApiNamespace<ScriptWebServerApi>(() => {
    return {
        sendWebSocketEvent: (name, data) => {
            WebSocketServerManager.triggerEvent(`custom-event:${name}`, data);
        }
    };
});