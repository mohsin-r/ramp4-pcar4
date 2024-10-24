import { bF as defineComponent, i8 as _export_sfc, bM as resolveComponent, bQ as openBlock, bO as createBlock, bP as withCtx, bR as createTextVNode, fG as createBaseVNode, bS as toDisplayString, he as markRaw, kt as h, z as geo, A as createInstance } from './main-94WFCC9C.js';
import './preload-helper-dJJaZANz.js';

const _sfc_main$1 = defineComponent({
  name: "IklobFixtureV",
  data() {
    return {
      gazeboText: ""
    };
  },
  props: {
    panel: Object
  },
  methods: {
    onCatSeen() {
      this.gazeboText = "The cat on the gazebo panel has been seen!";
    }
  },
  created() {
    this.$iApi.event.once("gazebo/beholdMyText", this.onCatSeen);
  }
});

const _hoisted_1 = { class: "flex flex-col items-center mt-16" };
const _hoisted_2 = { class: "mt-16" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_panel_screen = resolveComponent("panel-screen");
  return openBlock(), createBlock(_component_panel_screen, { panel: _ctx.panel }, {
    header: withCtx(() => _cache[0] || (_cache[0] = [
      createTextVNode(" Iklob Panel ")
    ])),
    content: withCtx(() => [
      createBaseVNode("div", _hoisted_1, [
        _cache[1] || (_cache[1] = createBaseVNode("span", { class: "text-6xl" }, "\u{1F937}\u200D\u2642\uFE0F", -1)),
        createBaseVNode("span", _hoisted_2, toDisplayString(_ctx.gazeboText), 1)
      ])
    ]),
    _: 1
  }, 8, ["panel"]);
}
const screen = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);

class IklobFixture {
  added() {
    this.$iApi.panel.register(
      {
        id: "iklob-p1",
        config: {
          screens: { "iklob-s1": markRaw(screen) },
          button: {
            icon: `<span>I</span>`,
            tooltip: "Iklob"
          },
          alertName: "Iklob"
        }
      },
      {
        i18n: {
          messages: {
            en: {
              Iklob: "Iklob"
            },
            fr: {
              Iklob: "[fr] Iklob"
            }
          }
        }
      }
    );
  }
}

// this is a plain JS sample fixture that doesn't require a compilation step since it doesn't use Vue templates
// instead, templates need to be written as a render function directly
// consequently, this makes for a smallest fixture bundle

