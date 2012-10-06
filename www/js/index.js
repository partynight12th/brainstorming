var app ={
	w: window,
	d: document,
	Category: function(arg_id, arg_color){
		this.id = arg_id;
		this.color = arg_color;
	},
	categoryFactory: {
		hash: [],
		idMax: 5,
		create: function(){
			var catId = this.getUnuseId();
			if(catId >= 0){
				var catColor = this.createColor();
				console.log("color: " + catColor);
				var cat = new app.Category(catId, catColor);
				this.hash[catId.toString()] = cat;
				return cat;
			}
			return null;
		},
		getUnuseId: function(){
			for(var i = 0; i < this.idMax; i++){
				if(typeof this.hash[i.toString()] === "undefined"){
					return i;
				}
			}
			return -1;
		},
		removeId: function(){
		},
		createColor: function(){
			var r = Math.floor(Math.random() * 255);
			var g = Math.floor(Math.random() * 255);
			var b = Math.floor(Math.random() * 255);
			return "#" + r.toString(16) + g.toString(16) + b.toString(16);
		}
	},
};

$(function(){
	var ideabtn = $("<div>").attr("id", "ideabtn").text("idea");
	$("#rightmenu").html(ideabtn);

	$(app.d).on("click", "#ideabtn", function(){
		var category = app.categoryFactory.create();
		if(category != null){
			var li = $("<li>").addClass("cat"+ category.id).addClass("ideaitem").css({
				backgroundColor: category.color
			}).text("test");
			$("#idealist").append(li)
		}
	});
});
