(function(){
	var p14 = {
		i: 1000000, 
		even: function(n){
			return n / 2;
		},
		odd: function(n){
			return 3 * n + 1;
		},
		process: function(n){
			var cache = 0;
			var cache_num = 0;
			for( var i = 1; i < n; i++ ){
				var cnt = 1;
				var j = true;
				var k = i;
				while(j){
					if( k === 1 )
						break;
					if( k % 2 === 0 )
						k = this.even(k);
					else
						k = this.odd(k);
					cnt += 1;	
				}
				cache < cnt	? (cache = cnt, cache_num = i) : '';
				//print(i, cnt);
			}
			print(cache, 'answer is ' + cache_num);
		},
		init: function(){
			this.process(this.i);
		}
	}
	p14.init();
	// 속도가 너무 느림. 개선의 여지가 있음
})();
