(function(){
	var p16 = {
		i: '5',
		j: [],
		k: [],
		
		double: function(n){
			var num = (+n * 2).toString();
			if( num.length > 2 )
				return num;
			else
				return 0 + num;
		},

		put: function(n){
			this.j[n] = this.double(this.k[n])[1];
			this.j[n+1] = this.double(this.k[n])[0] + this.double(this.k[n+1])[1];
			this.k = this.j;
			print(this.j);
		},

		initArray: function(){
			for(var i = this.i; i--; ){
				this.k[i] = 0;
			}
		},

		init: function(){
			 /*
			//this.initArray();
			this.k[0] = 2;
			//print(this.k);
			for(var i = 0; i<this.i; i++){
				print(i, '-----');
				this.put(0);
			}
			print(this.j);
			*/
		}
	}
	p16.init();
	
	
})();

