window.onload = function(){
	var Character = {
		CHARACTER_NAME: "Agatha",
		CLASS_LEVEL: "Druid 4",
		RACE: "Wood Elf",
		BACKGROUND: "Hermit",
		ALIGNMENT: "Neutral",
		EXPERIENCE: 3200,
		PLAYER_NAME: "Jane Doe",

		PROFICIENCY_BONUS: 2,
		INSPIRATION: true,

		STRENGTH: 10,
		DEXTERITY: 14,
		CONSTITUTION: 8,
		INTELLIGENCE: 16,
		WISDOM: 18,
		CHARISMA: 12,

		/*STR_MOD: Math.ceil(('STRENGTH' - 10)/2),
		DEX_MOD: Math.ceil(('DEXTERITY' - 10)/2),
		CON_MOD: Math.ceil(('CONSTITUTION' - 10)/2),
		INT_MOD: Math.ceil(('INTELLIGENCE' - 10)/2),
		WIS_MOD: Math.ceil(('WISDOM' - 10)/2),
		CHA_MOD: Math.ceil(('CHARISMA' - 10)/2),*/

		STR_SAVE_checkbox: false,
		ATHLETICS_checkbox: false,

		DEX_SAVE_checkbox: false,
		ACROBATICS_checkbox: false,
		SLEIGHT_OF_HAND_checkbox: false,
		STEALTH_checkbox: false,

		CON_SAVE_checkbox: false,

		INT_SAVE_checkbox: true,
		ARCANA_checkbox: false,
		HISTORY_checkbox: false,
		INVESTIGATION_checkbox: false,
		NATURE_checkbox: true,
		RELIGION_checkbox: true,

		WIS_SAVE_checkbox: true,
		ANIMAL_HANDLING_checkbox: true,
		INSIGHT_checkbox: false,
		MEDICINE_checkbox: false,
		PERCEPTION_checkbox: true,
		SURVIVAL_checkbox: true,

		CHA_SAVE_checkbox: false,
		DECEPTION_checkbox: false,
		INTIMIDATION_checkbox: false,
		PERFORMANCE_checkbox: false,
		PERSUASION_checkbox: false,

		PASSIVE_PERCEPTION_NUM: 10,

		FEATURE_LIST: "Mask of the Wild (PHB pg.24)\nSpellcasting, Ritual Casting (PHB pg.66)\nWild Shape (PHB pg.66)\nCircle of the Moon (PHB pg.67)\nCombat Wild Shape (PHB pg.69)\nCircle Forms (PHB pg.69)",
		PROFICIENCY_LIST: "Common, Elven, Primordial, Druidic.\nLight armor, medium armor, and shields (but nothing metal)\nSimple Melee Weapons\nShortsword, Longsword, Shortbow, Longbow\nHerbalism Kit\nFlute",

		EQUIPMENT_LIST: "Quarterstaff\nOgre-Slaying Knife\nCloth armor\nTraveler's cloak\nExplorer's pack\nSatchel of acorns.",

		COPPER_PIECES: 115,
		SILVER_PIECES: 0,
		ELECTRUM_PIECES: 0,
		GOLD_PIECES: 37,
		PLATINUM_PIECES: 12,

		CAMPAIGN_NOTES: "Agatha was driven from the mountain rainforests of Thornwood when a great fire burned it to the ground. She nearly died of smoke inhalation and experienced a vision as she struggled to stay alive. She now seeks to learn the meaning of the vision through a traditional druidic pilgrimage.",

		PERSONALITY_TRAITS: "Takes a lot of sharp turns from one mood/tone to another. Very direct.",
		IDEALS: "Strives to maintain a balance with nature. Where a tree is cut down, a new one is planted, etc etc. This mentality is applied to much of her life and interactions.",
		BONDS: "Has a dog, \"Barkey\", who she loves very much. Shows appreciation for animal companionship (e.g. domestication).",
		FLAWS: "Considers mining disgusting. Holds contempt for dwarves and jewelry. Sometimes is direct to the point of causing offense.",
		APPEARANCE: "Tall and slim (even by elven standards). Olive skin with dark brown hair, braided and adorned with flowers.",

		MAX_HP: 26,
		MAX_HP_ADJUSTABLE: 22,
		CURRENT_HP: 14, // 14/22 due to wraiths
		HIT_DICE_TOTAL: 4,
		HIT_DICE_OUTOF: 8, // 4d8
		HIT_DICE_CURRENT: 3, // 3/4 hit dice

		SUCCESS_checkbox1: true,
		SUCCESS_checkbox2: true,
		SUCCESS_checkbox3: false,

		FAILURE_checkbox1: true,
		FAILURE_checkbox2: false,
		FAILURE_checkbox3: false,

		ARMOR_CLASS: 14,
		/*INITIATIVE: 'DEX_MOD',*/
		SPEED: 35,

		WEAPON_1: "Quarterstaff",
		WEAPON_2: "Ogre-Slaying Knife",
		WEAPON_3: "",

		ATTACK_ROLL_1: "+5",
		ATTACK_ROLL_2: "+5",
		ATTACK_ROLL_3: "",

		WEAPON_DAMAGE_1: "1d8 + 2 blg. dmg",
		WEAPON_DAMAGE_2: "1d4 + 2 sla. dmg",
		WEAPON_DAMAGE_3: "",

		COMBAT_NOTES: "Quarterstaff is versatile. Ogre-Slaying knife has a +9 against ogres.",

		SPELL_SAVE_DC: 14,
		SPELL_ATTACK_MOD: 6,

		SPELL_SLOTS_LVL1: 4,
		SPELL_SLOTS_LVL2: 3,
		SPELL_SLOTS_LVL3: 0,
		SPELL_SLOTS_LVL4: 0,
		SPELL_SLOTS_LVL5: 0,
		SPELL_SLOTS_LVL6: 0,
		SPELL_SLOTS_LVL7: 0,
		SPELL_SLOTS_LVL8: 0,
		SPELL_SLOTS_LVL9: 0,

		SPELL_LIST: "Cantrips: Druidcraft, Shillelagh, Resistance.\n1st Level: Animal Friendship, Cure Wounds, Detect Magic, Goodberry. \n2nd Level: Barkskin, Enhance Ability, Gust of Wind, Moonbeam.",
	};

	var STR_MOD = Math.ceil((Character['STRENGTH'] - 10)/2);
	var DEX_MOD = Math.ceil((Character['DEXTERITY'] - 10)/2);
	var CON_MOD = Math.ceil((Character['CONSTITUTION'] - 10)/2);
	var INT_MOD = Math.ceil((Character['INTELLIGENCE'] - 10)/2);
	var WIS_MOD = Math.ceil((Character['WISDOM'] - 10)/2);
	var CHA_MOD = Math.ceil((Character['CHARISMA'] - 10)/2);

	document.getElementsByName('STR_MOD')[0].value = STR_MOD;
	document.getElementsByName('DEX_MOD')[0].value = DEX_MOD;
	document.getElementsByName('CON_MOD')[0].value = CON_MOD;
	document.getElementsByName('INT_MOD')[0].value = INT_MOD;
	document.getElementsByName('WIS_MOD')[0].value = WIS_MOD;
	document.getElementsByName('CHA_MOD')[0].value = CHA_MOD;

	/*var INITIATIVE = DEX_MOD;*/
	document.getElementsByName('INITIATIVE')[0].value = DEX_MOD;

	/*Checkboxes*/
	document.getElementsByName('INSPIRATION')[0].checked = Character['INSPIRATION'];

	document.getElementsByName('STR_SAVE_checkbox')[0].checked = Character['STR_SAVE_checkbox'];
	document.getElementsByName('ATHLETICS_checkbox')[0].checked = Character['ATHLETICS_checkbox'];

	document.getElementsByName('DEX_SAVE_checkbox')[0].checked = Character['DEX_SAVE_checkbox'];
	document.getElementsByName('ACROBATICS_checkbox')[0].checked = Character['ACROBATICS_checkbox'];
	document.getElementsByName('SLEIGHT_OF_HAND_checkbox')[0].checked = Character['SLEIGHT_OF_HAND_checkbox'];
	document.getElementsByName('STEALTH_checkbox')[0].checked = Character['STEALTH_checkbox'];

	document.getElementsByName('CON_SAVE_checkbox')[0].checked = Character['CON_SAVE_checkbox'];

	document.getElementsByName('INT_SAVE_checkbox')[0].checked = Character['INT_SAVE_checkbox'];
	document.getElementsByName('ARCANA_checkbox')[0].checked = Character['ARCANA_checkbox'];
	document.getElementsByName('HISTORY_checkbox')[0].checked = Character['HISTORY_checkbox'];
	document.getElementsByName('INVESTIGATION_checkbox')[0].checked = Character['INVESTIGATION_checkbox'];
	document.getElementsByName('NATURE_checkbox')[0].checked = Character['NATURE_checkbox'];
	document.getElementsByName('RELIGION_checkbox')[0].checked = Character['RELIGION_checkbox'];

	document.getElementsByName('WIS_SAVE_checkbox')[0].checked = Character['WIS_SAVE_checkbox'];
	document.getElementsByName('ANIMAL_HANDLING_checkbox')[0].checked = Character['ANIMAL_HANDLING_checkbox'];
	document.getElementsByName('INSIGHT_checkbox')[0].checked = Character['INSIGHT_checkbox'];
	document.getElementsByName('MEDICINE_checkbox')[0].checked = Character['MEDICINE_checkbox'];
	document.getElementsByName('PERCEPTION_checkbox')[0].checked = Character['PERCEPTION_checkbox'];
	document.getElementsByName('SURVIVAL_checkbox')[0].checked = Character['SURVIVAL_checkbox'];

	document.getElementsByName('CHA_SAVE_checkbox')[0].checked = Character['CHA_SAVE_checkbox'];
	document.getElementsByName('DECEPTION_checkbox')[0].checked = Character['DECEPTION_checkbox'];
	document.getElementsByName('INTIMIDATION_checkbox')[0].checked = Character['INTIMIDATION_checkbox'];
	document.getElementsByName('PERFORMANCE_checkbox')[0].checked = Character['PERFORMANCE_checkbox'];
	document.getElementsByName('PERSUASION_checkbox')[0].checked = Character['PERSUASION_checkbox'];

	document.getElementsByName('SUCCESS_checkbox1')[0].checked = Character['SUCCESS_checkbox1'];
	document.getElementsByName('SUCCESS_checkbox2')[0].checked = Character['SUCCESS_checkbox2'];
	document.getElementsByName('SUCCESS_checkbox3')[0].checked = Character['SUCCESS_checkbox3'];
	document.getElementsByName('FAILURE_checkbox1')[0].checked = Character['FAILURE_checkbox1'];
	document.getElementsByName('FAILURE_checkbox2')[0].checked = Character['FAILURE_checkbox2'];
	document.getElementsByName('FAILURE_checkbox3')[0].checked = Character['FAILURE_checkbox3'];
		

	var jsonDataKeys = Object.keys(Character);
	/*var inputElements = document.getElementsByTagName('input');*/

	for(var i=0; i<jsonDataKeys.length; i++) {
		document.getElementsByName(jsonDataKeys[i])[0].value = Character[jsonDataKeys[i]];
	}

};

