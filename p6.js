(function(){
	var p6 = {
		i: 100,
		a: function(n){	
			var sum = 0;
			for(var i = n + 1; i--; ){
				sum += Math.pow(i, 2)	
			}
			return sum
		},
		b: function(n){
			var sum = 0;
			for( var i = n + 1; i--; ){
				sum += i
			}
			return Math.pow(sum, 2);
		},
		init: function(){
			print(this.b(this.i) - this.a(this.i));		  
		}

	}
	p6.init();
})();
