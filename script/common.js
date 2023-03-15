if (document.URL.indexOf('move_pc_screen=1') != -1) {
  // PC버전 보기 클릭시 모바일 체크 안함
} else {
  let mobile = ['iPhone', 'iPad', 'BlackBerry', 'Android', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'Nokia', 'webOS', 'Opera Mini', 'SonyEricsson', 'Opera Mobi', 'IEMobile', 'Xiaomi', 'Vivo', 'Oppo'];
  for (let i in mobile) {
    if (navigator.userAgent.match(mobile[i]) != null) { 
      let url = window.location.href;
      let lastPart = url.split("/").pop();
      let newPart = "m_" + lastPart;
      let newUrl = url.replace(lastPart, newPart);
      location.href = newUrl; 
      break; // 반복문 종료
    }
  }
}

$(function(){
// AJAX로 PHP파일 호출
$.ajax({
  type : "GET",
  url : "http://soyedpork27.dothome.co.kr/employment/script/session.php",
  dataType : "html",
  error : function(){
  },
  success : function(data){
    if(data == ''){
      $('.lnb').html('<li><a href="http://soyedpork27.dothome.co.kr/login/login.html" title="로그인하기">로그인</a></li><li><a href="http://soyedpork27.dothome.co.kr/login/join.html" title="회원가입하기">회원가입</a></li>');
    } else {
      $('.lnb').html('<li><a href="http://soyedpork27.dothome.co.kr/login/logout.php" title="로그아웃하기">로그아웃</a></li>');
    }
  }

})

});




function siteUrl(s){//사용자가 선택목록을 선택하면 siteUrl함수가 호출됨.
  if(s.value!='none'){//옵션을 선택하면
    window.open(s.value,'_self');//선택한 사이트가 열리게 하고 
    s.value='none';//기존값을지운다
  }else{//선택하지 않으면
    return s;//프로그램을 종료
  }
}