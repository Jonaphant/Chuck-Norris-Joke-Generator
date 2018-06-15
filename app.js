document.querySelector('.get-jokes').addEventListener('click', loadJokes);

function loadJokes(e){
  number = document.getElementById('number').value;

  xhr = new XMLHttpRequest();
  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
  xhr.onload = function(){

    if(this.status === 200){
      const response = JSON.parse(this.responseText);
      let output = '';

      if(response.type === "success"){
        response.value.forEach(function(joke){
          output += `<li>${joke.joke}</li>`;
        });
      }else{
        output =+ 'There was an error';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }


  xhr.send();
  e.preventDefault();
}