// then, create a fixture config
class DiligordFixture {
    added() {
        // `this.id` and `this.$iApi` and `this.$vApp` are automatically made available on this object
        this.id;
        this.$iApi;
        this.$vApp;

        // Diligord Fixture creates a simple panel with a single screen with two header controls (pin and close),
        // and increment button and an input field (bound to the panel title) in the content slot

        // first, create a panel screen
        // since this is a raw JS file, we need to create the template for our screen using the render function (https://vuejs.org/v2/guide/render-function.html)
        // it's possible to write this as a regular Vue component with HTML-based template and compile it with `vue-template-compiler` if you don't want to bother with render functions
        // TODO: make an example of a compiled external fixture
        const dScreen1 = {
            // the `panel` prop is automatically passed to all panel screen components by the panel-container
            // this is the `PanelInstance` instance inside which this screen component is displayed, and it exposes panel API functions
            // methods, computed functions and template will have access to the panel as `this.panel`
            props: ['panel'],
            // reactive component data
            data() {
                return {
                    title: 'Diligord Panel',
                    count: 0
                };
            },
            render() {
                // Documentation for this: https://vuejs.org/guide/extras/render-function.html
                const panelScreen = resolveComponent('panel-screen');
                return h(
                    panelScreen,
                    {
                        panel: this.panel
                    },
                    {
                        header: () => h('span', this.title),
                        content: () =>
                            h(
                                'div',
                                {
                                    class: 'flex flex-col items-center'
                                },
                                [
                                    h(
                                        'button',
                                        {
                                            class: 'bg-blue-500 hover:bg-blue-700 font-bold text-white py-8 px-16',
                                            onClick: () => (this.count += 10)
                                        },
                                        [h('span', this.count)]
                                    ),
                                    h('label', { class: 'mt-16' }, this.$iApi.$i18n.t('changeTitle')),
                                    h('input', {
                                        class: 'border-2  p-8 mb-10',
                                        // bind title to the input value
                                        value: this.title,
                                        onInput: $event => {
                                            this.title = $event.target.value;
                                        }
                                    }),
                                    h('label', 'Hint: Change title to fight for a surprise.'),
                                    // A gif will show if the title is changed to "fight"
                                    this.title === 'fight'
                                        ? h('img', {
                                              style: {
                                                  width: '300px',
                                                  marginTop: '30px'
                                              },
                                              src: 'https://media.giphy.com/media/sGAlRSaXKjTfq/giphy.gif'
                                          })
                                        : null
                                ]
                            )
                    }
                );
            }
        };

        // then, create a panel config
        const dpanel = {
            id: 'diligord-p1',
            config: {
                screens: { 'diligord-s1': markRaw(dScreen1) },
                button: {
                    icon: `<span>D</span>`,
                    tooltip: 'Diligord'
                },
                alertName: 'Diligord'
            }
        };

        // you can also create a custom component using the helper `extend` function and put it anywhere on the page, even outside the R4MP container
        // the helper function will add references to this fixture and `$iApi` to the extended component
        const component = this.extend({
            render() {
                return h(
                    'p',
                    {
                        style: {
                            marginTop: '80px',
                            fontWeight: 'bold',
                            color: '#34495e',
                            fontSize: '20pt',
                            textAlign: 'center'
                        }
                    },
                    [this.firstName, ' ', this.lastName, ' aka ', this.alias]
                );
            },
            data() {
                return {
                    firstName: 'Walter',
                    lastName: 'White',
                    alias: 'Heisenberg'
                };
            }
        });

        // and put it on the page
        document.querySelector('.ramp-app').after(component);

        // this life hook is called when the fixture is added to R4MP, and now it's possible to open our panel
        this.$iApi.panel.register(dpanel, {
            i18n: {
                messages: {
                    en: {
                        Diligord: 'Diligord',
                        changeTitle: 'Change panel title'
                    },
                    fr: {
                        Diligord: '[fr] Diligord',
                        changeTitle: 'Changer le titre du panneau'
                    }
                }
            }
        });
    }
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "screen",
  props: ["panel"],
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => _cache[0] || (_cache[0] = [
          createTextVNode(" Mouruge Panel ")
        ])),
        content: withCtx(() => _cache[1] || (_cache[1] = [
          createBaseVNode("div", { class: "flex flex-col items-center mt-16" }, [
            createBaseVNode("img", {
              class: "my-16",
              src: "https://i.pinimg.com/originals/5f/12/01/5f120106a81b52d9813aabe8d14b1552.gif",
              alt: "",
              srcset: ""
            })
          ], -1)
        ])),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

class MourugeFixture {
  added() {
    this.$iApi.panel.register(
      {
        id: "mouruge-p1",
        config: {
          screens: { "mouruge-s1": markRaw(_sfc_main) },
          button: {
            icon: `<span>M</span>`,
            tooltip: "Mouruge"
          },
          alertName: "Mouruge"
        }
      },
      {
        i18n: {
          messages: {
            en: {
              Mouruge: "Mouruge"
            },
            fr: {
              Mouruge: "[fr] Mouruge"
            }
          }
        }
      }
    );
  }
}

window.debugInstance = null;

