AI-Stuff
========
AISystem, AIComponent, and various Behaviors

Basic Usage:
--------
1.You need to instantiate a new AISystem, passing in the GooRunner.

  var ai = new AISystem(goo);
  
The AISystem automatically adds itself to the goo.world.

2.You then add an AIComponent to your entity.

  entity.setComponent(new AIComponent());  
  
3.Now you need to create and add Behaviors to get different results.

  entity.aIComponent.addBehavior({logic:MoveEveryUpdate, x:5});
  
In the above example, the behaviors 'logic' is the MoveEveryUpdate function.  We are also using a variable called 'x'.

The MoveEveryUpdate funciton looks like this:

function MoveEveryUpdate(entity, node){
   entity.transformComponent.transform.translation.x += (node.x || 0) * goo.world.tpf;
   entity.transformComponent.transform.translation.y += (node.y || 0) * goo.world.tpf;
   entity.transformComponent.transform.translation.z += (node.z || 0) * goo.world.tpf;
   entity.transformComponent.setUpdated();
}

As you can see, the entity, and the behavior node is passed into every Behavior 'logic' function.

Inside this particular behavior, we are moving the entity every frame, based on the 'x', 'y', and 'z' variables we created when we passed the behavior in.
