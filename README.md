# I.js
##### Extension to JavaScript

Ijs provides developer with extended functionality given to native JavaScript constructors or objects. Ijs extends JavaScript's Object, Function and Array constructors.

## Object Extensions

### Object.createStateProperty

This Ijs API of Object Extension creates a property in the given object whose runtime value will be determined by the value of another property in the same object.
More information at https://github.com/ishaananuraag/StateProperty.js/blob/master/README.md

#### Syntax:
```javascript
Object.defineStateProperty(obj[, prop], descriptor);
```

##### Parameters
 + **obj** The object on which to define the property.
 + **prop** (or valueAttribute) - The name or Symbol of the property to be defined. (default: 'value')
 + **descriptors** The descriptors for the property being defined.

#### Descriptors: 
 + **values** This is the actual object representing different states(as keys) and their values 
 + **stateAttribute** The name or Symbol of the property which will determine the value of the valueAttribute. (default: 'state')
 + **defaultState** This is the default state for the  property being defined to refer to. If the _stateAttribute_ is already present in object, this has no effect. 
 
##### Javascript Example:
```javascript

	var obj={};
	
	Object.defineStateProperty(obj,'showGreeting',{
		values:{
			'en': function(){
				console.log('Hello');
			},
			'fr': function(){
				console.log('Bonjour');
			},
		},
		stateAttribute: 'language',
		defaultState: 'en',	
	});
	
	obj.showGreeting();
	
	obj.language='fr';
	
	obj.showGreeting();
```

##### Output:
```
> Hello
> Bonjour
```

### Each

This Ijs API of Object Extension iterates through **own** properties of the object and executes the callback. 

#### Syntax:
```javascript
Object.each(obj , callback [, thisParam]);
```


##### Parameters
 + **obj** The object on which to iterate.
 + **callback** Tje function to be called.
 + **thisParam** The object which is to be sent as this to the callback. Default - the object sent.
 
##### Javascript Example:
```javascript

	var obj={firstName: 'Ishaan', lastName: 'Singh'}

	Object.each(obj,function(key, value){
		console.log('Key : '+key+'\t value : '+value);
	});

```
##### Output(After 1 second):
```
	> Key : firstName	 value : Ishaan
	> Key : lastName	 value : Singh
```

### All

This Ijs API of Object Extension iterates through **all** properties of the object and executes the callback. 

#### Syntax:
```javascript
Object.all(obj , callback [, thisParam]);
```


##### Parameters
 + **obj** The object on which to iterate.
 + **callback** Tje function to be called.
 + **thisParam** The object which is to be sent as this to the callback. Default - the object sent.
 
##### Javascript Example:
```javascript

	var obj={firstName: 'Ishaan', lastName: 'Singh'}

	Object.all(obj,function(key, value){
		console.log('Key : '+key+'\t value : '+value);
	});

```
##### Output(After 1 second):
```
	> Key : firstName	 value : Ishaan
	> Key : lastName	 value : Singh
```



## Array Extensions

### Swap

This Ijs API of Array Extension swaps values at two indexes inside the array on which it is called. This Ijs API can be used to swap values in freshly created array as well as the existing array. 

#### Syntax:
```javascript
[Array].swap(indexI , indexJ [, preserveOriginal]);
```

##### Parameters
 + **indexI** The index of first value.
 + **indexJ** The index of second value which is to be swapped with the first.
 + **preserveOriginal** If sent **true**, the original array will not be modified. A new array is returned instead.
 
##### Javascript Example:
```javascript

	var arr=[0,1,2,3,4,5,6,7,8]

	arr.swap(3,6);
	> (9) [0, 1, 2, 6, 4, 5, 3, 7, 8]
	
	arr 
	> (9) [0, 1, 2, 6, 4, 5, 3, 7, 8]
	
	arr.swap(0,8,true);
	> (9) [8, 1, 2, 6, 4, 5, 3, 7, 0]
	
	arr
	> (9) [0, 1, 2, 6, 4, 5, 3, 7, 8]
```


### Randomize

This Ijs API of Array Extension randomizes the values inside the array on which it is called. 

#### Syntax:
```javascript
[Array].randomize();
```
 
##### Javascript Example:
```javascript

	var arr=[0,1,2,3,4,5,6,7,8]

	arr.randomize();
	> (9) [4, 0, 8, 6, 7, 2, 5, 3, 1]
	
	arr
	> (9) [4, 0, 8, 6, 7, 2, 5, 3, 1]
	
	arr.randomize();
	> (9) [1, 8, 4, 0, 5, 3, 2, 6, 7]
	
	arr
	> (9) [1, 8, 4, 0, 5, 3, 2, 6, 7]
```



## Function Extensions

### Schedule

This Ijs API of Function Extension is used to schedule the function on which it is called. The syntax of this Ijs API is same as **call** API with an extra time parameter required* at the end.

#### Syntax:
```javascript
[Function].schedule(thisParam , arg0, arg1 . . .  , time);
```

##### Parameters
 + **thisParam** This reference inside the function.
 + ** arg0, arg1 . . .** The arguments being passed to the function separated by comma.
 + **time** The time after which it should be called in milliseconds.
 
##### Javascript Example:
```javascript

	var showGreeting = function(firstName, lastName){
		console.log('Welcome '+firstName+' '+lastName);
	}
	
	showGreeting.schedule(this,'Ishaan','Singh',1000);

```
##### Output(After 1 second):
```
> Welcome Ishaan Singh
```



### ScheduleApply

This Ijs API of Function Extension is apply counterpart to schedule. It will be safe to say call:apply::schedule:scheduleApply.

#### Syntax:
```javascript
[Function].scheduleApply(thisParam , [arg0, arg1 . . .]  , time);
```

##### Parameters
 + **thisParam** This reference inside the function.
 + ** [arg0, arg1 . . .]** The array of the arguments being passed to the function separated by comma.
 + **time** The time after which it should be called in milliseconds.
 
##### Javascript Example:
```javascript

	var showGreeting = function(firstName, lastName){
		console.log('Welcome '+firstName+' '+lastName);
	}
	
	showGreeting.scheduleApply(this,['Ishaan','Singh'],1000);

```
##### Output(After 1 second):
```
> Welcome Ishaan Singh
```
