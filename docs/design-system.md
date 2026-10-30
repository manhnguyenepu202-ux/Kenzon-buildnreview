# BuildNReview: nhận diện thiết kế

Tạo ban đầu bằng skill ui-ux-pro-max (gợi ý: slate + đỏ, Outfit/Rubik, hướng "motion-driven"), sau đó điều chỉnh theo skill frontend-design để không giống khuôn mẫu và không giống trang tham khảo:

- Outfit/Rubik không có bộ ký tự tiếng Việt → dùng **Archivo Variable** (có tiếng Việt, có trục độ rộng `wdth`). Một họ chữ duy nhất; tiêu đề dùng độ rộng 125% (expanded), số liệu dùng 82% (condensed) với số đều cột.
- Trang tham khảo dùng nền kem + đen + xanh chanh; ta dùng **xanh bản vẽ + giấy lạnh + cam an toàn**, gợi xưởng và bản vẽ kỹ thuật.
- Bỏ hiệu ứng chuyển động dày đặc của gợi ý "motion-driven": chỉ có chuyển màu nhẹ khi rê chuột; tôn trọng `prefers-reduced-motion`.

## Màu

| Token | Hex | Dùng cho |
|---|---|---|
| `--ink` | #10284A | chữ chính, nền hero, phần kết luận |
| `--paper` | #EDF0F3 | nền trang |
| `--surface` | #FFFFFF | thẻ, bảng |
| `--signal` | #F26A1B | vạch điểm, nút mua (chữ trên nút dùng `--ink`) |
| `--signal-text` | #B4480C | chữ cam trên nền sáng (đạt 4.5:1) |
| `--steel` | #52627A | chữ phụ |
| `--rule` | #CFD7E1 | đường kẻ |

## Điểm nhấn duy nhất: thước điểm

`ScoreRuler` vẽ điểm như thước kẹp: vạch lớn mỗi điểm, vạch nhỏ mỗi nửa điểm, phần đạt được tô cam. Dùng thống nhất ở thẻ, phiếu chấm, trang review, trang đối đầu và ảnh OG. Mọi thứ khác giữ yên tĩnh.

## Quy tắc

- Không dùng nhãn chữ in hoa giãn cách phía trên tiêu đề, không tô riêng một chữ trong tiêu đề, không nối thông tin bằng dấu chấm giữa.
- Đánh số chỉ cho nội dung là trình tự (quy trình chấm điểm).
- Vùng bấm tối thiểu 44 × 44 px, viền focus cam 3px.
- Hình minh họa sản phẩm là bản vẽ nét trên lưới, màu theo `tone` của từng sản phẩm.
