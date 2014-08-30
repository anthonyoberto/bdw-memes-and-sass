
// MAKING SELECTIONS

  // Selections and Filters with jQuery

    // $("header:first").css("border","8px solid red");

    // $(".retina:gt(5)").css("border","8px solid red");
        // gt() indexes beginning at 0; so 5 would really be the 6th class and up

    // $(":not(h1, h2, img)").css("border","8px solid red");

  //Filtering with Attributes (generic class or id, OR explicit values)

    // $("h1[class]").css("border","8px solid blue");

    // $("h1[class=heading]").css("border","8px solid blue");

  //Filtering based on Content (strings are CASE-sensitive)

    // $("h2:contains(C6)").css("border", "8px solid orange");
      //"C6" is a string wrapped within an h2
      //"c6" would not execute CSS because of case

    // $(":first-child").css("border","9px solid orange");

    // $(":nth-child(4)").css("border","9px solid orange");
      //Targets the 4th child of any parent that has one

    // $(":nth-child(5n)").css("border","9px solid orange");
      //Targets the 5th, 10th, 15th, etc. children of all parents

    // $("header:has(h1[class=heading])").css("border","9px solid orange");
      //Target "header" if it has an <h1 class="heading">

  // Using length to get # of DOM elements SELECTED BY jQUERY

    // alert("there are " + $('img').size() + " <img> elements");

  // Use get() to find # of DOM elements as DOM elements (NOT jQUERY OBJECTS)

    // var imgTags = $('img').get();
    // alert("there are " + imgTags.length + " <img> tags");

  // Using get(index) to get a specific DOM element as DOM element
    // alert($('img').get(1));

  // Using the .find function to find <img>s within a <div id="meme-grid">

    // $('#meme-grid').find("img").css("border", "6px solid red");
      // Same effect as the more specific query below:

    // $('#meme-grid>img').css("border", "6px solid red");


// MANIPULATING EXISTING DOM ELEMENT ATTRIBUTES

  // Create new content, then replace the first existing <h2> within the DOM

    // $('h2').html('I replaced the h2, sucka!');
      // Replaces ALL <h2>'s
    // $('h2:first').html('I replaced the h2, sucka!');
      // Replaces first <h2> ONLY

        // OR

    // var newItem = $('<h2>I replaced the h2 again, sucka!</h2>');
    // $('h2:first').html(newItem.html());
      // Also replaces first <h2> ONLY

  // Select all existing <img>s and add attribute: border and value: 10px

    // $('img').attr('border', '10px');
      // .attr is faster than the .css method?


// INSERTING NEW CONTENT INTO DOM

  // Add a string to the end of the first <h1>
    // $('h1:first').append(' 2014');

  // Select the first h1 and append it TO the first h2
    // $('h1:first').appendTo('h2:first');

  // Select the first h1 and append the string to IT
    // $('h1:nth-child(1)').append(' shwing!');


// WRAPPING, REPLACING, & REMOVING CONTENT

  // Empty content between the first <h1></h1>
    // $('h1:first').empty();

  // Remove the entire first <h1></h1> and its content
    // $('h1:first').remove();


// WORKING w/ CSS

  // 1: Upon click of a <div class="button">, take the .val() of the current input, and append it inside the <h2 class="user-input"> and wrap it with <div class='item'>
  // 2: On click of any new item (<div class='item'>), take the clicked item in question and remove it entirely.

  // 1:
    $(document).ready(function() {
      $('#button').click(function() {
        var $addInput = $('input[name=checkListItem]').val();
        $('.user-input').append("<div class='item'>" + $addInput + "</div>");
      });
  // 2:
      $(document).on('click', '.item', function() {
        event.preventDefault();
        $(this).remove();
      });
    });


