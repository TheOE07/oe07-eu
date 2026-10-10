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
    } else if (lang === 'cat') {
        setText('welcome', 'benvingut');
        setText('welcomeText', "hola ! soc l'oli i benvingut a oe07.eu :D aquest és un lloc web personal que he creat inspirant-me en llocs com <a href=\"https://neocities.org/\">neocities</a>. no esperis molts (o gens de) actualitzacions però no dubtis a explorar !");
        setText('about1', 'sobre mi');
        setText('about2', 'sobre mi');
        setText('aboutText1', "em dic oli i soc un estudiant de lingüística, japonès i català de 19 anys al regne unit ! m'agrada aprendre sobre el llenguatge i, per extensió, les llengües artificials (pots veure les meves canviant la llengua del lloc web :D). soc també fan de coses com undertale/deltarune, pokémon, el MCU, i els musicals");
        setText('aboutText2', "mira la mia <a href=\"library.html\">biblioteca</a> per veure les coses que he mirat/llegit/jugat/escoltat recentment :)");
        setText('current', 'les ¿coses? actuals');
        setText('lastListened', 'cançó escoltada més recentment');
        setText('watching', 'mirant');
        setText('playing', 'jugant');
        setText('currentTeam', 'equip pokémon actual');
        setText('mostListenedArtist', 'artista més escoltat');
        setText('mostReplayedSong', 'cançó més escoltada');
        setText('name', 'nom : oli');
        setText('country', 'país : escòcia');
        setText('from', 'de : inglaterra');
        setText('age', 'edat : 19');
        setText('pronouns', 'pronoms : ell/ella');
        setText('languages', 'llengües : anglès (materna), francès (com b2?), japonès (principiant), català (principiant) ');
        setText('links', 'vincles');
        setText('disclaimers', 'avís legal');
      } else if (lang === 'jap') {
        setText('welcome', 'ようこそ');
        setText('welcomeText', "こんいちは！<ruby>oli<rt>オリー</rt></ruby>だよ。oe07.euへようこそ (^.^)　<a href=\"https://neocities.org/\">neocities</a>のようなウェブサイトが好きなので、この個人サイトを作った。どうぞ、見回してみてください！<br>※ボクの日本語はあまり上手じゃないです。このサイトは英語で読んでください。");
        setText('about1', 'について');
        setText('about2', 'について');
        setText('aboutText1', "ボクの名前は<ruby>oli<rt>オリー</rt></ruby>です。イギリスで日本語と言語学を専攻しているの19歳の大学生です！言語について学ぶのが大好きで、人工言語もだい好きだよ。（サイトの言語をチェンジすると、ボクの人工言語を見ることができる　˶ᵔ ᵕ ᵔ˶）。また、ボクは<ruby>undertale<rt>アンダーテイル</rt></ruby>/<ruby>deltarune<rt>デルタルーン</rt></ruby>、ポケモン、MCU、ミュージカルなどがすきだ");
        setText('aboutText2', "ボクが見た・プレイした・聴いたものについては、<a href=\"library.html\">ライブラリページ</a>をチェックしてください　(´｡• ᵕ •｡`) ♡");
        setText('current', '¿こと?');
        setText('lastListened', '最後に聴いた曲');
        setText('watching', 'みている');
        setText('playing', 'プレイしている');
        setText('currentTeam', 'ポケモンチーム');
        setText('mostListenedArtist', '最も聴かれているアーティスト');
        setText('mostReplayedSong', '最もリプレイしているている曲');
        setText('name', '名前 ：oli');
        setText('country', '國 : スコットランド');
        setText('from', '出身 : イングランド');
        setText('age', '年 : 19');
        setText('pronouns', '');
        setText('languages', '言語：英語（母語）、フランス語（b2くらい）、日本語（初級）、カタルーニャ語（初級）');
        setText('links', 'リンク');
        setText('disclaimers', 'ディスクレーマー');
      } else if (lang === 'kom-la') {
        setText('welcome', 'dhaghodaghya');
        setText('welcomeText', "heys ! esvì oli koe dhaghodaghya oe07.eu-i :D esdè gèy ĩ ngõvarĩ dhõyis guet karyã võycos gõvarĩs sãvl <a href=\"https://neocities.org/\">neocities</a>. nes n èf fel (nèw sal) ãsro asõs, ãfr dhãyu de woelũnèy !");
        setText('about1', 'am vi');
        setText('about2', 'am vi');
        setText('aboutText1', "esdè shlũdhè vẽ oli-m esvìhoe orgãnosõ uessidhyedis 19 bleyzis ẽ niryõrikisi-nlõghos ! garu diskcos am yedi, koe karyedĩs (gesyës du gĩ gõvarĩ yedigõvòsyo <3). garuhoe asõs sãvl undertale/deltarune, pokémon, MCU, koe sgeysatreijĩ");
        setText('aboutText2', "woel <a href=\"library.html\">viblyosa</a> vẽ ghas drgũnèy asõs guet feroyya drgã/swarã/klusã :)");
        setText('current', '¿as? feroys');
        setText('lastListened', 'gãl klusos nedì');
        setText('watching', 'drgcos');
        setText('playing', 'swarcos');
        setText('currentTeam', 'ehip pokémonis feroys');
        setText('mostListenedArtist', 'artist klusosisĩvùs');
        setText('mostReplayedSong', 'gãl ĩklusosisĩvùs');
        setText('name', 'shlũdhò : oli');
        setText('country', 'diryõ : dirralvà');
        setText('from', 'bresdirrè : dirràsews');
        setText('age', 'bleyzi : 19');
        setText('pronouns', '');
        setText('languages', 'yedi : yedisasnèk (bresyedi), yedifrãs (am b2?), yedinihõ (gĩdr), yedikatalà (gĩdr)');
        setText('links', 'farihoe');
        setText('disclaimers', 'disclaimers');
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


    