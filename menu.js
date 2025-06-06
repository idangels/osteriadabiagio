const menuData = {
  it: [
    {
      title: "Antipasti",
      items: [
		{ id: "antipasto1", nome: "Tagliere Toscano", descrizione: "Selezione di salumi e formaggi tipici della Toscana accompagnati da bruschettine al pomodoro", prezzo: "€18" },
		{ id: "antipasto2", nome: "La Deliziosa", descrizione: "Carpaccio di bresaola con burrata servito su letto di rucola", prezzo: "€12" },
		{ id: "antipasto3", nome: "Caprese di Bufala", descrizione: "Mozzarella di bufala, pomodori e condita con olio di basilico", prezzo: "€10" },
		{ id: "antipasto4", nome: "Parmigiana di Melanzane", descrizione: "Melanzane impanate fritte, sugo di pomodoro e parmigiano", prezzo: "€8" },
		{ id: "antipasto5", nome: "Bruschetta al Pomodoro", descrizione: "Pane croccante con pomodoro fresco, aglio e olio di basilico", prezzo: "€6" }
	  ]
    },
    {
      title: "Primi Piatti",
      items: [
		{ id: "primo1", nome: "Pappardelle al Cinghiale", descrizione: "Pappardelle fresche con ragù bianco di cinghiale sfumato in vino rosso e spezie, insaporito con olive nere taggiasche", prezzo: "€16" },
		{ id: "primo2", nome: "Spaghetti alla Carbonara", descrizione: "Spaghetti con guanciale, pecorino romano, uova e pepe nero", prezzo: "€14" },
		{ id: "primo3", nome: "Trofie con Pesce Spada", descrizione: "Trofie fresche con pesce spada, arricchite da pomodorini ciliegini, capperi e olive nere", prezzo: "€14" },
		{ id: "primo4", nome: "La Vegetariana", descrizione: "Spaghetti alla chitarra con crema di zucchine e granella di pistacchio", prezzo: "€12" },
		{ id: "primo5", nome: "Lasagne", descrizione: "Classico piatto della tradizione italiana, con strati di pasta fresca, ragù di carne, besciamella e parmigiano", prezzo: "€12" },
		{ id: "primo6", nome: "Pasta al Pomodoro", descrizione: "Pasta con sugo di pomodoro fresco, basilico e olio extravergine di oliva", prezzo: "€9" }
      ]
    },
    {
      title: "Secondi Piatti",
      items: [
		{ id: "secondo1", nome: "Tagliata di Manzo", descrizione: "Tenero filetto di manzo grigliato, servito a fette e accompagnato da rucola fresca e scaglie di grana", prezzo: "€22" },
		{ id: "secondo2", nome: "Tonno scottato", descrizione: "Filetto di tonno scottato in crosta leggera, accompagnato da un mix di verdure grigliate di stagione, condito con olio extravergine d'oliva e erbe aromatiche", prezzo: "€18" },
		{ id: "secondo3", nome: "Petto di pollo", descrizione: "Petto di pollo grigliato, servito con patate al forno croccanti, aromatizzate con rosmarino e olio extravergine d'oliva", prezzo: "€12" }
      ]
    },
    {
      title: "Pinse",
      items: [
        { id: "pinsa1", nome: "Pistacchiosa", descrizione: "Mozzarella, mortadella, crema di pistacchio, burrata, olio al basilico", prezzo: "€14" },
        { id: "pinsa2", nome: "Quattro Formaggi", descrizione: "Mozzarella, gorgonzola, Grana Padano, scamorza affumicata", prezzo: "€13" },
        { id: "pinsa3", nome: "Crudo e Grana", descrizione: "Mozzarella, pomodoro, prosciutto crudo, rucola, Grana Padano, olio al basilico", prezzo: "€13" },
        { id: "pinsa4", nome: "Vegetariana", descrizione: "Mozzarella, pomodoro, zucchine, pomodorini e olio di basilico", prezzo: "€11" },
        { id: "pinsa5", nome: "Margherita", descrizione: "Mozzarella, pomodoro, origano e olio EVO", prezzo: "€10" }
      ]
    },
	{
      title: "Contorni",
      items: [
	{ id: "contorno1", nome: "Insalata Mista", descrizione: "Insalata verde con pomodorini", prezzo: "€6" },
	{ id: "contorno2", nome: "Verdure Grigliate", descrizione: "Mix di verdure di stagione grigliate", prezzo: "€6" },
	{ id: "contorno3", nome: "Patate al Forno", descrizione: "Patate arrosto con rosmarino, aglio e sale marino", prezzo: "€5" },
	{ id: "contorno4", nome: "Patatine Fritte", descrizione: "Patatine fritte con buccia, croccanti all'esterno e morbide all'interno", prezzo: "€5" }
      ]
    },
	{
      title: "Insalate",
      items: [
		{ id: "insalata1", nome: "Insalata Greca", descrizione: "Una fresca combinazione di pomodorini ciliegini, cetrioli, olive nere, cipollotto fresco e cubetti di feta, condita con olio di basilico e capperi", prezzo: "€8" },
		{ id: "insalata2", nome: "Insalata Caesar", descrizione: "Lattuga romana croccante, con crostini croccanti e filetti di pollo, scaglie di parmigiano e una delicata salsa Caesar, salsa Worcester, succo di limone, olio di basilico", prezzo: "€8" },
		{ id: "insalata3", nome: "Insalata Omega 3", descrizione: "Un mix di foglie verdi fresche, arricchite con succo di limone, salsa Worcester e salmone", prezzo: "€8" }
      ]
    },
    {
      title: "Dolci",
      items: [
        { id: "dolce1", nome: "Tiramisù", descrizione: "Dolce tradizionale fatto in casa con mascarpone, caffè e crumble al cacao", prezzo: "€6" },
        { id: "dolce2", nome: "Tartufo Bianco affogato al Caffè", descrizione: "Tartufo bianco servito con caffè espresso caldo", prezzo: "€6" },
        { id: "dolce3", nome: "Tartufo al Pistacchio", descrizione: "Tartufo ricoperto con granella di pistacchio e servito con crema di pistacchio", prezzo: "€6" },
        { id: "dolce4", nome: "Tartufo al Limoncello", descrizione: "Un'esplosione di freschezza agrumata servita con Limoncello", prezzo: "€6" },
        { id: "dolce5", nome: "Sorbetto al Limone con Limoncello", descrizione: "", prezzo: "€6" },
        { id: "dolce6", nome: "Cantuccini e Vin Santo", descrizione: "Tradizionali cantuccini toscani fatti in casa, croccanti e ricchi di mandorle, serviti con Vin Santo", prezzo: "€5" },
        { id: "dolce7", nome: "Sorbetto al Limone", descrizione: "", prezzo: "€4" }
      ]
    },
	{
      title: "Vini",
      items: [
        { id: "vino1", nome: "Vino Rosso della Casa", descrizione: "Uva: 70% Sangiovese, altri vitigni\nGradazione Alcolica: 12%vol", prezzo: "€4 Calice\n€5 Un quarto di litro\n€9 Mezzo litro" }
      ]
    },
	{
      title: "Bevande",
      items: [
        { id: "bere1", nome: "Redbull", descrizione: "Lattina(0.25 L)", prezzo: "€4" },
        { id: "bere2", nome: "Succo di Mirtillo Bio", descrizione: "", prezzo: "€4" },
        { id: "bere3", nome: "Succhi di frutta Bio", descrizione: "arancia, ananas, arancia e carote", prezzo: "€3.50" },
        { id: "bere4", nome: "Cedrata Bio", descrizione: "Bottiglia (0.35 L)", prezzo: "€3.50" },
        { id: "bere5", nome: "Limonata Bio", descrizione: "Bottiglia (0.35 L)", prezzo: "€3.50" },        
		{ id: "bere6", nome: "Chinotto Bio", descrizione: "Bottiglia (0.35 L)", prezzo: "€3.50" },
		{ id: "bere7", nome: "Coca Cola", descrizione: "Lattina (0.33 L)", prezzo: "€3" },
		{ id: "bere8", nome: "Fanta", descrizione: "Lattina (0.33 L)", prezzo: "€3" },
		{ id: "bere9", nome: "Sprite", descrizione: "Lattina (0.33 L)", prezzo: "€3" },
		{ id: "bere10", nome: "Lemon Soda", descrizione: "Lattina (0.33 L)", prezzo: "€3" },
        { id: "bere11", nome: "Acqua", descrizione: "Bottiglia in vetro Naturale o Frizzante (1 L)", prezzo: "€2.50" },
        { id: "bere12", nome: "Acqua", descrizione: "Bottiglia in vetro Naturale o Frizzante (0.5 L)", prezzo: "€1" }
      ]
    },
	{
      title: "Birre",
      items: [
        { id: "birra1", nome: "Birra Toscana Bionda", descrizione: "Birra Artigianale non filtrata 5% ALC (0.5 L)", prezzo: "€8.50" },
        { id: "birra1", nome: "Birra Toscana Rossa", descrizione: "Birra Artigianale non filtrata 5.6% ALC (0.5 L)", prezzo: "€8.50" },
        { id: "birra1", nome: "Birra Toscana Bionda alle Castagne", descrizione: "Birra Artigianale alle Castagne non filtrata 7.5% ALC (0.5 L)", prezzo: "€8.50" },
        { id: "birra1", nome: "Birra Toscana Rossa al Farro Affumicata", descrizione: "Birra Artigianale al Farro Affumicata non filtrata 6.5% ALC (0.5 L)", prezzo: "€8.50" },
        { id: "birra1", nome: "Ichnusa non filtrata", descrizione: "Bottiglia (0.33 L)", prezzo: "€4" },
        { id: "birra1", nome: "Corona", descrizione: "Bottiglia (0.33 L)", prezzo: "€4" },
        { id: "birra1", nome: "Moretti", descrizione: "Bottiglia (0.33 L)", prezzo: "€3.50" },
        { id: "birra1", nome: "Peroni Analcolica", descrizione: "Bottiglia (0.33 L)", prezzo: "€3.50" }
      ]
    },
	{
      title: "Caffè",
      items: [
        { id: "caff1", nome: "Corretto", descrizione: "", prezzo: "€2" },
        { id: "caff1", nome: "Ginseng", descrizione: "", prezzo: "€1.80" },
        { id: "caff1", nome: "Orzo", descrizione: "", prezzo: "€1.80" },
        { id: "caff1", nome: "Cappuccino", descrizione: "", prezzo: "€1.50" },
        { id: "caff1", nome: "Decaffeinato", descrizione: "", prezzo: "€1.50" },
        { id: "caff1", nome: "Americano", descrizione: "", prezzo: "€1.50" },
        { id: "caff1", nome: "Espresso", descrizione: "", prezzo: "€1.20" },
        { id: "caff1", nome: "Macchiato", descrizione: "", prezzo: "€1.20" }
      ]
    }
  ],
  
  en: [
    {
      title: "Appetizers",
      items: [
        { id: "antipasto1", nome: "Tagliere Toscano", descrizione: "Selection of typical Tuscan cold cuts and cheeses, served with tomato bruschetta", prezzo: "€18" },
		{ id: "antipasto2", nome: "La Deliziosa", descrizione: "Bresaola carpaccio with burrata, served with arugula", prezzo: "€12" },
		{ id: "antipasto3", nome: "Caprese di Bufala", descrizione: "Buffalo mozzarella and tomatoes, dressed with basil oil", prezzo: "€10" },
		{ id: "antipasto4", nome: "Parmigiana di Melanzane", descrizione: "Breaded fried eggplant with tomato sauce and Parmesan cheese", prezzo: "€8" },
		{ id: "antipasto5", nome: "Bruschetta al Pomodoro", descrizione: "Crispy bread with fresh tomato, garlic, and basil oil", prezzo: "€6" }
      ]
    },
    {
      title: "Main Courses",
      items: [
		{ id: "primo1", nome: "Pappardelle al Cinghiale", descrizione: "Fresh pappardelle with white wild boar ragù, slow-cooked in red wine with spices and Taggiasca black olives", prezzo: "€16" },
		{ id: "primo2", nome: "Spaghetti alla Carbonara", descrizione: "Spaghetti with guanciale, Pecorino Romano, eggs, and black pepper", prezzo: "€14" },
		{ id: "primo3", nome: "Trofie con Pesce Spada", descrizione: "Fresh trofie pasta with swordfish, cherry tomatoes, capers, and black olives", prezzo: "€14" },
		{ id: "primo4", nome: "La Vegetariana", descrizione: "Fresh spaghetti with zucchini cream and crushed pistachios", prezzo: "€12" },
		{ id: "primo5", nome: "Lasagne", descrizione: "Layers of fresh pasta with meat ragù, béchamel sauce, and Parmesan cheese", prezzo: "€12" },
		{ id: "primo6", nome: "Pasta al Pomodoro", descrizione: "Pasta with fresh tomato sauce, basil, and extra virgin olive oil", prezzo: "€9" }
      ]
    },
    {
      title: "Second Courses",
      items: [
		{ id: "secondo1", nome: "Tagliata di Manzo", descrizione: "Grilled beef fillet, sliced and served with fresh arugula and Grana cheese", prezzo: "€22" },
		{ id: "secondo2", nome: "Tonno scottato", descrizione: "Seared tuna fillet, served with a mix of seasonal grilled vegetables, dressed with extra virgin olive oil and aromatic herbs", prezzo: "€18" },
		{ id: "secondo3", nome: "Petto di pollo", descrizione: "Grilled chicken breast served with roasted potatoes", prezzo: "€12" }
      ]
    },
    {
      title: "Pinse",
      items: [
        { id: "pinsa1", nome: "Pistacchiosa", descrizione: "Mozzarella, mortadella, pistachio cream, burrata, basil oil", prezzo: "€14" },
        { id: "pinsa2", nome: "Quattro Formaggi", descrizione: "Mozzarella, blue cheese, Grana Padano, smoked scamorza", prezzo: "€13" },
        { id: "pinsa3", nome: "Crudo e Grana", descrizione: "Mozzarella, tomato, Parma ham, arugula, Grana Padano, basil oil", prezzo: "€13" },
        { id: "pinsa4", nome: "Vegetariana", descrizione: "Mozzarella, tomato, zucchini, cherry tomatoes, basil oil", prezzo: "€11" },
        { id: "pinsa5", nome: "Margherita", descrizione: "Mozzarella, tomato, oregano, extra virgin olive oil", prezzo: "€10" }
      ]
    },
	{
      title: "Side Dishes",
      items: [
		{ id: "contorno1", nome: "Insalata Mista", descrizione: "Green salad with cherry tomatoes", prezzo: "€6" },
		{ id: "contorno2", nome: "Verdure Grigliate", descrizione: "Mix of seasonal grilled vegetables", prezzo: "€6" },
		{ id: "contorno3", nome: "Patate al Forno", descrizione: "Roasted potatoes with rosemary, garlic, and sea salt", prezzo: "€5" },
		{ id: "contorno4", nome: "Patatine Fritte", descrizione: "Skin-on French fries, crispy on the outside and soft on the inside", prezzo: "€5" }
      ]
    },
	{
      title: "Salads",
      items: [
		{ id: "insalata1", nome: "Insalata Greca", descrizione: "A fresh combination of cherry tomatoes, cucumbers, black olives, fresh spring onion, and feta cubes, dressed with basil oil and caper", prezzo: "€8" },
		{ id: "insalata2", nome: "Insalata Caesar", descrizione: "Crispy romaine lettuce with crunchy croutons and chicken fillets, Parmesan, and a delicate Caesar dressing with Worcestershire sauce, lemon juice, and basil oil", prezzo: "€8" },
		{ id: "insalata3", nome: "Insalata Omega 3", descrizione: "A mix of fresh green leaves, enhanced with lemon juice, Worcestershire sauce, and salmon", prezzo: "€8" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { id: "dolce1", nome: "Tiramisù", descrizione: "", prezzo: "€6" },
        { id: "dolce2", nome: "White Chocolate Truffle Affogato with Coffee", descrizione: "", prezzo: "€6" },
        { id: "dolce3", nome: "Pistachio Truffle", descrizione: "", prezzo: "€6" },
        { id: "dolce4", nome: "Limoncello Truffle", descrizione: "", prezzo: "€6" },
        { id: "dolce5", nome: "Lemon Sorbet with Limoncello", descrizione: "", prezzo: "€6" },
        { id: "dolce6", nome: "Cantuccini e Vin Santo", descrizione: "", prezzo: "€5" },
        { id: "dolce7", nome: "Lemon Sorbet", descrizione: "", prezzo: "€4" }
      ]
    },
	{
      title: "Drinks",
      items: [
        { id: "bere1", nome: "Water", descrizione: "", prezzo: "€2" },
      ]
    },
	{
      title: "Wines",
      items: [
        { id: "vino1", nome: "House Wine", descrizione: "", prezzo: "from €13" }
      ]
    }	
	],
  
  fr: [
    {
      title: "Entrées",
      items: [
		{ id: "antipasto1", nome: "Tagliere Toscano", descrizione: "Séléction de charcuteries et fromages typiques de Toscane, accompagnée de bruschettas à la tomate", prezzo: "€18" },
		{ id: "antipasto2", nome: "La Deliziosa", descrizione: "Carpaccio de bresaola avec burrata, servi avec de la roquette", prezzo: "€12" },
		{ id: "antipasto3", nome: "Caprese di Bufala", descrizione: "Mozzarella de bufflonne et tomates, assaisonnées avec de l'huile au basilic", prezzo: "€10" },
		{ id: "antipasto4", nome: "Parmigiana di Melanzane", descrizione: "Aubergines panées et frites, sauce tomate et parmesan", prezzo: "€8" },
		{ id: "antipasto5", nome: "Bruschetta al Pomodoro", descrizione: "Pain croustillant avec tomates fraîches, ail et huile au basilic", prezzo: "€6" }
      ]
    },
    {
      title: "Plats principaux",
      items: [
		{ id: "primo1", nome: "Pappardelle al Cinghiale", descrizione: "Pappardelle fraîches avec ragù blanc de sanglier, mijoté au vin rouge avec épices et olives noires Taggiasca", prezzo: "€16" },
		{ id: "primo2", nome: "Spaghetti alla Carbonara", descrizione: "Spaghetti avec guanciale, pecorino romano, œufs et poivre noir", prezzo: "€14" },
		{ id: "primo3", nome: "Trofie con Pesce Spada", descrizione: "Trofie fraîches au poisson-épée, tomates cerises, câpres et olives noires", prezzo: "€14" },
		{ id: "primo4", nome: "La Vegetariana", descrizione: "Spaghetti frais à la crème de courgettes et éclats de pistaches", prezzo: "€12" },
		{ id: "primo5", nome: "Lasagne", descrizione: "Couches de pâtes fraîches avec ragù de viande, sauce béchamel et parmesan", prezzo: "€12" },
		{ id: "primo6", nome: "Pasta al Pomodoro", descrizione: "Pâtes avec sauce tomate fraîche, basilic et huile d'olive extra vierge", prezzo: "€9" }
      ]
    },
    {
      title: "Second plats",
      items: [
		{ id: "secondo1", nome: "Tagliata di Manzo", descrizione: "Filet de bœuf grillé, tranché, accompagné de roquette fraîche et de fromage Grana", prezzo: "€22" },
		{ id: "secondo2", nome: "Tonno scottato", descrizione: "Filet de thon juste saisi, accompagné d'un mélange de légumes grillés de saison, assaisonné avec de l'huile d'olive extra vierge et des herbes aromatiques", prezzo: "€18" },
		{ id: "secondo3", nome: "Petto di pollo", descrizione: "Blanc de poulet grillé, servi avec pommes de terre rôties", prezzo: "€12" }
      ]
    },
    {
      title: "Pinse",
      items: [
        { id: "pinsa1", nome: "Pistacchiosa", descrizione: "Mozzarella, mortadelle, crème de pistache, burrata, huile de basilic", prezzo: "€14" },
        { id: "pinsa2", nome: "Quattro Formaggi", descrizione: "Mozzarella, formage blue, Grana Padano, scamorza fumée", prezzo: "€13" },
        { id: "pinsa3", nome: "Crudo e Grana", descrizione: "Mozzarella, tomate, jambon cru de Parme, roquette, Grana Padano, huile de basilic", prezzo: "€13" },
        { id: "pinsa4", nome: "Vegetariana", descrizione: "Mozzarella, tomate, courgette, tomates cerises, huile au basilic", prezzo: "€11" },
        { id: "pinsa5", nome: "Margherita", descrizione: "Mozzarella, tomate, origan, huile d'olive extra vierge", prezzo: "€10" }
      ]
    },
	{
      title: "Accompagnements",
      items: [
		{ id: "contorno1", nome: "Insalata Mista", descrizione: "Salade verte avec tomates cerises", prezzo: "€6" },
		{ id: "contorno2", nome: "Verdure Grigliate", descrizione: "Mélange de légumes de saison grillés", prezzo: "€6" },
		{ id: "contorno3", nome: "Patate al Forno", descrizione: "Pommes de terre rôties au romarin, à l'ail et au sel marin", prezzo: "€5" },
		{ id: "contorno4", nome: "Patatine Fritte", descrizione: "Frites avec la peau, croustillantes à l'extérieur et fondantes à l'intérieur", prezzo: "€5" }
      ]
    },
	{
      title: "Salades",
      items: [
		{ id: "insalata1", nome: "Insalata Greca", descrizione: "Une combinaison fraîche de tomates cerises, concombres, olives noires, oignon nouveau et dés de feta, assaisonnée avec de l'huile au basilic et des câpres", prezzo: "€8" },
		{ id: "insalata2", nome: "Insalata Caesar", descrizione: "Laitue romaine croquante avec croûtons croustillants, filets de poulet, parmesan et une délicate sauce Caesar à la sauce Worcestershire, jus de citron et huile au basilic", prezzo: "€8" },
		{ id: "insalata3", nome: "Insalata Omega 3", descrizione: "Un mélange de jeunes pousses fraîches, relevé avec du jus de citron, de la sauce Worcestershire et du saumon", prezzo: "€8" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { id: "dolce1", nome: "Tiramisù", descrizione: "", prezzo: "€6" },
        { id: "dolce2", nome: "White Chocolate Truffle Affogato with Coffee", descrizione: "", prezzo: "€6" },
        { id: "dolce3", nome: "Pistachio Truffle", descrizione: "", prezzo: "€6" },
        { id: "dolce4", nome: "Limoncello Truffle", descrizione: "", prezzo: "€6" },
        { id: "dolce5", nome: "Lemon Sorbet with Limoncello", descrizione: "", prezzo: "€6" },
        { id: "dolce6", nome: "Cantuccini e Vin Santo", descrizione: "", prezzo: "€5" },
        { id: "dolce7", nome: "Lemon Sorbet", descrizione: "", prezzo: "€4" }
      ]
    },
    {
      title: "Boissons",
      items: [
        { id: "bere1", nome: "Eau", descrizione: "", prezzo: "€2" },
      ]
    },
    {
      title: "Vins",
      items: [
        { id: "vino1", nome: "Vin maison", descrizione: "", prezzo: "à partir de €13" }
      ]
    }	
  ],

  de: [
    {
      title: "Vorspeisen",
      items: [
		{ id: "antipasto1", nome: "Tagliere Toscano", descrizione: "Auswahl an typischen toskanischen Wurst- und Käsespezialitäten, serviert mit Tomatenbruschetta", prezzo: "€18" },
		{ id: "antipasto2", nome: "La Deliziosa", descrizione: "Bresaola-Carpaccio mit Burrata, serviert mit Rucola", prezzo: "€12" },
		{ id: "antipasto3", nome: "Caprese di Bufala", descrizione: "Büffelmozzarella und Tomaten, mit Basilikumöl verfeinert", prezzo: "€10" },
		{ id: "antipasto4", nome: "Parmigiana di Melanzane", descrizione: "Panierte, frittierte Auberginen mit Tomatensauce und Parmesankäse", prezzo: "€8" },
		{ id: "antipasto5", nome: "Bruschetta al Pomodoro", descrizione: "Knuspriges Brot mit frischen Tomaten, Knoblauch und Basilikumöl", prezzo: "€6" }
      ]
    },
    {
      title: "Hauptgerichte",
      items: [
		{ id: "primo1", nome: "Pappardelle al Cinghiale", descrizione: "Frische Pappardelle mit Wildschwein-Ragout in Weißsauce, geschmort in Rotwein mit Gewürzen und schwarzen Taggiasca-Oliven", prezzo: "€16" },
		{ id: "primo2", nome: "Spaghetti alla Carbonara", descrizione: "Spaghetti mit Guanciale, Pecorino Romano, Eiern und schwarzem Pfeffer", prezzo: "€14" },
		{ id: "primo3", nome: "Trofie con Pesce Spada", descrizione: "Frische Trofie mit Schwertfisch, Kirschtomaten, Kapern und schwarzen Oliven", prezzo: "€14" },
		{ id: "primo4", nome: "La Vegetariana", descrizione: "Frische Spaghetti mit Zucchinicreme und gehackten Pistazien", prezzo: "€12" },
		{ id: "primo5", nome: "Lasagne", descrizione: "Schichten aus frischer Pasta mit Fleischragout, Béchamelsauce und Parmesankäse", prezzo: "€12" },
		{ id: "primo6", nome: "Pasta al Pomodoro", descrizione: "Nudeln mit frischer Tomatensauce, Basilikum und nativem Olivenöl extra", prezzo: "€9" }
      ]
    },
    {
      title: "Zweite Gänge",
      items: [
		{ id: "secondo1", nome: "Tagliata di Manzo", descrizione: "Gegrilltes Rinderfilet, in Scheiben serviert, mit frischem Rucola und Grana-Käse", prezzo: "€22" },
		{ id: "secondo2", nome: "Tonno scottato", descrizione: "Gebratener Thunfischfilet, serviert mit einer Mischung aus saisonalem Grillgemüse, verfeinert mit nativem Olivenöl extra und aromatischen Kräutern", prezzo: "€18" },
		{ id: "secondo3", nome: "Petto di pollo", descrizione: "Gegrillte Hähnchenbrust, serviert mit Ofenkartoffeln", prezzo: "€12" }
      ]
    },
    {
      title: "Pinse",
      items: [
        { id: "pinsa1", nome: "Pistacchiosa", descrizione: "Mozzarella, Mortadella, Pistaziencreme, Burrata, Basilikumöl", prezzo: "€14" },
        { id: "pinsa2", nome: "Quattro Formaggi", descrizione: "Mozzarella, Gorgonzola, Grana Padano, geräucherte Scamorza", prezzo: "€13" },
        { id: "pinsa3", nome: "Crudo e Grana", descrizione: "Mozzarella, Tomate, Parmaschinken, Rucola, Grana Padano, Basilikumöl", prezzo: "€13" },
        { id: "pinsa4", nome: "Vegetariana", descrizione: "Mozzarella, Tomate, Zucchini, Kirschtomaten, Basilikumöl", prezzo: "€11" },
        { id: "pinsa5", nome: "Margherita", descrizione: "Mozzarella, Tomate, Oregano, Olivenöl", prezzo: "€10" }
      ]
    },
	{
      title: "Beilagen",
      items: [
		{ id: "contorno1", nome: "Insalata Mista", descrizione: "Grüner Salat mit Kirschtomaten", prezzo: "€6" },
		{ id: "contorno2", nome: "Verdure Grigliate", descrizione: "Mischung aus saisonalem Grillgemüse", prezzo: "€6" },
		{ id: "contorno3", nome: "Patate al Forno", descrizione: "Ofenkartoffeln mit Rosmarin, Knoblauch und Meersalz", prezzo: "€5" },
		{ id: "contorno4", nome: "Patatine Fritte", descrizione: "Pommes frites mit Schale, außen knusprig und innen weich", prezzo: "€5" }
      ]
    },
	{
      title: "Salate",
      items: [
		{ id: "insalata1", nome: "Insalata Greca", descrizione: "Eine frische Kombination aus Kirschtomaten, Gurken, schwarzen Oliven, frischem Frühlingszwiebel und Fetawürfeln, verfeinert mit Basilikumöl und Kapern", prezzo: "€8" },
		{ id: "insalata2", nome: "Insalata Caesar", descrizione: "Knackiger Römersalat mit knusprigen Croutons und Hähnchenfilets, Parmesan und einem feinen Caesar-Dressing mit Worcestersauce, Zitronensaft und Basilikumöl", prezzo: "€8" },
		{ id: "insalata3", nome: "Insalata Omega 3", descrizione: "Eine Mischung aus frischen grünen Blättern, verfeinert mit Zitronensaft, Worcestersauce und Lachs", prezzo: "€8" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { id: "dolce1", nome: "Tiramisù", descrizione: "", prezzo: "€6" },
        { id: "dolce2", nome: "White Chocolate Truffle Affogato with Coffee", descrizione: "", prezzo: "€6" },
        { id: "dolce3", nome: "Pistachio Truffle", descrizione: "", prezzo: "€6" },
        { id: "dolce4", nome: "Limoncello Truffle", descrizione: "", prezzo: "€6" },
        { id: "dolce5", nome: "Lemon Sorbet with Limoncello", descrizione: "", prezzo: "€6" },
        { id: "dolce6", nome: "Cantuccini e Vin Santo", descrizione: "", prezzo: "€5" },
        { id: "dolce7", nome: "Lemon Sorbet", descrizione: "", prezzo: "€4" }
      ]
    },
    {
      title: "Getränke",
      items: [
        { id: "bere1", nome: "Wasser", descrizione: "", prezzo: "€2" },
      ]
    },
    {
      title: "Weine",
      items: [
        { id: "vino1", nome: "Hauswein", descrizione: "", prezzo: "ab €13" }
      ]
    }	
  ],

  es: [
    {
      title: "Entradas",
      items: [
		{ id: "antipasto1", nome: "Tagliere Toscano", descrizione: "Selección de embutidos y quesos típicos de la Toscana, acompañada de bruschettas con tomate", prezzo: "€18" },
		{ id: "antipasto2", nome: "La Deliziosa", descrizione: "Carpaccio de bresaola con burrata, servido con rúcula", prezzo: "€12" },
		{ id: "antipasto3", nome: "Caprese di Bufala", descrizione: "Mozzarella de búfala y tomates, aliñados con aceite de albahaca", prezzo: "€10" },
		{ id: "antipasto4", nome: "Parmigiana di Melanzane", descrizione: "Berenjenas empanadas y fritas con salsa de tomate y queso parmesano", prezzo: "€8" },
		{ id: "antipasto5", nome: "Bruschetta al Pomodoro", descrizione: "Pan crujiente con tomate fresco, ajo y aceite de albahaca", prezzo: "€6" }
      ]
    },
    {
      title: "Platos principales",
      items: [
		{ id: "primo1", nome: "Pappardelle al Cinghiale", descrizione: "Pappardelle frescas con ragú blanco de jabalí, cocinado a fuego lento en vino tinto con especias y aceitunas negras Taggiasca", prezzo: "€16" },
		{ id: "primo2", nome: "Spaghetti alla Carbonara", descrizione: "Espaguetis con guanciale, pecorino romano, huevos y pimienta negra", prezzo: "€14" },
		{ id: "primo3", nome: "Trofie con Pesce Spada", descrizione: "Trofie frescas con pez espada, tomates cherry, alcaparras y aceitunas negras", prezzo: "€14" },
		{ id: "primo4", nome: "La Vegetariana", descrizione: "Espaguetis frescos con crema de calabacín y pistachos triturados", prezzo: "€12" },
		{ id: "primo5", nome: "Lasagne", descrizione: "Capas de pasta fresca con ragú de carne, salsa bechamel y queso parmesano", prezzo: "€12" },
		{ id: "primo6", nome: "Pasta al Pomodoro", descrizione: "Pasta con salsa de tomate fresco, albahaca y aceite de oliva virgen extra", prezzo: "€9" }
      ]
    },
    {
      title: "Segundos",
      items: [
		{ id: "secondo1", nome: "Tagliata di Manzo", descrizione: "Filete de ternera a la parrilla, cortado en lonchas, acompañado de rúcula fresca y queso Grana", prezzo: "€22" },
		{ id: "secondo2", nome: "Tonno scottato", descrizione: "Filete de atún marcado a la plancha, acompañado de una mezcla de verduras de temporada a la parrilla, aliñado con aceite de oliva virgen extra y hierbas aromáticas", prezzo: "€18" },
		{ id: "secondo3", nome: "Petto di pollo", descrizione: "Pechuga de pollo a la parrilla servida con patatas al horno", prezzo: "€12" }
      ]
    },
    {
      title: "Pinse",
      items: [
        { id: "pinsa1", nome: "Pistacchiosa", descrizione: "Mozzarella, mortadela, crema de pistacho, burrata, aceite de albahaca", prezzo: "€14" },
        { id: "pinsa2", nome: "Quattro Formaggi", descrizione: "Mozzarella, gorgonzola, Grana Padano, scamorza ahumada", prezzo: "€13" },
        { id: "pinsa3", nome: "Crudo e Grana", descrizione: "Mozzarella, tomate, jamón crudo de Parma, rúcula, Grana Padano, aceite de albahaca", prezzo: "€13" },
        { id: "pinsa4", nome: "Vegetariana", descrizione: "Mozzarella, tomate, calabacín, tomates cherry, aceite de albahaca", prezzo: "€11" },
        { id: "pinsa5", nome: "Margherita", descrizione: "Mozzarella, tomate, orégano, aceite de oliva virgen extra", prezzo: "€10" }
      ]
    },
	{
      title: "Guarniciones",
      items: [
		{ id: "contorno1", nome: "Insalata Mista", descrizione: "Ensalada verde con tomates cherry", prezzo: "€6" },
		{ id: "contorno2", nome: "Verdure Grigliate", descrizione: "Mezcla de verduras de temporada a la parrilla", prezzo: "€6" },
		{ id: "contorno3", nome: "Patate al Forno", descrizione: "Patatas asadas con romero, ajo y sal marina", prezzo: "€5" },
		{ id: "contorno4", nome: "Patatine Fritte", descrizione: "Patatas fritas con piel, crujientes por fuera y tiernas por dentro", prezzo: "€5" }
      ]
    },
	{
      title: "Ensaladas",
      items: [
		{ id: "insalata1", nome: "Insalata Greca", descrizione: "Una combinación fresca de tomates cherry, pepino, aceitunas negras, cebolleta fresca y cubos de feta, aliñada con aceite de albahaca y alcaparras", prezzo: "€8" },
		{ id: "insalata2", nome: "Insalata Caesar", descrizione: "Lechuga romana crujiente con picatostes, filetes de pollo, parmesano y una suave salsa César con salsa Worcestershire, jugo de limón y aceite de albahaca", prezzo: "€8" },
		{ id: "insalata3", nome: "Insalata Omega 3", descrizione: "Mezcla de hojas verdes frescas, aliñada con jugo de limón, salsa Worcestershire y salmón", prezzo: "€8" }
      ]
    },
    {
      title: "Postres",
      items: [
        { id: "dolce1", nome: "Tiramisù", descrizione: "", prezzo: "€6" },
        { id: "dolce2", nome: "White Chocolate Truffle Affogato with Coffee", descrizione: "", prezzo: "€6" },
        { id: "dolce3", nome: "Pistachio Truffle", descrizione: "", prezzo: "€6" },
        { id: "dolce4", nome: "Limoncello Truffle", descrizione: "", prezzo: "€6" },
        { id: "dolce5", nome: "Lemon Sorbet with Limoncello", descrizione: "", prezzo: "€6" },
        { id: "dolce6", nome: "Cantuccini e Vin Santo", descrizione: "", prezzo: "€5" },
        { id: "dolce7", nome: "Lemon Sorbet", descrizione: "", prezzo: "€4" }
      ]
    },
    {
      title: "Bebidas",
      items: [
        { id: "bere1", nome: "Agua", descrizione: "", prezzo: "€2" },
      ]
    },
    {
      title: "Vinos",
      items: [
        { id: "vino1", nome: "Vino de la casa", descrizione: "", prezzo: "desde €13" }
      ]
    }	
  ]
};
