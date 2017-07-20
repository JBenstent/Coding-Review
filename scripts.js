$(document).ready(function() {
  var tableHTML = ""
  for (var i in table_data) {
    tableHTML +=
      "<tr>" +
      "<td>" + table_data[i].first_name + "</td>" +
      "<td>" + table_data[i].last_name + "</td>" +
      "<td>" + table_data[i].home + "</td>" +
      "</tr>"
  }
  document.getElementById("toggletable").innerHTML = tableHTML;

  $("#tableview").on("click", "#clicktable", function() {
    $(this).toggleClass("active").next().slideToggle();
  });
});
var table_data = [{
    first_name: 'Rose',
    last_name: 'Tyler',
    home: 'Earth'
  },
  {
    first_name: 'Zoe',
    last_name: 'Heriot',
    home: 'Space Station W3'
  },
  {
    first_name: 'Jo',
    last_name: 'Grant',
    home: 'Earth'
  },
  {
    first_name: 'Leela',
    last_name: null,
    home: 'Unspecified'
  },
  {
    first_name: 'Romana',
    last_name: null,
    home: 'Gallifrey'
  },
  {
    first_name: 'Clara',
    last_name: 'Oswald',
    home: 'Earth'
  },
  {
    first_name: 'Adric',
    last_name: null,
    home: 'Alzarius'
  },
  {
    first_name: 'Susan',
    last_name: 'Foreman',
    home: 'Gallifrey'
  }
];
