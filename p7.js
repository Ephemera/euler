(function(){
	var p7 = {
		i: 10001,
		j: [],
		a: function(n){
			for( var i = 2; i; i++){
				var chk = true;
				for( j in this.j ){
					if( i % this.j[j] === 0 ){
						chk = false;
						break;
					}
				}
				if( this.j.length === 0 || chk ){
					//print('push', i, this.j[0]);	
					this.j.push(i);
					print(this.j.length);
				}
				if( this.j.length === n ){
					i = 0;
					break;
				}
			}
			return this.j
		},
		b: function(){

		},
		init: function(){
			this.a(this.i);	
		}
	}
	p7.init();
	print(p7.j);
})();
