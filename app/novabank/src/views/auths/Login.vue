<template>
    <div class="w-screen h-screen grid grid-cols-2 items-center ">
        <div class=" flex flex-col w-[80%] place-self-center">
            <div class="flex flex-col gap-y-5">
                <div>
                    <img src="/logo/Novabank-blue-logo.svg" alt="Novabank-blue-logo" class="h-auto w-52">
                    <h1 class=" h1 ">The future of <br> <span class="text-text-special">Institutional-grade</span> <br>
                        fintech.</h1>
                </div>
                <div class="flex flex-col gap-y-3">
                    <div class="flex flex-row gap-x-2" v-for="(value, index) in quality_list" :key="index">
                        <component :is="value.icon" class="text-md text-primary"></component>
                        <div class="flex flex-col">
                            <h5 class="h5">{{ value.title }}</h5>
                            <p class="text-small">{{ value.description }}</p>
                        </div>
                    </div>

                </div>
            </div>
            <div class=""></div>
        </div>
        <div
            class="place-self-center flex flex-col gap-y-3 w-[70%] h-fit bg-card bg-opacity-50 border border-solid border-[#253147cc] px-8 py-12 rounded-md">
            <div>
                <h2 class="h2 text-center">Welcome back</h2>
                <p class="text-small text-center">Enter your credentials to access your dashboard</p>
            </div>
            <form class="flex flex-col gap-4" @submit.prevent="onSubmit()">
                <Input label="Corporate email" v-model="data.email" type="email" name="email" :icon="Mail"
                    :error="errors.email"></Input>
                <Input label="Secure password" v-model="data.password" type="password" name="password" :icon="Lock"
                    :error="errors.password"></Input>
                <div class="flex flex-row items-center justify-between">
                    <Input type="checkbox" name="remember_me" label="Remember this device for 30 days"></Input>
                    <button type="button" class="label capitalize underline" @click="router.push({name:'FORGOT_PASSWORD'})">Forgot password?</button>
                </div>
                <Button :loading="options.loading" type="submit" :disabled="options.disabled" :icon="ArrowRight"
                    icon-position="right" loading-text="connecting..." text="Signin to portal"></Button>
                    <div class="flex flex-row items-center gap-x-3">
                        <p class="text-small">New to NovaBank ?</p>
                        <button type="button" class="label capitalize underline" @click="router.push({name:'REGISTER'})">Open an Account</button>
                    </div>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Input from '../../components/ui/Input.vue';
import Button from '../../components/ui/Button.vue';
import { ArrowRight, BrainCircuitIcon, Globe2Icon, Lock, Mail, ShieldCheckIcon } from 'lucide-vue-next';
import { validateEmail, validatePassword } from '../../others/validators';
import axios from 'axios';
import router from '../../routes';
const data = ref({
    email: "",
    password: ""
})
const errors = ref({
    email: "",
    password: ""
})
const options = ref({
    loading: false,
    disabled: false
})
const quality_list = [
    {
        icon: ShieldCheckIcon,
        title: "Military-grade encryption",
        description: "Your assets protected  by miulti-layered hardware securityand end-to-end encryption protocols."
    },
    {
        icon: Globe2Icon,
        title: "Real-time global settlement",
        description: "Instant cross-border liquidity and settlement through our proprietary global payment rail network."
    },
    {
        icon: BrainCircuitIcon,
        title: "AI-driven financial insights",
        description: "Predictive analytics and risk assessment tools powered by next-generation neural engines."
    },
]
function onSubmit(): void {

    const emailError = validateEmail(data.value.email)
    const passwordError = validatePassword(data.value.password)

    errors.value = {
        email: emailError,
        password: passwordError
    }

    if (emailError || passwordError) {
        return
    }

    login()
}
function login(): void {
    options.value.loading = true
    options.value.disabled = true
    axios.post("http://ex.com/api")
        .then((res) => {
            
        })
        .catch((err) => {

        })
        .finally(() => {
            router.push({name:'HOME'})
            options.value.loading = false
            options.value.disabled = false
        })
}
</script>