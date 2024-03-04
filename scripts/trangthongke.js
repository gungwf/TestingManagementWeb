document.addEventListener('DOMContentLoaded', function() {
    // Mock data
    var results = [
        { name: 'Dương Đăng Minh', totalAttempts: 50, completionRate: 90, averageScore: 7.5, scoreDistribution: [5, 6, 7, 8, 9, 10] },
        { name: 'Lê Duy Khánh', totalAttempts: 40, completionRate: 80, averageScore: 8.0, scoreDistribution: [6, 7, 8, 9, 10] },
        { name: 'Phạm Đức Thành', totalAttempts: 43, completionRate: 87, averageScore: 9.0, scoreDistribution: [6, 7, 8, 9, 10] },
        { name: 'Vũ Hoàng Lâm', totalAttempts: 46, completionRate: 86, averageScore: 9.6, scoreDistribution: [10, 10, 9, 9, 10] },
        // Add more data here if needed
        // ...
        { name: 'Nguyễn Đăng Minh', totalAttempts: 60, completionRate: 95, averageScore: 9.2, scoreDistribution: [7, 8, 9, 10] }
    ];

    var resultTable = document.getElementById('resultTable');
    var filterForm = document.getElementById('filterForm');

    var totalAttemptsSum = 0;
    var completionRateSum = 0;
    var averageScoreSum = 0;

    // Populate the table with data
    results.forEach(function(result) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        nameCell.textContent = result.name;
        var totalAttemptsCell = document.createElement('td');
        totalAttemptsCell.textContent = result.totalAttempts;
        var completionRateCell = document.createElement('td');
        completionRateCell.textContent = result.completionRate + '%';
        var averageScoreCell = document.createElement('td');
        averageScoreCell.textContent = result.averageScore;
        var scoreDistributionCell = document.createElement('td');

        row.appendChild(nameCell);
        row.appendChild(totalAttemptsCell);
        row.appendChild(completionRateCell);
        row.appendChild(averageScoreCell);

        resultTable.appendChild(row);

        totalAttemptsSum += result.totalAttempts;
        completionRateSum += result.completionRate;
        averageScoreSum += result.averageScore;
    });

    // Calculate averages
    var totalStudents = results.length;
    var averageAttempts = totalAttemptsSum / totalStudents;
    var averageCompletionRate = completionRateSum / totalStudents;
    var averageScore = averageScoreSum / totalStudents;

    // Add summary row at the end
    var summaryRow = document.createElement('tr');
    var summaryNameCell = document.createElement('td');
    summaryNameCell.textContent = 'Tổng hợp kết quả';
    var summaryTotalAttemptsCell = document.createElement('td');
    summaryTotalAttemptsCell.textContent = totalAttemptsSum;
    var summaryCompletionRateCell = document.createElement('td');
    summaryCompletionRateCell.textContent = averageCompletionRate.toFixed(2) + '%';
    var summaryAverageScoreCell = document.createElement('td');
    summaryAverageScoreCell.textContent = averageScore.toFixed(2);
    var summaryScoreDistributionCell = document.createElement('td');
    summaryScoreDistributionCell.textContent = '';

    summaryRow.appendChild(summaryNameCell);
    summaryRow.appendChild(summaryTotalAttemptsCell);
    summaryRow.appendChild(summaryCompletionRateCell);
    summaryRow.appendChild(summaryAverageScoreCell);
    // summaryRow.appendChild(summaryScoreDistributionCell);

    resultTable.appendChild(summaryRow);

// Filter results
filterForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var filterName = document.getElementById('filterName').value;
    var filterAverageScore = parseFloat(document.getElementById('filterAverageScore').value);

    var filteredResults = results.filter(function(result) {
        var nameMatch = true;
        var scoreMatch = true;

        if (filterName !== '') {
            nameMatch = result.name.toLowerCase().includes(filterName.toLowerCase());
        }

        if (!isNaN(filterAverageScore)) {
            scoreMatch = result.averageScore > filterAverageScore;
        }

        return nameMatch && scoreMatch;
    });

    // Clear table
    while (resultTable.rows.length > 1) {
        resultTable.deleteRow(1);
    }
    // Populate table with filtered results
    filteredResults.forEach(function(result) {
        var row = document.createElement('tr');
        var nameCell = document.createElement('td');
        nameCell.textContent = result.name;
        var totalAttemptsCell = document.createElement('td');
        totalAttemptsCell.textContent = result.totalAttempts;
        var completionRateCell = document.createElement('td');
        completionRateCell.textContent = result.completionRate + '%';
        var averageScoreCell = document.createElement('td');
        averageScoreCell.textContent = result.averageScore;

        row.appendChild(nameCell);
        row.appendChild(totalAttemptsCell);
        row.appendChild(completionRateCell);
        row.appendChild(averageScoreCell);

        resultTable.appendChild(row);
    });

});

  document.getElementById("exportButton").addEventListener("click", function() {
    exportTableToExcel("resultTable", "filtered_results.xlsx");
  });
  
  function exportTableToExcel(tableId, filename) {
    var wb = XLSX.utils.table_to_book(document.getElementById(tableId), { sheet: "Sheet1" });
    XLSX.writeFile(wb, filename);
  }
  document.getElementById("editButton").addEventListener("click", function() {
    enableTableEditing("resultTable");
  });
  
  document.getElementById("saveButton").addEventListener("click", function() {
    disableTableEditing("resultTable");
  });
  
  function enableTableEditing(tableId) {
    var table = document.getElementById(tableId);
    var rows = table.getElementsByTagName("tr");
  
    for (var i = 1; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName("td");
  
      for (var j = 0; j < cells.length; j++) {
        var cell = cells[j];
  
        cell.setAttribute("contenteditable", "true");
        cell.style.backgroundColor = "#f2f2f2";
  
        // Thêm sự kiện Enter để lưu thông tin
        cell.addEventListener("keydown", function(event) {
          if (event.key === "Enter") {
            event.preventDefault();
            disableTableEditing(tableId);
          }
        });
      }
    }
  }
  
  function disableTableEditing(tableId) {
    var table = document.getElementById(tableId);
    var rows = table.getElementsByTagName("tr");
  
    for (var i = 1; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName("td");
      var result = results[i - 1]; // Lấy dữ liệu từ mảng results
  
      for (var j = 0; j < cells.length; j++) {
        var cell = cells[j];
  
        cell.removeAttribute("contenteditable");
        cell.style.backgroundColor = "";
  
        // Cập nhật thông tin trong mảng results khi chỉnh sửa
        if (j === 0) {
          result.name = cell.textContent;
        } else if (j === 1) {
          result.totalAttempts = parseInt(cell.textContent);
        } else if (j === 2) {
          result.completionRate = parseInt(cell.textContent);
        } else if (j === 3) {
          result.averageScore = parseFloat(cell.textContent);
        }
      }
    }
  }
  // ...
  
});

