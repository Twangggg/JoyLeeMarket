# ** 📚 JoyLeeMarket - Book E-commerce Platform **

## Dự án website thương mại điện tử chuyên bán sách (Clone Tiki), được xây dựng theo kiến trúc Client-Server.

# 🚀 Tech Stack
Frontend: ReactJS (Vite), Tailwind CSS.
Backend: Node.js, ExpressJS.
Database: Supabase (PostgreSQL).
DevOps: Docker & Docker Compose.

# 🛠 Yêu cầu cài đặt (Prerequisites)
Trước khi bắt đầu, đảm bảo máy bạn đã cài:
- Docker Desktop (Bắt buộc để chạy môi trường đồng bộ).
- Node.js (Để IDE hỗ trợ gợi ý code - Intellisense).
- Git.

# ⚙️ Hướng dẫn cài đặt & Chạy dự án (Docker)
- Bước 1: Clone dự án
```
	git clone https://github.com/Twangggg/JoyLeeMarket.git
	cd JoyLeeMarket
```

Bước 2: Khởi chạy với Docker
Tại /JoyLeeMarker, chạy lệnh sau trên terminal
```
	docker-compose up --build
```  

- Chạy lần đầu hoặc khi vừa pull code mới về (để cài npm install tự động)

### Những lần sau chỉ cần chạy: 
```
	docker-compose up
```

Frontend truy cập tại: http://localhost:5173
Backend API truy cập tại: http://localhost:5000

```
JoyLeeMarket/

├── docker-compose.yml   # Cấu hình Docker toàn dự án
├── README.md            # Bạn đang đọc nó
├── backend/             # Code API (Team BE)
│   ├── src/
│   │   ├── controllers/ # Xử lý request
│   │   ├── services/    # Logic nghiệp vụ & DB
│   │   ├── routes/      # Định tuyến API
│   │   ├── config/      # Config tới database
│   │   ├── utils/       # chứa các hàm thông dụng
│   │   └── middlewares/ # chứa các middlewares
│   ├── Dockerfile       # Cấu hình Docker cho BE
│   └── package.json
└── frontend/            # Code UI (Team FE)
    ├── src/
    ├── Dockerfile       # Cấu hình Docker cho FE
    └── package.json
```
# 🤝 Quy trình làm việc (Git Flow)
Không commit trực tiếp vào nhánh main.

Mỗi tính năng tạo một nhánh riêng:
- BE: feature/be/(name-feature), feature/be/auth
- FE: feature/fe/(name-feature), feature/fe/homepage

Code xong -> Push lên Github -> Tạo Pull Request (PR) để review code trước khi merge vào nhánh dev.
Happy Coding! 🚀