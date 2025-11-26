import supabase from '../config/supabaseClient.js';

export const registerService = async (email, password, fullName) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName,
          role: 'customer',
        },
      },
    });

    if (error) throw error;
    return {
      success: true,
      message:
        'Đăng ký thành công! Vui lòng kiểm tra email để xác thực (nếu bật confirm).',
      user: data.user,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

export const loginService = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) throw error;

    // Trả về access_token và refresh_token cho Client (React) lưu trữ
    return {
      success: true,
      message: 'Đăng nhập thành công!',
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
      user: data.user,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

export const logoutService = async () => {
  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      return { success: false, error: error.message };
    }

    return { success: true, message: 'Đã đăng xuất!' };
  } catch (error) {
    return { success: false, error: err.message };
  }
};

export const refreshTokenService = async (refresh_token) => {
  try {
    const { data, error } = await supabase.auth.refreshSession({
      refresh_token: refresh_token
    });

    if (error) throw error;

    return {
      success: true,
      access_token: data.session.access_token,
      refresh_token: data.session.refresh_token,
      user: data.user
    };
  } catch (error) {
    return {
      success: false,
      error: err.message
    };
  }
}