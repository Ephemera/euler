(function(){
	var p3 = function(){};
	p3 = {
		sqrt: function(n){
			return parseInt(Math.sqrt(n));
		},
		devide: function(n){
			this.chk = n[0]%n[1] === 0 ? true : false;
			return [n[0]/n[1], n[1], this.chk]
		},
		loop: function(n){
				  print(this.forLoop);
			for( var x = 1; x < this.forLoop; x++){
				print(x);
				var y = this.devide([this.i, x]);
				if( this.chk ){
					print(y);
					this.forLoop = this.sqrt(y[0]);
					this.result.push(y[1]);
				}
				
			}
			print(this.result);
		},
		i: 600851475143,
		j: 13195,
		forLoop: 13195,
		chk: false,
		result: []
	}
	p3.loop();
})();

