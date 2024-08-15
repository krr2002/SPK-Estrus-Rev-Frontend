import { ref } from 'vue';

// State global untuk peran pengguna
export const userRole = ref<string | null>(null);

// Fungsi untuk mengubah peran pengguna
export const setUserRole = (role: string | null) => {
  userRole.value = role;
};
