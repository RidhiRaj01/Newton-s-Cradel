class BobObject
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=20;

		this.body=Bodies.circle(this.x, this.y, (this.r20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var bobObjectpos=this.body.position;		

			push()
			translate(bobObjectpos.x, bobObjectpos.y);
			rectMode(CENTER)
		    //strokeWeight(3);
			fill("purple")
			//ellipse(0,0,this.r, this.r);
			pop()
			
	}

}