// Kế hoạch học tập: tô sáng hôm nay, tick mục tiêu, hiển thị tiến độ

var TEN_THU = ["Chủ nhật", "Hai", "Ba", "Tư", "Năm", "Sáu", "Bảy"];
// getDay(): 0 = Chủ nhật, 1 = Thứ hai, ... (trong bảng không có Thứ Năm tách riêng: "Năm" = thứ 5)
var THU_TRONG_BANG = { 1: "Hai", 2: "Ba", 3: "Tư", 4: "Năm", 5: "Sáu", 6: "Bảy" };

function toSangHomNay() {
  var thu = THU_TRONG_BANG[new Date().getDay()];
  if (!thu) return; // Chủ nhật không có trong bảng
  var hang = document.querySelectorAll("#thoi-khoa-bieu tr");
  for (var i = 1; i < hang.length; i++) {
    if (hang[i].cells[0].textContent.trim() === thu) {
      hang[i].classList.add("hom-nay");
    }
  }
}

function capNhatTienDo() {
  var tatCa = document.querySelectorAll("#muc-tieu li");
  var xong = document.querySelectorAll("#muc-tieu li.done");
  var phanTram = Math.round((xong.length / tatCa.length) * 100);
  document.getElementById("tien-do").textContent =
    "Tiến độ: " + xong.length + "/" + tatCa.length + " mục tiêu (" + phanTram + "%) - bấm vào mục tiêu để đánh dấu hoàn thành";
}

window.addEventListener("DOMContentLoaded", function () {
  toSangHomNay();
  var danhSach = document.querySelectorAll("#muc-tieu li");
  for (var i = 0; i < danhSach.length; i++) {
    danhSach[i].addEventListener("click", function () {
      this.classList.toggle("done");
      capNhatTienDo();
    });
  }
  capNhatTienDo();
});
