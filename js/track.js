$(document).ready(function () {
   var base_url = 'https://portfolio.wilsonleehk.com/';

	/*  REF: https://stackoverflow.com/q/2031362/7627664
	if(ref.match("/http://(www.)?reddit.com(/)?(.*)?/gi"){
	    alert('You came from Reddit');
	} else {
	    alert('No you didn\'t');
	}
	*/

	var ref = document.referrer;

	if (ref != '') {
		console.log("The ref is: " + ref);			//Please follow
	}


   //console.log("The full URL of this page is: " + window.location.href);
   $.ajax({
	    type: "POST",
	    url: base_url + "api/track.php?page=" + window.location.href,
	    cache: false,
	    beforeSend: function () {
	    	$("#loading").show();
	    },
	    success: function (data) {
	      var response = JSON.parse(data);
	      console.log(data);
	      $("#loading").hide();
	      /*
	      if(response.status){
	      	$("#status").html("Valid email");
	      }
	      else{
	      	$("#status").html("Invalid email");
	      }
	      */
	    },
	    error: function (data) {
	    	console.log("error");
	    	$("#loading").hide();
	    }
  });
});