// Button to save changes to variables:
document.getElementById("save-changes").onclick = function() {saveChanges(Character)};
function saveChanges(Character) {
	console.log("Entered saveChanges()");
	// Update contents of the variables to reflect html input contents:
	Character.CHARACTER_NAME = document.getElementsByName('CHARACTER_NAME')[0].value;
	Character[CLASS_LEVEL].value = document.getElementsByName('CLASS_LEVEL')[0].value;
	Character[RACE].value = document.getElementsByName('RACE')[0].value;
	Character[BACKGROUND].value = document.getElementsByName('BACKGROUND')[0].value;
	Character[ALIGNMENT].value = document.getElementsByName('ALIGNMENT')[0].value;
	Character[EXPERIENCE].value = document.getElementsByName('EXPERIENCE')[0].value;
	Character[PLAYER_NAME].value = document.getElementsByName('PLAYER_NAME')[0].value;

	Character[PROFICIENCY_BONUS].value = document.getElementsByName('PROFICIENCY_BONUS')[0].value;
	Character[INSPIRATION].value = document.getElementsByName('INSPIRATION')[0].value;

	Character[STRENGTH].value = document.getElementsByName('STRENGTH')[0].value;
	Character[DEXTERITY].value = document.getElementsByName('DEXTERITY')[0].value;
	Character[CONSTITUTION].value = document.getElementsByName('CONSTITUTION')[0].value;
	Character[INTELLIGENCE].value = document.getElementsByName('INTELLIGENCE')[0].value;
	Character[WISDOM].value = document.getElementsByName('WISDOM')[0].value;
	Character[CHARISMA].value = document.getElementsByName('CHARISMA')[0].value;

	Character[PASSIVE_PERCEPTION_NUM].value = document.getElementsByName('PASSIVE_PERCEPTION_NUM')[0].value;

	Character[FEATURE_LIST].value = document.getElementsByName('FEATURE_LIST')[0].value;
	Character[PROFICIENCY_LIST].value = document.getElementsByName('PROFICIENCY_LIST')[0].value;

	Character[EQUIPMENT_LIST].value = document.getElementsByName('EQUIPMENT_LIST')[0].value;

	Character[COPPER_PIECES].value = document.getElementsByName('COPPER_PIECES')[0].value;
	Character[SILVER_PIECES].value = document.getElementsByName('SILVER_PIECES')[0].value;
	Character[ELECTRUM_PIECES].value = document.getElementsByName('ELECTRUM_PIECES')[0].value;
	Character[GOLD_PIECES].value = document.getElementsByName('GOLD_PIECES')[0].value;
	Character[PLATINUM_PIECES].value = document.getElementsByName('PLATINUM_PIECES')[0].value;

	Character[CAMPAIGN_NOTES].value = document.getElementsByName('CAMPAIGN_NOTES')[0].value;

	Character[PERSONALITY_TRAITS].value = document.getElementsByName('PERSONALITY_TRAITS')[0].value;
	Character[IDEALS].value = document.getElementsByName('IDEALS')[0].value;
	Character[BONDS].value = document.getElementsByName('BONDS')[0].value;
	Character[FLAWS].value = document.getElementsByName('FLAWS')[0].value;
	Character[APPEARANCE].value = document.getElementsByName('APPEARANCE')[0].value;

	Character[MAX_HP].value = document.getElementsByName('MAX_HP')[0].value;
	Character[MAX_HP_ADJUSTABLE].value = document.getElementsByName('MAX_HP_ADJUSTABLE')[0].value;
	Character[CURRENT_HP].value = document.getElementsByName('CURRENT_HP')[0].value;
	Character[HIT_DICE_TOTAL].value = document.getElementsByName('HIT_DICE_TOTAL')[0].value;
	Character[HIT_DICE_OUTOF].value = document.getElementsByName('HIT_DICE_OUTOF')[0].value;
	Character[HIT_DICE_CURRENT].value = document.getElementsByName('HIT_DICE_CURRENT')[0].value;

	Character[ARMOR_CLASS].value = document.getElementsByName('ARMOR_CLASS')[0].value;
	Character[SPEED].value = document.getElementsByName('SPEED')[0].value;

	Character[WEAPON_1].value = document.getElementsByName('WEAPON_1')[0].value;
	Character[WEAPON_2].value = document.getElementsByName('WEAPON_2')[0].value;
	Character[WEAPON_3].value = document.getElementsByName('WEAPON_3')[0].value;

	Character[ATTACK_ROLL_1].value = document.getElementsByName('ATTACK_ROLL_1')[0].value;
	Character[ATTACK_ROLL_2].value = document.getElementsByName('ATTACK_ROLL_2')[0].value;
	Character[ATTACK_ROLL_3].value = document.getElementsByName('ATTACK_ROLL_3')[0].value;

	Character[WEAPON_DAMAGE_1].value = document.getElementsByName('WEAPON_DAMAGE_1')[0].value;
	Character[WEAPON_DAMAGE_2].value = document.getElementsByName('WEAPON_DAMAGE_2')[0].value;
	Character[WEAPON_DAMAGE_3].value = document.getElementsByName('WEAPON_DAMAGE_3')[0].value;

	Character[COMBAT_NOTES].value = document.getElementsByName('COMBAT_NOTES')[0].value;

	Character[SPELL_SAVE_DC].value = document.getElementsByName('SPELL_SAVE_DC')[0].value;
	Character[SPELL_ATTACK_MOD].value = document.getElementsByName('SPELL_ATTACK_MOD')[0].value;

	Character[SPELL_SLOTS_LVL1].value = document.getElementsByName('SPELL_SLOTS_LVL1')[0].value;
	Character[SPELL_SLOTS_LVL2].value = document.getElementsByName('SPELL_SLOTS_LVL2')[0].value;
	Character[SPELL_SLOTS_LVL3].value = document.getElementsByName('SPELL_SLOTS_LVL3')[0].value;
	Character[SPELL_SLOTS_LVL4].value = document.getElementsByName('SPELL_SLOTS_LVL4')[0].value;
	Character[SPELL_SLOTS_LVL5].value = document.getElementsByName('SPELL_SLOTS_LVL5')[0].value;
	Character[SPELL_SLOTS_LVL6].value = document.getElementsByName('SPELL_SLOTS_LVL6')[0].value;
	Character[SPELL_SLOTS_LVL7].value = document.getElementsByName('SPELL_SLOTS_LVL7')[0].value;
	Character[SPELL_SLOTS_LVL8].value = document.getElementsByName('SPELL_SLOTS_LVL8')[0].value;
	Character[SPELL_SLOTS_LVL9].value = document.getElementsByName('SPELL_SLOTS_LVL9')[0].value;

	Character[SPELL_LIST].value = document.getElementsByName('SPELL_LIST')[0].value;

	STR_SAVE_checkbox.checked = document.getElementsByName('STR_SAVE_checkbox')[0].checked;
	ATHLETICS_checkbox.checked = document.getElementsByName('ATHLETICS_checkbox')[0].checked;

	DEX_SAVE_checkbox.checked = document.getElementsByName('DEX_SAVE_checkbox')[0].checked;
	ACROBATICS_checkbox.checked = document.getElementsByName('ACROBATICS_checkbox')[0].checked;
	SLEIGHT_OF_HAND_checkbox.checked = document.getElementsByName('SLEIGHT_OF_HAND_checkbox')[0].checked;
	STEALTH_checkbox.checked = document.getElementsByName('STEALTH_checkbox')[0].checked;

	CON_SAVE_checkbox.checked = document.getElementsByName('CON_SAVE_checkbox')[0].checked;

	INT_SAVE_checkbox.checked = document.getElementsByName('INT_SAVE_checkbox')[0].checked;
	ARCANA_checkbox.checked = document.getElementsByName('ARCANA_checkbox')[0].checked;
	HISTORY_checkbox.checked = document.getElementsByName('HISTORY_checkbox')[0].checked;
	INVESTIGATION_checkbox.checked = document.getElementsByName('INVESTIGATION_checkbox')[0].checked;
	NATURE_checkbox.checked = document.getElementsByName('NATURE_checkbox')[0].checked;
	RELIGION_checkbox.checked = document.getElementsByName('RELIGION_checkbox')[0].checked;

	WIS_SAVE_checkbox.checked = document.getElementsByName('WIS_SAVE_checkbox')[0].checked;
	ANIMAL_HANDLING_checkbox.checked = document.getElementsByName('ANIMAL_HANDLING_checkbox')[0].checked;
	INSIGHT_checkbox.checked = document.getElementsByName('INSIGHT_checkbox')[0].checked;
	MEDICINE_checkbox.checked = document.getElementsByName('MEDICINE_checkbox')[0].checked;
	PERCEPTION_checkbox.checked = document.getElementsByName('PERCEPTION_checkbox')[0].checked;
	SURVIVAL_checkbox.checked = document.getElementsByName('SURVIVAL_checkbox')[0].checked;

	CHA_SAVE_checkbox.checked = document.getElementsByName('CHA_SAVE_checkbox')[0].checked;
	DECEPTION_checkbox.checked = document.getElementsByName('DECEPTION_checkbox')[0].checked;
	INTIMIDATION_checkbox.checked = document.getElementsByName('INTIMIDATION_checkbox')[0].checked;
	PERFORMANCE_checkbox.checked = document.getElementsByName('PERFORMANCE_checkbox')[0].checked;
	PERSUASION_checkbox.checked = document.getElementsByName('PERSUASION_checkbox')[0].checked;

	SUCCESS_checkbox1.checked = document.getElementsByName('SUCCESS_checkbox1')[0].checked;
	SUCCESS_checkbox2.checked = document.getElementsByName('SUCCESS_checkbox2')[0].checked;
	SUCCESS_checkbox3.checked = document.getElementsByName('SUCCESS_checkbox3')[0].checked;

	FAILURE_checkbox1.checked = document.getElementsByName('FAILURE_checkbox1')[0].checked;
	FAILURE_checkbox2.checked = document.getElementsByName('FAILURE_checkbox2')[0].checked;
	FAILURE_checkbox3.checked = document.getElementsByName('FAILURE_checkbox3')[0].checked;

	STR_MOD = Math.ceil((Character['STRENGTH'] - 10)/2);
	DEX_MOD = Math.ceil((Character['DEXTERITY'] - 10)/2);
	CON_MOD = Math.ceil((Character['CONSTITUTION'] - 10)/2);
	INT_MOD = Math.ceil((Character['INTELLIGENCE'] - 10)/2);
	WIS_MOD = Math.ceil((Character['WISDOM'] - 10)/2);
	CHA_MOD = Math.ceil((Character['CHARISMA'] - 10)/2);

	document.getElementsByName('STR_MOD')[0].value = STR_MOD;
	document.getElementsByName('DEX_MOD')[0].value = DEX_MOD;
	document.getElementsByName('CON_MOD')[0].value = CON_MOD;
	document.getElementsByName('INT_MOD')[0].value = INT_MOD;
	document.getElementsByName('WIS_MOD')[0].value = WIS_MOD;
	document.getElementsByName('CHA_MOD')[0].value = CHA_MOD;

	/*var INITIATIVE = DEX_MOD;*/
	document.getElementsByName('INITIATIVE')[0].value = DEX_MOD;

	/*Checkboxes*/
	document.getElementsByName('INSPIRATION')[0].checked = Character['INSPIRATION'];

};