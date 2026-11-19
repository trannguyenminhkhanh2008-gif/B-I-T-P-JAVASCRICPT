// Liên hệ: kiểm tra dữ liệu form, đếm ký tự, báo kết quả

function hienLoi(oNhap, thongDiep) {
  var cu = oNhap.parentNode.querySelector(".loi[data-cho='" + oNhap.id + "']");
  if (cu) cu.remove();
  if (thongDiep) {
    var span = document.createElement("div");
    span.className = "loi";
    span.setAttribute("data-cho", oNhap.id);
    span.textContent = thongDiep;
    oNhap.insertAdjacentElement("afterend", span);
  }
}

function hopLeEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

window.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("form-lien-he");
  var hoTen = document.getElementById("hoten");
  var email = document.getElementById("email");
  var noiDung = document.getElementById("noidung");
  var thongBao = document.getElementById("thong-bao");
  var TOI_DA = 500;

  // Bộ đếm ký tự cho ô nội dung
  var dem = document.createElement("div");
  dem.className = "dem-ky-tu";
  dem.textContent = "0/" + TOI_DA;
  noiDung.insertAdjacentElement("afterend", dem);
  noiDung.maxLength = TOI_DA;
  noiDung.addEventListener("input", function () {
    dem.textContent = noiDung.value.length + "/" + TOI_DA;
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var hopLe = true;

    if (hoTen.value.trim().length < 2) {
      hienLoi(hoTen, "Vui lòng nhập họ tên (ít nhất 2 ký tự).");
      hopLe = false;
    } else hienLoi(hoTen, "");

    if (!hopLeEmail(email.value.trim())) {
      hienLoi(email, "Email không hợp lệ.");
      hopLe = false;
    } else hienLoi(email, "");

    if (noiDung.value.trim().length < 10) {
      hienLoi(noiDung, "Nội dung quá ngắn (ít nhất 10 ký tự).");
      hopLe = false;
    } else hienLoi(noiDung, "");

    if (hopLe) {
      thongBao.textContent = "Cảm ơn " + hoTen.value.trim() + "! Mình đã nhận được tin nhắn của bạn.";
      form.reset();
      dem.textContent = "0/" + TOI_DA;
    } else {
      thongBao.textContent = "";
    }
  });

  form.addEventListener("reset", function () {
    thongBao.textContent = "";
    document.querySelectorAll(".loi").forEach(function (x) { x.remove(); });
    dem.textContent = "0/" + TOI_DA;
  });
});
