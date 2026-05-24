// Lấy các phần tử từ HTML thông qua ID
const btn = document.getElementById('actionBtn');
const title = document.getElementById('title');

// Thêm sự kiện: Khi click vào nút thì làm gì đó
btn.addEventListener('click', function() {
    // Thay đổi chữ và màu của tiêu đề
    title.textContent = 'Tuyệt vời! 🎉';
    title.style.color = '#0070f3';
    
    // Thay đổi chữ và màu của nút bấm
    btn.textContent = 'Bạn đã nhấn thành công!';
    btn.style.backgroundColor = '#10b981'; // Đổi sang màu xanh lá
});
