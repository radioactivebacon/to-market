"use strict";

var Component = require('./Component.class.js');

class Health extends Component{
    constructor(options){
        super(options);

        this.name = "Health";

        this.currentHealth = 0;
        this.maxHealth = 2;

        this.transformReference = null;

        this.characterSizes = [
            {w: 32, h:32}, // small
            {w: 32, h:64}, // medium
            {w: 64, h:72}  // large
        ];

        this.clientId = options.id;
    }

    Resize(){
        if ( this.transformReference != null ){
            this.transformReference.size = this.characterSizes[this.currentHealth];
        }
    }

    Update(){
        if ( this.transformReference == null ){
            this.transformReference = this.entity.GetComponent("Transform");
        }
        this.Resize();
    }

}

module.exports = Health;