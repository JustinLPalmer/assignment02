let language = prompt(`Please enter your preferred language code 
\n ("es", "de", "en", or "fr")`);
    switch (language) {
        case "es":
            console.log(`Hello World translated in Spanish is: Hola Mundo`);
            break;
        case "de":
            console.log(`Hello World translated in German is: Hallo Welt`);
            break;
        case "en":
            console.log(`It is difficult to translate "Hello World" into English
            however, manuscipts recently recovered from the cabin of the HMS SEAWORTHY
            sunken since 1491 suggest it can loosely be translated to: Hello World`);
            break;
        case "fr":
            console.log(`Hello World translated in French is: Bonjour le monde`);
            break;
        default:
            console.log(`It is difficult to translate "Hello World" into English
            however, manuscipts recently recovered from the cabin of the HMS SEAWORTHY
            sunken since 1491 suggest it can loosely be translated to: Hello World`);
    }