AFRAME.registerComponent('falling-item', {
  init: function () {
    this.speed = 0.03;
    this.score = 0; 
    this.gameOver = false; 
  },

  tick: function () {
    if (this.gameOver) return; 

    
    let position = this.el.getAttribute('position');

    
    if (position.y > 1.6) {
      position.y -= this.speed;
      this.el.setAttribute('position', position);
    }

   
    let player = document.getElementById('duck');
    let playerPos = player.getAttribute('position');

    
    if (Math.abs(position.x - playerPos.x) < 1 &&
        Math.abs(position.z - playerPos.z) < 1 &&
        position.y <= 1.6) {
      
      this.resetIceCream(); 
      this.updateScore(); 
    }
  },

  resetIceCream: function () {
    
    let randomX = (Math.random() * 10) - 5;
    this.el.setAttribute('position', {x: randomX, y: 10, z: -4});
  },

  updateScore: function () {
    
    this.score++;
    let scoreText = document.getElementById('scoreText');
    scoreText.setAttribute('text', { value: `Score: ${this.score}` });

    
    if (this.score >= 5) {
      this.gameOver = true; 
      this.displayGameOver(); 
    }
  },

  displayGameOver: function () {
    
    let gameOverText = document.getElementById('gameOverText');
    gameOverText.setAttribute('text', { value: 'You Won!' });

    
    this.el.removeAttribute('falling-item'); 
  }
});
