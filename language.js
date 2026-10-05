    const LANGUAGE_STORAGE_KEY = 'selectedLanguage';

    function changeLanguage(lang) {
        localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);

        const dropdown = document.querySelector('#language-dropdown select');
        if (dropdown) {
            dropdown.value = lang;
        }

        const setText = (id, value) => {
          const element = document.getElementById(id);
          if (element) {
            element.innerHTML = value;
          }
        };

    if (lang === 'mac') {
        setText('welcome', 're lepasahe');
        setText('welcomeText', "'opis ! ye li oli ha lepasahe ke oe07.eu :D ye ta na wo'aryu'e fru as lasra li kol re fisa li na ku'of dya <a href=\"https://neocities.org/\">neocities</a> el. ki fa gilelyar ulye nu sabro, de fola fisa ke na wo'ar so li !");
        setText('about1', 'ni dirye');
        setText('about2', 'ni dirye');
        setText('aboutText1', "alki li oli ha ye li ni 'anur fru iril kol 19 ful so kele'anur 'i usri alba ral ! ba'i li re 'anur ro li na kele el, ha lun pa'i li na lasrakel (wo'ar ta 'u yukta insrekele <3). lun, ulye'ude li na ifwi dya undertale/deltarune, pokémon, na furit so marvel, ha na kelosdeksro");
        setText('aboutText2', "ki fisa ke <a href=\"library.html\">na fonriwo'ar</a> so li 'u wo'i re peri ke na ifwi fru nu'ula riso/dosra/'ule li kol :)");
        setText('current', 'na ¿nu\'uifwi?');
        setText('lastListened', 'prusla na kelos re \'ule');
        setText('watching', 'ul riso');
        setText('playing', 'ul dosra');
        setText('currentTeam', 're rutsa ko pokémon el so nu\'u');
        setText('mostListenedArtist', 'bwile lasrakelos re rin \'ule');
        setText('mostReplayedSong', 'bwile na kelos re rin \'ule');
        setText('name', 'ni alko : oli');
        setText('country', 'na ralok : alba ral');
        setText('from', 'na ninaralok : inglis ral');
        setText('age', 'iril : 19');
        setText('pronouns', 'koalko : sa');
        setText('languages', 'na kele : inglis kel (rulsekel), frans kel (dya b2?), nihon kel (na wasre), katala kel (na wasre) ');
        setText('links', 'na halwo\'ar');
        setText('disclaimers', 'disclaimers');
    } else if (lang === 'fra') {
        // setText('welcome', 'bienvenue');
        // setText('welcomeText', "salut ! je suis oli, et bienvenue sur oe07.eu :D c'est un site personnel que j'ai créé, inspiré par des endroits comme <a href=\"https://neocities.org/\">neocities</a>. n'attendez pas beaucoup de mises à jour (s'il y en a), mais vous pouvez jeter un coup d'œil !");
        // setText('about1', 'à propos');
        // setText('about2', 'à propos de moi');
        // setText('aboutText1', "je m'appelle oli et je suis étudiant en linguistique de 18 ans au royaume-uni ! j'aime apprendre les langues et, par extension, les conlangs (vous pouvez regarder le mien en changeant la langue du site <3). je suis aussi très fan de choses comme undertale/deltarune, pokémon, le MCU et les comédies musicales.");
        // setText('aboutText2', "allez voir ma page <a href=\"library.html\">bibliothèque</a> pour découvrir ce que j'ai regardé, joué ou écouté récemment :)");
        // setText('current', '¿choses? ac  tuelles');
        // setText('lastListened', 'dernier morceau écouté');
        // setText('watching', 'en train de regarder');
        // setText('playing', 'en train de jouer');
        // setText('currentTeam', 'équipe pokémon actuelle');
        // setText('mostListenedArtist', 'artiste le plus écouté');
        // setText('mostReplayedSong', 'chanson la plus rejouée');
        // setText('name', 'prenom : oli');
        // setText('country', 'pays : écosse');
        // setText('from', 'originaire de : angleterre');
        // setText('age', 'âge : 18');
        // setText('pronouns', 'pronoms : they/them');
        // setText('languages', 'langues : english (native), french (b2ish?), japanese (beginner)');
        // setText('links', 'liens');
        // setText('disclaimers', 'mentions');
      } else {
        setText('welcome', 'welcome');
        setText('welcomeText', "hi ! i'm oli, and welcome to oe07.eu :D this is a personal site i made inspired by places like <a href=\"https://neocities.org/\">neocities</a>. don't expect many (if any) updates, but feel free to look around !");
        setText('about1', 'about');
        setText('about2', 'about');
        setText('aboutText1', "my name is oli and i am a 19 year old linguistics student in the uk ! i love learning about language, and by extension, conlangs (you can check out mine by changing the site's language <3). i am also a big fan of things such as undertale/deltarune, pokémon, the MCU, and musicals");
        setText('aboutText2', "check out my <a href=\"library.html\">library</a> page to have a look at stuff i've watched/played/listened to recently :)");
        setText('current', 'current ¿things?');
        setText('lastListened', 'last listened song');
        setText('watching', 'watching');
        setText('playing', 'playing');
        setText('currentTeam', 'current pokemon team');
        setText('mostListenedArtist', 'most listened artist');
        setText('mostReplayedSong', 'most replayed song');
        setText('name', 'name : oli');
        setText('country', 'country : scotland');
        setText('from', 'from : england');
        setText('age', 'age : 19');
        setText('pronouns', 'pronouns : they/them');
        setText('languages', 'languages : english (native), french (b2ish?), japanese (beginner), catalan (beginner)');
        setText('links', 'link but again');
        setText('disclaimers', 'disclaimers');
      }
    }

    function initializeLanguage() {
      const dropdown = document.querySelector('#language-dropdown select');
      if (dropdown) {
        const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || dropdown.value;
        dropdown.value = savedLanguage;
        changeLanguage(savedLanguage);
      }
    }


    