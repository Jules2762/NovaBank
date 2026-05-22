<template>

    <div class="flex flex-col gap-y-2 " v-if="type != 'checkbox'">
        <label :for="name" class="label" v-if="label">{{ label }}</label>
        <div class="flex flex-row items-center w-full h-10 bg-surface px-3 py-1 rounded-sm" :class="styleOnError()">
            <div class=" pr-2 border-r border-text-disabled text-text-disabled" v-if="icon">
                <component :is="icon" />
            </div>
            <!-- //input -->
            <input :type="type" :id="name" :placeholder="placeholder" v-model="data"
                class="outline-none w-full h-10 px-2 text-text-disabled placeholder:text-text-disabled ">

        </div>
        <p class="text-red-700" v-if="error">{{ error }}</p>
    </div>
    <div v-if="type == 'checkbox'" class="flex items-center gap-3">

        <input :id="name" type="checkbox" class="peer h-5 w-5  cursor-pointer      appearance-none      rounded-md border border-border bg-surface

      transition-all
      duration-200

      checked:border-primary
      checked:bg-primary

      hover:border-primary

      focus:ring-2
      focus:ring-primary/30
      focus:outline-none

      disabled:cursor-not-allowed
      disabled:opacity-50
    ">

        <label :for="name" v-if="label" class="
      text-small
      label normal-case

      cursor-pointer
      select-none

      transition-colors

    ">
            {{ label }}
        </label>

    </div>
</template>
<script setup lang="ts">
import { computed, type Component, type InputTypeHTMLAttribute } from 'vue';

type propsType = {
    label?: string,
    modelValue?: string | number,
    placeholder?: string,
    name?: string,
    type?: InputTypeHTMLAttribute
    error?: string,
    icon?: Component
}
const props = withDefaults(defineProps<propsType>(), {
    type: "text"
})
const emit = defineEmits(['update:modelValue'])
const data = computed({
    get(): string | number | undefined {
        return props.modelValue
    },
    set(value): void {
        emit('update:modelValue', value)
    }
})
function styleOnError(): string {
    if (props.error) {
        return "border-2 border-danger"
    }
    return ""
}
</script>