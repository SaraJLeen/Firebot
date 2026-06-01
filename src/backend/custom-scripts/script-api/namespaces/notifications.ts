import type {
    ScriptNotificationsApi
} from "../../../../types/script-api";
import { defineScriptApiNamespace } from "../internal/define-namespace";

import {
    NotificationManager
} from "../../../notifications/notification-manager";

import {
    type Notification
} from "../../../../types";

export const createNotificationsApi = defineScriptApiNamespace<ScriptNotificationsApi>((ctx) => {
    const scriptName = ctx.displayName;

    function isOwnedByScript(notification: Notification | null): notification is Notification {
        return (
            notification != null
            && notification.source === "script"
            && notification.scriptName === scriptName
        );
    }

    return {
        add(notification, permanentlySave = true) {
            const created = NotificationManager.addNotification(
                {
                    ...notification,
                    type: notification.type ?? "info",
                    source: "script",
                    scriptName
                },
                permanentlySave
            );
            return created;
        },

        get(id) {
            const notification = NotificationManager.getNotification(id);
            return isOwnedByScript(notification) ? notification : null;
        },

        getAll() {
            return NotificationManager
                .getNotifications()
                .filter(isOwnedByScript);
        },

        delete(id) {
            const notification = NotificationManager.getNotification(id);
            if (isOwnedByScript(notification)) {
                NotificationManager.deleteNotification(id);
            }
        },

        clearAll() {
            NotificationManager
                .getNotifications()
                .filter(isOwnedByScript)
                .forEach(n => NotificationManager.deleteNotification(n.id));
        }
    };
});
