
//business logic
function Bookhotel(hotel,room,checkin,checkout,email) {
this.Hotel = hotel;
this.Room = room;
this.Checkin = checkin;
this.checkout = checkout;
this.Email = email;
};
var things= "yes";


//userinterface
$(document).ready(function() {
        $("#booknow").click(function() {


   var inputtedhotel = $("input#hotel").val();
   var inputtedcheckin = $("input#checkin").val();
   var inputtedroom =$("input#room").val();
   var inputtedcheckout =$("input.checkout").val();
   var inputtedemail =$("input.email").val();

   var confirm= prompt("Are you sure you want to book the room?")
   if(confirm === things) {
 alert("Congratulations, you have booked the room");
 alert("hotel:" +inputtedhotel+ "," + "Checkin:" +inputtedcheckin+ "Checkout:" +inputtedcheckout+ "," + "Rooms:" +inputtedroom+ ","+ "Email" +inputtedemail);
} else {
 alert("booking cancelled!");
}
 });
});
