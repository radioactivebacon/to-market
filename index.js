"use strict";

// the core library stuff
var Client = require('./lib/Client.class.js'),
    Collider = require('./lib/Collider.class.js'),
    Component = require('./lib/Component.class.js'),
    Entity = require('./lib/Entity.class.js'),
    Game = require('./lib/Game.class.js'),
    GameServer = require('./lib/GameServer.class.js'),
    Physics = require('./lib/Physics.class.js'),
    PhysicsEntity = require('./lib/PhysicsEntity.class.js'),
    Renderer = require('./lib/Renderer.class.js'),
    Revivable = require('./lib/Revivable.class.js'),
    Rigidbody = require('./lib/Rigidbody.class.js'),
    Time = require('./lib/Time.class.js'),
    Transform = require('./lib/Transform.class.js'),
    Quadtree = require('./lib/Quadtree.class.js');

// user implemented classes? this should go in the implementation of the game
// these will be specific to each individual game but probably do not belong in a library
var CharacterMotion = require('./lib/_CharacterMotion.class.js'),
    DestroyAfterTime = require('./lib/_DestroyAfterTime.class.js'),
    DestroyOnCollision = require('./lib/_DestroyOnCollision.class.js'),
    Health = require('./lib/_Health.class.js'),
    Shoot = require('./lib/_Shoot.class.js');

module.exports = ()=>{
    // User Implemented... should be split out eventually
    global.CharacterMotion = CharacterMotion;
    global.DestroyAfterTime = DestroyAfterTime;
    global.DestroyOnCollision = DestroyOnCollision;
    global.Health = Health;
    global.Shoot = Shoot;

    // Core
    global.Client = Client;
    global.Collider = Collider;
    global.Component = Component;
    global.Entity = Entity;
    global.Game = Game;
    global.GameServer = GameServer;
    global.Physics = Physics;
    global.PhysicsEntity = PhysicsEntity;
    global.Renderer = Renderer;
    global.Revivable = Revivable;
    global.Rigidbody = Rigidbody;
    global.Time = Time;
    global.Transform = Transform;
    global.Quadtree = Quadtree;
};