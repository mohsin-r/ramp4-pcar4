import { GridAPI } from './api/grid';
import { grid } from './store/index';
import { markRaw } from 'vue';

import GridScreenV from './screen.vue';
import GridAppbarButtonV from './appbar-button.vue';

import messages from './lang/lang.csv';

class GridFixture extends GridAPI {
    async added() {
        this.$iApi.panel.register(
            {
                'grid-panel': {
                    screens: {
                        'grid-screen': markRaw(GridScreenV)
                    },
                    style: {
                        width: '450px'
                    },
                    expanded: true
                }
            },
            { i18n: { messages } }
        );

        this.$iApi.component('grid-appbar-button', GridAppbarButtonV);
        this.$vApp.$store.registerModule('grid', grid());
    }

    removed() {
        this.$vApp.$store.unregisterModule('grid');
    }
}

export default GridFixture;
