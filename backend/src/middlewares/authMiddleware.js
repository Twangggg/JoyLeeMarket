// middleware/authMiddleware.js
import supabase from '../config/supabaseClient.js';

const requireAuth = async (req, res, next) => {
    // Lấy token từ header: "Authorization: Bearer <token>"
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
        return res.status(401).json({ error: 'Không tìm thấy token xác thực.' });
    }

    const token = authHeader.split(' ')[1]; 

    try {
        // Xác thực token với Supabase
        const { data: { user }, error } = await supabase.auth.getUser(token);

        if (error || !user) {
            return res.status(403).json({ error: 'Token không hợp lệ hoặc đã hết hạn.' });
        }

        // Gán thông tin user vào request để các route sau có thể dùng
        req.user = user;
        next();
    } catch (err) {
        res.status(500).json({ error: 'Lỗi máy chủ nội bộ.' });
    }
};

export default requireAuth;