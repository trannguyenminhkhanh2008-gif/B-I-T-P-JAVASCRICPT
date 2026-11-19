// Tổng hợp thẻ: đổi màu nền, đồng hồ, kiểm tra form đăng ký

function datMauNen(mau) {
  document.body.style.backgroundColor = mau;
}

function mauNgauNhien() {
  var r = 180 + Math.floor(Math.random() * 70);
  var g = 180 + Math.floor(Math.random() * 70);
  var b = 180 + Math.floor(Math.random() * 70);
  return "rgb(" + r + "," + g + "," + b + ")"; // màu nhạt để dễ đọc chữ
}

function capNhatDongHo() {
  var bay = new Date();
  document.getElementById("dong-ho").textContent =
    bay.toLocaleDateString("vi-VN") + " - " + bay.toLocaleTimeString("vi-VN");
}

window.addEventListener("DOMContentLoaded", function () {
  var chon = document.getElementById("chon-mau");
  chon.addEventListener("change", function () {
    datMauNen(chon.value);
  });

  document.getElementById("nut-ngau-nhien").addEventListener("click", function () {
    datMauNen(mauNgauNhien());
  });

  capNhatDongHo();
  setInterval(capNhatDongHo, 1000);

  // Kiểm tra form đăng ký
  document.getElementById("form-dang-ky").addEventListener("submit", function (e) {
    e.preventDefault();
    var ten = document.getElementById("ten").value.trim();
    var mk = document.getElementById("mk").value;
    var gioiTinh = document.querySelector("input[name='gt']:checked");

    if (ten === "") return alert("Vui lòng nhập họ tên!");
    if (mk.length < 6) return alert("Mật khẩu phải có ít nhất 6 ký tự!");
    if (!gioiTinh) return alert("Vui lòng chọn giới tính!");

    alert("Đăng ký thành công! Xin chào " + ten + ".");
  });
});
