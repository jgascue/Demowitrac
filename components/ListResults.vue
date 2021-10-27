<template>

    <v-list-item-group v-model="model"  multiple>

            <template v-for="(li, index) in list" name='#default'>

                <div :key="index" class="d-flex">
                    
                    <v-col class="task d-flex flex-grow-1 flex-shrink-0 pa-0 pw-2"
                            :class="li.check ? 'ischecked' : ''"
                            @click="checkTask(li)"
                        >
                        <v-chip
                            v-if="li.priority"
                            outlined 
                            class="pw-2 task--priority"
                        >
                               <small> {{ li.priority }}</small>
                        </v-chip>
                        <div class="task--number">
                            {{index+1}}
                        </div>

                        <v-list-item-action>
                            <v-checkbox 
                                :id="`task-${index}`"
                                :name="li+index"
                                class="pa-3 pl-5 pr-3"
                                :input-value="li.check"
                            >
                            </v-checkbox>

                        </v-list-item-action>

                        <v-list-item-content class="d-flex flex-grow-1 flex-shrink-0">

                            <v-list-item-title>
                                {{ li.name  }}
                            </v-list-item-title>

                            <div v-if="li.check">
                                <em><small class="text--black">great! task done, something less to do</small></em>
                            </div>
                        
                        </v-list-item-content>

                        <v-icon 
                            v-if="li.check" 
                            align-right 
                            large 
                            color="green darken-3"
                            class="mw-5 pw-5 pl-5 pr-5 mr-5 ml-5"
                        >
                            mdi-check
                        </v-icon>

                    </v-col>
                    <v-col 
                        class="task col-check" 
                        :class="li.check ? 'ischecked' : ''"
                        color="blue-grey lighten-1"
                    >
                        <v-btn 
                            fab
                            ripple
                            small
                            elevation="-1"
                            color="blue-grey darken-4"
                            class="m-5 pa-5 align-center justify-center" @click="deleteTask(index)">
                            <v-icon class="white--text">mdi-delete-restore</v-icon>
                        </v-btn>
                    </v-col>

                </div>
            </template>
    </v-list-item-group>
</template>

<script>

export default {
    name: 'ListResults',
    props: {
        list: Array,
    },
    data () {
        return {
            active: null,
            model: [0]
        }
    },
    methods: {
        checkTask(lit) {
            lit.check = !lit.check

        },
        deleteTask(index) {
            this.$emit('updateList', index);
        },
     }
}

</script>

<style scoped lang="scss">
    .container {
        padding: 5px 20px !important;
    }
    .v-item {
        &--active {
            margin-bottom: 4px;
            border-radius: 4px;
            border-bottom: 3px solid green;
            .icon--checked {
                color: rgb(8, 219, 8);
                font-size: 14px;
                text-decoration: none;
            }
        }
    }
    .done, .ischecked {
        transition: all 1s ease-in;
        color: rgb(51, 51, 51) !important;
        background: #95c249 !important;
        border-bottom: 3px solid green;

        & .v-list-item__title {
            text-decoration: line-through;
            color: rgb(23, 26, 23) !important;
        }
        .task--number {
            background: rgba(79, 165, 5, 0.336);
            border-color:  rgba(51, 51, 51, 0.267);
        }
    }

    .col-check {
        width: auto;
        max-width: 60px;
    }
    .task {
        background: #f6a607;
        margin-bottom: 2px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        &__title {
            color: black;
        }
        &--number {
            background: rgba(255, 255, 255, 0.329);
            border-radius: 50%;
            width: 25px;
            height: 25px;
            text-align: center;
            margin: 0 15px 0 5px;
            margin-top: -30px;
            padding-top: 2px;
            color: #142c06;
        }
        &--priority {
            position: absolute;
            left: 4px;
            margin-top: 30px;
            padding: 3px;
            height: 20px;
            line-height: 20px;
        }
    }

</style>