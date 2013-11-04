define([
	'goo/entities/systems/System'
],
function (
	System
){
	function AISystem(world){
		System.call(this, "AISystem", ["AIComponent"]);
		this.world = world;
	};
	AISystem.prototype = Object.create(System.prototype);
	AISystem.prototype.process = function(entities){
		for(var i = 0, ilen = entities.length, entity = null; i < ilen; i++){
			entity = entities[i];
			entity.aIComponent.doLogic(entity);
		}
	};
	return AISystem;
});
