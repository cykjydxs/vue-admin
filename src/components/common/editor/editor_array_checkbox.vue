<template>
    <el-checkbox-group
        v-model="model"
        v-bind="$attrs"
    >
        <el-checkbox 
            v-for="item in candidate" 
            :key="item[valuefield]" 
            :label="item[valuefield]"
        >
            {{item[labelfield]}}
        </el-checkbox>
    </el-checkbox-group>
</template>

<script>
import _editor_array_mixin from "./_editor_array_mixin"
import _computed_model_mixin from "./_computed_model_mixin"
import _props_value_array_mixin from "./_props_value_array_mixin"

export default{
    name:'editor_array_checkbox',
    mixins:[
        _editor_array_mixin,
        _computed_model_mixin,
        _props_value_array_mixin,
    ],
}
</script>