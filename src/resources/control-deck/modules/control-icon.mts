import { defineComponent, type PropType } from "vue";

import type { ControlDeckResolvedIcon } from "./types.mjs";

/**
 * Renders a control's resolved icon (image, glyph, or emoji). Registered
 * globally so control type components (including plugin-provided ones) can use
 * it without imports.
 */
export const controlIcon = defineComponent({
    props: {
        icon: { type: Object as PropType<ControlDeckResolvedIcon | null>, default: null },
        size: { type: Number, default: 44 }
    },
    template: /* html */`
        <img
            v-if="icon && icon.type === 'image'"
            class="deck-control-icon"
            :src="icon.url"
            alt=""
            draggable="false"
        />
        <lucide-icon
            v-else-if="icon && icon.type === 'glyph'"
            class="deck-control-glyph"
            :name="icon.name"
            :color="icon.color"
            :size="size"
        ></lucide-icon>
        <span
            v-else-if="icon && icon.type === 'emoji'"
            class="deck-control-emoji"
        >{{ icon.emoji }}</span>
    `
});