let config = {
    configs: {
        en: {
            map: {
                extentSets: [
                    {
                        id: 'EXT_ESRI_World_AuxMerc_3857',
                        default: {
                            xmax: -5007771.626060756,
                            xmin: -16632697.354854,
                            ymax: 10015875.184845109,
                            ymin: 5022907.964742964,
                            spatialReference: {
                                wkid: 102100,
                                latestWkid: 3857
                            }
                        }
                    },
                    {
                        id: 'EXT_NRCAN_Lambert_3978',
                        default: {
                            xmax: 3549492,
                            xmin: -2681457,
                            ymax: 3482193,
                            ymin: -883440,
                            spatialReference: {
                                wkid: 3978
                            }
                        }
                    }
                ],
                caption: {
                    mapCoords: {
                        formatter: 'WEB_MERCATOR'
                    },
                    scaleBar: {
                        imperialScale: true
                    }
                },
                lodSets: [
                    {
                        id: 'LOD_NRCAN_Lambert_3978',
                        lods: geo.defaultLODs(geo.defaultTileSchemas()[0])
                    },
                    {
                        id: 'LOD_ESRI_World_AuxMerc_3857',
                        lods: geo.defaultLODs(geo.defaultTileSchemas()[1])
                    }
                ],
                tileSchemas: [
                    {
                        id: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978',
                        name: 'Lambert Maps',
                        extentSetId: 'EXT_NRCAN_Lambert_3978',
                        lodSetId: 'LOD_NRCAN_Lambert_3978',
                        thumbnailTileUrls: ['/tile/8/285/268', '/tile/8/285/269'],
                        hasNorthPole: true
                    },
                    {
                        id: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        name: 'Web Mercator Maps',
                        extentSetId: 'EXT_ESRI_World_AuxMerc_3857',
                        lodSetId: 'LOD_ESRI_World_AuxMerc_3857',
                        thumbnailTileUrls: ['/tile/8/91/74', '/tile/8/91/75']
                    }
                ],
                basemaps: [
                    {
                        id: 'baseNrCan',
                        name: 'Canada Base Map - Transportation (CBMT)',
                        description:
                            'The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                        altText: 'The Canada Base Map - Transportation (CBMT)',
                        layers: [
                            {
                                id: 'CBMT',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseSimple',
                        name: 'Canada Base Map - Simple',
                        description: 'Canada Base Map - Simple',
                        altText: 'Canada base map - Simple',
                        layers: [
                            {
                                id: 'SMR',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/Simple/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseCBME_CBCE_HS_RO_3978',
                        name: 'Canada Base Map - Elevation (CBME)',
                        description:
                            'The Canada Base Map - Elevation (CBME) web mapping services of the Earth Sciences Sector at Natural Resources Canada, is intended primarily for online mapping application users and developers.',
                        altText: 'Canada Base Map - Elevation (CBME)',
                        layers: [
                            {
                                id: 'CBME_CBCE_HS_RO_3978',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBME_CBCE_HS_RO_3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseCBMT_CBCT_GEOM_3978',
                        name: 'Canada Base Map - Transportation (CBMT)',
                        description:
                            ' The Canada Base Map - Transportation (CBMT) web mapping services of the Earth Sciences Sector at Natural Resources Canada, are intended primarily for online mapping application users and developers.',
                        altText: 'Canada Base Map - Transportation (CBMT)',
                        layers: [
                            {
                                id: 'CBMT_CBCT_GEOM_3978',
                                layerType: 'esri-tile',
                                url: 'https://maps-cartes.services.geo.ca/server2_serveur2/rest/services/BaseMaps/CBMT_CBCT_GEOM_3978/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_NRCAN_Lambert_3978#LOD_NRCAN_Lambert_3978'
                    },
                    {
                        id: 'baseEsriWorld',
                        name: 'World Imagery',
                        description:
                            'World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide.',
                        altText: 'World Imagery',
                        layers: [
                            {
                                id: 'World_Imagery',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857',
                        attribution: {
                            text: {
                                disabled: true
                            },
                            logo: {
                                disabled: true
                            }
                        }
                    },
                    {
                        id: 'baseEsriPhysical',
                        name: 'World Physical Map',
                        description:
                            'This map presents the Natural Earth physical map at 1.24km per pixel for the world and 500m for the coterminous United States.',
                        altText: 'World Physical Map',
                        layers: [
                            {
                                id: 'World_Physical_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Physical_Map/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriRelief',
                        name: 'World Shaded Relief',
                        description:
                            'This map portrays surface elevation as shaded relief. This map is used as a basemap layer to add shaded relief to other GIS maps, such as the ArcGIS Online World Street Map.',
                        altText: 'World Shaded Relief',
                        layers: [
                            {
                                id: 'World_Shaded_Relief',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Shaded_Relief/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriStreet',
                        name: 'World Street Map',
                        description: 'This worldwide street map presents highway-level data for the world.',
                        altText: 'ESWorld Street Map',
                        layers: [
                            {
                                id: 'World_Street_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Street_Map/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriTerrain',
                        name: 'World Terrain Base',
                        description:
                            'This map is designed to be used as a base map by GIS professionals to overlay other thematic layers such as demographics or land cover.',
                        altText: 'World Terrain Base',
                        layers: [
                            {
                                id: 'World_Terrain_Base',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    },
                    {
                        id: 'baseEsriTopo',
                        name: 'World Topographic Map',
                        description:
                            'This map is designed to be used as a basemap by GIS professionals and as a reference map by anyone.',
                        altText: 'World Topographic Map',
                        layers: [
                            {
                                id: 'World_Topo_Map',
                                layerType: 'esri-tile',
                                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer'
                            }
                        ],
                        tileSchemaId: 'EXT_ESRI_World_AuxMerc_3857#LOD_ESRI_World_AuxMerc_3857'
                    }
                ],
                initialBasemapId: 'baseEsriWorld'
            },
            layers: [
                {
                    id: 'WaterQuantity',
                    name: 'Water quantity parent',
                    layerType: 'esri-map-image',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                    sublayers: [
                        {
                            index: 1,
                            name: 'Water quantity child',
                            state: {
                                opacity: 1,
                                visibility: true
                            },
                            fixtures: {
                                details: {
                                    template: 'Water-Quantity-Template'
                                }
                            }
                        }
                    ],
                    state: {
                        opacity: 1,
                        visibility: true
                    },
                    customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
                },
                {
                    id: 'WaterQuality',
                    layerType: 'esri-map-image',
                    url: 'https://maps-cartes.ec.gc.ca/arcgis/rest/services/CESI/MapServer',
                    sublayers: [
                        {
                            index: 5,
                            state: {
                                opacity: 1,
                                visibility: true
                            }
                        }
                    ],
                    state: {
                        opacity: 1,
                        visibility: true
                    },
                    customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
                },
                {
                    id: 'CleanAir',
                    layerType: 'esri-feature',
                    url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/EcoAction/MapServer/9',
                    state: {
                        opacity: 0.8,
                        visibility: true
                    },
                    customRenderer: {} // just to chill things out. real ramp will have all properties defaulted and filled in
                },
                {
                    id: 'WFSLayer',
                    layerType: 'ogc-wfs',
                    url: 'https://api.weather.gc.ca//collections/ahccd-trends/items?measurement_type__type_mesure=total_precip&period__periode=Ann&offset=0&limit=1000&province__province=on',
                    xyInAttribs: true,
                    colour: '#FF5555',
                    state: {
                        visibility: true
                    },
                    customRenderer: {},
                    metadata: {
                        url: 'https://raw.githubusercontent.com/ramp4-pcar4/ramp4-pcar4/main/README.md'
                    },
                    fixtures: {
                        details: {
                            template: 'WFSLayer-Custom'
                        }
                    }
                }
            ],
            fixtures: {
                legend: {
                    root: {
                        children: [
                            {
                                name: 'Visibility Set',
                                exclusive: true,
                                children: [
                                    {
                                        layerId: 'CleanAir',
                                        name: 'Clean Air in Set'
                                    },
                                    {
                                        name: 'Group in Set',
                                        children: [
                                            {
                                                layerId: 'WaterQuantity',
                                                name: 'Water Quantity in Nested Group',
                                                sublayerIndex: 1
                                            },
                                            {
                                                layerId: 'WaterQuality',
                                                name: 'Water Quality in Nested Group',
                                                sublayerIndex: 5
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                layerId: 'WFSLayer',
                                name: 'WFSLayer'
                            }
                        ]
                    }
                },
                appbar: {
                    items: [
                        [
                            'diligord-p1',
                            {
                                id: 'gazebo'
                            },
                            'iklob-p1',
                            'mouruge-p1'
                        ],
                        ['snowman', 'legend', 'geosearch', 'basemap']
                    ]
                },
                mapnav: { items: ['fullscreen', 'help', 'home', 'basemap'] },
                export: {
                    title: {
                        value: 'All Your Base are Belong to Us'
                    }
                }
            },
            panels: {
                open: [{ id: 'diligord-p1' }, { id: 'iklob-p1' }, { id: 'mouruge-p1' }]
            },
            system: { animate: true }
        }
    }
};

let options = {
    loadDefaultFixtures: true,
    loadDefaultEvents: true,
    startRequired: false
};

const rInstance = createInstance(document.getElementById('app'), config, options);

window.debugInstance = rInstance;

// add fixtures
rInstance.fixture.add('iklob', IklobFixture);
rInstance.fixture.add('diligord', DiligordFixture);
rInstance.fixture.add('mouruge', MourugeFixture);
rInstance.fixture.add('gazebo');
rInstance.fixture.add('snowman');
rInstance.fixture.add('export');

// Load custom templates.
rInstance.$element.component('WFSLayer-Custom', {
    props: ['identifyData'],
    template: `
        <div>
            <span>This is an example template that contains an image.</span>
            <img src="https://i.imgur.com/WtY0tdC.gif" />
        </div>
    `
});

rInstance.$element.component('Water-Quantity-Template', {
    props: ['identifyData'],
    template: `
        <div style="align-items: center; justify-content: center; font-size: 14px; font-family: Arial, sans-serif;">
            <div v-html="renderHeader()" />
            <div v-html="createSection('Station ID', 'StationID')" />
            <div v-html="createSection('Province', 'E_Province')" />
            <div v-html="createSection('Report Year', 'Report_Year')" />
            <div v-if="this.identifyData.loaded">
                <div style="display: flex; flex-direction: row; color: #a0aec0; font-weight: bold; padding-top: 5px;">
                    <div style="flex: 1 1 0%; width: 100%;">
                        Latitude
                    </div>
                    <div style="flex: 1 1 0%; width: 100%;">
                        Longitude
                    </div>
                </div>
                <div style="display: flex; flex-direction: row;">
                    <div style="flex: 1 1 0%; width: 100%;">
                        {{this.identifyData.data['Latitude']}}
                    </div>
                    <div style="flex: 1 1 0%; width: 100%;">
                        {{this.identifyData.data['Longitude']}}
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; padding-top: 5px; color: #4299e1;">
                    <span style="font-weight: bold; color: #a0aec0;">Links</span>
                    <span v-html="this.identifyData.data['E_DetailPageURL']"></span>
                    <span v-html="this.identifyData.data['E_URL_Historical']"></span>
                    <span v-html="this.identifyData.data['E_URL_RealTime']"></span>
                </div>
            </div>
        </div>
    `,
    methods: {
        renderHeader() {
            if (!this.identifyData.loaded) {
                return `
                <span style="display: flex; font-size: 20px; background-color: #e21e5e; color: white; padding: 4px; text-align: center;">
                    Loading...
                </span>
                `;
            } else if (this.identifyData.data['Symbol'] === '3') {
                return `
                    <span style="display: flex; font-size: 20px; background-color: #e53e3e; color: white; padding: 4px; text-align: center;">
                        ${this.identifyData.data['StationName']}
                    </span>
                `;
            } else {
                return `
                    <span style="display: flex; font-size: 20px; background-color: #3182ce; color: white; padding: 4px; text-align: center;">
                        ${this.identifyData.data['StationName']}
                    </span>
                `;
            }
        },
        createSection(title, id) {
            var val = this.identifyData.loaded ? this.identifyData.data[id] : 'Loading...';

            return `
            <div style="display: flex; flex-direction: column; padding-top: 5px;">
                <span style="color: #a0aec0; font-weight: bold;">
                    ${title}
                </span>
                <span>
                    ${val}
                </span>
            </div>
            `;
        }
    }
});