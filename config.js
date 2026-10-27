// config.js - ملف الاتصال السحابي المركزي

const SUPABASE_URL = "https://fwwfjuhrmfvzxsncjtek.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_j_eT4I2T0MK1K7Hl_ZxEZg_X7cWb-qO";

// تهيئة عميل Supabase
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// دالة مساعدة لإظهار/إخفاء كلمة المرور
function togglePassVisibility(inputId, icon) {
    const field = document.getElementById(inputId);
    if (!field) return;
    if (field.type === "password") {
        field.type = "text";
        icon.textContent = "🙈";
    } else {
        field.type = "password";
        icon.textContent = "👁️";
    }
}