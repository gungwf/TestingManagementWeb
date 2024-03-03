    // Mô phỏng dữ liệu danh sách kỳ thi
    var exams = [
      { name: "Luyện tập", status: "free" },
      { name: "Giữa kỳ", status: "scheduled" },
      { name: "Cuối kỳ", status: "scheduled" },
      { name: "Kiểm tra định kỳ", status: "scheduled" },
      { name: "Thi thử", status: "free" }
  ];
  
  // Hiển thị danh sách kỳ thi
  function displayExams(examList) {
      var container = document.getElementById("examList");
      container.innerHTML = "";
  
      examList.forEach(function(exam) {
          var item = document.createElement("div");
          item.classList.add("exam-item");
          item.innerHTML = <span>${exam.name} - ${exam.status === "free" ? "Truy cập tự do" : "Yêu cầu thời gian cụ thể"}</span>;
          
          var button = document.createElement("button");
          button.textContent = "Bắt đầu làm bài";
          button.classList.add("start-exam");
  
          item.appendChild(button);
          container.appendChild(item);
      });
  }
  
  // Lọc kỳ thi theo trạng thái
  function filterExamsByStatus(status) {
      if (status === "all") {
          displayExams(exams);
      } else {
          var filteredExams = exams.filter(function(exam) {
              return exam.status === status;
          });
          displayExams(filteredExams);
      }
  }
  
  // Tìm kiếm kỳ thi theo tên
  function searchExamsByName(keyword) {
      var filteredExams = exams.filter(function(exam) {
          return exam.name.toLowerCase().includes(keyword.toLowerCase());
      });
      displayExams(filteredExams);
  }
  
  // Xử lý sự kiện khi trang được tải
  document.addEventListener("DOMContentLoaded", function() {
      displayExams(exams);
  
      var searchButton = document.getElementById("searchButton");
      var searchInput = document.getElementById("searchInput");
      var statusFilter = document.getElementById("statusFilter");
  
      // Xử lý sự kiện khi người dùng tìm kiếm
      searchButton.addEventListener("click", function() {
          var keyword = searchInput.value.trim();
          searchExamsByName(keyword);
      });
  
      // Xử lý sự kiện khi người dùng thay đổi lọc theo trạng thái
      statusFilter.addEventListener("change", function() {
          var status = statusFilter.value;
          filterExamsByStatus(status);
      });
  
      // Xử lý sự kiện khi người dùng nhấn vào nút "Bắt đầu làm bài"
      var startExamButtons = document.querySelectorAll(".start-exam");
      startExamButtons.forEach(function(button) {
          button.addEventListener("click", function() {
              var examName = this.parentNode.querySelector("span").textContent;
              alert("Bắt đầu làm bài thi: " + examName);
              // Thực hiện các hành động khác khi người dùng bắt đầu làm bài
          });
      });
  });