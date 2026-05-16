<template>
    <button
        class="flex   items-center justify-center gap-x-3 font-semibold h-10 rounded disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
        :class="[getIconPositionStyle(), getVariantStyle()]">
        <component v-if="icon || loading" :is="!loading ? icon : LoaderCircleIcon"
            :class="loading ? 'animate-spin duration-300' : ''"></component>
        <span v-if="text || loading">{{ loading ? loadingText : text }}</span>
    </button>
</template>
<script setup lang="ts">
import { LoaderCircleIcon } from 'lucide-vue-next';
import type { Component } from 'vue';

type propsType = {
    text?: string,
    loadingText?: string,
    loading?: boolean,
    icon?: Component,
    iconPosition?: "left" | "right",
    variant?: "primary" | "secondary" | "outlined" | "text",
}
const props = withDefaults(defineProps<propsType>(), {
    iconPosition: "left",
    variant: "primary"
})
function getIconPositionStyle(): string {

    if (props.iconPosition == "right") {
        if(!props.loading){
            return "flex-row-reverse"
        } else {
            return "flex-row"
        }
        return "flex-row-reverse"
    } else {
        return "flex-row"
    }
}
function getVariantStyle(): string {

    switch (props.variant) {
        case "secondary":
            return "bg-secondary"
        case "outlined":
            return "bg-transparent text-white border-2 border-white "
        case "text":
            return "text-white"
        default:
            return " bg-primary";
    }


}

</script>