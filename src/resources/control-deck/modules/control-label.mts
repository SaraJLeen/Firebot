import { defineComponent, computed, type PropType } from "vue";

import type { ControlDeckControlView } from "./types.mjs";

/**
 * Renders a control's optional label with its configured font. Registered
 * globally so control type components can use it without imports.
 */
export const controlLabel = defineComponent({
    props: {
        control: { type: Object as PropType<ControlDeckControlView>, required: true }
    },
    setup(props) {
        const style = computed(() => {
            const font = props.control.labelFont;
            if (font == null) {
                return {};
            }
            return {
                fontFamily: font.family || undefined,
                fontWeight: font.weight || undefined,
                fontStyle: font.italic ? "italic" : undefined,
                color: font.color || undefined
            };
        });
        return { style };
    },
    template: /* html */`
        <div v-if="control.label" class="deck-control-name" :style="style">{{ control.label }}</div>
    `
});
