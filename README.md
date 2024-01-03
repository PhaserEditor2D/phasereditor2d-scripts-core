# Basic Phaser Editor 2D script nodes

This project contains the main scripts to use with a Phaser Editor 2D project.

It includes the basic script nodes and user components, especially, the `ScriptNode` and `UserComponent` classes.

These script nodes are very basic and may fit on any Phaser Editor 2D project.

The scripts are coded in TypeScript with ES modules.

## Installing (NPM)

Install this package in your game:

```
npm install @phasereditor2d/scripts-core
```

Also, you should add this package to the `phasereditor2d.config.json` file in your project, in the `scripts` section:

```json
{
    "scripts": ["@phasereditor2d/scripts-code"]
}
```

## Installing (vanilla JS)

* Get the files in the [browser](./browser/) folder and copy them into your JavaScript project. It includes Phaser Editor 2D files, JavaScript files, and TypeScript type definitions.
* Add a `script` tag to the `index.html` file to load the `lib/phasereditor2d_scripts_core.js` file.

## Summary

There are three groups of scripts: **Base**, **Event**, and **Action**.

## User components

This package provides a couple of general-purpose user components. Including the `UserComponent` class, which is the base class for all user components.

* `UserComponent` - it is a class you can use as the base class for your user components.
* **Action Target** - it provides information to script nodes about what object is the target of an action.
* **Assignment Operator** - to specify an operator (`=`, `+=`, or `=`) in the context of an assignment script-like action.

### Base scripts

Contains basic/abstract functionality. Often, you will create prefab variants of them (extend them).

* **ScriptNode** - the base class for all the scripts.
* **Sprite Base Script** - base prefab for script nodes accessing sprite objects.
* **Root Base Script** - a script node that registers itself into the game object and can be used as a container of other scripts.

### Event scripts

These scripts listen to certain events. When the event is emitted, then executes the children, which are actions.

* **On General Event** - registers to the given `eventEmitter` and listens to the given `eventName` event.
* **On Awake Event** - listens to the `scene-awake` event of the scene.
* **On Pointer Down Event** - listens to the `pointerdown` event of the game object.

### Action scripts

Actions are scripts that are executed manually or by other nodes, like triggers or other actions.

* **Callback Action** - executes the given `callback` expression.
* **Start Scene Action** - starts the given `sceneKey` scene.
* **Exec Action** - executes the given `targetAction`.
* **Emit Event Action** - the given `eventEmitter` emits the given `eventName`.
* **Alert Action** - shows the browser's alert dialog, with the given `message`.
* **Console Log Action** - logs the given `message` to the browser's console.
* **Destroy Action** - destroys the game object.
* **Add To Parent Action** - adds the game object to the given parent.
* **Exec Random Action** - executes a random child node.
* **Exec Children Action** - executes all children nodes.
* **Play Sprite Animation** - plays the given sprite animation.
* **Set Angle Action** - sets the angle to the game object.
* **Set Scale X/Y Action** - set the X or Y of the game object's scale.
* **Set X/Y Action** - set the scale X/Y of the game object's position.
* **Set Flip Action** - flips the game object vertically or horizontally.

## Target Action component

This user component is a hint to the action-like script nodes about what object is the target of the action. The possible targets are the game object of the script node (the default), or any of the arguments of the `execute(...)` method of the action.

The **Target* property of the component allows these values: `GAME_OBJECT` (default), `ARG_1`, `ARG_2`, `ARG_3`, etc...

If you are implementing a custom action script, you may want to look into the **Target Action** component to determine the object to receive the action. This is an example:

```js
class MyAction {

    execute(...args: any[]) {

        const obj = TargetActionComp.getActionTarget(this, args);

        this.performMyCustomAction(obj);
    }
}
```

## Assignment Operator component

There are script actions about to set a value to the game object. Like the case of the **Set X Action**.
With the **Assignment Operator**, you can specify the operator to use in the assignment: `=`, `+=`, or `*=`.

## ScriptNode

The base of all the scripts. Probably it is already available in your project (if you generated it with Phaser Editor 2D).

