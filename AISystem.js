define([
	'goo/entities/systems/System'
],
function (
	System
){
	function AISystem(goo){
		System.call(this, "AISystem", ["AIComponent"]);
		this.world = goo;
		goo.world.setSystem(this);
	};
	AISystem.prototype = Object.create(System.prototype);
	AISystem.prototype.process = function(entities){
		for(var i = 0, ilen = entities.length; i < ilen; i++){
			var entity = entities[i];
			entity.aIComponent.doLogic(entity);
		}
	};
	return AISystem;
});
