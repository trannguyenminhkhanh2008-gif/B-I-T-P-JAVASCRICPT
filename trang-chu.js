// Trang chủ: lời chào theo giờ, đồng hồ, tự tính tuổi từ ngày sinh

function loiChaoTheoGio(gio) {
  if (gio < 11) return "Chào buổi sáng!";
  if (gio < 13) return "Chào buổi trưa!";
  if (gio < 18) return "Chào buổi chiều!";
  return "Chào buổi tối!";
}

function tinhTuoi(chuoiNgaySinh) {
  // chuỗi dạng dd/mm/yyyy
  var p = chuoiNgaySinh.split("/");
  var ngaySinh = new Date(p[2], p[1] - 1, p[0]);
  var homNay = new Date();
  var tuoi = homNay.getFullYear() - ngaySinh.getFullYear();
  var chuaSinhNhat =
    homNay.getMonth() < ngaySinh.getMonth() ||
    (homNay.getMonth() === ngaySinh.getMonth() && homNay.getDate() < ngaySinh.getDate());
  if (chuaSinhNhat) tuoi--;
  return tuoi;
}

function capNhatDongHo() {
  var bay = new Date();
  document.getElementById("dong-ho").textContent =
    "Bây giờ là " + bay.toLocaleTimeString("vi-VN") + " - " + bay.toLocaleDateString("vi-VN");
  document.getElementById("loi-chao").textContent = loiChaoTheoGio(bay.getHours());
}

window.addEventListener("DOMContentLoaded", function () {
  var ngaySinh = document.getElementById("ngaysinh").textContent.trim();
  document.getElementById("tuoi").textContent = tinhTuoi(ngaySinh);
  capNhatDongHo();
  setInterval(capNhatDongHo, 1000);
});
