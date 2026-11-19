// Sở thích: bấm tiêu đề để ẩn/hiện nội dung, nút "Thích", xác nhận khi mở link ngoài

window.addEventListener("DOMContentLoaded", function () {
  var cacMuc = document.querySelectorAll(".item");

  cacMuc.forEach(function (muc) {
    var tieuDe = muc.querySelector("h2");
    var doan = muc.querySelector("p");
    var anh = muc.querySelector("img");

    // Bấm tiêu đề để ẩn/hiện mô tả và ảnh
    tieuDe.title = "Bấm để ẩn/hiện";
    tieuDe.addEventListener("click", function () {
      var dangAn = doan.style.display === "none";
      doan.style.display = dangAn ? "" : "none";
      anh.style.display = dangAn ? "" : "none";
    });

    // Nút Thích có đếm số lượt
    var soLuot = 0;
    var nut = document.createElement("button");
    nut.className = "nut-thich";
    nut.textContent = "♡ Thích (0)";
    nut.addEventListener("click", function () {
      soLuot++;
      nut.textContent = "♥ Thích (" + soLuot + ")";
      nut.classList.add("da-thich");
    });
    doan.appendChild(document.createElement("br"));
    doan.appendChild(nut);
  });

  // Hỏi xác nhận trước khi mở trang web ưa thích
  document.querySelectorAll("ul a").forEach(function (lienKet) {
    lienKet.addEventListener("click", function (e) {
      if (!confirm("Mở trang " + lienKet.textContent + " trong tab mới?")) {
        e.preventDefault();
      }
    });
  });
});
