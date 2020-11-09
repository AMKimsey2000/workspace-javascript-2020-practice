function createReservation() {
  var name = $("input#name").val();
  var datein = $("input#checkin").val();
  var dateout = $("input#checkout").val();
  var guests = $("input#num").val();
  var roomType = $("select#room").prop("selectedIndex");
  console.log(name, datein, dateout, guests, roomType);
}

$(function() {
  $("#submit").click(createReservation);
});