function init(){
    $( '#number-chooser' ).submit( ( event ) => {
      // stop the default form submission behavior
      event.preventDefault();
      // in case there's already results
      $( ".js-results" ).empty();
      
      let num = $ ( '#number-choice' ).val();
      // we'll store individual DOM elements for each number
      // in this array, and once we've produced them all,
      // we'll append it to the results section of our HTML
      let results = $( '.js-results' );
  
      // for each number between 1 and `num`, do the following
      for ( let i = 1; i <= num; i ++ ) {
        
        // if it's divisible by 3 and 5, create a fizzbuzz element
        if ( i % 15 === 0 ) {
          $( results ).append( `<div class="fizz-buzz-item fizzbuzz">
            <span>
              fizzbuzz
            </span>
          </div>`);  
        }
        // if it's divisible by only 5, create a buzz element
        else {
          if ( i % 5 === 0 ) {
            $( results ).append( `<div class="fizz-buzz-item buzz">
              <span>
                buzz
              </span>
            </div>`);
          }
        // if it's divisible by only 3, create a fizz element
          else {
            if ( i % 3 === 0 ) {
              $( results ).append( `<div class="fizz-buzz-item fizz">
                <span>
                  fizz
                </span>
              </div>`);
              
            }
            // otherwise, create a fizz-buzz-item element that just displays `num`
            else {
              $( results ).append( `<div class="fizz-buzz-item">
                <span>
                  ${ i }
                </span>
              </div>`);
            }
          }
        }
      }
      // attach our results to the ".js-results" element in the DOM
      $(".js-results").append(results);
    }); 
  }
  
  $( init );