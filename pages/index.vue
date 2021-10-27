<template>
    <div>

        <WitracLogo />

        <v-row no-gutters>
            <v-col class="d-none d-sm-none d-lg-flex"></v-col>
            <v-col class="d-sm-block col-xs-12 col-sm-12 col-md-12 col-lg-6">

                <h1> {{ title }} </h1>

                <v-card 
                    tile
                    class="align-center justify-center"
                >
                    <v-row class="pa-5">
                        <v-col class="d-flex pa-3 justify-start align-left">
                            Add any task: 
                        </v-col>
                        <v-col class="d-flex pa-3 justify-end">
                            <v-btn v-if="list.length > 0" x-small class=""
                                @click.prevent="removeAll"
                            > 
                                Delete All {{ list.length }}
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card
                    tile
                    class="d-flex pl-5 align-center flex-grow-1 justify-center padding-w--50"
                >
                    <v-text-field 
                        v-model="newTask"
                        type="text"
                        name="newTask"
                        outlined
                        clearable
                        prepend-icon="mdi-share-circle"
                        class="text-white"
                        placeholder="type new task"
                        @keyup.enter="addTask"
                    >
                    </v-text-field>

                    <div class="d-flex justify-start flex-shrink-1 align-stretch ma-7">
                        <v-select
                            v-model="item"
                            class=""
                            :items="Object.keys(categories)"
                            label="Priority"
                            outlined
                            dense
                            @change="selectCategory(item, type)"
                        >
                        </v-select>
                        <v-btn
                            icon
                            fab
                            small
                            class="ml-3"
                            @click.prevent="addTask"
                        >
                            <v-icon color="orange lighten-1">
                                mdi-plus-circle
                            </v-icon>
                        </v-btn>
                    </div>
                </v-card>

                <ListResults :list="list" :active="active" @updateList="updateList" />

            </v-col>
            <v-col class="d-none d-lg-flex"></v-col>
        </v-row>
    </div>
</template>

<script>

import WitracLogo from '@/components/LogoWitrac.vue'
import ListResults from '@/components/ListResults.vue'


export default {
    components: {
        WitracLogo,
        ListResults
    },
    data: () => {
        return {
            categories: {
                'Hight': 'red',
                'Medium' : 'pink',
                'Low' : 'lime',
            },
            list: [],
            item: null,
            type: null,
            active: false,
            thereisList: false,
            checkbox: false,
            show: true,
            newTask: null,
            title: 'Jobs for the day'
        }
    },
    computed: {
        checkList: () => {
            if (list.lenght > 0 ) {
                this.thereisList = true
                return this.thereisList
            }
        }
    },
    mounted() {
        if (localStorage.getItem('list')) {
            try {
                this.list = JSON.parse(localStorage.getItem('list'));
            } catch(e) {
                localStorage.removeItem('list');
            }
        }
    },
    methods: {
        addTask() {
            const value = this.newTask;
            if (!value) {
                return;
            }
            this.list.push({
                name: this.newTask,
                check: false,
                priority: this.list.priority,
                color: this.list.color
            });
            this.newTask = "";
            this.saveList();
        },
        updateList(index) {
            this.list.splice(index, 1);
            this.saveList();
        },
        removeAll() {
            this.list = []
            this.saveList();
        },
        saveList() {
            const parsed = JSON.stringify(this.list);
            localStorage.setItem('list', parsed);
        },

        selectCategory(item, type) {
            this.list.priority = item
            this.list.color = type
        }
    }

}

</script>

<style scoped lang="scss">

    h1 {
        font-size: 1.8rem;
        margin: 10px;
        width: content;
        text-align: center;
        text-transform: uppercase;
        padding-bottom: 15px;
        margin-bottom: 60px;

        &:before {
            content: "";
            display: flex;
            position: relative;
            background: rgba(172, 255, 47, 0.507);
            height: 10px;
            margin-left: 20px;
            bottom: 60px;
            margin: 0 20%;
            border-radius: 6px;
        }
    }

    .v-list-item {
        border-bottom: 1px dotted rgb(104, 104, 104);
    }
    .v-list-item__title {
        margin-bottom: -4px;
    }
    .select--priority {
        max-width: "60px";
        width: "50px";
    }
    .v-label {
        font-size: 14px!important;
        margin-right: 25px!important;
    }

    li {
        list-style: none;
    }
    .logo {
        background-color: #1E1E1E;
    }
    .done {
        color: white;
        text-decoration: line-through;
    }

    .confirm-message {
        font-size: 14px;
    }

    .btn-input {
        margin: 0 10px 0;
    }

    .padding{
        &-w--50 {
            padding-left: 50px !important;
            padding-right: 50px !important;
        }
    }
    
</style>