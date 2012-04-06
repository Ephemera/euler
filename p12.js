(function(){
	var p12 = {
		i: 1000000,
		j: [],
		sum: function(n){
			var sum = 0;
			for( var i = 1; i <= n; i++ ){
				sum += i	
				//this.j.push(sum);
				var d = '', c = 0, index = Math.sqrt(sum);
				for( var k = 1; k <= index; k++){
					if( sum % k === 0 ){
						c += 1;
					}
				}
				//if( c > 100 )
					//print(i, c);
				//print(sum, c);
				if( c >= 250 ){
					print(sum, c);
					break;
				}
			}
			return this.j;	
		},
		divide: function(n){
			//print(n);
			var l = n.length;
			for( i in n ){
				var d = '', c = 0, index = Math.sqrt(Math.sqrt(n[i]));
				print(c);
				d += n[i] + ': ';
				for( var j = 1; j <= index; j++){
					if( n[i] % j === 0 ){
						d += j + ' ';
						c += 1;
					}
				}
				print(c);
				if( c > 125 ){
					print(d);
					break;
				}
			}
		},
		init: function(){
			this.sum(this.i);
		}
	}
	p12.init();
})();
