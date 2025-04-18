var words = [
    "Salam",
    "Mən Vüsal Süleymanov",
    "Mənim şəxsi məlumatlarım olan web səhifəmə xoş gəlmisən.",
    "Təşəkkür edirəm.",
  ],
  part,
  i = 0,
  offset = 0,
  len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 15,
  speed = 70;

var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".word").text(part);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});

document.getElementById("whatsapp").addEventListener("click", function () {
  var phoneNumber = "+994103221667"; 
  var message = "Merhaba, size bir mesaj gönderiyorum!"; 
  var whatsappURL =
    "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
});
document.getElementById("email").addEventListener("click", function () {
  var toEmail = "vusal_suleymanov95@mail.ru";
  var subject = "Sizinlə iş ilə əlaqədar əlaqə saxlamaq istəyirəm";
  var message = "Bu hissəyə istədiyiniz mesajı qeyd edə bilərsiniz))";

  var mailtoLink =
    "mailto:" +
    toEmail +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(message);

  window.location.href = mailtoLink;
});
document.getElementById("telegram").addEventListener("click", function () {
    var username = "vusall911"; 
    var message = "Bu hissəyə istədiyiniz mesajı qeyd edə bilərsiniz))";

    var telegramLink = "https://t.me/" + username + "?text=" + encodeURIComponent(message);

    window.open(telegramLink, "_blank");
});
document.getElementById("instagram1").addEventListener("click", function () {
    var username = "vusall911"; 
    var message = "Bu hissəyə istədiyiniz mesajı qeyd edə bilərsiniz))";

    var instagramLink = "https://instagram.com/" + username + "?text=" + encodeURIComponent(message);

    window.open(instagramLink, "_blank");
});


  document.getElementById("linkedin").addEventListener("click", function () {
    var username = "vusalsoff";
    var linkedinURL = "https://www.linkedin.com/in/" + username + "/";
    
    window.open(linkedinURL, "_blank");
});
