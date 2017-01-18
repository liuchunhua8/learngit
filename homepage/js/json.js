
function Json(){
	this.a=null;
	this.naxbox1=document.getElementById("naxbox1");
	this.naxbox2=document.getElementById("naxbox2");
	var _self=this;
	this.ss=function(){
		$.get("json/zi.json",null,function(data,textStatus){
			if(textStatus=="success"){
				for(_self.i=0;_self.i<6;_self.i++){
					_self.a=document.createElement("a");
					_self.a.href="#";//如果毛衣跳转到别的页面就写那个地址，有几个就写几个这样的方法
					_self.a.innerHTML=data["nv"]["nv1"]["zi"+(_self.i+1)];
					_self.naxbox1.appendChild(_self.a);
				}
			}
		});
	}
}
