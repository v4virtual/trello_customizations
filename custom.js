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
        case "Ideas":
            $(el).css("background-color", "palegreen");
            break;
        case "Today":
            $(el).css("background-color", "lightgoldenrodyellow");
            break;   
        default:
            $(el).css("background-color", "#E2E4E6");
    }
});