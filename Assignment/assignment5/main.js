// ========================================================
// Assignment 5: JavaScript Post and Reply
// ให้นักศึกษาเขียนโค้ด JavaScript เพื่อจัดการการ Post และ Clear ข้อความ
// ========================================================

window.onload = setupFunction;

function setupFunction() {
    // ให้นักศึกษากำหนดชื่อหัวข้อของหน้าเว็บที่ id="top"
    document.getElementById("top").innerHTML = "Welcome to my Forum";
    var buttons = document.querySelectorAll("button");
    buttons[0].onclick = postFunction;
    buttons[1].onclick = clearFunction;
}

// สร้างตัวแปรนับลำดับการโพสต์ชื่อว่า postCount และกำหนดค่าเริ่มต้นเป็น 0
var postCount = 0;


function postFunction() {
    // TODO: ให้นักศึกษาเขียนโค้ดในส่วนนี้
    // 1. อ่านค่าข้อความจาก textarea (id="message")
    var msg = document.getElementById("message").value;

    // 2. นำข้อความไปใส่ในแต่ละกล่องตามลำดับ:
    //    - ครั้งที่ 1 ใส่ใน id="topic"
    //    - ครั้งที่ 2 ใส่ใน id="reply1"
    //    - ครั้งที่ 3 ใส่ใน id="reply2"
    if (postCount === 0) {
        document.getElementById("topic").innerHTML = msg;
    } else if (postCount === 1) {
        document.getElementById("reply1").innerHTML = msg;
    } else if (postCount === 2) {
        document.getElementById("reply2").innerHTML = msg;
    }
    // 3. เคลียร์ข้อความใน textarea ให้ว่างหลังจากโพสต์
    document.getElementById("message").value = "";
    // 4. เพิ่มค่า postCount
    postCount++;
}

function clearFunction() {
    // TODO: ให้นักศึกษาเขียนโค้ดในส่วนนี้
    // 1. ล้างข้อความใน id="topic", id="reply1", id="reply2"
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    // 2. ล้างข้อความใน textarea (id="message")
    document.getElementById("message").value = "";
    // 3. รีเซ็ตตัวแปร postCount กลับเป็นค่าเริ่มต้น
    postCount = 0;
}
