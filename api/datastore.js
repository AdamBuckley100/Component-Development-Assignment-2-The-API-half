exports.products = [
     {  id: 0 ,
        name : 'Game Boy',
        description : 'game boy is an old console',
		snippet : 'game boy is old....',
        questions : [
		{
			id: 1,
			subject : 'Display',
			query : 'What are the screen dimensions?',			
			username : 'jmurphy',  
			answers : [],
			upvotes: 10,
			answers :[
			{
			id: 1,
			answer : '10mm x 20mm',
			author : 'Jo Murphy'
			}
			]
		}
		],
		ReleaseYear: 1990,
		Version: 1,
		RAM: '1KB',
		Manufacturer: 'Nintendo',
		Weight: '200 grams',
		images:
	[
		'gameboy1.jpeg', 
        'gameboy2.jpeg', 
        'gameboy3.jpeg'
    ]
     },    

	 {  id: 1 ,
        name : 'Nintendo 64',
        description : 'Nintendo 64 is an old console',
		snippet : 'game boy is old....',
		ReleaseYear: 1988,
		Version: 3,
		RAM: '6KB',
		Manufacturer: 'Nintendo',
		Weight: '300 grams',
        questions : [],
		images:
	[
		'nintendo641.jpeg', 
        'nintendo642.jpeg', 
        'nintendo643.jpeg'
    ]
     },
	  
	 {  id: 2 ,
        name : 'Gamecube',
        description : 'gamecube is an old console',
		snippet : 'game boy is old.......',
        questions : [],
		ReleaseYear: 2004,
		Version: 5,
		RAM: '1MB',
		Manufacturer: 'Nintendo',
		Weight: '410 grams',
		images:
	[
		'gamecube1.jpeg', 
        'gamecube2.jpeg', 
        'gamecube3.jpeg'
    ]
     }     
 ];