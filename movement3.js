AFRAME.registerComponent("movement", {
  init: function () {
    this.speed = 0.3; 
    window.addEventListener("keydown", (e) => {
      let position = this.el.getAttribute("position");

      
      switch (e.key) {
        case "ArrowUp":
        case "w":
          position.z -= this.speed;
          break;
        case "ArrowDown":
        case "s":
          position.z += this.speed;
          break;
        case "ArrowLeft":
        case "a":
          position.x -= this.speed;
          break;
        case "ArrowRight":
        case "d":
          position.x += this.speed;
          break;
      }

     
      this.el.setAttribute("position", position);
    });
  }
});
