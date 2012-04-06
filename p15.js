(function(){
	var p15 = {
		i: 20,
		j: [],
		route: function(n){
			for(var i = 0; i < n; i++ ){
				this.j[i] = [];
				for(var j = 0; j < n; j++ ){
					if( i === 0 )
						this.j[i][j] = j + 2;
					else if( j === 0 )
						this.j[i][j] = i + 2 ;
					else
						this.j[i][j] = this.j[i-1][j] + this.j[i][j-1];
				}
			}
			print(this.j[19][19]);
		},
		init: function(){
			this.route(this.i);	
		}
	}
	p15.init();
})();
