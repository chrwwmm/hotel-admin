<template>
    <div class="sidebar">
        <el-menu
            default-active="onRoutes"
            class="el-menu-vertical-demo"
            background-color="#2E363F"
            text-color="#fff"
            active-text-color="#fff"
            unique-opened
            router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index">
                        <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index">
                        <i :class="item.icon"></i>{{ item.title }}
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                	{
                        icon: 'el-icon-menu',
                        index: 'room',
                        title: '客房管理',
                        subs: [
                            {
                                index: 'room',
                                title: '全部房间'
                            },
                            {
                                index: 'emptyRoom',
                                title: '空闲房间'
                            },
                            {
                                index: 'checkedinRoom',
                                title: '已入住房间'
                            },
                            {
                                index: 'reservedRoom',
                                title: '已预定房间'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: 'equipmentControl',
                        title: '统计报表',
                        subs: [
                            {
                                index: 'equipmentControl1',
                                title: '设备管理1'
                            },
                            {
                                index: 'equipmentControl2',
                                title: '设备管理2'
                            }
                        ]
                    },
                    {
                        icon: 'el-icon-menu',
                        index: 'equipmentp',
                        title: '账户配置',
                        subs: [
                            {
                                index: 'equipmentp1',
                                title: '配置1'
                            },
                            {
                                index: 'equipmentp2',
                                title: '配置2'
                            }
                        ]
                    }

                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 222px;
        left: 0;
        top: 60px;
        bottom:0;
        background: #2E363F;
    }
    .el-menu-item.is-active{
        background-color: #00C1DE !important;
    }
    .el-menu { 
        border-right: none;
    }
</style>
