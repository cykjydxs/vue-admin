<template>
    <editor_enum_select 
        v-model="model" 
        :candidate="candidate"
        v-bind="$attrs"
    ></editor_enum_select>
</template>

<script>
import _props_value_number_mixin from "./_props_value_number_mixin.js"
import _computed_model_mixin from "./_computed_model_mixin.js"

export default{
    name:'editor_bool',
    mixins:[
        _computed_model_mixin,
        _props_value_number_mixin,
    ],
    components:{
        editor_enum_select:()=>import("./editor_enum_select.vue"),
    },
    props:{
        trueLabel:{
            type:String,
            default:"是",
        },
        trueValue:{
            type:[String,Boolean,Number],
            default:1,
        },
        falseLabel:{
            type:String,
            default:"否",
        },
        falseValue:{
            type:[String,Boolean,Number],
            default:0,
        },
    },
    computed:{
        candidate(){
            return [
                {value:this.falseValue,label:this.falseLabel},
                {value:this.trueValue,label:this.trueLabel},
            ];
        }
    },
}
</script>