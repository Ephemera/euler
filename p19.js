(function(){
	var p19 = function(){};
	p19 = {
		month : {
			1 : 31,
			2 : 28,
			3 : 31,
			4 : 30,
			5 : 31,
			6 : 30,
			7 : 31,
			8 : 31,
			9 : 30,
			10 : 31,
			11 : 30,
			12 : 31
		},
		yearFrom : 1901,
		yearTo : 2000, 
		dates : 365,	
		calc : function(){
			var total = 0, chk = 1;
			for(var i = this.yearFrom; i <= this.yearTo; i++){
				for(var j = 1; j <= 12; j++){
					total += j === 2 && i % 4 === 0 && i % 400 !== 0 ? 29 : this.month[j];
					//print(j === 2 && i % 4 === 0 && i % 400 !== 0 ? 29 : this.month[j]);
					if( total % 7 === 0 ){
						chk += 1;
					}
				}
			}
			return chk - 1;
		},
		init : function(){
			print(this.calc());
		}
	}
	p19.init();
})();

