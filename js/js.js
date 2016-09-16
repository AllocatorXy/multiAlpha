window.onload = function () 
{
	var aDiv = document.getElementsByTagName('div');

	for (var i = 0; i < aDiv.length; i++) 
	{
		aDiv[i].timer = null;
		aDiv[i].alpha = 40; //照顾到多物体，除定时器外，alpha值[etc]也不能共用

		aDiv[i].onmouseover = msOver;
		aDiv[i].onmouseout = msOut;
	}
};


function bufAlpha(obj, iTar) 
{
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var speed = (iTar-obj.alpha)/10;
		speed = speed>0?Math.ceil(speed):Math.floor(speed);

		if (obj.alpha == iTar) 
		{
			clearInterval(obj.timer);
		}
		else
		{
			obj.alpha+=speed;

			obj.style.filter = 'alpha(opacity:'+obj.alpha+')'; //这里要转义
			obj.style.opacity = obj.alpha/100;
		}
	}, 15);
}
function msOver() 
{
	bufAlpha(this, 100);
}
function msOut() 
{
	bufAlpha(this, 40);
}