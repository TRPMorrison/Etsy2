// $('.title').text() // grabs the text inside of the element
// $('.container').html() // grabs the HTML inside of the element

// // Replace
// $('.title').text('New Title') // sets the text inside of the element
// $('.container').html('<a href="http://google.com">Google</a>') // sets the HTML inside of the element

// // Append
// $('.container').append('<a href="http://google.com">Google</a>');

// // Prepend
// $('.container').prepend('<a href="http://google.com">Google</a>');






//generate sidebar categories

//return the arrays of taxonomies
var sidebar = etsy.results.map(function (item) {
  return item.taxonomy_path;
});

//loop through the taxonimoies and add them to an
// array when as long as they are not already added
var sidebarItems = [];
sidebar.forEach( function (list) {
  list.forEach( function (item) {
    if (sidebarItems.indexOf(item) === -1) {
      sidebarItems.push(item);
    }
  });
});
