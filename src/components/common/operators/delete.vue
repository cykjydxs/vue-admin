<template>
    <el-button
        @click="handleClick"
        v-bind="triggerConfig"
    >
        {{triggerConfig.text}}
    </el-button>
</template>

<script>
import _id_mixin from "@/mixins/common/_id_mixin.js"
import {logError} from "@/widget/utility.js"
export default {
    name:"delete",
    mixins:[
        _id_mixin,
    ],
    props:{
        data:{
            type:Object
        },
        doDeleteRequest:{
            type:Function,
            required:true,
        },
        triggerConfig:{
            type:Object,
            default(){
                return {};
            },
        },
    },
    methods:{
        handleClick(){
            this.$confirm('确认删除？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(()=>{
                new Promise((resolve,reject)=>{
                    this.doDeleteRequest(resolve,this.data);
                }).then(()=>{
                    this.$emit('update');
                }).catch(logError);
            }).catch(logError);
        }
    },
}
</script>