(function(){
	var p5 = {
		i: 10,
		j: [],
		k: [],
		s: 1,
		put: function(n){
			for( var x = 1, y = n + 1; x < y; x++ ){
				this.j.push(x);
			}
		},
		sieve: function(n){
			for( var x = n; x > 0; x-- ){
				for( var y = x - 1; y > 0; y--){
					if( x % y === 0	&& y !== 1 ){
						print(x,y);
						delete this.j[y-1] ;
					}
				}
			}
		},
		product: function(n){
			var i = 0
			for( x in n ){
				if( n[x] !== undefined )
					this.s *= n[x]
					print(i++, this.s);
			 }
		},
		prod: function(n){
			for( var x = n + 1, y = 1; y < x; y++ ){
				if( this.s % y !== 0 ){
					print(this.s % y, this.s, y);
					this.s *= y;
				}	
			}
		},
		a: function(n){
			var m = 2, l = n;
			for( var i = n; i > 2; ){
				if( i % m === 0 ){
					var k = true;
					for( j in this.j ){
						if( this.j[j] === m ){
							k = false;
							break;
						}
					}
					if( k ) {
						this.j.push(m);
					}
					i = i / m;
				}else{
					m++;
				}
				
			}
			print(this.j);
		},
		b: function(n){
			for(var i = 2; i < n + 1; i++ ){
				this.a(i);
				print(this.j);
			}
		},
		init: function(){
			//this.put(this.i);
			//this.sieve(this.i);
			//this.product(this.j);
			this.prod(this.i);
			//this.b(this.i);
			//this.product(this.j);
		}
	}
	p5.init();
	//print(p5.j);
	///print(p5.s);
	
})();
