import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '4bb86271b7114b7e93fa6a6dbde404d8'
                    }
                    'incident-manager-page': {
                        table: 'sys_ui_page'
                        id: 'beae2030f4044983b3a813853909c6c5'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '3136fbcde96647129ed06ab5be1186be'
                    }
                    'x_1118332_fluentin/main': {
                        table: 'sys_ux_lib_asset'
                        id: '0c7f273292b043aebf169517727f1a1c'
                    }
                    'x_1118332_fluentin/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '50a262c1733c42ddb6a70f3c0088ae2f'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '01a7f3e622d84729830bb05fe5505277'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '072cf82b2e284b34a6346f944f3eea14'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'short_description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '149642c54c8c4f0498177966348f7985'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '17e7f15009484784a39a8bc26c28cddf'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'status'
                            value: 'on_hold'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '18bf72ee73de46ae995af1593014938d'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'status'
                            value: 'resolved'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '1c75949220f746ee9260ab1795a23d5c'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '2c7a173ceab14b2290b3162e0106da8c'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'priority'
                            value: '4'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '32182b9114e24e409bf605157d86b52a'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'description'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '33f3b4e855f1418dad1fdac8c2ea2bf8'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'status'
                            value: 'in_progress'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '3cf81a71e068495688eda3a72e152c5b'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4a426aa6126c4b848d225abc36b40322'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'resolved_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5ef80bb0b111491c8d3ddc9c2ec6256a'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'priority'
                            value: '2'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '626727217057462a834bbc541cd4804e'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'resolved_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '768fff6448624106bf888a462aabd079'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'priority'
                            value: '3'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '77ce122961f8430197cb2357bb32f4e1'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '977367769cc045eaa55d5be502ece880'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'priority'
                            language: 'en'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9ce1ea754ffb4ac9b1b254e8c62c062d'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a38829557a7243168e0361221090a632'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'priority'
                            value: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd506a434249440e38e6ac22c12713800'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'status'
                            value: 'closed'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd6b623cdf5dc4c20a17d7638de19ac44'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'd96a242a13fa41e194f68a931aa28e45'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'priority'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'da1a8e09a1e4420a8e7d3db766534653'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'number'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dffa54dfff444283b926310ad108ec3c'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'description'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e0a908dbd9ad46d0ae76b724c405c0ac'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'short_description'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'ee7d9921328c475ea968eabc6f3604a6'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f0aa4652926648c293e91f3977234d4f'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'opened_at'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fb7fb080ea014d9e81843e84c2092c5d'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fc64108661c9468f84ecce12328c9ef7'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'opened_at'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fc7fb2f48e8c4e8a99c50fc093afa1fd'
                        key: {
                            name: 'x_1118332_fluentin_incident'
                            element: 'status'
                            value: 'new'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: 'feec95c9e52140baaf950e2a6cdf1d95'
                        key: {
                            category: 'x_1118332_fluentin_incident'
                            prefix: 'INC'
                        }
                    },
                ]
            }
        }
    }
}
