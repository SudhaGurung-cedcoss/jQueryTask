var products = [{
					"id": "100",
					"name": "iPhone 4S",
					"brand": "Apple",
					"os": "iOS"
				},
				{
					"id": "101",
					"name": "Moto X",
					"brand": "Motorola",
					"os": "Android"	
				},
				{
					"id": "102",
					"name": "iPhone 6",
					"brand": "Apple",
					"os": "iOS"
				},
				{
					"id": "103",
					"name": "Samsung Galaxy S",
					"brand": "Samsung",
					"os": "Android"
				},
				{
					"id": "104",
					"name": "Google Nexus",
					"brand": "ASUS",
					"os": "Android"
				},
				{
					"id": "105",
					"name": "Surface",
					"brand": "Microsoft",
					"os": "Windows"
				}];
               
   populate(products);
   function populate(products){
		let display="";
		for(let i=0;i<products.length;i++)
		{
			display+="<tr><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td><td>"+"<lable id='label'>X</label>"+"</td></tr>";
		}
		$("#display").html(display);
	}
				
    $(document).ready(function(){
	$("#Brand_sel").click(function(){
		$brand=$(this).val();
		let text="";
		for(i=0;i<products.length;i++)
		{
			if(products[i].brand==$brand)
			{
				text+="<tr><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td><td>"+"<lable id='label'>X</label>"+"</td></tr>";
			}
		}
		$("#display").html(text);
	})


	$("#operating_sel").click(function(){
			$operating=$(this).val();
		    let text="";
			for(i=0;i<products.length;i++)
			{
			if(products[i].os==$operating)
			{
				text+="<tr><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td><td>"+"<lable id='label'>X</label>"+"</td></tr>";
			}
			}
			$("#display").html(text);
	 })

	 $("#btnSearch").click(function(){
			$search=$("#searchText").val();
			let show="";
			for(i=0;i<products.length;i++)
			{
				if(products[i].id==$search){
					show+="<tr><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td><td>"+"<lable id='label'>X</label>"+"</td></tr>";	
				}
			    else if(products[i].name==$search){
				show+="<tr><td>"+products[i].id+"</td><td>"+products[i].name+"</td><td>"+products[i].brand+"</td><td>"+products[i].os+"</td><td>"+"<lable id='label'>X</label>"+"</td></tr>";
			
			    }
			
			}
			$("#display").html(show);
	 })

	 $(this).on("click","#label",function(){
		$(this).parent().parent().remove();
	   
	 })
})