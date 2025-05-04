const menuData = {
  it: [
    {
      title: "Antipasti",
      items: [
        { id: "antipasto1", nome: "Tagliere Toscano", descrizione: "Salumi e formaggi", prezzo: "€18" },
        { id: "antipasto2", nome: "Caprese", descrizione: "Mozzarella di bufala e pomodori", prezzo: "€10" }
      ]
    },
    {
      title: "Primi Piatti",
      items: [
        { id: "primo1", nome: "Pappardelle al Cinghiale", descrizione: "Ragù bianco", prezzo: "€16" },
        { id: "primo2", nome: "Carbonara", descrizione: "Guanciale, pecorino", prezzo: "€14" }
      ]
    },
    {
      title: "Secondi Piatti",
      items: [
        { id: "secondo1", nome: "Tagliata di Manzo", descrizione: "Rucola e Grana", prezzo: "€22" },
        { id: "secondo2", nome: "Tonno Scottato", descrizione: "Verdure grigliate", prezzo: "€18" }
      ]
    },
    {
      title: "Pinse",
      items: [
        { id: "pinsa1", nome: "Margherita", descrizione: "Mozzarella, pomodoro, origano e olio EVO", prezzo: "€10" },
        { id: "pinsa2", nome: "Vegetariana", descrizione: "Mozzarella, pomodoro, zucchine, pomodorini e olio di basilico", prezzo: "€11" },
        { id: "pinsa3", nome: "Crudo e Grana", descrizione: "Mozzarella, pomodoro, prosciutto crudo, rucola, Grana Padano, olio al basilico", prezzo: "€13" },
        { id: "pinsa4", nome: "Quattro Formaggi", descrizione: "Mozzarella, gorgonzola, Grana Padano, scamorza affumicata", prezzo: "€13" },
        { id: "pinsa5", nome: "Pistacchiosa", descrizione: "Mozzarella, mortadella, crema di pistacchio, burrata, olio al basilico", prezzo: "€14" }
      ]
    },
    {
      title: "Dolci",
      items: [
        { id: "dolce1", nome: "Tiramisù", descrizione: "", prezzo: "€6" },
        { id: "dolce2", nome: "Cantucci e Vin Santo", descrizione: "", prezzo: "€7" }
      ]
    },
	{
      title: "Bevande",
      items: [
        { id: "bere1", nome: "Acqua", descrizione: "", prezzo: "€2" },
      ]
    },
	{
      title: "Vini",
      items: [
        { id: "vino1", nome: "Vino della Casa", descrizione: "", prezzo: "da €13" }
      ]
    }
  ],
  
  en: [
    {
      title: "Appetizers",
      items: [
        { id: "antipasto1", nome: "Tuscan Board", descrizione: "Cold cuts and cheeses", prezzo: "€18" },
        { id: "antipasto2", nome: "Caprese", descrizione: "Buffalo mozzarella and tomatoes", prezzo: "€10" }
      ]
    },
    {
      title: "Main Courses",
      items: [
        { id: "primo1", nome: "Pappardelle with Wild Boar", descrizione: "White ragù", prezzo: "€16" },
        { id: "primo2", nome: "Carbonara", descrizione: "Guanciale and pecorino", prezzo: "€14" }
      ]
    },
    {
      title: "Second Courses",
      items: [
        { id: "secondo1", nome: "Sliced Beef", descrizione: "With arugula and Grana", prezzo: "€22" },
        { id: "secondo2", nome: "Seared Tuna", descrizione: "With grilled vegetables", prezzo: "€18" }
      ]
    },
    {
      title: "Pinse",
      items: [
        { id: "pinsa1", nome: "Margherita", descrizione: "Mozzarella, tomato, oregano, extra virgin olive oil", prezzo: "€10" },
        { id: "pinsa2", nome: "Vegetariana", descrizione: "Mozzarella, tomato, zucchini, cherry tomatoes, basil oil", prezzo: "€11" },
        { id: "pinsa3", nome: "Crudo e Grana", descrizione: "Mozzarella, tomato, Parma ham, arugula, Grana Padano, basil oil", prezzo: "€13" },
        { id: "pinsa4", nome: "Quattro Formaggi", descrizione: "Mozzarella, blue cheese, Grana Padano, smoked scamorza", prezzo: "€13" },
        { id: "pinsa5", nome: "Pistacchiosa", descrizione: "Mozzarella, mortadella, pistachio cream, burrata, basil oil", prezzo: "€14" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { id: "dolce1", nome: "Tiramisu", descrizione: "", prezzo: "€6" },
        { id: "dolce2", nome: "Cantucci with Vin Santo", descrizione: "", prezzo: "€7" }
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
        { id: "antipasto1", nome: "Planche Toscane", descrizione: "Charcuterie et fromages", prezzo: "€18" },
        { id: "antipasto2", nome: "Caprese", descrizione: "Mozzarella de bufflonne et tomates", prezzo: "€10" }
      ]
    },
    {
      title: "Plats principaux",
      items: [
        { id: "primo1", nome: "Pappardelle au sanglier", descrizione: "Ragù blanc", prezzo: "€16" },
        { id: "primo2", nome: "Carbonara", descrizione: "Guanciale et pecorino", prezzo: "€14" }
      ]
    },
    {
      title: "Second plats",
      items: [
        { id: "secondo1", nome: "Tagliata de bœuf", descrizione: "Roquette et Grana", prezzo: "€22" },
        { id: "secondo2", nome: "Thon grillé", descrizione: "Légumes grillés", prezzo: "€18" }
      ]
    },
    {
      title: "Pinse",
      items: [
        { id: "pinsa1", nome: "Margherita", descrizione: "Mozzarella, tomate, origan, huile d'olive extra vierge", prezzo: "€10" },
        { id: "pinsa2", nome: "Vegetariana", descrizione: "Mozzarella, tomate, courgette, tomates cerises, huile au basilic", prezzo: "€11" },
        { id: "pinsa3", nome: "Crudo e Grana", descrizione: "Mozzarella, tomate, jambon cru de Parme, roquette, Grana Padano, huile de basilic", prezzo: "€13" },
        { id: "pinsa4", nome: "Quattro Formaggi", descrizione: "Mozzarella, formage blue, Grana Padano, scamorza fumée", prezzo: "€13" },
        { id: "pinsa5", nome: "Pistacchiosa", descrizione: "Mozzarella, mortadelle, crème de pistache, burrata, huile de basilic", prezzo: "€14" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { id: "dolce1", nome: "Tiramisu", descrizione: "", prezzo: "€6" },
        { id: "dolce2", nome: "Cantucci et Vin Santo", descrizione: "", prezzo: "€7" }
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
        { id: "antipasto1", nome: "Toskanische Platte", descrizione: "Aufschnitt und Käse", prezzo: "€18" },
        { id: "antipasto2", nome: "Caprese", descrizione: "Büffelmozzarella und Tomaten", prezzo: "€10" }
      ]
    },
    {
      title: "Hauptgerichte",
      items: [
        { id: "primo1", nome: "Pappardelle mit Wildschwein", descrizione: "Weißes Ragù", prezzo: "€16" },
        { id: "primo2", nome: "Carbonara", descrizione: "Guanciale und Pecorino", prezzo: "€14" }
      ]
    },
    {
      title: "Zweite Gänge",
      items: [
        { id: "secondo1", nome: "Rindfleisch-Tagliata", descrizione: "Rucola und Grana", prezzo: "€22" },
        { id: "secondo2", nome: "Thunfisch", descrizione: "Mit gegrilltem Gemüse", prezzo: "€18" }
      ]
    },
    {
      title: "Pinse",
      items: [
        { id: "pinsa1", nome: "Margherita", descrizione: "Mozzarella, Tomate, Oregano, Olivenöl", prezzo: "€10" },
        { id: "pinsa2", nome: "Vegetariana", descrizione: "Mozzarella, Tomate, Zucchini, Kirschtomaten, Basilikumöl", prezzo: "€11" },
        { id: "pinsa3", nome: "Crudo e Grana", descrizione: "Mozzarella, Tomate, Parmaschinken, Rucola, Grana Padano, Basilikumöl", prezzo: "€13" },
        { id: "pinsa4", nome: "Quattro Formaggi", descrizione: "Mozzarella, Gorgonzola, Grana Padano, geräucherte Scamorza", prezzo: "€13" },
        { id: "pinsa5", nome: "Pistacchiosa", descrizione: "Mozzarella, Mortadella, Pistaziencreme, Burrata, Basilikumöl", prezzo: "€14" }
      ]
    },
    {
      title: "Desserts",
      items: [
        { id: "dolce1", nome: "Tiramisu", descrizione: "", prezzo: "€6" },
        { id: "dolce2", nome: "Cantucci mit Vin Santo", descrizione: "", prezzo: "€7" }
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
      title: "Entrantes",
      items: [
        { id: "antipasto1", nome: "Tabla Toscana", descrizione: "Embutidos y quesos", prezzo: "€18" },
        { id: "antipasto2", nome: "Caprese", descrizione: "Mozzarella de búfala y tomates", prezzo: "€10" }
      ]
    },
    {
      title: "Platos principales",
      items: [
        { id: "primo1", nome: "Pappardelle con jabalí", descrizione: "Ragú blanco", prezzo: "€16" },
        { id: "primo2", nome: "Carbonara", descrizione: "Guanciale y pecorino", prezzo: "€14" }
      ]
    },
    {
      title: "Segundos",
      items: [
        { id: "secondo1", nome: "Tagliata de ternera", descrizione: "Rúcula y Grana", prezzo: "€22" },
        { id: "secondo2", nome: "Atún a la plancha", descrizione: "Verduras a la parrilla", prezzo: "€18" }
      ]
    },
    {
      title: "Pinse",
      items: [
        { id: "pinsa1", nome: "Margherita", descrizione: "Mozzarella, tomate, orégano, aceite de oliva virgen extra", prezzo: "€10" },
        { id: "pinsa2", nome: "Vegetariana", descrizione: "Mozzarella, tomate, calabacín, tomates cherry, aceite de albahaca", prezzo: "€11" },
        { id: "pinsa3", nome: "Crudo e Grana", descrizione: "Mozzarella, tomate, jamón crudo de Parma, rúcula, Grana Padano, aceite de albahaca", prezzo: "€13" },
        { id: "pinsa4", nome: "Quattro Formaggi", descrizione: "Mozzarella, gorgonzola, Grana Padano, scamorza ahumada", prezzo: "€13" },
        { id: "pinsa5", nome: "Pistacchiosa", descrizione: "Mozzarella, mortadela, crema de pistacho, burrata, aceite de albahaca", prezzo: "€14" }
      ]
    },
    {
      title: "Postres",
      items: [
        { id: "dolce1", nome: "Tiramisú", descrizione: "", prezzo: "€6" },
        { id: "dolce2", nome: "Cantucci con Vin Santo", descrizione: "", prezzo: "€7" }
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