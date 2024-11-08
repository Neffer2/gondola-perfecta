// Useful vars
let width, height, mContext, player,referencias1 = [],referencias2 = [], referencias3 = [], 
    gondola_terpel, gondola_mobil;

const INIT_POSITION = 50, SPACE = 90;

export class Game extends Phaser.Scene {
    constructor ()
    {
        super('Game');
    }

    create(){
        mContext = this;
        
        for(let i = 1; i < 6; i++){
            let terpel = this.physics.add.image(0, 0, `t-ref${i}`).setScale(.2);
            terpel.referencia = 'terpel';
            (i < 3) ? referencias1.push(terpel) : referencias2.push(terpel);
        }

        for(let i = 1; i < 6; i++){
            let mobil = this.physics.add.image(0, 0, `m-ref${i}`).setScale(.2);
            mobil.referencia = 'mobil';
            (i < 3) ? referencias1.push(mobil) : referencias3.push(mobil);
        }

        referencias1.forEach((ref, i) => {
            ref.x = (gondola_terpel.x - 250);
            ref.y = 270;
            ref.setInteractive({ draggable: true , dropZone: true });
            ref.on('drag', function(pointer, gameObject, dragX, dragY){
                ref.x = pointer.x;
                ref.y = pointer.y;
            }, mContext);

            ref.on('drop', function(pointer, gameObject){
                console.log(gondola_terpel.x);
                console.log(gondola_terpel.x + gondola_terpel.width);
                console.log(pointer.x);
                if ((pointer.x > (gondola_terpel.x - gondola_terpel.width) && pointer.x < (gondola_terpel.x + gondola_terpel.width)) && 
                    (pointer.y > (gondola_terpel.y - gondola_terpel.height) && pointer.y < (gondola_terpel.y + gondola_terpel.height))) {
                    console.log('Bien');
                }else {
                    ref.x = (gondola_terpel.x - 250);
                    ref.y = 270; 
                }
            });
        });

        referencias2.forEach((ref, i) => {
            ref.x = (gondola_terpel.x - 250);
            ref.y = 470;
            ref.setInteractive({ draggable: true });
            ref.on('drag', function(pointer, gameObject, dragX, dragY){
                ref.x = pointer.x;
                ref.y = pointer.y;
            }, mContext);
        });

        referencias3.forEach((ref, i) => {
            ref.x = (gondola_terpel.x - 250);
            ref.y = 670;
            ref.setInteractive({ draggable: true });
            ref.on('drag', function(pointer, gameObject, dragX, dragY){
                ref.x = pointer.x;
                ref.y = pointer.y;
            }, mContext);
        });

    }

    update(){

    }

    init(){
        width = this.sys.game.config.width;
        height = this.sys.game.config.height;

        gondola_terpel = this.physics.add.image((width/2), (height/4), 'huevo1').setScale(1.5);
        console.log(gondola_terpel);
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