This class provides methods for managing the node's children, and implementing the scene events: `awake`, `start`, and `update`.

## Sprite Base Script

A base script for all the scripts accessing sprite objects. It just overrides the `gameObject` property and sets its type to `Phaser.GameObjects.Sprite`. This helps IDE auto-completion and type-checking.

## Root Base Script

A base script that you can use to register the script node into the game object. In this way you can access the scripts associated to a game object.

When you create a **RootScript**, it registers itself to the game object in this way:

```
gameObject["RootScript__scripts"] = this;
```

You can use the `key` parameter to register the root script node using another attribute. If the `key` parameter is `"anotherScripts"`, then it registers the root node like this:

```
gameObject["RootScript__anotherScripts"] = this;
```

The **RootScript** class contains utility methods for accessing the root script of a game object.

The static `getRoot()` method can be used for getting the root script:

```
const script = RootScript.getRoot(someGameObject);
const otherScript = RootScript.getRoot(someGameObject, "anotherScripts");
```

The static `hasRoot()` method tells if the game object is a root script:

```
if (RootScript.hasRoot(gameObject, "myScripts")) {
    ....
}
```

The static `getChildren()` method returns the children of the root script:

```
const children = RootScript.getChildren(gameObject, "myScripts");
```

You can create variants of the **RootScript** and use different keys.

## On General Event

An event script node. It registers to the given `eventEmitter` and listens to the given `eventName``. When the event is fired, it executes the children's action nodes. 

You can create handy prefab variants for different events, like the **On Pointer Down Event** prefab.

You can select an `eventEmitter` from the following list:

* `game.events`
* `scene.events`
* `scene.loader`
* `scene.input`
* `scene.input.keyboard`
* `scene.anims`
* `gameObject` (by default)

## OnPointerDownScript

An event script. It is a prefab variant of the **On General Event** node. It listens to the `pointerdown` event of the game object and executes the children's action nodes.

If the game object's input is not set when the scene "awakes", then this script calls the `gameObject.setInteractive()` method.

## Callback Action

An action script. It executes the given `callback` expression. You can use this script for executing custom methods from your prefabs or scenes.

## Start Scene Action

An action script. It starts the given `sceneKey` scene.

## Exec Action

An action script. It executes the given `targetAction`. You can use this script for executing an action node from the script tree.

For example, let's say you have a **JumpAction** for jumping a character. But you want to call this action when different events are fired:

- When you click a jump button.
- When you press the `SPACE` key.
- When you press the `UP` button of an external gamepad.

So, you can use different **ExecActionScript** nodes in different contexts, but referencing the same **JumpAction** node.

## Emit Event Action

An action script. It calls the emit method of the given `eventEmitter` with the given `eventName`. As an argument of the event, it uses the argument received in the `execute()` method.

Like in the **OnEventScript**, you can select an `eventEmitter` from a list:

* `game.events`
* `scene.events`
* `scene.loader`
* `scene.input`
* `scene.input.keyboard`
* `scene.anims`
* `gameObject` (by default)

## Alert Action

An action script that shows the given `message` in the browser's Alert dialog.

## Console Log Action

An action script that logs the given `message` in the browser's console.

## Destroy Action

An action script that destroys the game object.

## Add To Parent Action

This action adds the game object to the given **Parent Container**.

This action allows the **Action Target Config** component.

## Exec Random Action

This action picks a random child and executes it.

## Exec Children Action

This action executes all children nodes.

## Play Sprite Animation

The action plays the given **Animation Key** in the game object. You can set the **Ignore If Playing** parameter.

This action allows the **Action Target Config** component.

## Set Angle Action

An action to set the given **Angle** to the game object. 

This action allows the **Action Target Config** component.

## Set Scale X/Y Action

An action to set the given **X** or **Y** to the game object. 

This action allows the **Action Target Config** component.

## Set Flip Action

An action to set flip the game object. It looks into the **Flip Vertical** and **Flip Horizontal** properties. 

This action allows the **Action Target Config** component.