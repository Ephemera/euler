(function(){
	var p17 = {
		test: 1000,
		i: '',
		symbol: {
			0 : '',
			1 : 'one',
			2 : 'two',
			3 : 'three',
			4 : 'four',
			5 : 'five',
			6 : 'six',
			7 : 'seven',
			8 : 'eight',
			9 : 'nine',
			10 : 'ten',
			11 : 'Eleven',
			12 : 'Twelve',
			13 : 'Thirteen',
			14 : 'Fourteen',
			15 : 'Fifteen',
			16 : 'Sixteen',
			17 : 'Seventeen',
			18 : 'Eighteen',
			19 : 'Nineteen',
			20 : 'Twenty',
			30 : 'Thirty',
			40 : 'Forty',
			50 : 'Fifty',
			60 : 'Sixty',
			70 : 'Seventy',
			80 : 'Eighty',
			90 : 'Ninety',
			100 : 'Hundred'
		},

		trim: function(word){
			return word.replace(' ', ''); 
		},

		solve: function(num){
			var str = '';
			for(;num--;){
				var numStr = '';
				if( num < 20 ) 	{
					numStr = this.symbol[num+1];
				}else if ( num+1 === 1000 ){
					numStr = 'onethousand';
				}else{
					var h = (num+1)/100|0;
					numStr = this.symbol[h];
					numStr += h !== 0 ? 'hundred' : '';
					var t = (num+1) - h * 100;
					print(num+1);
					numStr += h !== 0 && t !== 0 ? 'and' : '';
					numStr += t < 20 ? this.symbol[t] : this.symbol[(t/10|0) * 10]; 
					numStr += t < 20 ? '' : this.symbol[t - (t/10|0) * 10];

				}
					
					
				str += numStr	
				print(numStr);
			}
			return str.length;
		},

		init: function(){
			print(this.solve(this.test));
		}
	}

	p17.init();
})();
