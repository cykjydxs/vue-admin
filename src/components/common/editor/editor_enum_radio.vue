<template>
    <el-radio-group
        v-model="model"
        v-bind='$attrs'
    >
        <el-radio
            v-for="item in candidate"
            :key="item[valuefield]"
            :label="item[valuefield]"
        >
            {{item[labelfield]}}
        </el-radio>
    </el-radio-group>
</template>

<script>
import _editor_enum_mixin from "./_editor_enum_mixin"
import _computed_model_mixin from "./_computed_model_mixin"

export default{
    name:'editor_enum_radio',
    inheritAttrs:true,
    mixins:[
        _editor_enum_mixin,
        _computed_model_mixin,
    ],
}
</script>