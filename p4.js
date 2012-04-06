(function(){
	var p4 = {
		i: 1000,
		j: 1000,
		chk: false,
		result: [0,0,0],
		loop: function(){
			var i = this.i, j = this.j
			for( var x = this.i; x--; ){
				for( var y = this.j; y--; ){
					var product = (x * y).toString();
					var len = product.length/2; 
					var half = product.substr(len);
				
					if( product === half.split('').reverse().join('') + half ){
						+product > +this.result[0] ? this.result = [product, x, y] : '';
						print(product, this.result[0], this.result);
					}
				}
				
			}
			print(this.result);
		}
	}
	p4.loop();

})();
