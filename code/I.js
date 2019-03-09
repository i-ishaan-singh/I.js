/*!
 * IJs JavaScript Extension
 *
 * Copyright (c) 2019 Ishaan Singh
 * Released under the MIT license
 *
 */
 (function (factory) {
   if(typeof define === "function" && define.amd) {    
	define(factory);
  } else {
    factory();
  }
})(function(){
	
	
	/****************** Object Extensions **********************************/
	
	
	Object.defineStateProperty = function(object,valueAttribute,properties){

		if(typeof valueAttribute === "object"){
			properties=valueAttribute;
			valueAttribute=undefined;
		}

		return (function(object,valueAttribute,properties){
			var stateAttribute=(properties.stateAttribute||'state'),
				state=properties.defaultState || Object.keys(properties.values)[0],
				map= Object.create(properties.values);

			Object.defineProperty(object,(valueAttribute||'value'),{
				get: function(e){
					return map[this[stateAttribute]];
				},
				set: function(value){
					map[this[stateAttribute]]=value;
				}
			});
			if(!object[stateAttribute]){
				Object.defineProperty(object,(properties.stateAttribute||'state'),{
					value: state,
					writable: true
				});
			}

			return object;	
		})(object,valueAttribute,properties);

	}

		//Each API
	Object.each=function(object,callback, thisParam){
		var _keys=Object.keys(object),
			_length=_keys.length;
			thisParam=(thisParam||object);
		for(var i=0;i<_length;++i){
			if(object.hasOwnProperty(_keys[i])){
				callback.call(thisParam,_keys[i],object[_keys[i]]);
			}
		}
	};
	
		//All API
	Object.all=function(object,callback,thisParam){
		var _keys=Object.keys(object),
			_length=_keys.length;
			thisParam=(thisParam||object);
		for(var i=0;i<_length;++i){
			callback.call(thisParam,_keys[i],object[_keys[i]]);
		}
	};
	
	/****************** END : Object Extensions ****************************/
	
	
	/****************** Array Extensions **********************************/
	
	
	
	Array.prototype.swap=function(indexI, indexJ, preserveOriginal){
		var _arr=preserveOriginal?Array.prototype.slice.call(this):this,
			temp=_arr[indexI];
		
		_arr[indexI]=_arr[indexJ];
		_arr[indexJ]=temp;
		
		return _arr;
	}
	
	
	Array.prototype.randomize=function(){
		var temp,r;
		for(var i=this.length-1;i>=0;--i){
			r=Math.floor(Math.random()*i);
			temp=this[i];
			this[i]=this[r];
			this[r]=temp;
		}
		return this;
	}
	
	/****************** END : Array Extensions ****************************/
	
	
	/****************** Function Extensions *******************************/
	
	
	Function.prototype.schedule=function(){
		var that=this, _args=Array.prototype.slice.call(arguments),
			thisParm=_args.splice(0,1),
			time=Number(_args.splice(-1));
			
		setTimeout(function(){
			that.apply(thisParm, _args);
		}, time );
	}
	
	
	Function.prototype.scheduleApply=function(thisParm, argumentList, time){
		var that=this;
		setTimeout(function(){
			that.apply(thisParm, argumentList);
		}, time );
	}
	/****************** END : Function Extensions *******************************/
});