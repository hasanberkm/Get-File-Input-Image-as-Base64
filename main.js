if ($('input[name=file]').prop('files')[0] != undefined) {
  var reader = new FileReader();
  reader.readAsDataURL($('input[name=file]').prop('files')[0]);
  reader.onload = function(e) {
    $("#selected_image").attr("src", e.target.result);
  };
}
