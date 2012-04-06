(function() {
  function c() {
  }
  c = {sqrt:function(a) {
    return parseInt(Math.sqrt(a))
  }, c:function(a) {
    this.a = 0 === a[0] % a[1] ? !0 : !1;
    return[a[0] / a[1], a[1], this.a]
  }, loop:function() {
    print(this.b);
    for(var a = 1;a < this.b;a++) {
      print(a);
      var b = this.c([this.d, a]);
      if(this.a) {
        print(b), this.b = this.sqrt(b[0]), this.result.push(b[1])
      }
    }
    print(this.result)
  }, d:600851475143, e:13195, b:13195, a:!1, result:[]};
  c.loop()
})();

