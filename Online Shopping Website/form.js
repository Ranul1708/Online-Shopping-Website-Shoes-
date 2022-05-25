
//jquery for form
$(document).ready(function(){
  /*  $(".submitbtn").hover(function(){
        $(this).css("background-color","orange");

    });*/
    $(".formTable tr td select").on("click",function(){
        $(this).css("background-color","orange");

    });

    
    
});

$(document).ready(function(){
$( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function(event, ui ) {
      $( "#amount" ).val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( "£" + $( "#slider-range" ).slider( "values", 0 ) +
    " - £" + $( "#slider-range" ).slider( "values", 1 ) );
});


//jquery for search option

$(document).ready(function(){
    
	$.getJSON('shoedata.json', function(shoedata) {
		$("#submitbtn").on("click",function(){
		
    
		var gender=$("input:checked").val();
		var output="<ul>";
        for (var i in shoedata.shoes) {
			if((gender == shoedata.shoes[i].gender)){
            output+="<li>" +"<img src='"+shoedata.shoes[i].picture+"'>"+"<h3>'" +shoedata.shoes[i].name+
            "'</h3>"+"<h4>'" +shoedata.shoes[i].price+"'</h4>"+"<p>'" +"<strong>Colors:</strong>'"+
            shoedata.shoes[i].color+"'</p>"+"<a href='"+shoedata.shoes[i].id +".html'><button class='viewbtn'>Visit Page</button></a>"+"<button id='addtoFavList'>Add to Favorites</button>"+"</li>";
        }
}
        output+="</ul>";
        document.getElementById("placeholder").innerHTML=output;
 
		});
	
	});
	});


//jquery for adding to favorite list
  $(document).ready(function(){
    $("#addtoFavList").on("click",function(){
      
      try{
        
        $(this).attr('disabled',true);
        var shoeIdToAdd=$(this).closest("li").attr("id");
        
        
  
        var myfav=JSON.parse(localStorage.getItem("favShoes"));
        if(myfav==null){
          myfav=[];
        }
        myfav.push(shoeIdToAdd);
        localStorage.setItem("favShoes",JSON.stringify(myfav));
        }
      catch(e){
        
        if (e == QUOTA_EXCEEDED_ERR){
          
          console.log("Error Local Storage lomit Exceed");
        }else{
          
          console.log("Error Saving to local storage");
        }
      }
    });
  
  });

  /*
//jquery for retrieving from the list
$(document).ready(function(){
	$("#viewfavorite").on("click",function(){		
		
		console.log("Restoring array from local storage");
		myFavoriteStaff = JSON.parse(localStorage.getItem("favStaff"));
		var output = "<ul>";
		if(myFavoriteStaff!=null){
			for( i=0; i<data.users.length; i++){
				for(j=0;j<myFavoriteStaff.length;j++){
					if(data.users[i].id==myFavoriteStaff[j]){
						output+="<li>" + data.users[i].firstName + " " + data.users[i].lastName + "--" + data.users[i].joined.month + "<a href='"+ data.users[i].id+".html'>Visit Page</a></li>";
					}
				}
			}
		}
		output+="</ul>";
		document.getElementById("placeholder").innerHTML=output;
	
	


	});

});*/


