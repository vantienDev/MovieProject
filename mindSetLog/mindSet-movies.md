movies DB

# Phim Tb

    mã phim (int) PK
    tên phim (varchar)
    trailer (varchar)
    hình ảnh (varchar)
        # Banner
            mã banner (int)
            mã phim (int)
            hình ảnh (varchar)

    mô tả (varchar)
    ngày khởi chiếu (date)
    đánh giá (int)
    hot (boolean)
    sạp chiếu (varchar)

# Hệ Thống rạp tb

    mã hệ thống rạp (int) PK
    tên hệ thống rạp (varchar) PK
    logo (varchar)

    có nhiều hệ thống rạp: CGV, Lotte Cinema, DCINE

    Các hệ thống sẽ chia thành từng cụm theo 1 khu vực và tỉnh thành nhất định.

# Cụm Rạp

    mã cụm rạp (int) PK
    tên cụm rạp (varchar)
    mã hệ thông rạp (varchar) FK
    địa chỉ (varchar)

# Rạp phim

    mã rạp (int) PK
    tên rạp (varchar)
    mã cụm rạp (int) FK

# Ghế

    mã ghế (int) PK
    tên ghế (varchar)
    loại ghế (varchar)
    mã rạp (int) FK

# Lịch chiếu

    mã lịch chiếu (int) PK
    mã rạp (int) FK
    mã phim (int) FK
    ngày giờ chiếu (datetime)
    giá vé (int)

# Người dùng

    tài khoản (int) PK
    họ tên (varchar)
    email (varchar)
    số đt (varchar)
    mật khậu (varchar)
    loại người dùng (varchar)

# Đặt vé

    tài khoản (int) FK
    mã lịch chiếu (int) FK
    mã ghế (int) FK

### Rạp Phim và Phim quan hệ với nhau thông qua lịch chiếu

    >> Mối quan hệ N N

    > Rạp phim => lịch chiếu => phim
    > Phim => rạp chiếu, lịch chiếu
    > Lịch chiếu => phim, rạp chiếu

### Lịch chiếu và người dùng quan hệ thông qua Đặt Vé

    > Đặt vé phải cần tk và mã phim
    > Đặt vé => Lịch chiếu => tài khoản người dùng mã ghế

<!-- tạo các mối quan hệ cho các table -->

1 movie có nhiều banner: 1 - n
1 hệ thông rạp có nhiều cụm rạp: 1 - n
trong 1 cụm rạp có nhiều rạp: 1 - n
trong 1 rap có nhiều ghế. 1 - n
1 rap có thể chiếu nhiều phim và có nhiều lịch chiếu

1 suất chiếu có nhiều người đặt trước

# api route:

    - 1 Banner:
        - get all banners. [+]
        - get banner by id. [+]
        - add new banner [+]
        - delete banner [+]

    - 2 Movie:
        - get all movie. [+]
        - get movie info by id. [+]
        - get movie info by name. [+]
        - get movie to pagination. [+]
        - get banners for movie [+]
        -------------------------------
        - add new movie [+]
            1. Tên phim.
            2. Ảnh phim. "ko cần thiết có thể update sau".
            3. Trailer.
            4. Mô tả.
            5. Ngày công chiếu.
            6. đánh giá

        - update trailer for a movie [+]
        - update image for a movie [+]
        - delete movie [+]

    3 Hệ thống rạp.
        - Lấy các hệ thống rạp. [+]

    4 Rạp phim.
        - Lấy danh sách các rạp trên toàn nước. [+]
        - Lấy danh sách rạp theo tỉnh thành. [+]
        - Lấy danh sách rạp theo hệ thống rạp. [+]

    5 Ghế.
        - Lấy danh sách ghế theo rạp phim. [+]

    6 Lịch chiếu.
        - Lấy lịch chiếu theo rạp. [+]
        - Lấy lịch chiếu theo hệ thống rạp. [+]

    7 Đặt vé.

    8 Users.
        - Lấy các loại người dùng.
        - Đăng ký.
        - Đăng nhập.
        ----------------------------

        > Phía quản trị
            > Các quyền của quản trị viên.
                - Lấy danh sách người dùng.
                - Lấy danh sách người dùng theo phân trang.
                - Tìm kiếm người dùng.
                - Tìm kiếm người dùng theo phân trang.
                - Lấy thông tin người dùng.
                - Lấy thông tin tài khoản.
                - Xóa người dùng.
        ----------------------------
        > Phía khách hàng
            > Các quyền của khách hàng.
                - Cập nhật thông tin.
                - Xóa người dùng.
