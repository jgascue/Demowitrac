<template>
    <div>
    <v-row no-gutters justify="center" align="center">
        <v-col cols="12" sm="8" md="6">
            <v-row class=" py-4 d-flex justify-center">
                <WitracLogo />
            </v-row>
        </v-col>
    </v-row>
    <v-row no-gutters>
        <v-col class="d-none d-sm-none d-lg-flex"></v-col>
        <v-col class="d-sm-block col-xs-12 col-sm-12 col-md-12">
            <h1> {{ title }} </h1>
            <v-card 
                tile
                class="align-center justify-center"
            >
                <v-row class=" pa-5">
                    <v-col class="d-flex pa-3 justify-start align-left">
                        Add any task: {{ list.length }}
                    </v-col>
                    <v-col class="d-flex pa-3 justify-end">
                        <v-btn v-if="list.length > 0" x-small class="btn btn-input" @click.prevent="removeAll"> Delete All</v-btn>
                    </v-col>
                </v-row>
            </v-card>
            <v-card
                tile
                class="d-flex pl-5 align-center justify-center padding-w--50"
            >
                <v-text-field 
                    v-model="newTask"
                    type="text"
                    name="newTask"
                    outlined
                    clearable
                    prepend-icon="mdi-share-circle"
                    class="white-text text-white"
                    placerholder="type your task"
                    @keyup.enter="addTask"
                >
                </v-text-field>

                <div class="d-flex justify-start align-stretch mb-7">
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
            <v-list-item-group multiple>
                <v-list-item v-for="(lit, i) in list" :key="i">
                    <template #default="{ active, toggle }">
                        <v-list-item-content
                            class="text-left"
                        >
                            <v-list-item-title :class="{done: active} ">
                                {{ lit.name  }}
                            </v-list-item-title>
                            
                            <div v-if="active" class="icon--checked">
                                
                                <div class="jobdone">
                                    
                                    <v-icon small color="green darken-3">mdi-check</v-icon>
                                    <em>
                                        <small>great! task done, something less to do</small>
                                    </em>
                                </div>
                            </div>
                            
                        </v-list-item-content>
                        <v-checkbox
                            class="ml-2 pl-5"
                            v-model="active"
                            :id="`task-${i}`"
                        ></v-checkbox>

                        <label v-show="!active" class="confirm-message">check</label>
                        <label v-show="active" class="confirm-message">checked</label>

                        <v-btn 
                            fab
                            ripple
                            x-small
                            color="red"
                            class="pa-0 ml-3" @click="deleteTask(i)">
                            <v-icon small class="white--text">mdi-close</v-icon>
                        </v-btn>
              
                    </template>

                </v-list-item>
            </v-list-item-group>
        </v-col>
        <v-col class="d-none d-lg-flex"></v-col>
    </v-row>
  </div>
</template>

<script>

import WitracLogo from '@/components/LogoWitrac.vue'


export default {
    components: {
        WitracLogo
    },
    data: () => {
        return {
            list: [],
            thereisList: false,
            checkbox: false,
            show: true,
            newTask: null,
            title: 'Get your work in order'
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
    methods: {
        addTask() {
            const value = this.newTask && this.newTask.trim();
            if (!value) {
                return;
            }
            this.list.push({
                name: this.newTask,
                done: false
            });
            this.newTask = "";
        },
        deleteTask(index) {
            this.list.splice(index, 1);
        },
        removeAll() {
            this.list = []
        },
    }

}

    /* import { defineComponent } from "vue";
    import { useAddList } from "./composables/useAddList";

    export default defineComponent {
    components: {},
    data: () => {
        return {
        data: {},
        list: [],
        tarea: null
        }
    }
    } */
</script>

<style scoped lang="scss">

    h1 {
        font-size: 1.8rem;
        margin: 1em;
        width: content;
        text-align: center;
        text-transform: uppercase;
        padding-bottom: 15px;

        &:before {
            content: "";
            display: flex;
            position: relative;
            background: rgba(172, 255, 47, 0.507);
            height: 10px;
            margin-left: 20px;
            bottom: -50px;
            border-radius: 6px;
            z-index: 1111;
            //animation: runner 1.3s ease-in-out infinite;
        }
    }

    @keyframes runner {
        0% {
            transform: translateX(0px);
        }
        45% {
            transform: translateX(230px);
        }
        55% {
            transform: translateX(calc(100%-30px));
        }
        100% {
            transform: translateX(2000px);
        }
    }
    .icon--checked {

    }

    .v-item--active {
        .icon--checked {
            transition: all 1s ease-in;
            color: rgb(8, 219, 8);
            font-size: 14px;
            text-decoration: none;
        }
    }
    .v-list-item {
        border-bottom: 1px dotted rgb(104, 104, 104);
    }
    .v-list-item__title {
        margin-bottom: -4px;
    }
    .v-label {
        font-size: 14px!important;
        margin-right: 25px!important;
    }
    .v-item {
        background: rgb(32, 39, 28);
        color: black;
        margin-bottom: 4px !important;
        &--active {
            background: rgb(110, 187, 66);
            border-radius: 4px;
            margin-bottom: 4px;
            border-bottom: 3px solid green;
        }
    }
    .jobdone {
        margin-bottom: -10px;
        padding-top: 10px;
        color: rgb(0, 49, 7);
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

    h1 {
        margin-bottom: 60px;
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