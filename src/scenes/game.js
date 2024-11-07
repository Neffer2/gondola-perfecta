// Useful vars
let width, height, mContext, player, referenciasTerpel = [], referenciasMobil = [], 
    gondola_terpel, gondola_mobil;

export class Game extends Phaser.Scene {
    constructor ()
    {
        super('Game');
    }

    create(){
        mContext = this;
        
        for(let i = 1; i < 6; i++){
            let terpel = this.physics.add.image((gondola_terpel.x - 240), (height/4), `t-ref${i}`).setScale(.2);
            referenciasTerpel.push(terpel);
        }

    }

    update(){

    }

    init(){
        width = this.sys.game.config.width;
        height = this.sys.game.config.height;

        gondola_terpel = this.physics.add.image((width/2), (height/4), 'huevo1').setScale(1.5);
        gondola_mobil = this.physics.add.image((width/2), (height/2), 'huevo2').setScale(1.5);
    }

    popUp(){
        // clearInterval(elemsInterval);
        let popUp = this.add.image((width/2), (height/2), 'popUp').setScale(1.5).setDepth(1);
        let title = this.add.text((width/2) - 230, (height/2) - 150, 'GANASTE', {font: '180px primary-font', fill: '#fff'}).setDepth(2);
        let pts = this.add.text((width/2) - 70, (height/2) + 20, `${player.score} puntos`, {font: '50px primary-font', fill: '#fff'}).setDepth(2);
        let volver = this.add.image((width/2) + 10, (height/2) + 220, 'volver').setScale(1.5).setInteractive().setDepth(2);

        volver.on('pointerdown', function(){
            volver.setScale(1.3);
            setTimeout(() => {
                window.location.reload();
            }, 350);
        });

        volver.on('pointerout', () => {            
            volver.setScale(1.5); 
        });
    }
}   