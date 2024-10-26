import React, { Component } from 'react';

export default class Item extends Component {
    render() {
        const items = [
            {
                icon: "bi bi-fonts",
                title: "Bảng phiên âm (IPA)",
                description: "Luyện nghe, phát âm chuẩn với 44 âm trong bảng phiên âm quốc tế IPA"
            },
            {
                icon: "bi bi-chat-dots",
                title: "1000+ câu giao tiếp",
                description: "Luyện nghe, nói câu tiếng Anh giao tiếp hàng ngày cùng Dyno"
            },
            {
                icon: "bi bi-clipboard-data",
                title: "Từ vựng với Flashcard",
                description: "Flashcard phương pháp học từ vựng nổi tiếng. Nay hoàn toàn miễn phí trên Dynonary"
            },
            {
                icon: "bi bi-book",
                title: "Từ điển trong Dynonary",
                description: "Danh sách từ vựng được phân loại theo cấp độ, loại từ, động từ, danh từ, tính từ"
            },
            {
                icon: "bi bi-tree",
                title: "Từ vựng TOEIC",
                description: "Các từ vựng thường gặp trong đề thi TOEIC, bao gồm những từ và cụm từ quan trọng mà thí sinh cần nắm vững để có thể hiểu và trả lời các câu hỏi"
            },
            {
                icon: "bi bi-heart",
                title: "Từ vựng yêu thích của bạn",
                description: "Danh sách những từ vựng yêu thích mà bạn đã lưu lại không chỉ bao gồm những từ mang ý nghĩa sâu sắc mà còn thể hiện sở thích cá nhân của bạn trong việc khám phá và tìm hiểu về ngôn ngữ,"
            },
            {
                icon: "bi bi-activity",
                title: "Động từ bất quy tắc",
                description: "Tất cả những động từ bất quy tắc trong tiếng Anh đều có những hình thức khác nhau khi được chia theo thì, và việc nắm vững các động từ này là rất quan trọng cho việc học ngôn ngữ"
            },
            {
                icon: "bi bi-graph-up",
                title: "Ngữ pháp",
                description: "Danh sách tổng hợp những cấu trúc câu trong tiếng Anh"
            },
            {
                icon: "bi bi-controller",
                title: "Play Games",
                description: "Ôn luyện kiến thức hiệu quả và đỡ nhàm chán hơn qua việc chơi game cùng Dyno nhé"
            },
            {
                icon: "bi bi-trophy",
                title: "Bảng xếp hạng",
                description: "Cùng xem thành tích của bạn bè và những người khác nhé"
            },
            {
                icon: "bi bi-person-plus",
                title: "Đóng góp",
                description: "Dyno rất mong được sự đóng góp của bạn. Bạn có thể thêm từ mới, sửa lỗi sai"
            }
        ];

        return (
            <section className="pt-4">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        {items.map((item, index) => (
                            <div className="col-lg-6 col-xxl-4 mb-5" key={index}>
                                <button className="btn btn-item border-black bg-white shadow-sm p-4 w-100 text-start d-flex flex-column" style={{ height: '100%' }}>
                                    <div className="d-flex align-items-center mb-2 justify-content-center">
                                        <div className="feature bg-primary text-white rounded-3 d-flex align-items-center justify-content-center me-3">
                                            <i className={`${item.icon} fs-2`} />
                                        </div>
                                        <div className="text-center flex-grow-1"> {/* Thêm flex-grow-1 để căn giữa */}
                                            <h2 className="fs-5 fw-bold mb-1 text-dark">{item.title}</h2>
                                            <p className="mb-0 text-muted">{item.description}</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
