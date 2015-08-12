var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var MapSchema = new Schema ({});

MapSchema.statics.map = function (placeholder1, placeholder2, callback) {
	var random = Math.floor(Math.random() * 10);
	var options = [
		// pop
		[
			'boba tea',
			'froyo',
			'frozen yogurt',
			'ice cream',
			'juice',
			'smoothie',
			'organic restaurant',
			'salad wrap',
			'coffee',
			'healthy restaurant'
		],
		//rock
		[
			'burgers',
			'burgers and fries',
			'american grill',
			'brewery',
			'steaks',
			'BBQ',
			'live music',
			'sports bar',
			'grill',
			'burgers'
		],
		//indie folk / folk
		[
			'coffee',
			'brunch',
			'vegan',
			'brewery',
			'small plates',
			'wine bar',
			'cafe',
			'bakery',
			'cafe',
			'homestyle'
		],
		// rap
		[
			'lounge',
			'speakeasy bar',
			'southern food',
			'steakhouse',
			'homestyle',
			'champagne bar',
			'soul food',
			'cajun food',
			'hip hop bar',
			'night club lounge'
		],
		// r&b soul
		[
			'lounge',
			'soul food',
			'outdoor patio',
			'southern food',
			'cocktails',
			'steakhouse',
			'wine bar',
			'speakeasy bar',
			'oysters',
			'good cocktails'
		],
		//electronic
		[
			'lounge',
			'dance club',
			'late night food',
			'fast food',
			'cocktail bar',
			'late night food',
			'dance club',
			'burrito',
			'dance bar',
			'pizza'
		],
		//british invasion
		[
			'irish pub',
			'pub',
			'fish and chips',
			'fish',
			'irish',
			'british',
			'guinness',
			'dive bar',
			'sheperds pie',
			'brewery'
		],
		//Latin
		[
			'latin food',
			'pallela',
			'spanish food',
			'tapas',
			'mexican food',
			'tapas',
			'sangria',
			'cajun food',
			'carribean food',
			'latin food'
		],
		//chillout
		[
			'japanese fusion',
			'sushi',
			'hookah bar',
			'coffee shop',
			'cafe',
			'brunch',
			'relaxed food',
			'outdoor patio',
			'wine bar',
			'lounge'
		],
		//swing/oldschool
		[
			'burger',
			'shakes',
			'diner',
			'diner',
			'retro restaurant',
			'patty melt',
			'old fashioned restaurant',
			'shakes',
			'ice cream',
			'ice cream bar'
		],
		//country
		[
			'comfort food',
			'pulled pork',
			'BBQ',
			'southern',
			'grits',
			'comfort food',
			'bbq',
			'ribs',
			'homestyle',
			'homestyle'
		],
		//jazz
		[
			'fine dining',
			'5 star restaurant',
			'michelin star',
			'champagne',
			'oysters',
			'steak house',
			'fine italian',
			'fine dining',
			'romantic dining',
			'good view restaurant'
		],
		//reggae
		[
			'hawaiian food',
			'natural cafe',
			'beach food',
			'acai',
			'locally sourced',
			'food truck',
			'carribean food',
			'chill bar',
			'brunch',
			'street food'
		],
		//punk/grime
		[
			'punk rock bar',
			'dive bar',
			'live music',
			'cofee shop',	
			'street food',
			'live music',
			'funky bar',
			'punk rock bar',
			'live music',
			'food trucks'
		]
	];

	if (placeholder1 == 'pop' || placeholder1 == 'teen pop' || placeholder1 == 'k-pop' || placeholder1 == 'dance pop' ) {
		callback(options[0][random]);

	} else if (placeholder1 == 'rock' || placeholder1 == 'jam band' || placeholder1 == 'classic rock' || placeholder1 == 'blues-rock') {
		callback(options[1][random]);

	} else if (placeholder1 == 'indie folk' || placeholder1 == 'indie' || placeholder1 == 'folk' || placeholder1 == 'singer-songwriter' || placeholder1 == 'native american' || placeholder1 == 'bluegrass' || placeholder1 == 'new wave' || placeholder1 == 'alternative' || placeholder1 == 'indie pop') {
		callback(options[2][random]);

	} else if (placeholder1 == 'rap' || placeholder1 == 'hip hop' || placeholder1 == 'gangster rap' || placeholder1 == 'old school hip hop' || placeholder1 == 'cajun' || placeholder1 == 'blues' ) {
		callback(options[3][random]);

	} else if (placeholder1 == 'r&b' || placeholder1 == 'soul' ) {
		callback(options[4][random]);

	} else if (placeholder1 == 'edm' || placeholder1 == 'dubstep' || placeholder1 == 'electronica' || placeholder1 == 'electronic' || placeholder1 == 'eurodance' || placeholder1 == 'experimental' || placeholder1 == 'house' || placeholder1 == 'german techno' || placeholder1 == 'glitch' || placeholder1 == 'techno' || placeholder1 == 'trance' || placeholder1 == 'drum and bass' || placeholder1 == 'dance' || placeholder1 == 'electro') {
		callback(options[5][random]);

	} else if (placeholder1 == 'british invasion' || placeholder1 == 'britpop' || placeholder1 == 'celtic' || placeholder1 == 'europop' ) {
		callback(options[6][random]);

	} else if (placeholder1 == 'latin' || placeholder1 == 'cuban rumba' || placeholder1 == 'reggaeton' || placeholder1 == 'salsa' || placeholder1 == 'tango' || placeholder1 == 'tropical' || placeholder1 == 'world' || placeholder1 == 'merengue' || placeholder1 == 'mariachi' || placeholder1 == 'bachata' ) {
		callback(options[7][random]);

	} else if (placeholder1 == 'chill-out trance' || placeholder1 == 'ambient' || placeholder1 == 'chillstep' ) {
		callback(options[8][random]);

	} else if (placeholder1 == 'swing' || placeholder1 == 'motown' || placeholder1 == 'rock-and-roll' || placeholder1 == 'ragtime' || placeholder1 == 'disco' || placeholder1 == 'broadway' || placeholder1 == 'barbershop' || placeholder1 == 'big band' || placeholder1 == 'bebop' || placeholder1 == 'boogie-woogie' ) {
		callback(options[9][random]);

	} else if (placeholder1 == 'country' || placeholder1 == 'honky tonk' || placeholder1 == 'nashville sound' ) {
		callback(options[10][random]);

	} else if (placeholder1 == 'jazz' || placeholder1 == 'smooth jazz' || placeholder1 == 'bossa nova' || placeholder1 == 'vocal jazz' || placeholder1 == 'lounge' || placeholder1 == 'classical' ) {
		callback(options[11][random]);

	} else if (placeholder1 == 'reggae' || placeholder1 == 'hawaiian' || placeholder1 == 'ska' || placeholder1 == 'ukulele' ) {
		callback(options[12][random]);

	} else if (placeholder1 == 'grime' || placeholder1 == 'grunge' || placeholder1 == 'punk'  || placeholder1 == 'emo' || placeholder1 == 'lo-fi' ) {
		callback(options[13][random]);

	} else if (placeholder2 == 'pop' || placeholder2 ==  'teen pop' || placeholder2 ==  'k-pop' || placeholder2 ==  'dance pop' ) {
		callback(options[0][random]);

	} else if (placeholder2 == 'rock' || placeholder2 ==  'jam band' || placeholder2 ==  'classic rock' || placeholder2 ==  'blues-rock') {
		callback(options[1][random]);

	} else if (placeholder2 == 'indie folk' || placeholder2 ==  'indie' || placeholder2 ==  'folk' || placeholder2 ==  'singer-songwriter' || placeholder2 ==  'native american' || placeholder2 ==  'bluegrass' || placeholder2 ==  'new wave' || placeholder2 ==  'alternative' || placeholder2 ==  'indie pop') {
		callback(options[2][random]);

	} else if (placeholder2 == 'rap' || placeholder2 ==  'hip hop' || placeholder2 ==  'gangster rap' || placeholder2 ==  'old school hip hop' || placeholder2 ==  'cajun' || placeholder2 ==  'blues' ) {
		callback(options[3][random]);

	} else if (placeholder2 == 'r&b' || placeholder2 ==  'soul' ) {
		callback(options[4][random]);

	} else if (placeholder2 == 'edm' || placeholder2 ==  'dubstep' || placeholder2 ==  'electronica' || placeholder2 ==  'electronic' || placeholder2 ==  'eurodance' || placeholder2 ==  'experimental' || placeholder2 ==  'house' || placeholder2 ==  'german techno' || placeholder2 ==  'glitch' || placeholder2 ==  'techno' || placeholder2 ==  'trance' || placeholder2 ==  'drum and bass' || placeholder2 ==  'dance' || placeholder2 ==  'electro') {
		callback(options[5][random]);

	} else if (placeholder2 == 'british invasion' || placeholder2 ==  'britpop' || placeholder2 ==  'celtic' || placeholder2 ==  'europop' ) {
		callback(options[6][random]);

	} else if (placeholder2 == 'latin' || placeholder2 ==  'cuban rumba' || placeholder2 ==  'reggaeton' || placeholder2 ==  'salsa' || placeholder2 ==  'tango' || placeholder2 ==  'tropical' || placeholder2 ==  'world' || placeholder2 ==  'merengue' || placeholder2 ==  'mariachi' || placeholder2 ==  'bachata' ) {
		callback(options[7][random]);

	} else if (placeholder2 == 'chill-out trance' || placeholder2 ==  'ambient' || placeholder2 ==  'chillstep' ) {
		callback(options[8][random]);

	} else if (placeholder2 == 'swing' || placeholder2 ==  'motown' || placeholder2 ==  'rock-and-roll' || placeholder2 ==  'ragtime' || placeholder2 ==  'disco' || placeholder2 ==  'broadway' || placeholder2 ==  'barbershop' || placeholder2 ==  'big band' || placeholder2 ==  'bebop' || placeholder2 ==  'boogie-woogie' ) {
		callback(options[9][random]);

	} else if (placeholder2 == 'country' || placeholder2 ==  'honky tonk' || placeholder2 ==  'nashville sound' ) {
		callback(options[10][random]);

	} else if (placeholder2 == 'jazz' || placeholder2 ==  'smooth jazz' || placeholder2 ==  'bossa nova' || placeholder2 ==  'vocal jazz' || placeholder2 ==  'lounge' || placeholder2 ==  'classical' ) {
		callback(options[11][random]);

	} else if (placeholder2 == 'reggae' || placeholder2 ==  'hawaiian' || placeholder2 ==  'ska' || placeholder2 ==  'ukulele' ) {
		callback(options[12][random]);

	} else if (placeholder2 == 'grime' || placeholder2 ==  'grunge' || placeholder2 ==  'punk'  || placeholder2 ==  'emo' || placeholder2 ==  'lo-fi' ) {
		callback(options[13][random]);
	}
}

var Map = mongoose.model('Map', MapSchema);

module.exports = Map;
