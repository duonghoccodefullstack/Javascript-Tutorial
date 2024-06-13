// // Sử dụng fetch để gửi yêu cầu lấy dữ liệu từ API
// function fetchDataFromAPI() {
//     return new Promise((resolve, reject) => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(response => {
//                 // Kiểm tra xem yêu cầu có thành công không
//                 if (!response.ok) {
//                     throw new Error('Yêu cầu không thành công');
//                 }
//                 // Nếu thành công, trả về dữ liệu dưới dạng JSON
//                 return response.json();
//             })
//             .then(data => {
//                 // Trả về dữ liệu khi đã được chuyển đổi thành JSON thành công
//                 resolve(data);
//             })
//             .catch(error => {
//                 // Xử lý lỗi nếu có bất kỳ lỗi nào xảy ra
//                 reject(error);
//             });
//     });
// }

// // Sử dụng Promise để lấy dữ liệu từ API và xử lý kết quả
// fetchDataFromAPI()
//     .then(data => {
//         // Xử lý dữ liệu trả về từ API
//         console.log('Dữ liệu từ API:', data);
//     })
//     .catch(error => {
//         // Xử lý lỗi nếu có bất kỳ lỗi nào xảy ra
//         console.error('Đã xảy ra lỗi khi lấy dữ liệu từ API:', error);
//     });


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//               data.forEach(item => {
//             const userID = item.userId;
//                   // console.log('UserID của đối tượng:', userID);
//                  const find = document.getElementById("search");
//         const clickButton = document.getElementById("click");

//         // Thêm sự kiện click vào nút clickButton
//         clickButton.addEventListener("click", () => {
//             // Truy cập userID và hiển thị trong console khi nút được click
//             console.log('UserID của đối tượng:', userID);
//         });
//         });

//         // console.log('Dữ liệu từ API:', data);
//     })
//     .catch(error => {
//         console.error('Đã xảy ra lỗi khi lấy dữ liệu từ API:', error);
//     });
$(document).ready(function() {
  // Kiểm tra xem sự kiện click đã được gắn vào nút "click" chưa
  if (!$("#click").data("click-bound")) {
    // Gắn sự kiện click vào nút "click"
    $("#click").click(function() {
      $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET",
        success: function(data) {
          const searchID = $("#search").val();
          find(data, searchID);
        },
        error: function(xhr, status, error) {
          console.error("Đã xảy ra lỗi khi lấy dữ liệu từ API:", error);
        }
      });
    });

    // Đánh dấu rằng sự kiện click đã được gắn vào nút "click"
    $("#click").data("click-bound", true);
  }
});

function find(data, searchID) {
  data.forEach(function(item) {
    if (item.userId == searchID) {
      console.log("UserID của đối tượng:", item.userId);
    }
  });
}

