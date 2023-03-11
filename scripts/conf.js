export const varConfig = {
  popupSelector: '.popup_type_fact',
  popupContentSelector: document.querySelector('.popup__content'),
  popupHeadTextSelector: document.querySelector('.popup__head-text'),
  popupAnswerTextSelector: document.querySelector('.popup__answer-text'),
  questionTextSelector: document.querySelector('.main__question-text'),
  countCorrectSelector: document.querySelector('.results__correct-count'),
  countIncorrectSelector: document.querySelector('.results__incorrect-count'),
  buttonPositive: document.querySelector('.button_type_positive'),
  buttonNegative: document.querySelector('.button_type_negative'),
  buttonNextQuestion: document.querySelector('.button_type_next'),
  typeSuccessClass: `popup__content_type_success`,
  typeFailClass: `popup__content_type_fail`,
  textResult: {
    successTrueFact: 'Верно! Это правда.',
    successFalseFact: 'Верно! Это ложь.',
    failTrueFact: 'Увы и ах, это правда.',
    failFalseFact: 'Увы, но это ложь.'
  },
  counterCorrect: 0,
  counterIncorrect: 0,
};

export const facts = [
  {
    question: 'Растений на Земле больше, чем звезд в Нашей Галактике.',
    answer: 'В Млечном Пути примерно 100 миллиардов звезд, а растений на Земле по разным оценкам около 3 триллионов, в 30 раз больше.',
    isTrue: true,
  },
  {
    question: 'Человеческое тело производит достаточно слюны за одну жизнь, чтобы заполнить подводную лодку.',
    answer: 'Ученые посвятили этой теме целое исследование в 2009 году и выяснили, что за сутки среднестатистический человек без патологий вырабатывает один литр слюны. Если взять среднюю продолжительность жизни в 30 тысяч дней, получится всего 30 тысяч литров.',
    isTrue: false,
  },
  {
    question: 'Головы во Франции перестали рубить совсем недавно.',
    answer: 'Последняя казнь на гильотине состоялась в 1977 году. Кстати, в этом же году вышел первый фильм Звездных Войн.',
    isTrue: true,
  },
  {
    question: 'Стая бабочек называется калейдоскопом.',
    answer: 'Стая бабочек - это стая бабочек, а калейдоскоп - это быстрая смена чего-либо.',
    isTrue: false,
  },
  {
    question: 'На каждого человека на Земле приходится 1.600.000 муравьев.',
    answer: `Да-да, а людей уже больше 8.000.000.000 :)`,
    isTrue: true,
  },
  {
    question: 'У динозавров были большие уши, но об этом все забыли, потому что в ушах динозавров нет костей.',
    answer: 'В черепе динозавров были маленькие косточки, передававшие звук от барабанной перепонки к участкам мозга, отвечающим за слух. Но ушей в общем понимании у динозавров не было. Уши динозавра, представляли собой маленькие отверстия по бокам головы. Так же выглядят уши современных ящериц.',
    isTrue: false,
  },
  {
    question: 'Аляска - самый восточный штат США.',
    answer: 'Некоторые острова, относящиеся к штату Аляска, находятся западнее линии перемены дат. Поэтому Аляска технически самый восточный штат США.',
    isTrue: true,
  },
  {
    question: 'Каждая подмышка уникальна: у нее есть индивидуальный отпечаток, как и у пальцев.',
    answer: 'Если в подмышках и есть что-то уникальное, так это запах: он действительно у каждого человека свой, индивидуальный.',
    isTrue: false,
  },
  {
    question: 'Правда ли, что в Лондоне казнь через повешение существовала даже тогда, когда уже было построено метро?',
    answer: 'На последнюю казнь через повешение в Лондоне люди ехали на метро.',
    isTrue: true,
  },
  {
    question: 'На носу норвежских военных кораблей нет цифр. Вместо этого на них напечатаны штрих-коды.',
    answer: 'Обычно на носу корабля есть три надписи: название судна, порт приписки и номер Международной морской организации. Этот номер присваивается судну однажды и на всю его жизнь. Судно может поменять владельца, флаг, порт регистрации, может перейти под другой регистр, но номер меняться не будет. И по этому номеру можно проследить всю историю судна. А вот устройств, которое считывало бы штрих-коды с носа корабля, не было и нет.',
    isTrue: false,
  },
  {
    question: 'Оксфордский университет был основан раньше, чем империя ацтеков.',
    answer: 'Оксфордский университет старше ацтеков. Обучение в Оксфорде началось в начале 1096 года, а в 1249 году был основан Университетский колледж Оксфордского университета. Цивилизация ацтеков, как мы знаем, берёт начало с основания города Теночтитлан в 1325 году.',
    isTrue: true,
  },
  {
    question: 'Почтовые работники США технически имеют право останавливаться и штрафовать автомобилистов за превышение скорости.',
    answer: 'Почтальон - госслужащий. Уволить почтальона практически невозможно, только если он выкинет что-то совсем из ряда вон. Нападение на почтальона при исполнении — федеральное преступление, расследовать его будут агенты ФБР. Но останавливать и штрафовать автомобилистов — это враки.',
    isTrue: false,
  },
  {
    question: 'Норвегию от Северной Кореи отделяет всего одна страна.',
    answer: 'И эта страна - Россия!',
    isTrue: true,
  },
  {
    question: 'У некоторых леденцов есть углубление в центре, чтобы предотвратить смерть от удушья.',
    answer: `Идея заключается в том, что, если леденец застрянет в горле, в центре у него останется небольшое отверстие, через которое может проходить воздух. Это просто особенность производства того или иного леденца.`,
    isTrue: false,
  },
  {
    question: 'Люди, проживающие в пустынной местности, чаще гибнут от наводнений, чем от обезвоживания.',
    answer: 'Наводнения там просто ужасные, потому что почва плохо впитывает влагу, и большие проблемы с дренажем.',
    isTrue: true,
  },
  {
    question: 'Если добавить десятичную дробь к полученному проценту, люди поверят на 72,8% с большей вероятностью.',
    answer: 'Люди вряд ли поверят тебе, даже если ты скажешь, будто это правда на все 146%.',
    isTrue: false,
  },
  {
    question: 'Пирс Броснан был самым легким и самым тяжелым Джеймсом Бондом.',
    answer: 'В «Золотом глазе» он весил 74 кг, в «Умри, но не сейчас» 96 кг.',
    isTrue: true,
  },
  {
    question: 'В декомпрессионной камере для дайвинга волосы и ногти перестают расти, когда ты опустишься на глубину ниже 40 метров.',
    answer: 'Единственная ситуация, когда у тебя перестанут расти волосы и ногти, это если тело начнет терять влагу и в буквальном смысле высыхать. Соответственно, объем мягких тканей — мышц, жира, внутренних органов и костей — уменьшится, а все твердое — кости, ногти и волосы — останется при своих размерах. Эта ситуация называется смертью. Но точно не погружением на дно.',
    isTrue: false,
  },
  {
    question: 'Между Луной и Землей можно поместить все остальные планеты Солнечной Системы.',
    answer: 'Между Луной и Землей - 384.400км, длина всех планет, включая Землю, составит ~196.379км',
    isTrue: true,
  },
  {
    question: '«Тетрис» был вдохновлен нехваткой ковров в Советском Союзе. Люди могли получить только обрезки ковровых покрытий, вырезанные там, где на них стояли шкафы. Из-за этого людям пришлось придумывать, как покрыть пол этими обрезками. Тогда одному рабочему пришла в голову идея сделать из этого игру. Вдохновением для украшений послужила обычная форма обрывков ковра.',
    answer: 'Идею «Тетриса» Алексею Пажитнову, создателю головоломки, подсказала игра в пентамино — с пятиклеточными полимино, то есть плоскими фигурами, каждая из которых состоит из пяти одинаковых квадратов, соединенных между собой сторонами. И никаких ковров.',
    isTrue: false,
  },
  {
    question: 'По уровню образованности населения первое место среди континентов занимает Антарктида.',
    answer: 'В Антарктиде нет постоянного населения, только сотрудники полярных станций.',
    isTrue: true,
  },
  {
    question: 'Когда страусу страшно, он закапывает голову в песок.',
    answer: 'Когда страусу страшно, он не закапывает голову в песок, он просто убегает.',
    isTrue: false,
  },
  {
    question: 'Распространенное сейчас имя Джессика придумал Шекспир.',
    answer: 'Молилась ли ты на ночь... Джессика?',
    isTrue: true,
  },
  {
    question: 'Золотые рыбки названы не из-за их цвета, а потому, что в Азии они часто встречаются в ручьях, в которых можно найти золото.',
    answer: 'Первая культивированная из обыкновенного серебряного карася аквариумная рыбка красно-золотистого цвета с металлическим отливом — представитель семейства карповых, которую и назвали золотой рыбкой.',
    isTrue: false,
  },
  {
    question: 'Клеопатра по времени ближе к нам, чем строители пирамид к ней.',
    answer: 'Как бы это парадоксально не звучало, но пирамиды действительно строились очень задолго до Клеопатры.',
    isTrue: true,
  },
  {
    question: 'У Ахилла был брат, который тоже был героем, но о нем мало говорили. Звали его Бофадес. Как у Ахиллеса была ахиллесова пята, так и у Бофадеса была своя слабость. Называлась она бофадскими орехами.',
    answer: 'Ахилл был единственным ребенком в семье.',
    isTrue: false,
  },
  {
    question: 'Миллион секунд это примерно 11 дней, миллиард секунд это примерно 32 года.',
    answer: 'А всего лишь 3 нуля, да?',
    isTrue: true,
  },
  {
    question: 'Термин «газлайтинг» первоначально придумала бывшая школьная учительница, страдавшая редкой формой раннего слабоумия. Она считала, что ее муж включает газовую плиту, а затем спрашивает ее, почему она все время забывает выключить ее, чтобы подшутить над ней.',
    answer: 'Это правда только наполовину (а то и меньше). Понятие «газлайтинг» отсылает нас к пьесе «Газовый свет» Патрика Гамильтона, где и смоделирована устойчивая психологическая манипуляция. По сюжету муж молодой женщины переставляет в доме мелкие предметы обстановки и прячет вещи, чтобы создать у жены впечатление, будто она теряет память и рассудок.',
    isTrue: false,
  },
  {
    question: 'Динозавр Рекс по времени ближе к человеку разумному, чем к стегозавру.',
    answer: 'По времени мы живем ближе к динозавру Рексу, чем он жил к стегозавру.',
    isTrue: true,
  },
  {
    question: 'Щелчок пальцами вызывает артрит.',
    answer: 'Хотя обширных исследований по этой теме не проводилось, некоторые исследования не нашли в этом ничего плохого для суставов. Единственный момент, когда нужно беспокоиться, это если после щелчка у тебя опух и сильно заболел сустав.',
    isTrue: false,
  },
  {
    question: 'Правда ли, что огурец, арбуз и помидоры - ягоды?',
    answer: 'Огурец, который больше всего смущает в списке, по типу плода является ягодой, как и арбуз с помидором.',
    isTrue: true,
  },
  {
    question: 'Стекло не твердое. На самом деле это жидкость. Но его вязкость настолько высока, что она ведет себя как твердое вещество.',
    answer: 'В отличие от частиц в обычных жидкостях, частицы стекла крепко связаны вместе сильными химическими связями. Поэтому они не могут течь при комнатной температуре. Аналогия несостоятельна хотя бы с точки зрения текучести.',
    isTrue: false,
  },
  {
    question: 'Итальянская оружейная компания Беретта берет свое начало в 1526 году, и все это время принадлежит одной семье.',
    answer: 'Она была основана в 1526 году, когда оружейник Бартоломео Беретта получил 296 дукатов за 185 стволов для аркебуз от венецианского арсенала. Счёт за эту сделку сохранился в архиве компании.',
    isTrue: true,
  },
  {
    question: 'Страусы убивают тысячу человек в год.',
    answer: 'На самом деле страусы лишают жизни примерно пять человек в год, если верить официальной статистике.',
    isTrue: false,
  },
  {
    question: 'Солнце на самом деле белое. Желтым его свет делает наша атмосфера.',
    answer: 'У поверхности Земли цвет Солнца становится более насыщенным – жёлтым, благодаря нашей атмосфере: она сильнее рассеивает и поглощает коротковолновый спектр, поэтому и небо у нас голубое.',
    isTrue: true,
  },
  {
    question: 'Джон Леннон однажды сказал: «Ринго не лучший барабанщик в мире. Он даже не лучший барабанщик „Битлз“».',
    answer: 'В действительности Джон Леннон этого не говорил. Это слова какого-то комика. Это была шутка, а не прямая цитата.',
    isTrue: false,
  },
  {
    question: 'В Калифорнии живет больше людей, чем во всей Канаде.',
    answer: 'Население Канады составляет 37млн человек, а Калифорнии - 39.24млн.',
    isTrue: true,
  },
  {
    question: 'Пингвины и полярные медведи никогда не встречали друг друга в дикой природе.',
    answer: 'В дикой природе они обитают на разных полюсах и без помощи человека их встреча невозможна.',
    isTrue: true,
  },
  {
    question: 'Одна 45-см пицца больше, чем две 30-см.',
    answer: 'Площадь пиццы 45см - 1590 квадратных сантиметров, а двух пицц по 30см - 1414 квадратных сантиметра.',
    isTrue: true,
  },
  {
    question: 'Нынешний рекорд скорости на воде составляет 511 км в час.',
    answer: 'И он был поставлен в 1978 году. Все, кто пытался его побить, погибли.',
    isTrue: true,
  },
  {
    question: 'Зажигалку изобрели раньше, чем спички.',
    answer: 'Первая зажигалка, похожая на привычные нам, была изобретена в 1823 году немецким химиком Иоганном Вольфгангом Дёберейнером — на 3 года раньше, чем современные спички, воспламеняющиеся от трения о черкаш. Их случайно получил в 1826 году английский химик Джон Уолкер.',
    isTrue: true,
  },
  {
    question: 'Человеческую печень можно разделить на две части, и из них регенерировать две полноценные функционирующие печени.',
    answer: 'Печень, действительно, способна к регенерации. Скорость, с которой печень человека регенерирует после обширной резекции, составляет около 50 г в сутки, а полное восстановление ее функциональной активности в среднем происходит за 150 дней.',
    isTrue: true,
  },
  {
    question: 'У кошек шанс выжить при падении с 5 этажа выше, чем при падении с 3 этажа.',
    answer: 'Падая с 3 этажа, они не успевают правильно сгруппироваться, чтобы упасть на лапы. При падении с более высоких этажей успевают.',
    isTrue: true,
  },
  {
    question: 'С 1719 по 1721 во Франции можно было выйти из тюрьмы при условии, что ты женишься на проститутке и уедешь навсегда жить в Луизиану.',
    answer: 'Миссисипская компания, которая занималась освоением территорий современной Луизианы, пошла на экстравагантный шаг, предложив заключённым тюрем отправиться в Америку и стать свободными, но при условии, что они женятся на проститутках. Всего было отправлено три корабля таких новобрачных.',
    isTrue: true,
  },
  {
    question: 'У жителей Техаса в частном владении больше тигров, чем их вообще в дикой природе на всей планете.',
    answer: 'Порядка 7 тыс. тигров живут в домах в США, в то время как во всем мире в дикой природе насчитывается 3890 особей. При этом только 6% хищников в США проживают в зоопарках и других учреждениях.',
    isTrue: true,
  },
  {
    question: 'Каждые 100 лет шея жирафа увеличивается на один сантиметр.',
    answer: 'Каждые 100 лет шея жирафа увеличивается на один сантиметр.',
    isTrue: false,
  },
  {
    question: 'Слепые от рождения люди не видят все в черном цвете.',
    answer: 'Они просто не видят. Наверное, понять это можно только слепым.',
    isTrue: true,
  },
  {
    question: 'Технически кокосовый орех — млекопитающее. Потому что он выращивает волосы и производит молоко.',
    answer: 'А еще кокосы становятся пиратами, оторвашись от своей матери-пальмы и уплывая за тайными сокровищами. И это все ложь.',
    isTrue: false,
  },
  {
    question: '15 крупнейших грузовых судов в мире вместе выбрасывают в атмосферу соединений серы и парниковых газов больше, чем все автомобили на планете.',
    answer: 'Катализаторы и стандарт евро5 позволяют колоссально сократить количество выбросов. А еще вред для экологии от электромобилей многократно превышает вред от современного ДВС.',
    isTrue: true,
  },
  {
    question: 'Если твоя рука больше, чем лицо, у тебя рак.',
    answer: 'Рак никак не влияет на размер рук и лица.',
    isTrue: false,
  },
  {
    question: 'Еда теряет свой привычный вкус в самолёте.',
    answer: 'Еда теряет свой привычный вкус в самолёте из-за низкой влажности воздуха, пониженного давления и шума двигателей. Сильнее всего снижается восприимчивость вкусовых рецепторов к сладкому и солёному. Эффект усиливается тем, что в пересушенном воздухе мы хуже ощущаем запахи, которые вносят значительный вклад в восприятие вкуса. Составители меню для авиакомпаний вынуждены добавлять в рецепты мощные усилители вкуса и специи.',
    isTrue: true,
  },
  {
    question: '10% льда в Антарктиде состоит из мочи пингвинов.',
    answer: 'Во-первых, нет таких ученых, которые могли бы разделить лед Антарктиды на мочу пингвинов и все остальное. Во-вторых, приблизительно оценивая популяцию пингвинов, можно насобирать максимум 3% замерзшей мочи от общего объема льда. Но и это соотношение далеко не факт.',
    isTrue: false,
  },
];