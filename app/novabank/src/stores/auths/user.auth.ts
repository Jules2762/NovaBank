import { defineStore } from "pinia";
import type { User } from "../../models/user.model"; 
import { computed, ref } from "vue";

export const userAuthStore = defineStore(
  "auth",
  () => {
    const user = ref<User>();
    const token = ref<string | null>("");
    const isAuthentificated = computed(() => !!token.value);
    function login(user: User, token: string): void {}
    function logout(): void {}
    return {
      user,
      token,
      isAuthentificated,
      login,
      logout,
    };
  },
  {
    persist: {
      storage: sessionStorage,
    },
  },
);
