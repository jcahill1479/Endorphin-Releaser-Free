function Start() {

  x = Math.floor(Math.random() * 11) + 10;
  
  for (var i = 0; i < x; i++) {
      AddSmallShape();
    }
  // Initialize Spaceship
  //InitializeShape();
}
