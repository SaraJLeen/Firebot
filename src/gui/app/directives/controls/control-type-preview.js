"use strict";

(function() {
    // Renders a control type's custom grid preview template (if it defines one)
    // inside the deck editor grid. Compiled link functions are cached per type.
    const linkFnCache = {};

    angular.module("firebotApp").component("controlTypePreview", {
        bindings: {
            control: "<",
            typeDef: "<"
        },
        controller: function($compile, $element, $injector, $scope, logger) {
            const $ctrl = this;

            let childScope = null;

            const render = () => {
                if (childScope != null) {
                    childScope.$destroy();
                    childScope = null;
                }
                $element.empty();

                const typeDef = $ctrl.typeDef;
                if (!typeDef?.gridPreviewTemplate) {
                    return;
                }

                let linkFn = linkFnCache[typeDef.id];
                if (linkFn == null) {
                    linkFn = $compile(typeDef.gridPreviewTemplate);
                    linkFnCache[typeDef.id] = linkFn;
                }

                childScope = $scope.$new(true);
                childScope.control = $ctrl.control;

                if (typeDef.gridPreviewControllerRaw) {
                    try {
                        const previewController = eval(typeDef.gridPreviewControllerRaw); // eslint-disable-line no-eval
                        $injector.invoke(previewController, {}, {
                            $scope: childScope,
                            control: $ctrl.control
                        });
                    } catch (error) {
                        logger.error(`Failed to run grid preview controller for control type ${typeDef.id}`, error);
                    }
                }

                linkFn(childScope, (clonedEl) => {
                    $element.append(clonedEl);
                });
            };

            $ctrl.$onChanges = () => {
                render();
            };

            $ctrl.$onDestroy = () => {
                if (childScope != null) {
                    childScope.$destroy();
                }
            };
        }
    });
}());
