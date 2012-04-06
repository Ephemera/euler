(function(){
	var p10 = {
		j: [],
		i: 10,
		k: 2000000,
		a: function(n){
			var k = 0;
			for( var i = 2; i < n; i++){
				var chk = true;
				for( j in this.j ){
					if( i % this.j[j] === 0 ){
						chk = false;
						break;
					}
				}
				if( this.j.length === 0 || chk ){
					print(i);
					this.j.push(i);
					k += i
					print(k);	
				}
			}
			return k; 

		},
		b: function(n){
			var m = 0;
			for( i in n ){
				m += n[i];
			}
			return m;
		},
		c: function(n){
			for( var i = 2, j = n + 1; i < j; i++){
				this.j.push(i);
			}
			var l = this.j;
			for( var k = this.j.length, x = 0; x < k; x++){
				for( m in l ){
					print(l[m] % this.j[k], l[m], this.j[k]);
					if( l[m] % this.j[k] === 0 &&  this.j[k] !== l[m] ){
						l[m] = '';
					}
				}
				x = l[m];

			}
			print(this.j);
		},
		put: function(n){
			for( var i = 2; i <= n; i++ ){
				this.j.push(i);
			}
			return this.j
		},
		filter: function(n){
			var j = this.j;
			for( i in this.j ){
				for( l in j ){
					if( j[l] !== this.j[i] && j[l] % this.j[i] === 0 ){
						//j = j.slice(0, l).concat(j.slice(l + 1));
						delete j[l]
					}
				}
			}
			this.j = j
		},
		test: function(n){
			for( i in this.j ){

				var j = this.j;
				for( l in j ){
					if( j[l] === this.j[i] ){
						print(j[l]);
						this.j = this.j.slice(0,i).concat(this.j.slice(i+1));
					}
				}

				print(j);
			}
		},
		init: function(){
			//print(this.b(this.a(this.i)));
			//this.a(this.i);
			//print(this.b(this.j));
			//this.c(this.i);
			//this.put(this.i);
			//this.filter();
			//print(this.j);
			//this.test(this.i);
			this.put(this.k);
		}
	}
	p10.init();
})();
