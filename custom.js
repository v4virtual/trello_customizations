// Here You can type your custom JavaScript...
// USE ExtensionCustom JavaScript for websites to inject this code
$('.list').each(function(i, el) { $(el).css("background-color", "pink") })

$('.list').each(function(i, el) {
    switch ($(el).find("h2").text()) {
        case "Urgent":
            $(el).css("background-color", "crimson");
            $(el).find(".list-header-name").css("color", "white");
            $(el).find(".open-card-composer").css("color", "white");
            break;
        case "Today":
            $(el).css("background-color", "lightgoldenrodyellow");
            break;   
        case "Doing":
            $(el).css("background-color", "lightcyan");
            break;   
        case "Done":
            $(el).css("background-color", "seagreen");
            $(el).find(".list-header-name").css("color", "white");
            $(el).find(".open-card-composer").css("color", "white");
            break; 
        default:
            $(el).css("background-color", "#E2E4E6");
    }
});

$('.badge-text').each(function(i, el2) { 
    console.log($(el2).text());
    switch ($(el2).text()) {         
        case "U: NOW!":
            $(el2).css("background-color", "crimson");
            $(el2).css("color", "white");
            break;
        case "U: ASAP":
            $(el2).css("background-color", "lightred");
            break;   
        case "U: SOON":
            $(el2).css("background-color", "orange");
            break;   
        case "U: REGULAR":
            $(el2).css("background-color", "lightblue");
            break;   
        case "U: LATER":
            $(el2).css("background-color", "lightgrey");
            break;        
        default:
            $(el2).css("background-color", "white");
    }
})
