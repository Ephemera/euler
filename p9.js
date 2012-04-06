(function(){
	var p9 = {
		i: 1000,
		a: function(n){
			for( var i = n; i--; ){
				for( var j = n; j--; ){
					if( n*n - 2*n*(i + j) + 2*i*j === 0 && i !== 0 && j !== 0 )
						print(i * j * (1000 - i - j));
				}
			}

		},
		b: function(n){
			for( var i = n; i--; ){
				for( var j = n; j--; ){
					for( var k = n; k--; ){
						if( i*i + j*j === k*k && i + j + k === 1000 )
							print( i, j, k);
					}
				}
			}
		},
		init: function(){
			this.a(this.i);
		}
	}
	p9.init();
})();
